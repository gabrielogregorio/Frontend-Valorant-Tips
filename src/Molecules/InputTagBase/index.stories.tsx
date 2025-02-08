import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InputTagBase, InputTagBaseVariantEnum } from '.';

const meta = {
  title: 'Molecules/InputTagBase',
  component: InputTagBase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputTagBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAdding: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(InputTagBaseVariantEnum),
    },
  },
  args: {
    disabled: false,
    onClick: action('onClick'),
    variant: InputTagBaseVariantEnum.Adding,
    onChange: action('onChange'),
    onDelete: action('onDelete'),
    id: 'example',
    label: 'SEU NOME',
    autoComplete: 'off',
    errorMessage: '',
    value: { isVisible: true, value: 'example' },
    name: 'example',
    placeholder: 'Digite o seu nome',
    className: '',
  },
};

export const UpdatingDefault: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(InputTagBaseVariantEnum),
    },
  },
  args: {
    disabled: false,
    onClick: action('onClick'),
    variant: InputTagBaseVariantEnum.Updating,
    onChange: action('onChange'),
    onDelete: action('onDelete'),
    id: 'example',
    label: 'SEU NOME',
    autoComplete: 'off',
    errorMessage: '',
    value: { isVisible: true, value: 'example' },
    name: 'example',
    placeholder: 'Digite o seu nome',
    className: '',
  },
};

export const UpdatingHidden: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(InputTagBaseVariantEnum),
    },
  },
  args: {
    disabled: false,
    onClick: action('onClick'),
    variant: InputTagBaseVariantEnum.Updating,
    onChange: action('onChange'),
    onDelete: action('onDelete'),
    id: 'example',
    label: 'SEU NOME',
    autoComplete: 'off',
    errorMessage: '',
    value: { isVisible: false, value: 'example' },
    name: 'example',
    placeholder: 'Digite o seu nome',
    className: '',
  },
};

export const UpdatingDisalbed: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(InputTagBaseVariantEnum),
    },
  },
  args: {
    disabled: true,
    onClick: action('onClick'),
    variant: InputTagBaseVariantEnum.Updating,
    onChange: action('onChange'),
    onDelete: action('onDelete'),
    id: 'example',
    label: 'SEU NOME',
    autoComplete: 'off',
    errorMessage: '',
    value: { isVisible: false, value: 'example' },
    name: 'example',
    placeholder: 'Digite o seu nome',
    className: '',
  },
};
