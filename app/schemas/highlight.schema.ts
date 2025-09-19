import { z } from "zod";

// First, we declare a zod schema
const highlightSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  title: z.string().min(1).max(50),
  cover_image_url: z.string().url().optional(),
  created_at: z.string(), // SQLite returns DATETIME as a string by default
  updated_at: z.string(),
});


  

const highlightsSchema = z.array(highlightSchema);

// Then, we infer the TypeScript type from the Zod schema.
type Highlight = z.infer<typeof highlightSchema>;

export { highlightSchema, highlightsSchema };
export type { Highlight };