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
  const [styleTop, setStyleTop] = useState(Number);
  const [styleLeft, setStyleLeft] = useState(Number);
  const [isReady, setIsReady] = useState(false);

  const popoverRef = useRef<HTMLDivElement>(null);

  const popoverPosition = useCallback(() => {
    if (targetRef.current instanceof HTMLElement) {
      const popoverRect =
        popoverRef.current?.getBoundingClientRect() || new DOMRect();
      const targetRect = targetRef.current.getBoundingClientRect();

      switch (placement) {
        case 'bottom':
          setStyleTop(targetRect.top + targetRect.height + targetSpacing);
          setStyleLeft(
            targetRect.left + targetRect.width / 2 - popoverRect.width / 2
          );
          break;
        case 'top':
          setStyleTop(
            targetRect.top -
              popoverRect.height +
              globalThis.scrollY -
              targetSpacing
          );
          setStyleLeft(
            targetRect.left + targetRect.width / 2 - popoverRect.width / 2
          );
          break;
        case 'left':
          setStyleTop(
            targetRect.top -
              popoverRect.height +
              targetRect.height / 2 +
              popoverRect.height / 2 +
              globalThis.scrollY
          );
          setStyleLeft(targetRect.left - popoverRect.width - targetSpacing);
          break;
        case 'right':
          setStyleTop(
            targetRect.top + targetRect.height / 2 - popoverRect.height / 2
          );
          setStyleLeft(targetRect.left + targetRect.width + targetSpacing);
          break;
      }
    } else {
      console.error(`Popover target ref not found`);
    }
  }, [placement, targetRef, targetSpacing]);

  useEffect(() => {
    popoverPosition();

    setIsReady(true);
  }, [popoverPosition, isReady]);

  return (
    <>
      {styleTop && styleLeft ? (
        <div
          ref={popoverRef}
          style={{
            top: `${styleTop}px`,
            left: `${styleLeft}px`,
          }}
          className="ol-max-w-[312px] ol-absolute ol-bg-gray ol-px-4 ol-z-100 ol-shadow-md ol-rounded-xl"
        >
          <div className="ol-pt-3 ol-pb-2 ol-gap-y-1 ol-flex ol-flex-col">
            {children}
            {icon ? (
              <span className={`material-symbols-${iconStyle}`}>{icon}</span>
            ) : null}
            {title ? <h2>{title}</h2> : null}
            {image ? <img src={image} className="ol-bg-gray-dark"></img> : null}
            {text ? <div>{text}</div> : null}
            {currentStep && totalSteps && textButtonFunc && filledButtonFunc ? (
              <div className="ol-flex ol-flex-row ol-items-center ol-justify-between">
                <div className="ol-text-gray-dark">
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
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
