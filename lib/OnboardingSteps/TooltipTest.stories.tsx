import type { Meta, StoryObj } from '@storybook/react';
import 'material-symbols';
import TooltipTest from './TooltipTest';

const meta: Meta<typeof TooltipTest> = {
  component: TooltipTest,
};

export default meta;
type Story = StoryObj<typeof TooltipTest>;

export const Primary: Story = {
  render: () => (
    <TooltipTest targetId={'targetId'} pagePadding={8} elementOffset={5} />
  ),
};

export const ElementFocused: Story = {
  render: () => (
    <>
      <button id="button">Button</button>
      <TooltipTest targetId={'#button'} pagePadding={8} elementOffset={5} />
    </>
  ),
};
