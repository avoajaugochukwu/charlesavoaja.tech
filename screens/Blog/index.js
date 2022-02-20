import React from "react";
import ContentItem from "./ContentItem";

const BlogScreen = ({posts}) => {
  
  return (
    <>
      <div className="flex flex-col text-center w-full my-7">
        <h1 className="sm:text-4xl text-2xl font-medium title-font mb-1 text-gray-900">
          Blog posts
        </h1>
      </div>

      <div className="flex flex-wrap ">
        {/* Check if post is in draft and draft to front-matter of post */}
        {posts.map(
          (post, id) => post.title && <ContentItem key={id} post={post} />
        )}
      </div>
      <hr className="mt-5" />
    </>
  );
};

export default BlogScreen;
