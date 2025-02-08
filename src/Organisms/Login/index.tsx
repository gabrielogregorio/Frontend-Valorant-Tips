'use client';
import { TextFieldForm } from '../../Molecules/TextFieldForm';
import { Button, ButtonVariantEnum } from '../../Molecules/Button';
import { Text } from '../../Atoms/Text';
import { ErrorMessage } from '../../Molecules/ErrorMessage';
import { SuccessMessage } from '../../Molecules/Success';
import { useLoginAccountFormController } from './useLoginAccountFormController';
import { LoginFormInterface } from './validationSchema';
import { useHandleRouter } from '../../libs/useHandleRouter';
import { RouteScreensEnum } from '../../@types/routeScreenEnum';

export default function Login() {
  const { control, onSubmit, isLoading, errorMessage, success } = useLoginAccountFormController();
  const { push } = useHandleRouter();

  return (
    <form
      className="animate-fadeIn300"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event);
      }}>
      <div className="flex flex-col gap-xl">
        <TextFieldForm<LoginFormInterface>
          control={control}
          id="username"
          name="username"
          label="USUÁRIO"
          placeholder="Seu usuário"
          helpText="Digite o usuário  para fazer login no site, isso DEVE SER SEGREDO"
        />

        <TextFieldForm<LoginFormInterface>
          type="password"
          control={control}
          id="password"
          name="password"
          autoComplete="password"
          label="SENHA"
          placeholder="******"
          helpText=""
        />
      </div>

      <div className="flex flex-col gap-xl">
        <Text className="text-center text-content-fg">Não tem conta?</Text>

        <Button variant={ButtonVariantEnum.Secondary} onClick={() => push(RouteScreensEnum.register)}>
          CRIAR CONTA
        </Button>

        {errorMessage ? <ErrorMessage text={errorMessage} /> : undefined}

        {success ? <SuccessMessage text={success} /> : undefined}

        <Button type="submit" variant={ButtonVariantEnum.Primary} disabled={isLoading}>
          {isLoading ? 'LOGANDO...' : 'FAZER LOGIN'}
        </Button>
      </div>
    </form>
  );
}
