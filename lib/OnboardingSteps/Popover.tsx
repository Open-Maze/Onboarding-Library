import { useEffect, useRef, useState } from 'react';
import Button from '../Components/Button';
import TextButton from '../Components/TextButton';

interface PopoverOptions {
  targetRef: React.RefObject<HTMLElement | null>;
  targetSpacing: number;
  placement: 'top' | 'bottom' | 'left' | 'right';
  iconStyle?: 'outlined' | 'rounded' | 'sharp';
  icon?: string;
  title?: string;
  image?: string;
  text?: string;
  currentStep?: number;
  totalSteps?: number;
  children?: React.ReactNode;
  filledButtonFunc?: () => void;
  textButtonFunc?: () => void;
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
  currentStep,
  totalSteps,
  children,
  filledButtonFunc,
  textButtonFunc,
}: PopoverOptions) {
  const [style, setStyle] = useState({ top: -1, left: -1 });
  const [rectangle, setRectangle] = useState({ top: 0, left: 0 });
  const [popoverClasses, setPopoverClasses] = useState('');
  const [arrowClasses, setArrowClasses] = useState('');

  const popoverRef = useRef<HTMLDivElement>(null);

  const setRectValues = () => {
    const top = targetRef.current?.getBoundingClientRect().top || 0;
    const left = targetRef.current?.getBoundingClientRect().left || 0;

    if (top != rectangle.top || left != rectangle.left) {
      setRectangle({ top, left });
    }
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

  const popoverPosition = () => {
    if (targetRef.current instanceof HTMLElement && popoverRef.current) {
      const popoverRect =
        popoverRef.current.getBoundingClientRect() || new DOMRect();
      const targetRect = targetRef.current.getBoundingClientRect();

      setRectValues();

      let top = 0;
      let left = 0;

      switch (placement) {
        case 'bottom':
          top =
            targetRect.top +
            targetRect.height +
            globalThis.scrollY +
            targetSpacing;
          left = targetRect.left + targetRect.width / 2 - popoverRect.width / 2;

          break;
        case 'top':
          top =
            rectangle.top + window.scrollY - popoverRect.height + targetSpacing;
          left = rectangle.left + targetRect.width / 2 - popoverRect.width / 2;

          break;
        case 'left':
          top =
            targetRect.top -
            popoverRect.height +
            targetRect.height / 2 +
            popoverRect.height / 2 +
            globalThis.scrollY;
          left = targetRect.left - popoverRect.width - targetSpacing;

          break;
        case 'right':
          top =
            targetRect.top -
            popoverRect.height +
            targetRect.height / 2 +
            popoverRect.height / 2 +
            globalThis.scrollY;

          left = targetRect.left + targetRect.width + targetSpacing;

          break;
      }

      setStyle({ top, left });
    } else if (!popoverRef.current) {
      console.error(`Popover ref not found`);
    } else if (!targetRef.current) {
      console.error(`Target ref not found`);
    }
  };

  useEffect(() => {
    if (document.body) {
      const observer = new ResizeObserver(() => {
        setRectValues();
      });

      observer.observe(document.body);

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (popoverRef.current) {
      const observer = new ResizeObserver(() => {
        arrowPlacement();
        popoverPosition();
      });

      observer.observe(popoverRef.current);

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    arrowPlacement();
    popoverPosition();
  }, [targetRef, rectangle]);

  useEffect(() => {
    arrowPlacement();
    popoverPosition();
  }, []);

  return (
    <>
      <div
        ref={popoverRef}
        style={{
          top: `${style.top}px`,
          left: `${style.left}px`,
        }}
        className={`ol-max-w-[340px] ol-absolute ol-z-100 ol-drop-shadow-md ol-flex ${popoverClasses}`}
      >
        <div className={`${arrowClasses}`}>
          <svg
            className="ol-fill-gray"
            width="34"
            height="34"
            viewBox="0 0 33 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.9707 0L32.9413 16.9706L15.9707 33.9411L1.82857 19.799C0.266471 18.2369 0.266471 15.7042 1.82857 14.1421L15.9707 0Z" />
          </svg>
        </div>
        <div className="ol-bg-gray ol-relative ol-px-4 ol-rounded-xl ol-z-100">
          <div className="ol-pt-3 ol-pb-2 ol-gap-y-1 ol-flex ol-flex-col">
            {children}
            {icon && (
              <span className={`material-symbols-${iconStyle}`}>{icon}</span>
            )}
            {title && <h2>{title}</h2>}
            {image && <img src={image} className="ol-bg-gray-dark"></img>}
            {text && <div>{text}</div>}
            {currentStep &&
              totalSteps &&
              textButtonFunc &&
              filledButtonFunc && (
                <div className="ol-flex ol-flex-row ol-items-center ol-justify-between">
                  <div className="ol-text-gray-dark ol-flex ol-flex-row ol-flex-nowrap">
                    {currentStep} of {totalSteps}
                  </div>
                  <div className="ol-flex ol-flex-row ol-gap-x-2.5">
                    <TextButton
                      text={'Previous'}
                      onClickFunc={textButtonFunc || (() => {})}
                    ></TextButton>
                    <Button
                      text={'Next'}
                      onClickFunc={filledButtonFunc || (() => {})}
                    ></Button>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}
