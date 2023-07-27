"use client";

import getPost from "@/app/queries/getPost";
import React from "react";
import { PortableText } from "@portabletext/react";
import urlFor from "../../queries/returnImage";
// import { BlockImage } from "@portabletext/react";

const ptComponents = {
  types: {
    image: ({
      value,
    }: {
      value: { _type: string; _key: string; asset: any };
    }) => {
      console.log(value);
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

type Props = { params: { id: string } };

async function PostPage({ params: { id } }: Props) {
  const post = await getPost(id);

  return (
    <div>
      <div key={post.slug.current}>
        <h2>{post.title}</h2>
        <PortableText value={post.body} components={ptComponents} />
      </div>
    </div>
  );
}

export default PostPage;
