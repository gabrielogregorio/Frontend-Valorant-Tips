import { Icons } from '../../Atoms/Icons';
import { Text } from '../../Atoms/Text';
import { mergeClasses } from '../../libs/mergeClasses';

type Props = {
  text?: string;
  className?: string;
};

export const SuccessMessage = ({ text = undefined, className = '' }: Props) => {
  return (
    <div
      role="alert"
      className={mergeClasses(
        'text-feedback-success-hard py-lg px-xl rounded-sm flex gap-md bg-feedback-success-soft w-full',
        className,
      )}>
      <Text>{text}</Text>
    </div>
  );
};
