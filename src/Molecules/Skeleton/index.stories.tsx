import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '.';

const meta = {
  title: 'Molecules/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-[300px]',
  },
};
