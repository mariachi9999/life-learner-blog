"use client";

import getPosts from "@/app/queries/getPosts";
import React from "react";
import { PortableText } from "@portabletext/react";
import urlFor from "../queries/returnImage";
import Link from "next/link";
import Image from "next/image";

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
    image: ({
      value,
    }: {
      value: {
        _type: string;
        _key: string;
        asset: { _ref: string; _type: string };
      };
    }) => {
      // console.log(value);
      if (!value?.asset?._ref) {
        return null;
      }
      const src = urlFor(value)
        .width(320)
        .height(240)
        .fit("max")
        .auto("format")
        .url();
      return (
        <Image
          alt={value?.asset?._ref || " "}
          loading="lazy"
          src={src}
          width={500}
          height={500}
          unoptimized={true}
        />
      );
    },
  },
};

async function PostsPage({ params }: { params: { id: string } }) {
  const posts = await getPosts();

  return (
    <div className="h-auto">
      <h1>
        Estos son todos los posts que tengo publicados en <b>sanity</b>
      </h1>
      <div>
        {posts.map((post: any) => (
          <div key={post.slug.current}>
            <Link href={`/post/${post._id}`}>
              <h2>{post.title}</h2>
            </Link>
            <PortableText value={post.body} components={ptComponents} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
