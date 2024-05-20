import { useRef } from 'react';
import Popover from '../OnboardingSteps/Popover';
import ProductTour from './ProductTour';

export default function ProductTourStoryBookProviderPrimary() {
  const targetRefTabs = useRef(null);
  const targetRefNavigation = useRef(null);
  const targetRefPost = useRef(null);

  return (
    <>
      <div className="ol-flex ol-justify-around ol-items-center ol-h-screen">
        <div
          ref={targetRefTabs}
          className="ol-flex ol-w-10 ol-h-10 ol-bg-red-500"
        >
          tabs
        </div>
        <div
          ref={targetRefNavigation}
          className="ol-flex ol-w-10 ol-h-10 ol-bg-blue-500"
        >
          tabs
        </div>
        <div
          ref={targetRefPost}
          className="ol-flex ol-w-10 ol-h-10 ol-bg-green-500"
        >
          tabs
        </div>
      </div>
      <ProductTour dev={false} productTourId={'StoryBookProductTour1'}>
        <Popover
          targetRef={targetRefTabs}
          targetSpacing={8}
          placement={'top'}
          text="Lorem ipsum 1"
        />
        <Popover
          targetRef={targetRefNavigation}
          targetSpacing={16}
          placement={'left'}
          text="Lorem ipsum 2"
        />
        <Popover
          targetRef={targetRefPost}
          targetSpacing={24}
          placement={'bottom'}
          text="Lorem ipsum 3"
        />
      </ProductTour>
      <ProductTour dev={true} productTourId={'StoryBookProductTour2'}>
        <Popover
          targetRef={targetRefTabs}
          targetSpacing={8}
          placement={'bottom'}
          text="Lorem ipsum 1"
        />
        <Popover
          targetRef={targetRefNavigation}
          targetSpacing={16}
          placement={'right'}
          text="Lorem ipsum 2"
        />
        <Popover
          targetRef={targetRefPost}
          targetSpacing={24}
          placement={'top'}
          text="Lorem ipsum 3"
        />
      </ProductTour>
    </>
  );
}
