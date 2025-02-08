import { LabelHTMLAttributes } from 'react';
import { Text, TextVariantEnum } from '../../Atoms/Text';
import { mergeClasses } from '../../libs/mergeClasses';

export enum LabelVariantEnum {
  Default = 'Default',
  Disabled = 'Disabled',
  Error = 'Error',
}
type labelHtmlProps = LabelHTMLAttributes<HTMLLabelElement>;

interface Props extends Omit<labelHtmlProps, 'children'> {
  htmlFor: string;
  variant?: LabelVariantEnum;
  text?: string;
}

const variantStyles: { [key in LabelVariantEnum]: { labelStyles: string } } = {
  [LabelVariantEnum.Default]: {
    labelStyles: 'text-content-fg-subcontent',
  },
  [LabelVariantEnum.Disabled]: {
    labelStyles: 'text-content-fg-disabled',
  },
  [LabelVariantEnum.Error]: {
    labelStyles: 'text-feedback-error-hard',
  },
};

/**
 * # Introdução
 * Esse componente deve ser usado em INPUTS, apenas nisso e nada mais
 *
 * # ADR
 * ## Label 1: Proibição do Children
 * O Componente não irá aceitar `children`, já que o children pode aceitar usos abusivos do componente, exemplo:
 * ```tsx
 * <Label>
 *   <Text variant="h1">Example</Text>
 * </Label>
 * ```
 *
 * No exemplo acima a situação pode ficar pior se houver outro text dentro do componente, e isso tende a escalar negativamente
 *
 * ### Decisão
 * Para evitar isso, foi decidido que o componente iŕa receber um text, e irá bloquear o children, forçando usos desta forma:
 *
 * <Label text="valor do conteudo" isDisabled={true} hasError={true}>
 *
 */
export const Label = ({ htmlFor, variant = LabelVariantEnum.Default, className = '', text = '', ...rest }: Props) => {
  const isDisabled = variant === LabelVariantEnum.Disabled;

  return (
    <label
      aria-disabled={isDisabled}
      htmlFor={htmlFor}
      className={mergeClasses(variantStyles[variant].labelStyles, className)}
      {...rest}>
      <Text variant={TextVariantEnum.subtext}>{text}</Text>
    </label>
  );
};
