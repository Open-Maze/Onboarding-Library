import type { Meta, StoryObj } from '@storybook/react';
import WebsiteWireframe from '../Components/WebsiteWireframe';
import { Tooltip, TooltipContent } from '../OnboardingSteps/Tooltip';
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
      <Tooltip placement="top" open={true}>
        <TooltipContent>tooltip 1</TooltipContent>
      </Tooltip>
      <Tooltip placement="right" open={true}>
        <TooltipContent>tooltip 2</TooltipContent>
      </Tooltip>
    </ProductTour>
  ),
};

export const ProductTourOnTemplate: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <ProductTour>
        <Tooltip placement="top" open={true}>
          <TooltipContent>tooltip 1</TooltipContent>
        </Tooltip>
        <Tooltip placement="right" open={true}>
          <TooltipContent>tooltip 2</TooltipContent>
        </Tooltip>
      </ProductTour>
      <WebsiteWireframe />
    </>
  ),
};
