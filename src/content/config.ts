import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    schema: z.object({
        cover: z.string(),
        github: z.string().url().optional(),
        lang: z.string().optional(),
        name: z.string(),
        order: z.number(),
        stack: z.array(z.string()),
        url: z.string().url().optional(),
    }),
});

const work = defineCollection({
    schema: z.object({
        company: z.string(),
        position: z.string(),
        startDate: z.string().regex(/^[a-z]{3}\. \d{4}$/),
        endDate: z.string(),
        order: z.number().min(1),
        stack: z.array(z.string()).min(1),
        lang: z.enum(['es', 'en']).optional().default('es'),
        featured: z.boolean().optional().default(false),
    }),
});

export const collections = { work, projects };
