// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon(),
        mdx(),
        tailwind(),
        partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        }),
    ],
    i18n: {
        locales: ["es", "en"],
        defaultLocale: "es",
    }
});