import { TitleAndSubtitle } from '../../../Molecules/TitleAndSubTitle';
import { Dashboard } from '../../../Organisms/Dashboard';

export default function DashboardScreen() {
  return (
    <>
      <TitleAndSubtitle title="Dashboard Geral" subtitle="Esses são os números do Valorant Tips" />

      <div>
        <Dashboard />
      </div>
    </>
  );
}
