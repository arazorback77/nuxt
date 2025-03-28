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
        exclude: ["kics/**/*.md", "comp/**/*.md"],
        // prefix: "/fr",
      },
    }),
    comp_current: defineCollection({
      type: "page",
      source: {
        include: "comp/current/**/*.md",
        // exclude: ["kics/**/*.md"],
        prefix: "/comp",
      },
      schema: commonContentSchema,
    }),
    comp_versioned: defineCollection({
      type: "page",
      source: {
        include: "comp/**/*.md",
        exclude: ["comp/current/**/*.{md, yml}", "comp/temp/**/*.{md, yml}"],
        // prefix: "",
      },
      schema: commonContentSchema,
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
