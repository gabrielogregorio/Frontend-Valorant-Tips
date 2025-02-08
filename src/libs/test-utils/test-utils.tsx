import { render } from '@testing-library/react';
import { queries, within, RenderOptions } from '@testing-library/react';
import * as customQueries from './custom-queries';
import { ReactElement } from 'react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { DirectOptions } from '@testing-library/user-event/dist/cjs/setup/directApi.js';
import { UserEventApi } from '@testing-library/user-event/dist/cjs/setup/setup.js';

const allQueries = {
  ...queries,
  ...customQueries,
};

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    // <ThemeProvider theme="light">
    // <TranslationProvider messages={defaultStrings}>
    <div>{children}</div>
    // </TranslationProvider>
    // </ThemeProvider>
  );
};

const customScreen = within(document.body, allQueries);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const customWithin = (element: ReactElement) => within(element, allQueries);
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, queries: allQueries, ...options });

const click = async (element: Element, options?: DirectOptions) => userEvent.click(element, options);
const clear = async (element: Element) => userEvent.clear(element);
const type = async (element: Element, text: string, options?: DirectOptions & Parameters<UserEventApi['type']>[2]) =>
  userEvent.type(element, text, options);

// export * from '@testing-library/react';
export { customScreen as screen, customWithin as within, customRender as render, click, type, clear };
