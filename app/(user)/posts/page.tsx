"use client";

import getPosts from "@/app/queries/getPosts";
import React from "react";
import { PortableText } from "@portabletext/react";
import urlFor from "../../queries/returnImage";
import Link from "next/link";
import Image from "next/image";
import PostCard from "../../components/PostCard";

// Create interface Post:
interface Post {
  title: string;
  mainImage: {
    _type: string;
    asset: { _ref: string; _type: string };
    summary: string;
  };
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
  console.log(posts);

  return (
    <div className="h-auto w-3/4 p-5 m-0 m-auto flex justify-center gap-2 flex-wrap sm: w-full ">
      {posts.map((post: any) => (
        <div key={post.slug.current}>
          <Link href={`/post/${post._id}`}>
            <PostCard post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
