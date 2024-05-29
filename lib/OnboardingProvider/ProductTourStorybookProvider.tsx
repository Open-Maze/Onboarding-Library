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
      <ProductTour dev={false} productTourId={'StoryBookProductTour2'}>
        <Popover
          targetRef={targetRefTabs}
          targetSpacing={4}
          placement={'bottom'}
          text="Lorem ipsum 1"
        />
        <Popover
          targetRef={targetRefNavigation}
          targetSpacing={8}
          placement={'right'}
          text="Lorem ipsum 2"
        />
        <Popover
          targetRef={targetRefPost}
          targetSpacing={12}
          placement={'top'}
          text="Lorem ipsum 3"
        />
        <Popover
          targetRef={targetRefPost}
          targetSpacing={16}
          placement={'left'}
          text="Lorem ipsum 4"
        />
      </ProductTour>
    </>
  );
}

export function ProductTourStoryBookProviderPageWithScroll() {
  const targetRefOne = useRef(null);
  const targetRefTwo = useRef(null);
  const targetRefThree = useRef(null);
  const targetRefFour = useRef(null);

  return (
    <>
      <div className="ol-flex ol-flex-col ol-justify-around ol-items-center ol-h-96 ">
        <div
          ref={targetRefOne}
          className="ol-flex ol-w-10 ol-h-10 ol-bg-red-500"
        >
          Tab1
        </div>
        <div
          ref={targetRefTwo}
          className="ol-flex ol-w-10 ol-h-10 ol-bg-blue-500"
        >
          tab2
        </div>
        <div
          ref={targetRefThree}
          className="ol-flex ol-w-10 ol-h-10 ol-bg-green-500"
        >
          tab3
        </div>
        <div
          ref={targetRefFour}
          className="ol-flex ol-w-10 ol-h-10 ol-bg-yellow-500"
        >
          tab4
        </div>
      </div>

      <ProductTour dev={true} productTourId={'StoryBookProductTour2'}>
        <Popover
          targetRef={targetRefOne}
          targetSpacing={0}
          placement={'bottom'}
          title="Test Title a b c"
          text="Lorem ipsum 1 BOTTOM"
        />
        <Popover
          targetRef={targetRefTwo}
          targetSpacing={0}
          placement={'right'}
          title="Test Title a b c"
          text="Lorem ipsum 2 RIGHT"
        />
        <Popover
          targetRef={targetRefThree}
          targetSpacing={0}
          placement={'top'}
          title="Test Title a b c"
          text="Lorem ipsum 3 TOP"
        />
        <Popover
          targetRef={targetRefFour}
          targetSpacing={0}
          placement={'left'}
          title="Test Title a b c"
          text="Lorem ipsum 4 LEFT"
        />
      </ProductTour>
    </>
  );
}
