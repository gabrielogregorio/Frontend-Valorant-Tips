import { queryHelpers, buildQueries, Matcher, MatcherOptions } from '@testing-library/react';

const queryAllByDataCy = (container: HTMLElement, id: Matcher, options?: MatcherOptions | undefined) =>
  queryHelpers.queryAllByAttribute('data-cy', container, id, options);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getMultipleError = (c, dataCyValue) => `Found multiple elements with the data-cy attribute of: ${dataCyValue}`;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getMissingError = (c, dataCyValue) => `Unable to find an element with the data-cy attribute of: ${dataCyValue}`;

const [queryByDataCy, getAllByDataCy, getByDataCy, findAllByDataCy, findByDataCy] = buildQueries(
  queryAllByDataCy,
  getMultipleError,
  getMissingError,
);

export { queryByDataCy, queryAllByDataCy, getByDataCy, getAllByDataCy, findAllByDataCy, findByDataCy };
