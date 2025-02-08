import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextFieldBase } from '.';
import { ClickableInputButton } from '../ClickableInputButton';

const meta = {
  title: 'Molecules/TextFieldBase',
  component: TextFieldBase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextFieldBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAndFilling: Story = {
  args: {
    disabled: false,
    onClick: action('onClick'),
    onChange: action('onChange'),
    id: 'example',
    leftIcon: <ClickableInputButton ariaLabel="all right" onClick={action('clickLeftIcon')} icon="CheckOutline" />,
    rightIcon: (
      <ClickableInputButton ariaLabel="show password" onClick={action('clickRightIcon')} icon="OpenEyeOutline" />
    ),
    label: 'SEU NOME',
    autoComplete: 'off',
    errorMessage: '',
    name: 'example',
    helpText: 'Digite o seu nome',
    placeholder: 'Digite o seu nome',
    isOptional: true,
    className: '',
  },
};

export const Filled: Story = {
  args: {
    disabled: false,
    onClick: action('onClick'),
    onChange: action('onChange'),
    id: 'example',
    leftIcon: <ClickableInputButton ariaLabel="all right" onClick={action('clickLeftIcon')} icon="CheckOutline" />,
    rightIcon: (
      <ClickableInputButton ariaLabel="show password" onClick={action('clickRightIcon')} icon="OpenEyeOutline" />
    ),
    label: 'SEU NOME',
    autoComplete: 'off',
    errorMessage: '',
    name: 'example',
    value: 'Paula Fernandes',
    helpText: 'Digite o seu nome',
    placeholder: 'Digite o seu nome',
    isOptional: true,
    className: '',
  },
};

export const Error: Story = {
  args: {
    disabled: false,
    onClick: action('onClick'),
    onChange: action('onChange'),
    id: 'example',
    leftIcon: <ClickableInputButton ariaLabel="all right" onClick={action('clickLeftIcon')} icon="CheckOutline" />,
    rightIcon: (
      <ClickableInputButton ariaLabel="show password" onClick={action('clickRightIcon')} icon="OpenEyeOutline" />
    ),
    label: 'SEU NOME',
    autoComplete: 'off',
    errorMessage: 'Esse nome é inválido',
    name: 'example',
    value: 'Mago',
    helpText: 'Digite o seu nome',
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
    leftIcon: <ClickableInputButton ariaLabel="all right" onClick={action('clickLeftIcon')} icon="CheckOutline" />,
    rightIcon: (
      <ClickableInputButton ariaLabel="show password" onClick={action('clickRightIcon')} icon="OpenEyeOutline" />
    ),
    label: 'SEU NOME',
    autoComplete: 'off',
    errorMessage: 'Esse nome é inválido',
    name: 'example',
    value: 'Mago',
    helpText: 'Digite o seu nome',
    placeholder: 'Digite o seu nome',
    isOptional: true,
    className: '',
  },
};
