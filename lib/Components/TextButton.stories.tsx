import type { Meta, StoryObj } from '@storybook/react';
import OutlinedButton from './OutlinedButton.tsx';
const meta: Meta<typeof OutlinedButton> = {
  component: OutlinedButton,
};

export default meta;

type Story = StoryObj<typeof OutlinedButton>;

export const Default: Story = {
  args: {
    text: 'Click me',
  },
};
