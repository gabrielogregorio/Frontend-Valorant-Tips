import type { Meta, StoryObj } from '@storybook/react';
import { Label, LabelVariantEnum } from '.';

const meta = {
  title: 'Molecules/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(LabelVariantEnum),
    },
  },
  args: {
    htmlFor: 'example',
    variant: LabelVariantEnum.Default,
    text: 'NAME',
    className: '',
  },
};

export const Error: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(LabelVariantEnum),
    },
  },
  args: {
    htmlFor: 'example',
    variant: LabelVariantEnum.Error,
    text: 'NAME',
    className: '',
  },
};

export const Disabled: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(LabelVariantEnum),
    },
  },
  args: {
    htmlFor: 'example',
    variant: LabelVariantEnum.Disabled,
    text: 'NAME',
    className: '',
  },
};
