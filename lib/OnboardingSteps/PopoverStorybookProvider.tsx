import { useRef } from 'react';
import ProductTourNavigation from '../Components/ProductTourNavigation.tsx';
import Popover from './Popover.tsx';

export default function PopoverStoryBookProviderTop() {
  const targetRef = useRef(null);
  return (
    <>
      <div className="ol-flex ol-justify-center ol-items-end ol-h-screen ol-w-auto">
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
        title="Title"
        targetRef={targetRef}
        image="https://picsum.photos/id/237/1920/1080"
        navigation={
          <ProductTourNavigation
            currentStep={2}
            totalSteps={3}
            previouButtonHandler={function (): void {
              throw new Error('Function not implemented.');
            }}
            nextButtonHandler={function (): void {
              throw new Error('Function not implemented.');
            }}
            closeOnboardingHandler={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        }
      ></Popover>
    </>
  );
}

export function PopoverStoryBookProviderBottom() {
  const targetRef = useRef(null);
  return (
    <>
      <div className="ol-flex ol-justify-center ol-h-screen ol-w-auto">
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
      <div className="ol-flex ol-overflow-hidden ol-justify-end ol-items-center ol-h-screen ol-w-auto">
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
      <div className="ol-flex ol-overflow-hidden  ol-items-center ol-h-screen ol-w-auto">
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

export function PopoverStoryBookProviderNonPositionedElement() {
  const targetRef = useRef(null);
  return (
    <>
      <div
        ref={targetRef}
        id="tabs"
        className="ol-flex ol-w-10 ol-h-10 ol-bg-red-500"
      >
        tabs
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
