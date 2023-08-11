"use client";

import React from "react";
import styles from "./mainContainer.module.css";
import BlogPost from "../BlogPost/BlogPost";
import getPosts from "@/app/queries/getPosts";
import Link from "next/link";

async function MainContainer() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className={styles.mainContainer}>
      <div className="blog">
        {posts.map((post: any) => (
          <div key={post.slug.current}>
            <Link href={`/post/${post._id}`}>
              <BlogPost post={post} />
            </Link>
          </div>
        ))}
      </div>
      <div className="aside"></div>
    </div>
  );
}

export default MainContainer;
