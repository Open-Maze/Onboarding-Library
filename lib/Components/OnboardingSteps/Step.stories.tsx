import type { Meta, StoryObj } from '@storybook/react';
import Step from './Step';

const meta: Meta<typeof Step> = {
  component: Step,
};

export default meta;
type Story = StoryObj<typeof Step>;

const nextStepFunc: () => void = () => {
  console.log('test');
  alert('Hello! I am an alert box!!');
};

export const Primary: Story = {
  render: () => (
    <Step stepProps={{ nextStep: nextStepFunc, content: 'content' }} />
  ),
};
