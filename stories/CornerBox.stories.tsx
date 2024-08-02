// stories/CornerBox.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CornerBox, { CornerBoxProps } from '../components/CornerBox';

// Meta configuration for the CornerBox component in Storybook
const meta: Meta<CornerBoxProps> = {
  title: 'Components/CornerBox',
  component: CornerBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
} satisfies Meta<CornerBoxProps>;

export default meta;
type Story = StoryObj<CornerBoxProps>;

// Default story for the CornerBox component
export const Default: Story = {
  args: {
    topLeft: 'square',
    topRight: 'square',
    bottomLeft: 'square',
    bottomRight: 'square',
    topLeftSize: '0.75em',
    topRightSize: '0.75em',
    bottomLeftSize: '0.75em',
    bottomRightSize: '0.75em',
    backgroundColor: 'white',
    borderColor: 'black',
    children: 'This is the customizable CornerBox.',
  },
};

// Story for the CornerBox component with mixed corner types
export const MixedCorners: Story = {
  args: {
    topLeft: 'angled',
    topRight: 'square',
    bottomLeft: 'boxed',
    bottomRight: 'square',
    topLeftSize: '0.75em',
    topRightSize: '0.75em',
    bottomLeftSize: '1.75em',
    bottomRightSize: '0.75em',
    backgroundColor: 'lightblue',
    borderColor: 'pink',
    children: 'This is the customizable CornerBox.',
  },
};

// Story for the CornerBox component with all corners angled
export const AllAngles: Story = {
  args: {
    topLeft: 'angled',
    topRight: 'angled',
    bottomLeft: 'angled',
    bottomRight: 'angled',
    topLeftSize: '0.75em',
    topRightSize: '0.75em',
    bottomLeftSize: '0.75em',
    bottomRightSize: '0.75em',
    backgroundColor: 'grey',
    borderColor: 'yellow',
    children: 'This is the customizable CornerBox.',
  },
};

// Story for the CornerBox component with all corners boxed
export const AllBoxed: Story = {
  args: {
    topLeft: 'boxed',
    topRight: 'boxed',
    bottomLeft: 'boxed',
    bottomRight: 'boxed',
    topLeftSize: '0.75em',
    topRightSize: '0.75em',
    bottomLeftSize: '0.75em',
    bottomRightSize: '0.75em',
    backgroundColor: '#473',
    borderColor: 'red',
    children: 'This is the customizable CornerBox.',
  },
};
