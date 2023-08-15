import React from "react";
import urlFor from "../../queries/returnImage";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PostInterface } from "../../types/PostInterface";
import styles from "./blogPost.module.css";

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
    <div className="">
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
      <h3 className="">{post.title}</h3>
      <div className="">
        <PortableText value={post.mainImage} components={ptComponents} />
      </div>
      <p className="">{post.summary}</p>
    </div>
  );
}

export default BlogPost;
