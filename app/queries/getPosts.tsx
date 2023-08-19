import { client } from "../../sanity";
import { PostInterface } from "../types/PostInterface";

// Function to fetch referenced data
async function fetchReferencedData(ref: any) {
  const query = `*[_id == $ref][0]`;
  return client.fetch(query, { ref });
}

export default async function getPosts() {
  const postsData = await client.fetch('*[_type == "post"]');

  const postsWithResolvedCategories = await Promise.all(
    postsData.map(async (post: PostInterface) => {
      const resolvedCategories = await Promise.all(
        post.categories.map((category: any) =>
          fetchReferencedData(category._ref)
        )
      );

      return {
        ...post,
        categories: resolvedCategories,
      };
    })
  );

  return postsWithResolvedCategories;
}
