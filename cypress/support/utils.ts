/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CyHttpMessages,
  HttpResponseInterceptor,
  Method,
  RouteMatcher,
  StaticResponse,
} from '../../node_modules/cypress/types/net-stubbing';

/**
 *
 *```ts
 *const control = customIntercept({
 *  method: 'POST',
 *  alias: 'getMe',
 *  url: '/users/me',
 *  sendResponse: (req) => {
 *    expect(req.body).to.deep.equal({});
 *    return { statusCode: 200 };
 *  }
 *});
 *
 *cy.get('button:contains("SALVAR")').click();
 *
 *cy.get('button:contains("Salvando...")')
 *
 *control.continue();
 *
 *cy.wait('@getMe');
 * ```
 */
export const customIntercept = ({
  method,
  url,
  alias,
  sendResponse,
}: {
  method: Method;
  alias: string;
  url: RouteMatcher;
  sendResponse: (req: CyHttpMessages.IncomingHttpRequest<any, any>) => StaticResponse | HttpResponseInterceptor<any>;
}) => {
  let finishRequest: (value?: unknown) => void;

  const trigger = new Promise((resolve) => {
    finishRequest = resolve;
  });

  cy.intercept(method, url, (req) =>
    trigger.then(() => {
      req.reply(sendResponse(req));
    }),
  ).as(alias);

  return { continue: () => cy.then(() => finishRequest()) };
};

const formatJson = (obj: unknown) => JSON.stringify(obj, null, 2).replace(/,$/gm, '').split('\n');

export const expectDeepEqual = (input1: unknown, input2: unknown) => {
  const formattedObject1 = formatJson(input1);
  const formattedObject2 = formatJson(input2);

  const differencesInObj1: string[] = [];
  const remainingInObj2 = [...formattedObject2];

  for (let index = 0; index < formattedObject1.length; index += 1) {
    const lineObject1 = formattedObject1[index];
    const foundElement = remainingInObj2.findIndex((remainingObject2) => remainingObject2 === lineObject1);
    if (foundElement !== -1) {
      remainingInObj2.splice(foundElement, 1);
    } else {
      differencesInObj1.push(lineObject1);
    }
  }

  if (differencesInObj1.length === 0 && remainingInObj2.length === 0) {
    expect(input1).to.deep.equal(input2);
    return '';
  }

  const resto = formattedObject1.map((item) => (differencesInObj1.includes(item) ? `- ${item}` : `  ${item}`));
  const restoB = formattedObject2.map((item) => (remainingInObj2.includes(item) ? `+ ${item}` : `  ${item}`));

  const message = `diff first object, missing props (-)
${resto.join('\n')}

diff second object (+)
${restoB.join('\n')}
`;

  console.error(message);

  Cypress.log({
    name: 'Erro on compare object',
  });

  message.split('\n').forEach((messageItem) => {
    Cypress.log({
      message: messageItem,
    });
  });

  Cypress.log({
    name: 'view objects',
    consoleProps: () => ({
      object1: input1,
      object2: input2,
    }),
  });

  expect(input1).to.deep.equal(input2);
};

export const authCookieName = 'auth';
