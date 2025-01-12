import { InputHTMLAttributes, Ref } from 'react';
import { Label, LabelVariantEnum } from '../Label';
import { Optional, OptionalVariantEnum } from '../optional';
import { mergeClasses } from '../../libs/mergeClasses';

export interface CheckboxBaseProps
  extends Omit<Omit<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>, 'value'>, 'checked'> {
  label: string;
  isOptional?: boolean;
  isChecked?: boolean;
  ref?: Ref<HTMLInputElement>;
  errorMessage?: string;
  id: string;
  name: string;
}

const getVariants = ({
  disabled,
  errorMessage,
}: {
  disabled: boolean;
  errorMessage: string;
}): {
  label: LabelVariantEnum;
  optional: OptionalVariantEnum;
} => {
  if (disabled) {
    return {
      label: LabelVariantEnum.Disabled,
      optional: OptionalVariantEnum.Disabled,
    };
  }

  if (errorMessage) {
    return {
      label: LabelVariantEnum.Error,
      optional: OptionalVariantEnum.Error,
    };
  }

  return {
    label: LabelVariantEnum.Default,
    optional: OptionalVariantEnum.Default,
  };
};

export const CheckboxBase = ({
  errorMessage = '',
  id,
  ref = undefined,
  disabled = false,
  name,
  className = '',
  isOptional = false,
  label,
  isChecked,
  ...rest
}: CheckboxBaseProps) => {
  const variants = getVariants({ disabled, errorMessage });

  const inputOnDisableStyles = disabled ? 'cursor-not-allowed' : 'cursor-auto';

  return (
    <div className="flex gap-xs">
      <input
        type={'checkbox'}
        ref={ref}
        name={name}
        disabled={disabled}
        value={Boolean(isChecked) ? 'true' : 'false'}
        checked={Boolean(isChecked)}
        id={id}
        className={mergeClasses('accent-primary cursor-pointer', inputOnDisableStyles, className)}
        {...rest}
      />
      <div className="flex gap-xs">
        <Label text={label} htmlFor={id} variant={variants.label} className="select-none cursor-pointer" />
        {isOptional ? <Optional variant={variants.optional} className="select-none" /> : undefined}
      </div>
    </div>
  );
};
