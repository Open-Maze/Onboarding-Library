import type { Meta, StoryObj } from '@storybook/react';
import WebsiteWireframe from '../Components/WebsiteWireframe';
import Popover from './Popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <div id="tabs">tabs</div>
      <Popover title="Test" target={'tabs'}></Popover>
    </>
  ),
};

export const PopoverOnTemplate: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <WebsiteWireframe />

      <Popover target={'tabs'}></Popover>
    </>
  ),
};
