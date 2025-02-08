import type { Meta, StoryObj } from '@storybook/react';
import { SuccessMessage } from '.';

const meta = {
  title: 'Molecules/SuccessMessage',
  component: SuccessMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SuccessMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Example error message',
    className: '',
  },
};
