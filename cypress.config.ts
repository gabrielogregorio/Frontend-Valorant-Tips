import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1366,
  viewportHeight: 768,

  env: {
    apiHost: 'http://127.0.0.1:3333',
  },

  defaultCommandTimeout: 45000,
  pageLoadTimeout: 45000,
  screenshotOnRunFailure: false,
  video: false,

  retries: 0,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ['cypress/e2e/**/*.{js,ts}'],
    baseUrl: 'http://127.0.0.1:2028',
  },
});
