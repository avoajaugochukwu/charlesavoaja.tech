/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const Box = ({ title, technologies, byline, codeLink, liveLink }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      className="w-full sm:w-1/3 bg-[#22024a] h-52 px-5 py-10 text-left hover:border hover:border-[#a561fb]"
    >
      <h3 className="font-extralight text-2xl text-white">{title}</h3>
      <p className=" mt-2 text-[0.65rem] text-white py-2">{technologies}</p>
      <p className="font-extralight pt-2 text-sm text-[#e7d5fe]">{byline}</p>
      {/* ------------------------------------------------------------------------- */}
      <div className="flex mt-4">
        <div>
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="mt-1"
          >
            {" "}
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
          </svg>
        </div>
        <p className=" mt-[0.4rem] ml-1 font-extralight text-sm text-[#e7d5fe] hover:text-white hover:cursor-pointer">
          <a href={codeLink}>Code</a>
        </p>
        {/* -------------------------------------------------------------- */}
        <div className="flex ml-5">
          <div className="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#e7d5fe"
              fillRule="evenodd"
              clipRule="evenodd"
              className="mt-1"
            >
              <path d="M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" />
            </svg>
          </div>

          <p className=" mt-[0.4rem] ml-1 font-extralight text-sm text-[#e7d5fe] hover:text-white hover:cursor-pointer">
            <a href={liveLink}>Live</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Box;
