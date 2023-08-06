import { client } from "../../sanity";

export default async function getPosts() {
  const data = await client.fetch('*[_type == "post"]');

  return data;
}
