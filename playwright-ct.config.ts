import type { PlaywrightTestConfig } from '@playwright/experimental-ct-svelte';

const config: PlaywrightTestConfig = {
	testDir: 'tests/component',
	use: {
		trace: 'on-first-retry',
		ctViteConfig: {
			resolve: {
				alias: {
					$lib: 'src/lib'
				}
			}
		}
	}
};

export default config;
