import type { Meta, StoryObj } from '@storybook/react';
import ProductTour from './ProductTour.tsx';
import ProductTourStoryBookProviderPrimary, {
  ProductTourStoryBookProviderDifferentSteps,
  ProductTourStoryBookProviderPageWithScroll,
} from './ProductTourStorybookProvider.tsx';

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

export const WithScroll: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <ProductTourStoryBookProviderPageWithScroll />
    </>
  ),
};

export const DifferentStepTypes: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <ProductTourStoryBookProviderDifferentSteps />
    </>
  ),
};
