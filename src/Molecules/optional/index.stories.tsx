import type { Meta, StoryObj } from '@storybook/react';
import { Optional, OptionalVariantEnum } from '.';

const meta = {
  title: 'Molecules/Optional',
  component: Optional,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Optional>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(OptionalVariantEnum),
    },
  },
  args: {
    variant: OptionalVariantEnum.Default,
    className: '',
  },
};

export const Error: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(OptionalVariantEnum),
    },
  },
  args: {
    variant: OptionalVariantEnum.Error,
    className: '',
  },
};

export const Disabled: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(OptionalVariantEnum),
    },
  },
  args: {
    variant: OptionalVariantEnum.Disabled,
    className: '',
  },
};
