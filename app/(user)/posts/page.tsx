"use client";

import getPosts from "@/app/queries/getPosts";
import React from "react";
import { PortableText } from "@portabletext/react";
import urlFor from "../../queries/returnImage";
import Link from "next/link";
import Image from "next/image";
import BlogPost from "@/app/components/BlogPost/BlogPost";
import { PostInterface } from "@/app/types/PostInterface";

async function PostsPage({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className={""}>
      {posts.map((post: any) => (
        <div key={post.slug.current}>
          <Link href={`/post/${post._id}`}>
            <BlogPost post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
