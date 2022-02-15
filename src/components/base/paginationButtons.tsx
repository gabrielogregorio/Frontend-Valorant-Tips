import Link from 'next/link';
import resolveQuery from '@/helpers/resolveQuery';

export interface PaginationButtonInterface {
  numberOfPage: number;
  active: boolean;
  map: string;
  agent: string;
  urlBase: string;
}

const PaginationButtons = ({
  numberOfPage: page = 1,
  active,
  urlBase,
  map,
  agent,
}: PaginationButtonInterface) => (
  <li className="bg-transparent text-skin-primaryExtra p-3 pb-1 pt-1 transition duration-150">
    <Link
      passHref
      aria-label={`Navega para a página ${page}`}
      href={resolveQuery(urlBase, { page, map, agent })}>
      <a
        href="#/"
        className={`block p-2 bg-transparent hover:bg-skin-primaryExtra hover:text-skin-textColorInDarkness ${
          active ? 'bg-skin-primaryExtra text-skin-textColorInDarkness' : ''
        }`}>
        {page}
      </a>
    </Link>
  </li>
);

export const PaginationDotItems = () => (
  <li className="bg-transparent text-skin-primaryExtra p-3 pb-1 pt-1">
    <a href="#/" type="button">
      ...
    </a>
  </li>
);

export default PaginationButtons;
