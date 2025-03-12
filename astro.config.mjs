// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon(),
        mdx(),
        tailwind(),
    ],
    i18n: {
        locales: ["es", "en"],
        defaultLocale: "es",
    }
});