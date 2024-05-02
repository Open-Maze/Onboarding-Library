import type { Meta, StoryObj } from '@storybook/react';
import 'material-symbols';
import WebsiteWireframe from '../Components/WebsiteWireframe';
import Popover from './Popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  render: () => (
    <>
      <WebsiteWireframe />
      <Popover />
    </>
  ),
};
