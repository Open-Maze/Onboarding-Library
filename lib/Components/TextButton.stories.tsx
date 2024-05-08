import type { Meta, StoryObj } from '@storybook/react';
import TextButton from './TextButton';
const meta: Meta<typeof TextButton> = {
  component: TextButton,
};

export default meta;

type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  args: {
    text: 'Click me',
  },
};
