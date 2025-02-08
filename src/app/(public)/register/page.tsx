import { TitleAndSubtitle } from '../../../Molecules/TitleAndSubTitle';
import CreateAccount from '../../../Organisms/CreateAccount';

export default function Home() {
  return (
    <>
      <TitleAndSubtitle
        title="Fazer Cadastro"
        subtitle="Essa é uma tela exclusiva a quem recebeu um código para virar adiminstrador do valorant tips."
      />

      <CreateAccount />
    </>
  );
}
