import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    // L'identifiant reprend le slug d'URL d'origine (accents et «--» compris) :
    // les adresses des 92 articles publiés ne changent pas.
    generateId: ({ entry, data }) =>
      `${(data as { lang?: string }).lang ?? entry.split('/')[0]}/${(data as { slug?: string }).slug ?? entry}`,
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    lang: z.enum(['fr', 'en']),
    slug: z.string(),
    translation: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
