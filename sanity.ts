// client.ts
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-07-25", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
