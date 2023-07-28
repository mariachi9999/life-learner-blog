"use client";

import getPost from "@/app/queries/getPost";
import React from "react";
import { PortableText } from "@portabletext/react";
import urlFor from "../../queries/returnImage";
import Image from "next/image";
// import { BlockImage } from "@portabletext/react";

const ptComponents = {
  types: {
    image: ({
      value,
    }: {
      value: { _type: string; _key: string; asset: any };
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

type Props = { params: { id: string } };

async function PostPage({ params: { id } }: Props) {
  const post = await getPost(id);
  console.log(post);

  return (
    <div>
      <div key={post.slug.current}>
        <h2>{post.title}</h2>
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.slug.current}
          width={200}
          height={200}
        />
        <PortableText value={post.body} components={ptComponents} />
      </div>
    </div>
  );
}

export default PostPage;
