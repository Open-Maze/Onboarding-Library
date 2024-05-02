import type { Meta, StoryObj } from '@storybook/react';
import 'material-symbols';
import {
  TooltipTest,
  TooltipTestClose,
  TooltipTestContent,
  TooltipTestDescription,
  TooltipTestHeading,
  TooltipTestTrigger,
} from './TooltipTest';

const meta: Meta<typeof TooltipTest> = {
  component: TooltipTest,
};

export default meta;
type Story = StoryObj<typeof TooltipTest>;

// export const Primary: Story = {
//   render: () => <TooltipTest />,
// };

export const ElementFocused: Story = {
  render: () => (
    <div className="App">
      <h1>Floating UI — TooltipTest</h1>
      <TooltipTest>
        <TooltipTestTrigger>My trigger</TooltipTestTrigger>
        <TooltipTestContent className="TooltipTest">
          <TooltipTestHeading>My TooltipTest heading</TooltipTestHeading>
          <TooltipTestDescription>
            My TooltipTest description
          </TooltipTestDescription>
          <TooltipTestClose>Close</TooltipTestClose>
        </TooltipTestContent>
      </TooltipTest>
    </div>
  ),
};
