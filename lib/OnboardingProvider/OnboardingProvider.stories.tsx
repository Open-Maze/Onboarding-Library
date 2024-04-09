import type { Meta, StoryObj } from '@storybook/react';
import OnboardingProvider from './OnboardingProvider';
const meta: Meta<typeof OnboardingProvider> = {
  component: OnboardingProvider,
};

export default meta;

type Story = StoryObj<typeof OnboardingProvider>;

export const Default: Story = {
  args: {},
};

export const WithChildren: Story = {
  args: {
    children: <div>test</div>,
  },
};
