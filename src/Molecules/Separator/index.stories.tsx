import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '.';

const meta = {
  title: 'Molecules/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-[300px]',
  },
};
