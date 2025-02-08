import { mergeClasses } from '../../libs/mergeClasses';

interface Props {
  className?: string;
}

export const Separator = ({ className = '' }: Props) => {
  return <hr data-testid="separator" className={mergeClasses('border-border-soft', className)}></hr>;
};
