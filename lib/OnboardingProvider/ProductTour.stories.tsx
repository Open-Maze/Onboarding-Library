import type { Meta, StoryObj } from '@storybook/react';
import ProductTour from './ProductTour.tsx';
import ProductTourStoryBookProviderPrimary from './ProductTourStorybookProvider.tsx';

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
      <ProductTourStoryBookProviderPrimary />
    </>
  ),
};
