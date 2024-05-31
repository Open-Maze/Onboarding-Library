import type { Meta, StoryObj } from '@storybook/react';
import Popover from './Popover.tsx';
import {
  PopoverStoryBookProviderAllParams,
  PopoverStoryBookProviderBottom,
  PopoverStoryBookProviderLeft,
  PopoverStoryBookProviderNonPositionedElement,
  PopoverStoryBookProviderRight,
  PopoverStoryBookProviderTop,
} from './PopoverStorybookProvider.tsx';

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },

  render: () => (
    <>
      <PopoverStoryBookProviderAllParams />
    </>
  ),
};

export const AlignmentTop: Story = {
  parameters: {
    layout: 'fullscreen',
  },

  render: () => (
    <>
      <PopoverStoryBookProviderTop />
    </>
  ),
};

export const AlignmentBottom: Story = {
  parameters: {
    layout: 'fullscreen',
  },

  render: () => (
    <>
      <PopoverStoryBookProviderBottom />
    </>
  ),
};

export const AllignmentLeft: Story = {
  parameters: {
    layout: 'fullscreen',
  },

  render: () => (
    <>
      <PopoverStoryBookProviderLeft />
    </>
  ),
};

export const AllignmentRight: Story = {
  parameters: {
    layout: 'fullscreen',
  },

  render: () => (
    <>
      <PopoverStoryBookProviderRight />
    </>
  ),
};

export const NonPositionedElement: Story = {
  parameters: {
    layout: 'fullscreen',
  },

  render: () => (
    <>
      <PopoverStoryBookProviderNonPositionedElement />
    </>
  ),
};

// export const AlignmentTop: Story = {
//   parameters: {
//     layout: 'fullscreen',
//   },

//   render: () => (
//     <>
//       <div className="flex justify-center items-center h-screen w-auto">
//         <div id="tabs" className="flex w-10 h-10 bg-red-500">
//           tabs
//         </div>
//       </div>
//       <Popover
//         target={'tabs'}
//         placement="top"
//         text="Lorem ipsum dolor sit amet"
//         targetSpacing={8}
//         iconStyle="outlined"
//         icon="chat"
//         title="title"
//       ></Popover>
//     </>
//   ),
// };

// export const AlignmentBottom: Story = {
//   parameters: {
//     layout: 'fullscreen',
//   },

//   render: () => (
//     <>
//       <div className="flex justify-center items-center h-screen w-auto">
//         <div id="tabs" className="flex w-10 h-10 bg-red-500">
//           tabs
//         </div>
//       </div>
//       <Popover
//         target={'tabs'}
//         placement="bottom"
//         text="Lorem ipsum dolor sit amet"
//         targetSpacing={8}
//         iconStyle="outlined"
//         icon="chat"
//         title="title"
//       ></Popover>
//     </>
//   ),
// };

// export const AlignmentRight: Story = {
//   parameters: {
//     layout: 'fullscreen',
//   },

//   render: () => (
//     <>
//       <div className="flex justify-center items-center h-screen w-auto">
//         <div id="tabs" className="flex w-10 h-10 bg-red-500">
//           tabs
//         </div>
//       </div>
//       <Popover
//         target={'tabs'}
//         placement="right"
//         text="Lorem ipsum dolor sit amet"
//         targetSpacing={8}
//         iconStyle="outlined"
//         icon="chat"
//         title="title"
//       ></Popover>
//     </>
//   ),
// };

// export const PopoverOnTemplate: Story = {
//   parameters: {
//     layout: 'fullscreen',
//   },
//   render: () => (
//     <>
//       <WebsiteWireframe />

//       <Popover  targetSpacing={8} placement={'top'} targetRef={undefined}></Popover>
//     </>
//   ),
// };
