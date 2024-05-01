import {
  arrow,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/react';

interface TooltipTestProps {
  targetId: string;
  pagePadding: number;
  elementOffset: number;
}

export default function TooltipTest({
  targetId,
  pagePadding,
  elementOffset,
}: TooltipTestProps) {
  const button = document.querySelector('#button') as HTMLElement;
  const tooltip = document.querySelector('#tooltip') as HTMLElement;
  const arrowElement = document.querySelector('#arrow') as HTMLElement;

  if (button && tooltip) {
    computePosition(button, tooltip, {
      placement: 'top',
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
        const { x: arrowX, y: arrowY } = middlewareData.arrow || { x: 0, y: 0 };
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

  return (
    <>
      {targetId}
      <button id="button" className="bg-blue-500" aria-describedby="tooltip">
        My button
      </button>
      <div
        id="tooltip"
        role="tooltip"
        className="bg-red-500 w-max max-w-xs top-0 left-0 absolute"
      >
        <div
          id="arrow"
          className="absolute bg-green-500 w-2 h-2 rotate-45"
        ></div>
        Tooltip test component {targetId} more content here to test the tooltip
      </div>
    </>
  );
}
