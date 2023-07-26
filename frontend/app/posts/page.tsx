"use client";

import getPosts from "@/app/queries/getPosts";
import React from "react";
import { PortableText } from "@portabletext/react";
import urlFor from "../queries/returnImage";

// Create interface Person:
interface Post {
  name: string;
  age: number;
  hairColor: string;
  weight: number;
  height: number;
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
};

async function PostsPage({ params }: { params: { id: string } }) {
  const posts = await getPosts();

  return (
    <div>
      <h1>
        Estos son todos los posts que tengo publicados en <b>sanity</b>
      </h1>
      <div>
        {posts.map((post: any) => (
          <div key={post.slug.current}>
            <h2>{post.title}</h2>
            <PortableText value={post.body} components={ptComponents} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
