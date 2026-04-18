import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    featured: z.string().optional(),
    featured_opacity: z.string().optional(),
    categories: z.array(z.string()).default([]),
    custom_class: z.string().optional(),
    dark_bg: z.boolean().default(false),
    transparent_header: z.boolean().default(false),
    toc: z.boolean().default(false),
    page_header_super_title: z.string().optional(),
    page_header_sub_title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { articles };
