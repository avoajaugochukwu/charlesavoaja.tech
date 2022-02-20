import React from "react";
import { MDXRemote } from "next-mdx-remote";

const index = ({ post }) => {
  let mdxSource,
    meta = null;
  if (post) {
    mdxSource = post.mdxSource;
    meta = post.meta;
  }

  return (
    <>
      {mdxSource && meta ? (
        <article className="page sans">
          <header>
            <h1 className="page-title">{meta.title}</h1>
          </header>
          <div className="page-body">
            {mdxSource && <MDXRemote {...mdxSource} />}
          </div>
        </article>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-[#7510f7] text-4xl font-bold">Loading</h1>
        </div>
      )}
    </>
  );
};

export default index;
