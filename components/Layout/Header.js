import React from "react";
import Link from "next/link";
import Head from "next/head";

function Header() {
  return (
    <>
      <Head>
        <title>
          charlesavoaja | Software developer, writer, and mentor | blog
        </title>
        <meta
          name="description"
          content="charlesavoaja | Front end developer, writer and mentor | blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="mt-3">
            <Link href="/">
              <a className="font-bold text-xl text-[#7510f7] hover:text-[#a462fa]">
                charles avoaja
              </a>
            </Link>
          </div>
          {/* ------ */}
          <div className="flex mt-3" id="navbar-collapse">
            <a
              href="https://blog.charlesavoaja.tech/"
              className=" p-2 lg:px-4 md:mx-2 text-[#7510f7] hover:bg-gray-200">
              Blog
            </a>
            

            <a
              href="https://github.com/avoajaugochukwu"
              className=" p-2 lg:px-4 md:mx-2 text-[#7510f7] hover:bg-gray-200"
            >
              Github
            </a>

            {/* <Link href="/content">
              <a className="p-2 lg:px-4 md:mx-2 text-[#7510f7] hover:bg-gray-200">
                Content
              </a>
            </Link> */}

            <a
              href="https://read.cv/ugo"
              className="p-2 lg:px-4 md:mx-2 text-[#7510f7] hover:bg-gray-200"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
