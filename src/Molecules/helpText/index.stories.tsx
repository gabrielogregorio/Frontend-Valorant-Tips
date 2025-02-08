import type { Meta, StoryObj } from '@storybook/react';
import { HelpText, HelpTextVariantEnum } from '.';
import { Icons } from '../../Atoms/Icons';

const meta = {
  title: 'Molecules/HelpText',
  component: HelpText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HelpText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(HelpTextVariantEnum),
    },
  },
  args: {
    leftIcon: <Icons.AlertOutline className="h-[12px] w-[12px]" />,
    variant: HelpTextVariantEnum.Default,
    text: 'NAME',
    className: '',
  },
};

export const Error: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(HelpTextVariantEnum),
    },
  },
  args: {
    leftIcon: <Icons.AlertOutline className="h-[12px] w-[12px]" />,
    variant: HelpTextVariantEnum.Error,
    text: 'NAME',
    className: '',
  },
};

export const Disabled: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(HelpTextVariantEnum),
    },
  },
  args: {
    leftIcon: <Icons.AlertOutline className="h-[12px] w-[12px]" />,
    variant: HelpTextVariantEnum.Disabled,
    text: 'NAME',
    className: '',
  },
};
