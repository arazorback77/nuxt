import { defineContentConfig, defineCollection, z } from "@nuxt/content";
// import { defineCollection, z } from '@nuxt/content'
// import { asSeoCollection } from "@nuxtjs/seo/content";

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
});

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: {
        include: "**/*.md",
        exclude: ["kics/**/*.md"],
        // prefix: "/fr",
      },
    }),
    kics_current: defineCollection({
      type: "page",
      source: {
        include: "kics/current/**/*.{md, yml}",
        // exclude: ["fr/articles/*.md"],
        prefix: "/kics",
      },
      schema: commonContentSchema,
    }),
    kics_versioned: defineCollection({
      type: "page",
      source: {
        include: "kics/**/*.{md, yml}",
        exclude: ["kics/current/**/*.{md, yml}", "kics/temp/**/*.{md, yml}"],
        // prefix: "/kics",
      },
      schema: commonContentSchema,
    }),
  },
});
