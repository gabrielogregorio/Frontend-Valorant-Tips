import type { Meta, StoryObj } from '@storybook/react';
import { ClickableInputButton } from '.';
import { Icons } from '../../Atoms/Icons';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Molecules/ClickableInputButton',
  component: ClickableInputButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ClickableInputButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    icon: {
      control: 'select',
      options: Object.values(Icons),
    },
  },
  args: {
    icon: 'OpenEyeOutline',
    onClick: action('onClick'),
    disabled: false,
    className: '',
  },
};
