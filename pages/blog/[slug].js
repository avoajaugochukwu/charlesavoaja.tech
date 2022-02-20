import React from "react";
import { serialize } from "next-mdx-remote/serialize";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

import { getPostFromSlug, getSlugs } from "../api/posts";
import Details from '../../screens/Blog/Details';

import GeneralLayout from "../../components/GeneralLayout";
import "highlight.js/styles/atom-one-dark.css";


function SinglePost({ post }) {
  return (
    <>
      <GeneralLayout>
        
        <Details post={post} />
        
      </GeneralLayout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, meta } = await getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { mdxSource, meta } } };
}

export default SinglePost;
