'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import ButtonClose from '../Components/ButtonClose';
import DarkOverlay from '../Components/DarkOverlay';
import { PopoverOptions } from '../types';

/**
 * Popover component that displays a popover with various options.
 *
 * @param {React.RefObject} targetRef - A reference to the target element around which the popover is displayed.
 * @param {number} targetSpacing - The space between the target and the popover.
 * @param {string} placement - The placement of the popover relative to the target ('bottom', 'top', 'left', 'right').
 * @param {string} iconStyle - The style of the icon displayed in the popover based on material symbols ('outlined' | 'rounded' | 'sharp').
 * @param {React.ReactNode} icon - The icon displayed in the popover based on all available icons in material symbols.
 * @param {string} title - The title of the popover.
 * @param {string} image - The image displayed in the popover.
 * @param {string} text - The text content of the popover.
 * @param {React.ReactNode} children - The child elements of the popover.
 * @param {Object} style - The CSS styles applied to the popover provided by the product tour element.
 * @param {boolean} visible - A boolean value that determines whether the popover is visible or hidden.
 * @param {React.ReactElement} navigation - A React element for navigation controls within the popover provided by the product tour element.
 *
 * @returns {React.ReactElement} The rendered Popover component.
 */
export default function Popover({
  targetRef,
  targetSpacing,
  placement,
  iconStyle,
  icon,
  title,
  image,
  text,
  children,
  productTour,
  visible = true,
  navigation,
}: PopoverOptions) {
  const [styleTop, setStyleTop] = useState<number>();
  const [styleLeft, setStyleLeft] = useState<number>();
  const [popoverHidden, setPopoverHidden] = useState(true);
  const [popoverClosed, setPopoverClosed] = useState(false);
  const [popoverClasses, setPopoverClasses] = useState('');
  const [arrowClasses, setArrowClasses] = useState('');
  const popoverRef = useRef<HTMLDivElement>(null);

  //  zIndexTargetRef` function is used to add or remove classes to the target element based on the visibility of the popover.
  const zIndexTargetRef = () => {
    const target = targetRef.current;

    if (!target) return;

    if (visible) {
      target.classList.add('ol-z-41');
      if (target.style.position === 'static' || target.style.position === '') {
        target.classList.add('ol-relative');
      }
    } else {
      target.classList.remove('ol-z-41');
      target.classList.remove('ol-relative');
    }
  };

  // `arrowPlacement` function is used to set the classes for the popover and arrow based on the placement prop.
  const arrowPlacement = () => {
    let popoverClasses = '';
    let arrowClasses = '';

    switch (placement) {
      case 'bottom':
        popoverClasses = 'ol-flex-col ol-items-center';
        arrowClasses = 'ol-rotate-90 ol-self-center -ol-mb-[17px]';
        break;
      case 'top':
        popoverClasses = 'ol-flex-col ol-flex-col-reverse ol-items-center';
        arrowClasses = '-ol-rotate-90 -ol-mt-[17px]';
        break;
      case 'left':
        popoverClasses = 'ol-flex-row-reverse';
        arrowClasses = 'ol-rotate-180 ol-self-center -ol-ml-[17px]';
        break;
      case 'right':
        arrowClasses = 'ol-self-center -ol-mr-[17px]';
        break;
    }

    setPopoverClasses(popoverClasses);
    setArrowClasses(arrowClasses);
  };

  const popoverPosition = useCallback(() => {
    // Ensure popoverRef and targetRef are valid before calculating position
    if (!popoverRef.current) {
      console.error(`Popover ref not found`);
      return;
    }
    if (!(targetRef.current instanceof HTMLElement)) {
      console.error(`Target ref not found`);
      return;
    }

    // Get the bounding rectangles of the popover and target elements
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();

    // Store the initial top and left values of the target element
    const rectValues = { top: targetRect.top, left: targetRect.left };
    let top = 0;
    let left = 0;

    // Calculate the popover position based on the placement prop with adjustments for user specified spacing and window scroll
    switch (placement) {
      case 'bottom':
        top =
          targetRect.top + targetRect.height + window.scrollY + targetSpacing;
        left = targetRect.left + targetRect.width / 2 - popoverRect.width / 2;
        break;
      case 'top':
        top =
          rectValues.top + window.scrollY - popoverRect.height - targetSpacing;
        left = rectValues.left + targetRect.width / 2 - popoverRect.width / 2;
        break;
      case 'left':
        top =
          targetRect.top -
          popoverRect.height +
          targetRect.height / 2 +
          popoverRect.height / 2 +
          window.scrollY;
        left = targetRect.left - popoverRect.width - targetSpacing;
        break;
      case 'right':
        top =
          targetRect.top -
          popoverRect.height +
          targetRect.height / 2 +
          popoverRect.height / 2 +
          window.scrollY;

        left = targetRect.left + targetRect.width + targetSpacing;
        break;
    }
    // Set the calculated top and left styles for the popover
    setStyleTop(top);
    setStyleLeft(left);
    // Ensure the popover is visible after setting the position to avoid flickering
    setPopoverHidden(false);
  }, []);

  useEffect(() => {
    // Call the arrowPlacement and popoverPosition functions when the component is rendered
    arrowPlacement();
    popoverPosition();
  }, []);

  useEffect(() => {
    // Observe changes to the document body, popover element and target element to recalculate position on resize
    if (document.body && popoverRef.current) {
      const observer = new ResizeObserver(() => {
        popoverPosition();
      });

      observer.observe(document.body);
      observer.observe(popoverRef.current);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    zIndexTargetRef();
  }, [visible]);

  return (
    <>
      {!productTour && !popoverClosed && <DarkOverlay />}
      <div
        aria-hidden={visible || !productTour ? 'false' : 'true'}
        ref={popoverRef}
        style={{
          visibility: visible || !productTour ? 'visible' : 'hidden',
          top: `${styleTop}px`,
          left: `${styleLeft}px`,
        }}
        className={`ol-max-w-[340px] ol-absolute ol-z-41 ol-drop-shadow-md ol-flex ${popoverHidden || popoverClosed ? 'ol-hidden' : ''} ${popoverClasses}`}
      >
        <div className={`${arrowClasses}`}>
          <svg
            className="ol-fill-background"
            width="34"
            height="34"
            viewBox="0 0 33 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.9707 0L32.9413 16.9706L15.9707 33.9411L1.82857 19.799C0.266471 18.2369 0.266471 15.7042 1.82857 14.1421L15.9707 0Z" />
          </svg>
        </div>
        <div className="ol-bg-background ol-relative ol-p-5 ol-rounded-3xl ol-z-41">
          {!productTour && (
            <ButtonClose
              onClickHandler={() => {
                visible = false;
                setPopoverClosed(true);
              }}
            />
          )}
          <div className="ol-flex ol-gap-y-2.5 ol-flex-col">
            {children}
            {icon && (
              <span
                className={`material-symbols-${iconStyle} ol-h-6 ol-w-6 ol-pb-2`}
              >
                {icon}
              </span>
            )}
            {title && <h2 className="ol-text-4xl">{title}</h2>}
            {image && (
              <div className="ol-flex ol-justify-center">
                <img
                  src={image}
                  className="ol-object-contain w-full h-auto"
                ></img>
              </div>
            )}
            {text && <p className="ol-text-lg">{text}</p>}
            {navigation}
          </div>
        </div>
      </div>
    </>
  );
}
