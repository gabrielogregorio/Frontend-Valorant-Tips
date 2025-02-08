import type { Meta, StoryObj } from '@storybook/react';
import { LoadImageBase } from '.';

const meta = {
  title: 'Organisms/LoadImageBase',
  component: LoadImageBase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadImageBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'id',
    label: 'carregar imagem',
    name: 'name',
    className: '',
    errorMessage: '',
    helpText: 'clique e escolha uma imagem',
  },
};

export const Error: Story = {
  args: {
    id: 'id',
    label: 'carregar imagem',
    name: 'name',
    className: '',
    errorMessage: 'Aconteceu algum problema',
    helpText: '',
  },
};
