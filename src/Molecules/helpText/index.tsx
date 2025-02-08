import { ReactNode } from 'react';
import { Text, TextVariantEnum } from '../../Atoms/Text';
import { mergeClasses } from '../../libs/mergeClasses';

export enum HelpTextVariantEnum {
  Default = 'Default',
  Error = 'Error',
  Disabled = 'Disabled',
}

type Props = {
  text?: string;
  className?: string;
  variant?: HelpTextVariantEnum;
  leftIcon?: ReactNode;
};

const variantStyles: { [key in HelpTextVariantEnum]: string } = {
  [HelpTextVariantEnum.Default]: 'text-content-fg-subcontent',
  [HelpTextVariantEnum.Error]: 'text-feedback-error-hard',
  [HelpTextVariantEnum.Disabled]: 'text-content-fg-disabled',
};

/**
 * HelpText devem ser usados apenas em conjunto com inputs
 *
 */
export const HelpText = ({
  text,
  leftIcon = undefined,
  className = '',
  variant = HelpTextVariantEnum.Default,
}: Props) => {
  const styles = variantStyles[variant];
  return (
    <div className={mergeClasses(styles, 'flex gap-xs items-center', className)}>
      {leftIcon}
      <Text variant={TextVariantEnum.subtext}>{text}</Text>
    </div>
  );
};
