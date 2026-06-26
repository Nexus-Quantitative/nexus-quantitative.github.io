import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './e2e-tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: isCI ? 'npx vite preview --port 4173 --host' : 'npx vite --port 4173 --host',
    url: 'http://localhost:4173',
    reuseExistingServer: !isCI,
    timeout: 120000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});