import {
  arrow,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/react';
import Button from '../Components/Button';
import TextButton from '../Components/TextButton';

interface TooltipProps {
  targetId?: string;
  pagePadding: number;
  elementOffset: number;
  tooltipPlacement: 'top' | 'right' | 'bottom' | 'left';
  iconStyle: 'outlined' | 'rounded' | 'sharp';
  icon: string;
  title: string;
  image: string;
  text: string;
  currentStep: number;
  totalSteps: number;
  filledButtonFunc?: () => void;
  textButtonFunc?: () => void;
}

export default function Tooltip({
  targetId,
  pagePadding,
  elementOffset,
  tooltipPlacement,
  iconStyle,
  icon,
  title,
  image,
  text,
  currentStep,
  totalSteps,
  filledButtonFunc,
  textButtonFunc,
}: TooltipProps) {
  if (targetId) {
    const targetElement = document.querySelector(targetId) as HTMLElement;
    const tooltip = document.querySelector('#tooltip') as HTMLElement;
    const arrowElement = document.querySelector('#arrow') as HTMLElement;

    if (targetElement && tooltip) {
      computePosition(targetElement, tooltip, {
        placement: tooltipPlacement,
        middleware: [
          offset(elementOffset),
          flip(),
          shift({ padding: pagePadding }),
          arrow({ element: arrowElement }),
        ],
      }).then(({ x, y, placement, middlewareData }) => {
        Object.assign(tooltip.style, {
          left: `${x}px`,
          top: `${y}px`,
        });

        if (arrowElement) {
          const { x: arrowX, y: arrowY } = middlewareData.arrow || {
            x: 0,
            y: 0,
          };
          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
          }[placement.split('-')[0]];

          Object.assign(arrowElement.style, {
            left: arrowX != null ? `${arrowX}px` : '',
            top: arrowY != null ? `${arrowY}px` : '',
            right: '',
            bottom: '',
            [staticSide as string]: '-4px',
          });
        }
      });
    }
  }

  return (
    <>
      <div
        id="tooltip"
        role="tooltip"
        className="max-w-[312px] absolute top-0 left-0 bg-gray px-4  shadow-md rounded-xl"
      >
        <div id="arrow" className="absolute bg-gray w-2 h-2 rotate-45"></div>
        <div className="pt-3 pb-2 gap-y-1 flex flex-col">
          <span className={`material-symbols-${iconStyle}`}>{icon}</span>
          <h2>{title}</h2>
          <img src={image} className="bg-gray-dark"></img>
          <div>{text}</div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-gray-dark">
              {currentStep} of {totalSteps}
            </div>
            <div className="flex flex-row gap-x-2.5">
              <TextButton
                text={'Previous'}
                onClickFunc={
                  textButtonFunc ||
                  (() => {
                    console.log('textButtonFunc is not defined');
                  })
                }
              ></TextButton>
              <Button
                text={'Next'}
                onClickFunc={
                  filledButtonFunc ||
                  (() => {
                    console.log('fillButtonFunc is not defined');
                  })
                }
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
