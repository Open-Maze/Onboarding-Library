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

export default function Popover({ ...props }: PopoverOptions) {
  const [styleTop, setStyleTop] = useState(Number);
  const [styleLeft, setStyleLeft] = useState(Number);
  const [isReady, setIsReady] = useState(false);

  const popoverRef = useRef<HTMLDivElement>(null);

  const popoverPosition = useCallback(() => {
    if (props.targetRef.current instanceof HTMLElement) {
      const popoverRect =
        popoverRef.current?.getBoundingClientRect() || new DOMRect();
      const targetRect = props.targetRef.current.getBoundingClientRect();

      switch (props.placement) {
        case 'bottom':
          setStyleTop(targetRect.top + targetRect.height + props.targetSpacing);
          setStyleLeft(
            targetRect.left + targetRect.width / 2 - popoverRect.width / 2
          );
          break;
        case 'top':
          setStyleTop(
            targetRect.top -
              popoverRect.height +
              globalThis.scrollY -
              props.targetSpacing
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
          setStyleLeft(
            targetRect.left - popoverRect.width - props.targetSpacing
          );
          break;
        case 'right':
          setStyleTop(
            targetRect.top + targetRect.height / 2 - popoverRect.height / 2
          );
          setStyleLeft(
            targetRect.left + targetRect.width + props.targetSpacing
          );
          break;
      }
    } else {
      console.error(`Popover target ref not found`);
    }
  }, [props.placement, props.targetRef, props.targetSpacing]);

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
            {props.children}
            {props.icon ? (
              <span className={`material-symbols-${props.iconStyle}`}>
                {props.icon}
              </span>
            ) : null}
            {props.title ? <h2>{props.title}</h2> : null}
            {props.image ? (
              <img src={props.image} className="ol-bg-gray-dark"></img>
            ) : null}
            {props.text ? <div>{props.text}</div> : null}
            {props.currentStep &&
            props.totalSteps &&
            props.textButtonFunc &&
            props.filledButtonFunc ? (
              <div className="ol-flex ol-flex-row ol-items-center ol-justify-between">
                <div className="ol-text-gray-dark">
                  {props.currentStep} of {props.totalSteps}
                </div>
                <div className="ol-flex ol-flex-row ol-gap-x-2.5">
                  <TextButton
                    text={'Previous'}
                    onClickFunc={props.textButtonFunc || (() => {})}
                  ></TextButton>
                  <Button
                    text={'Next'}
                    onClickFunc={props.filledButtonFunc || (() => {})}
                  ></Button>
                  <Button
                    text="Update"
                    onClickFunc={() => popoverPosition()}
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
