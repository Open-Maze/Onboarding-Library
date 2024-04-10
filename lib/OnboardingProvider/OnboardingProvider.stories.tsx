import type { Meta, StoryObj } from '@storybook/react';
import OnboardingProvider from './OnboardingProvider';

const meta: Meta<typeof OnboardingProvider> = {
  component: OnboardingProvider,
};

export default meta;
type Story = StoryObj<typeof OnboardingProvider>;

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <OnboardingProvider
      steps={[{ id: 'first' }, { id: 'second' }, { id: 'third' }]}
    />
  ),
};
