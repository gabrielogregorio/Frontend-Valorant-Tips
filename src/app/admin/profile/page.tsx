import { TitleAndSubtitle } from '../../../Molecules/TitleAndSubTitle';
import UpdateProfileData from '../../../Organisms/UpdateProfileData';
import UpdateProfilePassword from '../../../Organisms/UpdateProfilePassword';

export default function DashboardScreen() {
  return (
    <>
      <TitleAndSubtitle title="Seu Perfil" subtitle="Atualize suas informações" />

      <UpdateProfileData />

      <UpdateProfilePassword />
    </>
  );
}
