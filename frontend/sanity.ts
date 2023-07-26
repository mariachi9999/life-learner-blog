// client.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ukngm9hb",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-07-25", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
