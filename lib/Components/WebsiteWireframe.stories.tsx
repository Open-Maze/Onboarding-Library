import type { Meta, StoryObj } from '@storybook/react';
import 'material-symbols';
import WebsiteWireframe from './WebsiteWireframe.tsx';

const meta: Meta<typeof WebsiteWireframe> = {
  component: WebsiteWireframe,
};

export default meta;
type Story = StoryObj<typeof WebsiteWireframe>;

export const Primary: Story = {
  render: () => <WebsiteWireframe />,
};
