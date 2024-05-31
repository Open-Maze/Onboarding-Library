import type { Meta, StoryObj } from '@storybook/react';
import DarkOverlay from './DarkOverlay.tsx';
const meta: Meta<typeof DarkOverlay> = {
  component: DarkOverlay,
};

export default meta;

type Story = StoryObj<typeof DarkOverlay>;

export const Default: Story = {
  args: {},
};
