import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
    schema: z.object({
        cover: z.string(),
        github: z.url().optional(),
        lang: z.string().optional(),
        name: z.string(),
        order: z.number(),
        stack: z.array(z.string()),
        url: z.url().optional(),
    }),
});

const work = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/work' }),
    schema: z.object({
        company: z.string(),
        endDate: z.string(),
        featured: z.boolean().optional().default(false),
        image: z.string().optional(),
        lang: z.enum(['es', 'en']).optional().default('es'),
        order: z.number().min(1),
        position: z.string(),
        stack: z.array(z.string()).min(1),
        startDate: z.string().regex(/^[a-z]{3}\. \d{4}$/),
    }),
});

export const collections = { work, projects };
