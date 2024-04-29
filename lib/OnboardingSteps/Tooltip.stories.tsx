import type { Meta, StoryObj } from '@storybook/react';
import 'material-symbols';
import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  render: () => (
    <Tooltip
      iconStyle={'outlined'}
      icon={'chat'}
      title={'Tooltip'}
      image={'https://picsum.photos/id/237/1920/1080'}
      text={'Lorem ipsum dolor sit amet'}
      currentStep={1}
      totalSteps={1}
    />
  ),
};
