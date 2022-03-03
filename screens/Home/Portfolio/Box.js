/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const Box = ({ title, byline, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      className="w-full sm:w-1/3 bg-[#22024a] h-52 px-5 py-10 text-left hover:border hover:border-[#a561fb]"
    >
      <h3 className="font-extralight text-2xl text-white">Bycking.com</h3>
      <p className="  text-[0.65rem] text-white py-2">{title}</p>
      <p className="font-extralight pt-2 text-sm text-[#e7d5fe]">{byline}</p>
      <div className="flex mt-4">
        <div className="mt-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 30 40"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#e7d5fe"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" />
          </svg>
        </div>

        <p className="ml-2 font-extralight text-sm text-[#e7d5fe] hover:text-white hover:cursor-pointer">
          <a href={link}>Live</a>
        </p>
      </div>
    </motion.div>
  );
};

export default Box;
