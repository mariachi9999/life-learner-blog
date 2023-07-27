import { client } from "../../sanity";

export default async function getPost(id: string) {
  const data = await client.fetch(`*[_type == "post" && _id == "${id}"]`);

  return data[0];
}
