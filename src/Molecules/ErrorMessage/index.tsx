import { Icons } from '../../Atoms/Icons';
import { Text } from '../../Atoms/Text';
import { mergeClasses } from '../../libs/mergeClasses';

type Props = {
  text?: string;
  className?: string;
};

export const ErrorMessage = ({ text = undefined, className = '' }: Props) => {
  return (
    <div
      role="alert"
      className={mergeClasses(
        'text-feedback-error-hard py-lg px-xl rounded-sm flex gap-md bg-feedback-error-soft w-full animate-fadeIn300',
        className,
      )}>
      <Icons.AlertOutline />
      <Text>{text}</Text>
    </div>
  );
};
