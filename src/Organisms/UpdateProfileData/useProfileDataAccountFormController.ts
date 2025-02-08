'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateProfileDataFormInterface, updateProfileDataFormSchema } from './validationSchema';
import { ApiService } from '../../shared/services/ApiService';
import { plainPromise } from '../../shared/utils/plainPromise';
import { ApiError } from '../../shared/services/ApiError';
import { useHandleState } from '../../shared/hooks/useHandleState';

export const useProfileDataAccountFormController = () => {
  const {
    handleSubmit,
    control,
    watch,
    getValues,
    setValue,
    formState: { errors, isValid },
  } = useForm<UpdateProfileDataFormInterface>({
    resolver: zodResolver(updateProfileDataFormSchema),
    mode: 'all',
    reValidateMode: 'onBlur',
  });

  const { errorMessage, isLoading, setErrorMessage, setIsLoading, setSuccess, success } = useHandleState();

  const onSubmit = async (formData: UpdateProfileDataFormInterface) => {
    if (!formData) {
      return;
    }

    setSuccess('');
    setErrorMessage('');
    setIsLoading(true);
    const { error } = await plainPromise(() =>
      ApiService.patch('/users', {
        username: formData.username,
        name: formData.name,
        imageUrl: formData.imageUrl,
      }),
    );

    if (error) {
      const errorMessage =
        error instanceof ApiError ? error.message : 'Erro desconhecido ao tentar atualizar dados do usuário';

      setErrorMessage(errorMessage);
      setIsLoading(false);
      return;
    }

    setSuccess('Usuário atualizado');
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
