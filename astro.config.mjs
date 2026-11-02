import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://designertoolshub.asjidk999.workers.dev',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
