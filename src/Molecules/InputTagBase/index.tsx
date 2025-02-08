import { InputHTMLAttributes, Ref, useMemo } from 'react';
import { HelpText, HelpTextVariantEnum } from '../helpText';
import { Label, LabelVariantEnum } from '../Label';
import { OptionalVariantEnum } from '../optional';
import { mergeClasses } from '../../libs/mergeClasses';
import { Icons } from '../../Atoms/Icons';
import { ClickableInputButton } from '../ClickableInputButton';
import { InputTagBaseValue } from '../../@types/InputTagBaseValue';

export enum InputTagBaseVariantEnum {
  Adding = 'Adding',
  Updating = 'Updating',
}

export interface InputTagBaseProps
  extends Omit<Omit<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>, 'onChange'>, 'value'> {
  variant: InputTagBaseVariantEnum;
  label: string;
  ref?: Ref<HTMLInputElement>;
  value: InputTagBaseValue;
  onChange: (value: InputTagBaseValue) => void;
  errorMessage?: string;
  id: string;
  name: string;
  onDelete?: () => void;
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

const handleVariantIcon = (
  variant: InputTagBaseVariantEnum,
  value: InputTagBaseValue,
  onChange: InputTagBaseProps['onChange'],
  onDelete: InputTagBaseProps['onDelete'],
) => {
  if (variant === InputTagBaseVariantEnum.Adding) {
    return <ClickableInputButton icon="XOutline" ariaLabel="delete item" onClick={onDelete} />;
  }

  if (value.isVisible) {
    return (
      <ClickableInputButton
        icon="OpenEyeOutline"
        ariaLabel="hidden item"
        onClick={() => onChange({ ...value, isVisible: false })}
      />
    );
  }

  return (
    <ClickableInputButton
      icon="CloseEyeOutline"
      ariaLabel="show item"
      onClick={() => onChange({ ...value, isVisible: true })}
    />
  );
};
export const InputTagBase = ({
  errorMessage = '',
  id,
  ref = undefined,
  disabled = false,
  name,
  className = '',
  variant,
  onChange,
  label,
  value,
  onDelete = () => {},
  ...rest
}: InputTagBaseProps) => {
  const variants = getVariants({ disabled, errorMessage });

  const baseOnDisableStyles = disabled ? 'bg-content-bg-disabled' : 'bg-root-bg';
  const inputOnDisableStyles = disabled ? 'cursor-not-allowed' : 'cursor-auto';

  const clickableIcon = useMemo(
    () => handleVariantIcon(variant, value, onChange, onDelete),
    [variant, value, onChange, onDelete],
  );

  return (
    <div>
      <div className="select-none max-h-[18px] h-[18px]">
        <Label text={label} htmlFor={id} variant={variants.label} />
      </div>

      <div className="pt-xs">
        <div
          className={mergeClasses(
            'flex items-center gap-xs px-sm py-sm justify-center border rounded-sm border-border focus-within:border-primary',
            baseOnDisableStyles,
          )}>
          <input
            type={'text'}
            ref={ref}
            name={name}
            disabled={disabled}
            value={value.value || ''}
            onChange={(event) => onChange({ ...value, value: event.target.value })}
            id={id}
            className={mergeClasses(
              'text-base font-normal tracking-[0%] placeholder:text-content-fg-placeholder bg-transparent outline-none focus:outline-none text-content-fg w-full',
              value.isVisible ? '' : 'line-through',
              inputOnDisableStyles,
              className,
            )}
            {...rest}
          />
          <div className="min-h-[24px] max-h-[24px] min-w-[12px] flex items-center justify-center">{clickableIcon}</div>
        </div>

        {errorMessage ? (
          <HelpText
            leftIcon={<Icons.AlertOutline className="h-[12px] w-[12px]" />}
            variant={HelpTextVariantEnum.Error}
            text={errorMessage}
          />
        ) : undefined}
      </div>
    </div>
  );
};
