import { mergeClasses } from '../../libs/mergeClasses';

interface Props {
  className?: string;
}

export const Skeleton = ({ className = '' }: Props) => {
  return <div className={mergeClasses('bg-content-bg-disabled animate-pulseIn300 w-[220px] h-[184px]', className)} />;
};
