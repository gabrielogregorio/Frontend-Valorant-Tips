import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CheckboxBase } from '.';

const meta = {
  title: 'Molecules/CheckboxBase',
  component: CheckboxBase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    onClick: action('onClick'),
    onChange: action('onChange'),
    id: 'example',
    label: 'SEU NOME',
    isChecked: true,
    autoComplete: 'off',
    errorMessage: '',
    name: 'example',
    placeholder: 'Digite o seu nome',
    isOptional: true,
    className: '',
  },
};

export const NotChecked: Story = {
  args: {
    disabled: false,
    onClick: action('onClick'),
    onChange: action('onChange'),
    id: 'example',
    label: 'SEU NOME',
    isChecked: false,
    autoComplete: 'off',
    errorMessage: '',
    name: 'example',
    placeholder: 'Digite o seu nome',
    isOptional: true,
    className: '',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onClick: action('onClick'),
    onChange: action('onChange'),
    id: 'example',
    label: 'SEU NOME',
    isChecked: true,
    autoComplete: 'off',
    errorMessage: '',
    name: 'example',
    placeholder: 'Digite o seu nome',
    isOptional: true,
    className: '',
  },
};
