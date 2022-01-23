import Link from 'next/link';
import BreadcrumbComponent from '@/widgets/breadcrumb';
import ErrorMsg from '@/base/errorMsg';
import FooterComponent from '@/layout/footer';
import LoaderComponent from '@/base/loader';
import NavbarComponentPublic from '@/layout/navbar_public';
import { maps } from '@/data/data-valorant';
import { LINKS } from '@/data/links';
import useMaps from '@/hooks/useMaps';
import Title from '@/base/title';
import { navbarEnumPublic } from '@/interfaces/navbar';

const breadcrumbs = [LINKS.inicio, LINKS.Maps];

export default function MapScreen() {
  const { mapsApi, activeLoader, errorMsg } = useMaps();

  function renderMap() {
    if (mapsApi.length === 0) {
      return null;
    }

    return maps().map((map) =>
      mapsApi.includes(map.name) ? (
        <Link href={`/agents?map=${map.name}`} key={map.id}>
          <a className="grid">
            <img src={map.img} alt={map.name} />
            <p>{map.name}</p>
          </a>
        </Link>
      ) : null,
    );
  }

  return (
    <div className="container">
      <NavbarComponentPublic selected={navbarEnumPublic.Inicio} />
      <BreadcrumbComponent breadcrumbs={breadcrumbs} />

      <div className="subcontainer">
        <Title>Escolha um mapa ai parça </Title>
        <ErrorMsg msg={errorMsg} />
        {activeLoader ? <p>Buscando Mapas...</p> : ''}
        <LoaderComponent active={activeLoader} />
        <div className="gridFull">{renderMap()}</div>
      </div>
      <FooterComponent color="primary" />
    </div>
  );
}
