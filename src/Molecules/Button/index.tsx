import { ButtonHTMLAttributes, ReactNode } from 'react';
import { mergeClasses } from '../../libs/mergeClasses';
import { Text, TextVariantEnum } from '../../Atoms/Text';

export enum ButtonVariantEnum {
  Primary = 'Primary',
  'Secondary' = 'Secondary',
  'Text' = 'Text',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantEnum;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
}

const variantStyles: { [key in ButtonVariantEnum]: string } = {
  [ButtonVariantEnum.Primary]: 'bg-primary px-lg py-sm gap-xs rounded-sm min-h-6xl text-content-fg-contrast disabled:text-content-fg-disabled disabled:bg-content-bg-disabled enabled:active:scale-95 active:bg-primary-hard hover:bg-primary-hard transition-all duration-150',
  [ButtonVariantEnum.Secondary]: 'bg-secondary px-lg py-sm gap-xs rounded-sm min-h-6xl text-content-fg-contrast disabled:text-content-fg-disabled disabled:bg-content-bg-disabled enabled:active:scale-95 active:bg-secondary-hard hover:bg-secondary-hard transition-all duration-150',
  [ButtonVariantEnum.Text]: 'px-lg py-sm gap-xs rounded-sm min-h-6xl text-content-fg disabled:text-content-fg-disabled enabled:active:scale-95 transition-all duration-150',
};

export const Button = ({
  className = '',
  children,
  variant = ButtonVariantEnum.Primary,
  leftIcon,
  disabled,
  onClick,
  rightIcon,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={mergeClasses(
        'touch-manipulation disable-pointer-events-for-children flex items-center justify-center select-none cursor-pointer disabled:cursor-not-allowed',
        variantStyles[variant],
        className,
      )}
      {...rest}>
      {leftIcon ? leftIcon : undefined}
      {children ? <Text variant={TextVariantEnum.button}>{children}</Text> : undefined}
      {rightIcon ? rightIcon : undefined}
    </button>
  );
};
