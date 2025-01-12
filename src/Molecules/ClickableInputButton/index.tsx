import { Icons } from '../../Atoms/Icons';
import { mergeClasses } from '../../libs/mergeClasses';
import { Button, ButtonVariantEnum } from '../Button';

type Props = {
  className?: string;
  icon: keyof typeof Icons;
  ariaLabel: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const ClickableInputButton = ({
  className = '',
  icon,
  ariaLabel,
  onClick = () => {},
  disabled = false,
}: Props) => {
  const Icon = Icons[icon];
  return (
    <Button
      variant={ButtonVariantEnum.Text}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      type="button"
      className={mergeClasses(
        'min-w-[12px] max-w-[12px] !px-0 !py-0 !pt-0 !pb-0 enabled:active:scale-100 scale-100',
        className,
      )}
      leftIcon={<Icon />}></Button>
  );
};
