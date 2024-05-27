import { useRef } from 'react';
import Popover from './Popover.tsx';

export default function PopoverStoryBookProviderTop() {
  const targetRef = useRef(null);
  return (
    <>
      <div className="ol-flex ol-justify-center ol-items-center ol-h-screen ol-w-auto">
        <div
          ref={targetRef}
          id="tabs"
          className="ol-flex ol-w-10 ol-h-10 ol-bg-red-500"
        >
          tabs
        </div>
      </div>
      <Popover
        placement="top"
        text="Lorem ipsum dolor sit amet"
        targetSpacing={0}
        iconStyle="outlined"
        icon="chat"
        title="title"
        targetRef={targetRef}
      ></Popover>
    </>
  );
}

export function PopoverStoryBookProviderBottom() {
  const targetRef = useRef(null);
  return (
    <>
      <div className="ol-flex ol-justify-center ol-items-center ol-h-screen ol-w-auto">
        <div
          ref={targetRef}
          id="tabs"
          className="ol-flex ol-w-10 ol-h-10 ol-bg-red-500"
        >
          tabs
        </div>
      </div>
      <Popover
        placement="bottom"
        text="Lorem ipsum dolor sit amet"
        targetSpacing={0}
        iconStyle="outlined"
        icon="chat"
        title="title"
        targetRef={targetRef}
      ></Popover>
    </>
  );
}

export function PopoverStoryBookProviderLeft() {
  const targetRef = useRef(null);
  return (
    <>
      <div className="ol-flex ol-overflow-hidden ol-justify-center ol-items-center ol-h-screen ol-w-auto">
        <div
          ref={targetRef}
          id="tabs"
          className="ol-flex ol-w-10 ol-h-10 ol-bg-red-500"
        >
          tabs
        </div>
      </div>
      <Popover
        placement="left"
        text="Lorem ipsum dolor sit amet"
        targetSpacing={0}
        iconStyle="outlined"
        icon="chat"
        title="title"
        targetRef={targetRef}
      ></Popover>
    </>
  );
}
export function PopoverStoryBookProviderRight() {
  const targetRef = useRef(null);
  return (
    <>
      <div className="ol-flex ol-overflow-hidden ol-justify-center ol-items-center ol-h-screen ol-w-auto">
        <div
          ref={targetRef}
          id="tabs"
          className="ol-flex ol-w-10 ol-h-10 ol-bg-red-500"
        >
          tabs
        </div>
      </div>
      <Popover
        placement="right"
        text="Lorem ipsum dolor sit amet"
        targetSpacing={0}
        iconStyle="outlined"
        icon="chat"
        title="title"
        targetRef={targetRef}
      ></Popover>
    </>
  );
}
