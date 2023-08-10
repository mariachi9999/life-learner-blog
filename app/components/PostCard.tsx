import React from "react";
import urlFor from "../queries/returnImage";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

interface Post {
  title: string;
  mainImage: {
    _type: string;
    asset: { _ref: string; _type: string };
  };
  summary: string;
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

function PostCard({ post }: { post: Post }) {
  return (
    <div className="">
      <h2 className="">{post.title}</h2>
      <div className="">
        <PortableText value={post.mainImage} components={ptComponents} />
      </div>
      <p className="">{post.summary}</p>
    </div>
  );
}

export default PostCard;
