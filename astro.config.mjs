import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({ site: 'https://asjidrouf.github.io', base: '/designertoolshub', trailingSlash: 'always', integrations: [tailwind()] });
