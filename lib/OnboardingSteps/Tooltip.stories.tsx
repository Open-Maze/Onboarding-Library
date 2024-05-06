import type { Meta, StoryObj } from '@storybook/react';
import 'material-symbols';
import ProductTour from '../OnboardingProvider/ProductTour';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  render: () => (
    <>
      <h1>Floating UI — Tooltip</h1>

      <ProductTour>
        <Tooltip placement="top" open={true}>
          <TooltipTrigger className="bg-red-500 p-8" asChild={false}>
            Tooltip trigger
          </TooltipTrigger>
          <TooltipContent>tooltip 1</TooltipContent>
        </Tooltip>
        <Tooltip placement="right" open={true}>
          <TooltipContent>tooltip 2</TooltipContent>
        </Tooltip>
      </ProductTour>
    </>
  ),
};
