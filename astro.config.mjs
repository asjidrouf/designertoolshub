import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({ site: process.env.SITE_URL || process.env.CF_PAGES_URL || 'https://designertoolshub.pages.dev', integrations: [tailwind()] });
