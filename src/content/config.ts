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
    })
});

const work = defineCollection({
    schema: z.object({
        company: z.string(),
        endDate: z.string(),
        lang: z.string().optional(),
        order: z.number(),
        position: z.string(),
        stack: z.array(z.string()).optional(),
        startDate: z.string(),
    })
});

export const collections = { work, projects };

