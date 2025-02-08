import { ApiService } from '../services/ApiService';
import { formatI18n } from '../../libs/i18n';
import { useRequestCacheCustomSwr } from '../../libs/useRequestCache';

type UserType = {
  imageUrl: string;
  username: string;
  name: string;
};

export const useFetchUserLogged = () => {
  const { data, error, isLoading, mutate } = useRequestCacheCustomSwr('/users/me', (url: string) =>
    ApiService.get<UserType>(url),
  );

  return {
    data,
    errorMessage: error ? formatI18n('msg.error.onFetchUserLogged') : '',
    isLoading,
    reload: mutate,
  };
};
