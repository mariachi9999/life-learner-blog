import { client } from "../../sanity";

// Function to fetch referenced data
async function fetchReferencedData(ref: any) {
  const query = `*[_id == $ref][0]`;
  return client.fetch(query, { ref });
}

export default async function getPost(id: string) {
  const data = await client.fetch(`*[_type == "post" && _id == "${id}"]`);

  // Fetch referenced data for categories
  const resolvedCategories = await Promise.all(
    data[0].categories.map((category: any) =>
      fetchReferencedData(category._ref)
    )
  );

  // Replace the category references with resolved data
  const postDataWithResolvedCategories = {
    ...data[0],
    categories: resolvedCategories,
  };

  return postDataWithResolvedCategories;
}
