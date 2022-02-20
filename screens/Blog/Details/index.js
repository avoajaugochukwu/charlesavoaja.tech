import React from "react";
import { MDXRemote } from "next-mdx-remote";

const index = ({ post }) => {
  let mdxSource, meta = null
  if (post) {
    mdxSource = post.mdxSource
    meta = post.meta  
  }
  

  return (
    <article className="page sans">
      <header>
        <h1 className="page-title">{meta.title}</h1>
      </header>
      <div className="page-body">
        {mdxSource && <MDXRemote {...mdxSource} />}
        
      </div>
    </article>
  );
};

export default index;
