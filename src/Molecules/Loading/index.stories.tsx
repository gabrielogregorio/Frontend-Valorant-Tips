import type { Meta, StoryObj } from '@storybook/react';
import { LoadingMessage } from '.';

const meta = {
  title: 'Molecules/LoadingMessage',
  component: LoadingMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Example error message',
    className: '',
  },
};
