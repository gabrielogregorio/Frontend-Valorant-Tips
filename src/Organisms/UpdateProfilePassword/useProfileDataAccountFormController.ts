'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateProfilePasswordFormInterface, updateProfilePasswordFormSchema } from './validationSchema';
import { ApiService } from '../../shared/services/ApiService';
import { plainPromise } from '../../shared/utils/plainPromise';
import { ApiError } from '../../shared/services/ApiError';
import { useHandleState } from '../../shared/hooks/useHandleState';

export const useProfileNewPasswordAccountFormController = () => {
  const {
    handleSubmit,
    control,
    watch,
    getValues,
    setValue,
    formState: { errors, isValid },
  } = useForm<UpdateProfilePasswordFormInterface>({
    resolver: zodResolver(updateProfilePasswordFormSchema),
    mode: 'all',
    reValidateMode: 'onBlur',
  });

  const { errorMessage, isLoading, setErrorMessage, setIsLoading, setSuccess, success } = useHandleState();

  const onSubmit = async (formData: UpdateProfilePasswordFormInterface) => {
    if (!formData) {
      return;
    }

    setSuccess('');
    setErrorMessage('');
    setIsLoading(true);
    const { error } = await plainPromise(() =>
      ApiService.patch('/users', {
        password: formData.newPassword,
      }),
    );

    if (error) {
      const errorMessage =
        error instanceof ApiError ? error.message : 'Erro desconhecido ao tentar atualizar dados do usuário';

      setErrorMessage(errorMessage);
      setIsLoading(false);
      console.log('error');
      return;
    }

    setSuccess('Senha atualizada');
    setIsLoading(false);
  };

  return {
    isLoading,
    success,
    errorMessage,
    onSubmit: handleSubmit(onSubmit),
    getValues,
    control,
    watch,
    isValid,
    setValue,
    errors,
  };
};
