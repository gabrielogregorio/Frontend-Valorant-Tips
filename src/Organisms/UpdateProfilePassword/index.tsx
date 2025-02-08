'use client';
import { TextFieldForm } from '../../Molecules/TextFieldForm';
import { Button, ButtonVariantEnum } from '../../Molecules/Button';
import { ErrorMessage } from '../../Molecules/ErrorMessage';
import { SuccessMessage } from '../../Molecules/Success';
import { formatI18n } from '../../libs/i18n';
import { UpdateProfilePasswordFormInterface } from './validationSchema';
import { useProfileNewPasswordAccountFormController } from './useProfileDataAccountFormController';

export default function UpdateProfilePassword() {
  const { control, onSubmit, isLoading, errorMessage, success } = useProfileNewPasswordAccountFormController();

  return (
    <form
      className="animate-fadeIn300"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event);
      }}>
      <div className="flex flex-col gap-xl">
        <TextFieldForm<UpdateProfilePasswordFormInterface>
          control={control}
          id="newPassword"
          type="password"
          name="newPassword"
          label={formatI18n('label.newPassword')}
          placeholder={formatI18n('placeholder.newPassword')}
        />

        <TextFieldForm<UpdateProfilePasswordFormInterface>
          control={control}
          type="password"
          id="newConfirmPassword"
          name="newConfirmPassword"
          label={formatI18n('label.newConfirmPassword')}
          placeholder={formatI18n('placeholder.newConfirmPassword')}
        />
      </div>

      <div className="flex flex-col gap-xl">
        {errorMessage ? <ErrorMessage text={errorMessage} /> : undefined}

        {success ? <SuccessMessage text={success} /> : undefined}

        <Button type="submit" variant={ButtonVariantEnum.Primary} disabled={isLoading}>
          {isLoading ? 'ATUALIZANDO SENHA...' : 'ATUALIZAR SENHA'}
        </Button>
      </div>
    </form>
  );
}
