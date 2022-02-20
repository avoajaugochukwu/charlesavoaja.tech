import React from "react";
import Image from "next/image";
// import ClockSVG from "../../public/img/site/IjHBMPs-gray-clock-vector.svg";

function ContentItem(props) {
  const { post } = props;
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
            {/* {post.category} */}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {post.title}
          </h1>
          <p className="leading-relaxed mb-3 font-extralight">
              {post.excerpt}
            </p>
          <div className="md:flex justify-between flex-wrap ">
            <a
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              href={`blog/${post.slug}`}
            >
              Continue Reading
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div className="flex mt-2 md:mt-0">
              <div className="w-4 h-4 md:ml-1 text-gray-400 inline-flex items-center leading-none text-sm">
                {/* <Image src={ClockSVG} alt="clock" /> */}
              </div>
              {/* <div className="-mt-1 ml-3">{blog.read_time}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentItem;
