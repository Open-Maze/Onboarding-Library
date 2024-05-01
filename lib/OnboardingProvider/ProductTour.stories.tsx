import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../OnboardingSteps/Tooltip';
import ProductTour from './ProductTour';

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
    <ProductTour>
      <Tooltip
        iconStyle={'outlined'}
        icon={'chat'}
        title={'Tooltip'}
        image={'https://picsum.photos/id/237/1920/1080'}
        text={'Step 1 Lorem ipsum dolor sit amet'}
        currentStep={1}
        totalSteps={1}
        pagePadding={0}
        elementOffset={0}
        tooltipPlacement={'top'}
      />

      <Tooltip
        iconStyle={'outlined'}
        icon={'chat'}
        title={'Tooltip'}
        image={'https://picsum.photos/id/237/1920/1080'}
        text={'Step 2 Lorem ipsum dolor sit amet'}
        currentStep={1}
        totalSteps={1}
        pagePadding={0}
        elementOffset={0}
        tooltipPlacement={'top'}
      />

      <Tooltip
        iconStyle={'outlined'}
        icon={'chat'}
        title={'Tooltip'}
        image={'https://picsum.photos/id/237/1920/1080'}
        text={'Step 3 Lorem ipsum dolor sit amet'}
        currentStep={1}
        totalSteps={1}
        pagePadding={0}
        elementOffset={0}
        tooltipPlacement={'top'}
      />
    </ProductTour>
  ),
};
