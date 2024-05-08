import type { Meta, StoryObj } from '@storybook/react';
import WebsiteWireframe from '../Components/WebsiteWireframe.tsx';
import Popover from './Popover.tsx';

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const AlignmentTop: Story = {
  parameters: {
    layout: 'fullscreen',
  },

  render: () => (
    <>
      <div className="flex justify-center items-center h-screen w-auto">
        <div id="tabs" className="flex w-10 h-10 bg-red-500">
          tabs
        </div>
      </div>
      <Popover
        target={'tabs'}
        placement="top"
        text="Lorem ipsum dolor sit amet"
        targetSpacing={8}
        iconStyle="outlined"
        icon="chat"
        title="title"
      ></Popover>
    </>
  ),
};

export const AlignmentBottom: Story = {
  parameters: {
    layout: 'fullscreen',
  },

  render: () => (
    <>
      <div className="flex justify-center items-center h-screen w-auto">
        <div id="tabs" className="flex w-10 h-10 bg-red-500">
          tabs
        </div>
      </div>
      <Popover
        target={'tabs'}
        placement="bottom"
        text="Lorem ipsum dolor sit amet"
        targetSpacing={8}
        iconStyle="outlined"
        icon="chat"
        title="title"
      ></Popover>
    </>
  ),
};

export const AlignmentLeft: Story = {
  parameters: {
    layout: 'fullscreen',
  },

  render: () => (
    <>
      <div className="flex justify-center items-center h-screen w-auto">
        <div id="tabs" className="flex w-10 h-10 bg-red-500">
          tabs
        </div>
      </div>
      <Popover
        target={'tabs'}
        placement="left"
        text="Lorem ipsum dolor sit amet"
        targetSpacing={8}
        iconStyle="outlined"
        icon="chat"
        title="title"
      ></Popover>
    </>
  ),
};

export const AlignmentRight: Story = {
  parameters: {
    layout: 'fullscreen',
  },

  render: () => (
    <>
      <div className="flex justify-center items-center h-screen w-auto">
        <div id="tabs" className="flex w-10 h-10 bg-red-500">
          tabs
        </div>
      </div>
      <Popover
        target={'tabs'}
        placement="right"
        text="Lorem ipsum dolor sit amet"
        targetSpacing={8}
        iconStyle="outlined"
        icon="chat"
        title="title"
      ></Popover>
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

      <Popover target={'tabs'} targetSpacing={8} placement={'top'}></Popover>
    </>
  ),
};
