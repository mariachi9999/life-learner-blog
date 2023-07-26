import { client } from "../../sanity";

export default async function getPost(id: string) {
  const data = await client.fetch(`*[_type == "post" && _id == "${id}"]`);

  console.log(data[0]);

  return data[0];
}
