import { useRef, useState } from 'react';

interface PopoverOptions {
  target: string;
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
}

function elementReady(selector: string) {
  return new Promise((resolve) => {
    const el = document.querySelector(selector);
    if (el) {
      resolve(el);
    }

    new MutationObserver((_mutationRecords, observer) => {
      Array.from(document.querySelectorAll(selector)).forEach((element) => {
        resolve(element);
        observer.disconnect();
      });
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  });
}

export default function Popover({ ...props }: PopoverOptions) {
  const [styleTop, setStyleTop] = useState(Number);
  const [styleLeft, setStyleLeft] = useState(Number);

  const popoverRef = useRef<HTMLDivElement>(null);
  const popoverRect =
    popoverRef.current?.getBoundingClientRect() || new DOMRect();
  let targetRect: DOMRect;

  elementReady(`#${props.target}`).then((popoverTarget: unknown) => {
    if (popoverTarget instanceof HTMLElement) {
      targetRect = popoverTarget.getBoundingClientRect();
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
    } else {
      console.error(`Popover target "${props.target}" not found`);
    }
  });

  return (
    <>
      {styleTop && styleLeft ? (
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
            {/* <div className="flex flex-row items-center justify-between">
            <div className="text-gray-dark">
              {props.currentStep} of {props.totalSteps}
            </div>
            <div className="flex flex-row gap-x-2.5">
              <TextButton
                text={'Previous'}
                onClickFunc={context.onPrev || (() => {})}
              ></TextButton>
              <Button
                text={'Next'}
                onClickFunc={context.onNext || (() => {})}
              ></Button>
            </div> 
          </div>*/}
          </div>
        </div>
      ) : null}
    </>
  );
}
