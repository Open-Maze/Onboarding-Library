import { useState } from 'react';

interface PopoverOptions {
  //   placement: 'top' | 'right' | 'bottom' | 'left';
  target: string;
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
  const [styleTop, setStyleTop] = useState(0);
  const [styleLeft, setStyleLeft] = useState(0);
  //   let popoverTarget = null as HTMLElement | null;
  const popoverId = `popoverId-${new Date().getTime().toString()}`;

  let targetRect: DOMRect;
  let popoverRect: DOMRect;

  elementReady(`#${popoverId}`).then((popoverId: unknown) => {
    if (popoverId instanceof HTMLElement) {
      popoverRect = popoverId.getBoundingClientRect();
    } else {
      console.error('Popover target not found');
    }
  });

  elementReady(`#${props.target}`).then((popoverTarget: unknown) => {
    if (popoverTarget instanceof HTMLElement && popoverRect) {
      targetRect = popoverTarget.getBoundingClientRect();
      setStyleTop(targetRect.top + targetRect.height);
      setStyleLeft(
        targetRect.left + targetRect.width / 2 - popoverRect.width / 2
      );
      console.log('styleTop', styleTop, 'styleLeft', styleLeft);
    } else {
      console.error('Popover target not found');
    }
  });

  return (
    <>
      <div
        id={popoverId}
        style={{ top: `${styleTop + 8}px`, left: `${styleLeft}px` }}
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
    </>
  );
}
