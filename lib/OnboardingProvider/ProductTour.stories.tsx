import type { Meta, StoryObj } from '@storybook/react';
import WebsiteWireframe from '../Components/WebsiteWireframe';
import ProductTour from './ProductTour';

const meta: Meta<typeof ProductTour> = {
  component: ProductTour,
};

export default meta;
type Story = StoryObj<typeof ProductTour>;

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => <ProductTour></ProductTour>,
};

export const ProductTourOnTemplate: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <ProductTour></ProductTour>
      <WebsiteWireframe />
    </>
  ),
};
