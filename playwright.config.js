// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 60000, 
  expect: {
    timeout: 900000
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Retry on CI only */
  retries: 1,
  reporter:[
    ['line'],
    ['allure-playwright',{
      resultsDir: 'allure-results',
    }],
  ],
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://playwright.dev',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/

  ],

});

