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
      stack: z.string().optional(),
      tags: z.string().optional(),
    //   tags: z.array(z.string()),
      image: z.string().optional(),
      url: z.string().optional(),
    //   canonicalURL: z.string().url(),
    }),
  })

//   const blogContentCollection = defineCollection({
//     type: 'content', // v2.5.0 and later
//     schema: z.object({
//         title: z.string(),
//         date: z.string(),
//         summary: z.string(),
//         stack: z.string(),
//         tags: z.string(),
//       //   tags: z.array(z.string()),
//         image: z.string().optional(),
//     }),
//   });
  
  export const collections = {
    posts: postCollection,
    // blogContent: blogContentCollection,
  }