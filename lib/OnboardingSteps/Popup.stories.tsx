import type { Meta, StoryObj } from '@storybook/react';
import ProductTour from '../OnboardingProvider/ProductTour.tsx';
import Popup from './Popup.tsx';
const meta: Meta<typeof Popup> = {
  component: Popup,
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Title',
    text: 'Supporting line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo pellentesque vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
    image: 'https://picsum.photos/id/237/1920/1080',
  },
};

export const InsideProductTour: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <ProductTour dev={true} productTourId={'testing testing'}>
      <Popup
        title="Title 1"
        text="Supporting line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo pellentesque vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
        image="https://picsum.photos/id/237/1920/1080"
      />
      <Popup
        title="Title 2"
        text="Supporting line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo pellentesque vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
        image="https://picsum.photos/id/237/1920/1080"
      />
    </ProductTour>
  ),
};
