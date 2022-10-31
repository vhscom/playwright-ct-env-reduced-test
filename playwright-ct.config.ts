import type { PlaywrightTestConfig } from '@playwright/experimental-ct-svelte';

const config: PlaywrightTestConfig = {
	testDir: 'tests/component',
	use: {
		trace: 'on-first-retry',
		ctViteConfig: {
			resolve: {
				alias: {
					$lib: 'src/lib',
					$environment: 'src/variable.ts'
				}
			}
		}
	}
};

export default config;
