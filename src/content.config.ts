import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// About collection schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/en/about" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    service_intro: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
    }).optional(),
    what_i_do: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      items: z.array(
        z.object({
          title: z.string(),
          subtitle: z.string().optional(),
          image: z.string().optional(),
          description: z.string(),
          further_reading: z.string().optional(),
        }),
      ),
    }),
  }),
});

// Contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/en/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Authors collection schema
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/en/authors" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .object({
        facebook: z.url().optional(),
        x: z.url().optional(),
        instagram: z.url().optional(),
        linkedin: z.url().optional(),
        github: z.url().optional(),
        website: z.url().optional(),
        youtube: z.url().optional(),
      })
      .optional(),
  }),
});

// Helper: coerce empty string / non-array to []
const arrayField = z.preprocess(
  (val) => (Array.isArray(val) ? val : []),
  z.array(z.string()),
);

// Posts collection schema
const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/en/posts" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.preprocess((val) => (val === "" ? undefined : val), z.coerce.date().optional()),
    image: z.string().optional(),
    categories: arrayField,
    authors: arrayField,
    tags: arrayField,
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/en/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// French collections
const frPostsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/fr/posts" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.preprocess((val) => (val === "" ? undefined : val), z.coerce.date().optional()),
    image: z.string().optional(),
    categories: z.array(z.string()).default(() => ["others"]),
    authors: z.array(z.string()).default(() => ["Admin"]),
    tags: z.array(z.string()).default(() => ["others"]),
    draft: z.boolean().optional(),
  }),
});

const frPagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/fr/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const frAboutCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/fr/about" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    service_intro: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
    }).optional(),
    what_i_do: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      items: z.array(
        z.object({
          title: z.string(),
          subtitle: z.string().optional(),
          image: z.string().optional(),
          description: z.string(),
          further_reading: z.string().optional(),
        }),
      ),
    }),
  }),
});

const frContactCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/fr/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const frAuthorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/fr/authors" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .object({
        facebook: z.url().optional(),
        x: z.url().optional(),
        instagram: z.url().optional(),
        linkedin: z.url().optional(),
        github: z.url().optional(),
        website: z.url().optional(),
        youtube: z.url().optional(),
      })
      .optional(),
  }),
});

// Export collections
export const collections = {
  enPosts: postsCollection,
  enAbout: aboutCollection,
  enContact: contactCollection,
  enAuthors: authorsCollection,
  enPages: pagesCollection,
  frPosts: frPostsCollection,
  frPages: frPagesCollection,
  frAbout: frAboutCollection,
  frContact: frContactCollection,
  frAuthors: frAuthorsCollection,
};
