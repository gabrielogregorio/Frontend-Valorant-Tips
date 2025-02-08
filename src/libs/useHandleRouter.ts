import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { RouteScreensEnum } from '../@types/routeScreenEnum';

export const useHandleRouter = () => {
  const { push } = useRouter();

  const pushMemo = useCallback(
    (href: RouteScreensEnum, options?: { scroll?: boolean }) => {
      push(href, options);
    },
    [push],
  );

  return {
    push: pushMemo,
  };
};
