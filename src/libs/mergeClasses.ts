import { twMerge } from 'tailwind-merge';

export const mergeClasses = (...classes: string[]) => {
  return twMerge(...classes);
};
