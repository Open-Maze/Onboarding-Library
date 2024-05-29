'use client';
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import DarkOverlay from '../Components/DarkOverlay';

interface PopoverOptions {
  targetRef: React.RefObject<HTMLElement | null>;
  targetSpacing: number;
  placement: 'top' | 'bottom' | 'left' | 'right';
  iconStyle?: 'outlined' | 'rounded' | 'sharp';
  icon?: string;
  title?: string;
  image?: string;
  text?: string;
  children?: ReactElement;
  navigation?: ReactElement;
}

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
  navigation,
}: PopoverOptions) {
  const [styleTop, setStyleTop] = useState<number>();
  const [styleLeft, setStyleLeft] = useState<number>();
  const [popoverHidden, setPopoverHidden] = useState(true);
  const [popoverClasses, setPopoverClasses] = useState('');
  const [arrowClasses, setArrowClasses] = useState('');
  const popoverRef = useRef<HTMLDivElement>(null);

  const zIndexTarget = () => {
    if (targetRef.current) {
      targetRef.current.className = targetRef.current.className + ' ol-z-100';
    }
    return 0;
  };

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
    if (!popoverRef.current) {
      console.error(`Popover ref not found`);
      return;
    }
    if (!(targetRef.current instanceof HTMLElement)) {
      console.error(`Target ref not found`);
      return;
    }

    const popoverRect = popoverRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();

    const rectValues = { top: targetRect.top, left: targetRect.left };
    let top = 0;
    let left = 0;

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
    setStyleTop(top);
    setStyleLeft(left);
    setPopoverHidden(false);
  }, []);

  useEffect(() => {
    zIndexTarget();
    arrowPlacement();
    popoverPosition();
  }, []);

  useEffect(() => {
    if (document.body && popoverRef.current) {
      const observer = new ResizeObserver(() => {
        popoverPosition();
      });

      observer.observe(document.body);
      observer.observe(popoverRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <DarkOverlay />
      <div
        ref={popoverRef}
        style={{
          top: `${styleTop}px`,
          left: `${styleLeft}px`,
        }}
        className={`ol-max-w-[340px] ol-absolute ol-z-100 ol-drop-shadow-md ol-flex ${popoverHidden && 'ol-hidden'} ${popoverClasses}`}
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
        <div className="ol-bg-background ol-relative ol-p-5 ol-rounded-3xl ol-z-100">
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
            {text && <div className="ol-text-lg">{text}</div>}
            {navigation}
          </div>
        </div>
      </div>
    </>
  );
}
