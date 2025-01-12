'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormInterface, loginFormSchema } from './validationSchema';
import { ApiService } from '../../shared/services/ApiService';
import { plainPromise } from '../../shared/utils/plainPromise';
import { ApiError } from '../../shared/services/ApiError';
import { useHandleState } from '../../shared/hooks/useHandleState';
import { ClientCookies } from '../../libs/clientCookies';
import { useHandleRouter } from '../../libs/useHandleRouter';
import { RouteScreensEnum } from '../../@types/routeScreenEnum';
import { authCookieName } from '../../shared/constants/cookies';

export const useLoginAccountFormController = () => {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<LoginFormInterface>({
    resolver: zodResolver(loginFormSchema),
    mode: 'all',
    reValidateMode: 'onBlur',
  });

  const { errorMessage, isLoading, setErrorMessage, setIsLoading, setSuccess, success } = useHandleState();
  const { push } = useHandleRouter();

  const onSubmit = async (formData: LoginFormInterface) => {
    if (!formData) {
      return;
    }

    setSuccess('');
    setErrorMessage('');
    setIsLoading(true);
    const { error, data } = await plainPromise(() =>
      ApiService.post('/auth', {
        username: formData.username,
        password: formData.password,
      }),
    );

    if (error) {
      const errorMessage = error instanceof ApiError ? error.message : 'Erro desconhecido ao fazer login';

      setErrorMessage(errorMessage);
      setIsLoading(false);
      return;
    }

    const token = data?.data?.token;
    const userId = data?.data?.userId;
    const expiresAtIso = data?.data?.expiresAtIso;

    if (!token || !userId || !expiresAtIso) {
      return;
    }

    ClientCookies.setCookie(authCookieName, token, {
      // httpOnly: true,
      expires: new Date(expiresAtIso),
    });
    setSuccess('Login realizado com sucesso');
    setIsLoading(false);
    push(RouteScreensEnum.dashboard);
  };

  return {
    isLoading,
    success,
    errorMessage,
    onSubmit: handleSubmit(onSubmit),
    control,
    watch,
    isValid,
    setValue,
    errors,
  };
};
