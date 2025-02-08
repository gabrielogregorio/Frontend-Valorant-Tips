import type { Meta, StoryObj } from '@storybook/react';

import { Text as TextComponent, TextAsEnum, TextVariantEnum } from '.';

const meta = {
  title: 'Atoms/Text',
  component: TextComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Max: Story = {
  args: {
    children: 'POSTS',
    variant: TextVariantEnum['9xl'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};

export const Logo: Story = {
  args: {
    children: 'Dicas de Valorant',
    variant: TextVariantEnum['6xl'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};

export const H1: Story = {
  args: {
    children: 'Dicas de Valorant',
    variant: TextVariantEnum.h1,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};

export const H2: Story = {
  args: {
    children: 'Dicas de Valorant',
    variant: TextVariantEnum.h2,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};

export const h2Highlight: Story = {
  args: {
    children: 'Dicas de Valorant',
    variant: TextVariantEnum.h2Highlight,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};

export const Text: Story = {
  args: {
    children: 'Dicas de Valorant',
    variant: TextVariantEnum.text,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};

export const TextUnderline: Story = {
  args: {
    children: 'Dicas de Valorant',
    variant: TextVariantEnum.textUnderline,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};

export const TextBold: Story = {
  args: {
    children: 'Dicas de Valorant',
    variant: TextVariantEnum.textBold,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};

export const Button: Story = {
  args: {
    children: 'Dicas de Valorant',
    variant: TextVariantEnum.button,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};

export const Link: Story = {
  args: {
    children: 'Dicas de Valorant',
    variant: TextVariantEnum.link,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};

export const Subtext: Story = {
  args: {
    children: 'Dicas de Valorant',
    variant: TextVariantEnum.subtext,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TextVariantEnum),
    },
    as: {
      control: 'select',
      options: Object.values(TextAsEnum),
    },
  },
};
