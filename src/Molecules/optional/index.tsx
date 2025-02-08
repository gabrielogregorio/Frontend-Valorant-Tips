import { Text, TextVariantEnum } from '../../Atoms/Text';
import { mergeClasses } from '../../libs/mergeClasses';

export enum OptionalVariantEnum {
  Default = 'Default',
  Error = 'Error',
  Disabled = 'Disabled',
}

type Props = {
  className?: string;
  variant?: OptionalVariantEnum;
};

const variantStyles: { [key in OptionalVariantEnum]: string } = {
  [OptionalVariantEnum.Default]: 'text-content-fg-placeholder',
  [OptionalVariantEnum.Error]: 'text-feedback-error-hard',
  [OptionalVariantEnum.Disabled]: 'text-content-fg-disabled',
};

export const Optional = ({ className = '', variant = OptionalVariantEnum.Default }: Props) => {
  const styles = variantStyles[variant];
  return (
    <div className={mergeClasses(styles, 'flex gap-xs items-center', className)}>
      <Text variant={TextVariantEnum.subtext}>{`(Opcional)`}</Text>
    </div>
  );
};
