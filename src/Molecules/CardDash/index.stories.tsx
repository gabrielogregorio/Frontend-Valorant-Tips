import type { Meta, StoryObj } from '@storybook/react';
import { CardDash } from '.';

const meta = {
  title: 'Molecules/CardDash',
  component: CardDash,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardDash>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'POSTS CRIADOS',
    value: 37,
    className: 'bg-secondary',
  },
};
