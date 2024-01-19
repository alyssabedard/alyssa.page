// 1. Import utilities from `astro:content`
import type { date } from 'astro/zod';
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.string(),
      summary: z.string(),
      image: z.string().optional(),
      project: z.object({
        isTechnical: z.boolean(),
        stack: z.array(z.string()),
        tags: z.array(z.string()),
        url: z.string().optional(),
        isMoreDetail: z.boolean(),
      }),
      
    }),
  })


  export const collections = {
    posts: postCollection,
  }