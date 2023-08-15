import React from "react";
import urlFor from "../../queries/returnImage";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PostInterface } from "../../types/PostInterface";
import styles from "./blogPost.module.css";

function truncateString(input: string, maxLength: number): string {
  if (input.length <= maxLength) {
    return input;
  } else {
    return input.slice(0, maxLength);
  }
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
          width={250}
          height={250}
          unoptimized={true}
          className=""
        />
      );
    },
  },
};

function BlogPost({ post }: { post: PostInterface }) {
  return (
    <div className={styles.blogPostContainer}>
      <div className={styles.lengueta}>
        <div>
          <span>{post.publishedAt}</span>
        </div>
        <div>
          {post.categories.map((category: any) => (
            <span key={category._id}>{category.title}</span>
          ))}
        </div>
      </div>
      <div className={styles.title}>
        <h3>{post.title}</h3>
      </div>
      <div className="">
        <PortableText value={post.mainImage} components={ptComponents} />
      </div>
      <p className={styles.summary}>{truncateString(post.summary, 100)}</p>
    </div>
  );
}

export default BlogPost;
