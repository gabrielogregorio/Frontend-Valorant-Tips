'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateAccountFormInterface, createAccountFormSchema } from './validationSchema';
import { ApiService } from '../../shared/services/ApiService';
import { plainPromise } from '../../shared/utils/plainPromise';
import { ApiError } from '../../shared/services/ApiError';
import { useHandleState } from '../../shared/hooks/useHandleState';

export const useCreateAccountFormController = () => {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<CreateAccountFormInterface>({
    resolver: zodResolver(createAccountFormSchema),
    mode: 'all',
    reValidateMode: 'onBlur',
  });

  const { errorMessage, isLoading, setErrorMessage, setIsLoading, setSuccess, success } = useHandleState();
  // TODO: RETURNS JWT
  const onSubmit = async (formData: CreateAccountFormInterface) => {
    if (!formData) {
      return;
    }

    setSuccess('');
    setErrorMessage('');
    setIsLoading(true);
    const { error } = await plainPromise(() =>
      ApiService.post('/users', {
        username: formData.username,
        password: formData.password,
        code: formData.code,
        name: formData.name,
      }),
    );

    if (error) {
      const errorMessage = error instanceof ApiError ? error.message : 'Erro desconhecido ao tentar criar conta';

      setErrorMessage(errorMessage);
      setIsLoading(false);
      return;
    }

    setSuccess('Conta criada com sucesso');
    setIsLoading(false);
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
