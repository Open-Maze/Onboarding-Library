import type { Meta, StoryObj } from '@storybook/react';
import Popover from '../OnboardingSteps/Popover.tsx';
import ProductTour from './ProductTour.tsx';

const meta: Meta<typeof ProductTour> = {
  component: ProductTour,
};

export default meta;
type Story = StoryObj<typeof ProductTour>;

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <div className="flex justify-center items-center h-screen w-auto">
        <div id="anchor" className="flex w-12 h-12 bg-red-500">
          anchor
        </div>
      </div>
      <ProductTour>
        <Popover
          target={'anchor'}
          targetSpacing={8}
          placement={'top'}
          text="Lorem ipsum 1"
        />
        <Popover
          target={'anchor'}
          targetSpacing={16}
          placement={'left'}
          text="Lorem ipsum 2"
        />
        <Popover
          target={'anchor'}
          targetSpacing={24}
          placement={'bottom'}
          text="Lorem ipsum 3"
        />
      </ProductTour>
    </>
  ),
};

// export const ProductTourOnTemplate: Story = {
//   parameters: {
//     layout: 'fullscreen',
//   },
//   render: () => (
//     <>
//       <ProductTour></ProductTour>
//       <WebsiteWireframe />
//     </>
//   ),
// };
