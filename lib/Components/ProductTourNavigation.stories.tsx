import type { Meta, StoryObj } from '@storybook/react';
import ProductTourNavigation from './ProductTourNavigation.tsx';
const meta: Meta<typeof ProductTourNavigation> = {
  component: ProductTourNavigation,
};

export default meta;

type Story = StoryObj<typeof ProductTourNavigation>;

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <ProductTourNavigation
        currentStep={99}
        totalSteps={99}
        previouButtonFunc={function (): void {
          throw new Error('Function not implemented.');
        }}
        nextButtonFunc={function (): void {
          throw new Error('Function not implemented.');
        }}
        closeOnboardingFunc={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  ),
};
