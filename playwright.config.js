// @ts-check
require('dotenv').config({ path: './utils/.env' });

const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/intro
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: [
  //   ['html'],
  //   ['json'],
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'getBaseURL()',
    /* Collect trace for all tests. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'on',
    screenshot: 'on',
  },

 projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      baseURL: 'https://cim-branch-portal.m2pfintech.dev/',
    },
  },
 
],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
