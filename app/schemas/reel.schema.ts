import { z } from "zod";

const reelSchema = z.object({
  id: z.number(),
  video_url: z.string().url(),
  thumbnail_url: z.string().url(),
  caption: z.string().optional(),
  views: z.number().int().min(0),
  created_at: z.string(),
});

const reelsSchema = z.array(reelSchema);
type Reel = z.infer<typeof reelSchema>;

export { reelSchema, reelsSchema };
export type { Reel };
  
// Schema for creating a new reel (for frontend validation)
export const createReelInputSchema = z
  .object({
    caption: z.string().min(1, "Caption is required.").max(255).optional(),
    videoUrl: z.preprocess(
      (val) => (val === '' ? undefined : val),
      z.string().url({ message: "A valid video URL is required." })
    ), // For video URL input, now required
  });

export type CreateReelInput = z.infer<typeof createReelInputSchema>;

