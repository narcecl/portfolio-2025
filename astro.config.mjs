// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://narce.cl',
    vite: {
        // @ts-ignore - TailwindCSS v4 vite plugin type compatibility
        plugins: [tailwind()],
    },
    integrations: [
        icon(),
        mdx(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
                debug: false,
            },
        }),
        sitemap({
            i18n: {
                defaultLocale: 'es',
                locales: {
                    es: 'es-CL',
                    en: 'en',
                },
            },
        }),
    ],
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es',
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: false,
        },
    },
});
