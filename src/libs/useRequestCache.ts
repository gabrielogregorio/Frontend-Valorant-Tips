import useSWR, { KeyedMutator } from 'swr';

interface IResponseCustomSwr<T> {
  data: T | undefined | null;
  isLoading: boolean;
  mutate: KeyedMutator<T | null>;
  error: unknown;
}
export const useRequestCacheCustomSwr = <T>(
  url: string,
  fetcher: ((arg: string) => Promise<T> | null) | null,
): IResponseCustomSwr<T> => {
  const { data, error, mutate } = useSWR(url, fetcher, {});

  return {
    data,
    isLoading: !data && !error && fetcher !== null,
    mutate,
    error,
  };
};
