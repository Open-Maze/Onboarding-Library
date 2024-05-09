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

export default function Popover({ ...props }: PopoverOptions) {
  const [styleTop, setStyleTop] = useState(Number);
  const [styleLeft, setStyleLeft] = useState(Number);
  const [isReady, setIsReady] = useState(false);

  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
            targetRect.top - popoverRect.height - props.targetSpacing
          );
          setStyleLeft(
            targetRect.left + targetRect.width / 2 - popoverRect.width / 2
          );
          break;
        case 'left':
          setStyleTop(
            targetRect.top + targetRect.height / 2 - popoverRect.height / 2
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
      setIsReady(true);
    } else {
      console.error(`Popover target ref not found`);
    }
  }, [
    props.placement,
    props.targetRef,
    props.targetSpacing,
    styleLeft,
    styleTop,
  ]);

  return (
    <>
      {styleTop && styleLeft && isReady ? (
        <div
          ref={popoverRef}
          style={{
            top: `${styleTop}px`,
            left: `${styleLeft}px`,
          }}
          className="max-w-[312px] absolute bg-gray px-4 z-100 shadow-md rounded-xl"
        >
          <div className="pt-3 pb-2 gap-y-1 flex flex-col">
            {props.children}
            {props.icon ? (
              <span className={`material-symbols-${props.iconStyle}`}>
                {props.icon}
              </span>
            ) : null}
            {props.title ? <h2>{props.title}</h2> : null}
            {props.image ? (
              <img src={props.image} className="bg-gray-dark"></img>
            ) : null}
            {props.text ? <div>{props.text}</div> : null}
            {props.currentStep &&
            props.totalSteps &&
            props.textButtonFunc &&
            props.filledButtonFunc ? (
              <div className="flex flex-row items-center justify-between">
                <div className="text-gray-dark">
                  {props.currentStep} of {props.totalSteps}
                </div>
                <div className="flex flex-row gap-x-2.5">
                  <TextButton
                    text={'Previous'}
                    onClickFunc={props.textButtonFunc || (() => {})}
                  ></TextButton>
                  <Button
                    text={'Next'}
                    onClickFunc={props.filledButtonFunc || (() => {})}
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
