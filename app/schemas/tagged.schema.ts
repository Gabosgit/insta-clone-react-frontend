import { z } from "zod";


// First, we declare a zod schema
const taggedSchema = z.object({
  id: z.number(),
  post_id: z.number(),
  tagged_user_id: z.number(),
  tagger_user_id: z.number(),
  // Add the new fields from the posts table
  img_url: z.string().url(),
  caption: z.string().nullable(),
});


const taggedPostsSchema = z.array(taggedSchema);

// Then, we infer the TypeScript type from the Zod schema.
type Tagged = z.infer<typeof taggedSchema>;

export { taggedSchema, taggedPostsSchema };
export type { Tagged };