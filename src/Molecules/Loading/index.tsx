import { Text } from '../../Atoms/Text';
import { mergeClasses } from '../../libs/mergeClasses';

type Props = {
  text?: string;
  className?: string;
};

export const LoadingMessage = ({ text = undefined, className = '' }: Props) => {
  return (
    <div
      role="alert"
      className={mergeClasses(
        'text-content-fg-contrast py-lg px-xl rounded-sm flex gap-md bg-secondary-soft w-full',
        className,
      )}>
      <Text>{text}</Text>
    </div>
  );
};
