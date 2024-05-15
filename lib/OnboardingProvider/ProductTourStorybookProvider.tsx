import { useRef } from 'react';
import Popover from '../OnboardingSteps/Popover';
import ProductTour from './ProductTour';

export default function ProductTourStoryBookProviderPrimary() {
  const targetRefTabs = useRef(null);
  const targetRefNavigation = useRef(null);
  const targetRefPost = useRef(null);

  return (
    <>
      <div className="flex justify-around items-center h-screen">
        <div ref={targetRefTabs} className="flex w-10 h-10 bg-red-500">
          tabs
        </div>
        <div ref={targetRefNavigation} className="flex w-10 h-10 bg-blue-500">
          tabs
        </div>
        <div ref={targetRefPost} className="flex w-10 h-10 bg-green-500">
          tabs
        </div>
      </div>
      <ProductTour dev={true} productTourId={'StoryBookProductTour1'}>
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
    </>
  );
}
