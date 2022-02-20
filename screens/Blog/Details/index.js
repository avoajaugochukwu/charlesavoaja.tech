import React from "react";
import { MDXRemote } from "next-mdx-remote";

const index = ({ post }) => {
  const { source = {}, meta = {} } = post;

  return (
    <article className="page sans">
      <header>
        <h1 className="page-title">{meta.title}</h1>
      </header>
      <div className="page-body">
        {source && <MDXRemote {...source} />}
        
      </div>
    </article>
  );
};

export default index;
