import { Dispatch, HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode, Ref, SetStateAction, useState } from 'react';
import { HelpText, HelpTextVariantEnum } from '../helpText';
import { Label, LabelVariantEnum } from '../Label';
import { Optional, OptionalVariantEnum } from '../optional';
import { mergeClasses } from '../../libs/mergeClasses';
import { Icons } from '../../Atoms/Icons';
import { ClickableInputButton } from '../ClickableInputButton';

export interface TextFieldBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isOptional?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  helpText?: string;
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
  helpText: HelpTextVariantEnum;
} => {
  if (disabled) {
    return {
      helpText: HelpTextVariantEnum.Disabled,
      label: LabelVariantEnum.Disabled,
      optional: OptionalVariantEnum.Disabled,
    };
  }

  if (errorMessage) {
    return {
      helpText: HelpTextVariantEnum.Error,
      label: LabelVariantEnum.Error,
      optional: OptionalVariantEnum.Error,
    };
  }

  return {
    helpText: HelpTextVariantEnum.Default,
    label: LabelVariantEnum.Default,
    optional: OptionalVariantEnum.Default,
  };
};

const handlePasswordShow = (
  type: HTMLInputTypeAttribute | undefined,
  showPassword: boolean,
  setShowPassword: Dispatch<SetStateAction<boolean>>,
) => {
  const typeHandled = showPassword && type === 'password' ? 'text' : type;

  let element: ReactNode = undefined;

  if (type === 'password') {
    element = showPassword ? (
      <ClickableInputButton ariaLabel="Esconder senha" onClick={() => setShowPassword(false)} icon="OpenEyeOutline" />
    ) : (
      <ClickableInputButton ariaLabel="Mostrar senha" onClick={() => setShowPassword(true)} icon="CloseEyeOutline" />
    );
  }

  return {
    typeHandled,
    element,
  };
};

export const TextFieldBase = ({
  errorMessage = '',
  id,
  helpText = undefined,
  ref = undefined,
  disabled = false,
  name,
  className = '',
  type,
  rightIcon = undefined,
  isOptional = false,
  label,
  leftIcon = undefined,
  value,
  ...rest
}: TextFieldBaseProps) => {
  const variants = getVariants({ disabled, errorMessage });

  const helpTextHandled = errorMessage || helpText;
  const baseOnDisableStyles = disabled ? 'bg-content-bg-disabled' : 'bg-root-bg';
  const inputOnDisableStyles = disabled ? 'cursor-not-allowed' : 'cursor-auto';

  const inputStylesLeftIcon = leftIcon ? 'pl-[28px]' : 'pl-[12px]';
  const inputStylesRightIcon = rightIcon ? 'pr-[28px]' : 'pr-[12px]';

  const [showPassword, setShowPassword] = useState(false);

  const { element, typeHandled } = handlePasswordShow(type, showPassword, setShowPassword);

  return (
    <div className="flex flex-col gap-xxs relative">
      <div
        className={mergeClasses(
          'flex flex-col gap-xs border-b border-border focus-within:border-primary min-h-[71px]',
          baseOnDisableStyles,
        )}>
        <div className="flex gap-xs items-center absolute left-lg top-lg pointer-events-none select-none max-h-[18px] h-[18px]">
          <Label text={label} htmlFor={id} variant={variants.label} />
          {isOptional ? <Optional variant={variants.optional} /> : undefined}
        </div>

        <div className="flex gap-xs">
          {leftIcon ? (
            <div className="absolute top-[34px] left-[12px] min-h-[24px] max-h-[24px] min-w-[12px] flex items-center justify-center">
              {leftIcon}
            </div>
          ) : undefined}
          <input
            type={typeHandled}
            ref={ref}
            name={name}
            value={value === null || value === undefined ? '' : value}
            id={id}
            className={mergeClasses(
              'pt-[34px] pb-[12px] text-base font-normal tracking-[0%] placeholder:text-content-fg-placeholder bg-transparent outline-none focus:outline-none text-content-fg w-full',
              inputStylesLeftIcon,
              inputStylesRightIcon,
              inputOnDisableStyles,
              className,
            )}
            {...rest}
          />
          {rightIcon ? (
            <div className="absolute top-[34px] right-[12px] min-h-[24px] max-h-[24px] min-w-[12px] flex items-center justify-center">
              {rightIcon}
            </div>
          ) : (
            <div className="absolute top-[34px] right-[12px] min-h-[24px] max-h-[24px] min-w-[12px] flex items-center justify-center">
              {element}
            </div>
          )}
        </div>
      </div>

      {helpTextHandled ? (
        <HelpText
          leftIcon={errorMessage ? <Icons.AlertOutline className="h-[12px] w-[12px]" /> : undefined}
          variant={variants.helpText}
          text={helpTextHandled}
        />
      ) : undefined}
    </div>
  );
};
