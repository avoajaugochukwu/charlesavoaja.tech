import React from "react";
import Head from "next/head";
import GeneralLayout from "../../components/GeneralLayout";

import { getAllPosts } from "../api/posts";
import BlogScreen from "../../screens/Blog";

function Blog({ posts }) {
  return <BlogScreen posts={posts} />;
}

Blog.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <title>
          charlesavoaja | Front end developer, writer and mentor | blog
        </title>
        <meta
          name="description"
          content="charlesavoaja | Front end developer, writer and mentor | blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GeneralLayout>{page}</GeneralLayout>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return {
    props: { posts },
  };
}
