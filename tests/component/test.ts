import { test, expect } from '@playwright/experimental-ct-svelte';
import Foo from '$lib/Foo.svelte';

test('should work', async ({ mount }) => {
	const component = await mount(Foo);
	await expect(component).toContainText('Vite + Svelte');
});
