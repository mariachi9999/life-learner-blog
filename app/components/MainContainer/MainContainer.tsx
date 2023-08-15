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
      <div className={styles.blogsContainer}>
        {posts.map((post: any) => (
          <div key={post.slug.current} className={styles.postContainer}>
            <Link href={`/post/${post._id}`}>
              <BlogPost post={post} />
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.aside}></div>
    </div>
  );
}

export default MainContainer;
