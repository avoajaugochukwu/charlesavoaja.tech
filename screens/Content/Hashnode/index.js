import React, { useState } from "react";
import ContentItem from "../ContentItem";



import Image from "next/image";

const Hashnode = ({ hashNodeContent }) => {
  const [showContent, setShowContent] = useState(true);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-10 pb-24 mx-auto">
        <div className="flex justify-between px-4">
          <div className="">
            <Image
              src="/svg/hashnode-svgrepo-com.svg"
              width={120}
              height={40}
              alt="Hashnode Logo"
            />
          </div>

          <div className="mt-4 cursor-pointer" onClick={() => setShowContent(!showContent)}>
            {showContent ? (
              <svg
                className=" w-8 h-8 hover:text-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  fill="currentColor"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            ) : (
              <svg
                className=" w-8 h-8 hover:text-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  fill="currentColor"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            )}
          </div>
        </div>

        {showContent && (
          <>
            <div className="flex flex-wrap ">
              {hashNodeContent.map(
                (blog, id) => blog.title && <ContentItem key={id} blog={blog} />
              )}
            </div>
            <hr className="mt-5" />
          </>
        )}
      </div>
    </section>
  );
};

export default Hashnode;
