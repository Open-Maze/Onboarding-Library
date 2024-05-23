'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
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
  const [styleTop, setStyleTop] = useState<number>();
  const [styleLeft, setStyleLeft] = useState<number>();
  const [popoverHidden, setPopoverHidden] = useState(true);
  const popoverRef = useRef<HTMLDivElement>(null);

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
          rectValues.top + window.scrollY - popoverRect.height + targetSpacing;
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
  }, []);

  useEffect(() => {
    popoverPosition();
    setPopoverHidden(false);
  }, []);

  useEffect(() => {
    if (document.body && popoverRef.current) {
      const observer = new ResizeObserver(() => {
        popoverPosition();
        setPopoverHidden(false);
      });

      observer.observe(document.body);
      observer.observe(popoverRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <div
        ref={popoverRef}
        style={{
          top: `${styleTop}px`,
          left: `${styleLeft}px`,
        }}
        className={`ol-max-w-[312px] ol-absolute ol-bg-gray ol-px-4 ol-z-100 ol-shadow-md ol-rounded-xl ${popoverHidden && 'ol-hidden'}`}
      >
        <div className="ol-pt-3 ol-pb-2 ol-gap-y-1 ol-flex ol-flex-col">
          {children}
          {icon && (
            <span className={`material-symbols-${iconStyle}`}>{icon}</span>
          )}
          {title && <h2>{title}</h2>}
          {image && (
            <img
              src={image}
              alt="onboarding image"
              className="ol-bg-gray-dark"
            ></img>
          )}
          {text && <div>{text}</div>}
          {currentStep && totalSteps && textButtonFunc && filledButtonFunc && (
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
    </>
  );
}
