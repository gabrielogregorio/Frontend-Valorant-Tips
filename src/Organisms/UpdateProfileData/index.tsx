'use client';
import { TextFieldForm } from '../../Molecules/TextFieldForm';
import { Button, ButtonVariantEnum } from '../../Molecules/Button';
import { ErrorMessage } from '../../Molecules/ErrorMessage';
import { SuccessMessage } from '../../Molecules/Success';
import { formatI18n } from '../../libs/i18n';
import { useProfileDataAccountFormController } from './useProfileDataAccountFormController';
import { UpdateProfileDataFormInterface } from './validationSchema';
import { LoadImageForm } from '../LoadImageForm';
import { useFetchUserLogged } from '../../shared/hooks/useFetchUserLogged';
import { useEffect } from 'react';

export default function UpdateProfileData() {
  const { control, onSubmit, isLoading, errorMessage, success, setValue, getValues } =
    useProfileDataAccountFormController();

  const userLogged = useFetchUserLogged();

  useEffect(() => {
    if (userLogged.data) {
      const imageUrl = getValues('imageUrl');
      if (!imageUrl) {
        setValue('imageUrl', userLogged.data.data.imageUrl);
      }

      const username = getValues('username');
      if (!username) {
        setValue('username', userLogged.data.data.username);
      }

      const name = getValues('name');
      if (!name) {
        setValue('name', userLogged.data.data.name);
      }
    }
    // TODO: RESOLVE
  }, [userLogged.data]);

  return (
    <form
      className="animate-fadeIn300"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event);
      }}>
      <div className="flex flex-col gap-xl">
        <LoadImageForm<UpdateProfileDataFormInterface>
          control={control}
          id="image"
          label="image"
          name="imageUrl"
          helpText="help text"
          className="flex items-center justify-center"
        />

        <TextFieldForm<UpdateProfileDataFormInterface>
          control={control}
          id="name"
          name="name"
          label={formatI18n('label.name')}
          placeholder={formatI18n('placeholder.yourName')}
          helpText={formatI18n('helpText.typeYourName')}
        />

        <TextFieldForm<UpdateProfileDataFormInterface>
          control={control}
          id="username"
          name="username"
          label={formatI18n('label.username')}
          placeholder={formatI18n('placeholder.yourUser')}
          helpText={formatI18n('helpText.typeYourUsername')}
        />
      </div>

      <div className="flex flex-col gap-xl">
        {errorMessage ? <ErrorMessage text={errorMessage} /> : undefined}

        {success ? <SuccessMessage text={success} /> : undefined}

        <Button type="submit" variant={ButtonVariantEnum.Primary} disabled={isLoading}>
          {isLoading ? 'SALVANDO ALTERAÇÕES...' : 'SALVAR ALTERAÇÕES'}
        </Button>
      </div>
    </form>
  );
}
