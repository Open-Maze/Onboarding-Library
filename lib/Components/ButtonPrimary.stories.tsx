import type { Meta, StoryObj } from '@storybook/react';
import ButtonPrimary from './ButtonPrimary.tsx';
const meta: Meta<typeof ButtonPrimary> = {
  component: ButtonPrimary,
};

export default meta;

type Story = StoryObj<typeof ButtonPrimary>;

export const Default: Story = {
  args: {
    text: 'Click me',
  },
};
