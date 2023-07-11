/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white w-full bg-gradient-to-r  md:px-72 px-4 text-center bg-[#7510f7]">
      <p className="mt-6 pt-4 text-2xl text-gray-200 font-extralight">
        Living, learning, & leveling up <br /> one day at a time.
      </p>

      <div className="flex mx-auto mt-8 w-1/2 place-content-center justify-between md:px-36">
        <Link href="https://twitter.com/avoajacharles" passHref={true}>
          <img
            src="/svg/twitter.svg"
            alt="twitter logo"
            className="w-6 h-6 cursor-pointer"
          />
        </Link>

        <Link href="https://github.com/avoajaugochukwu" passHref={true}>
          <img
            src="/svg/github.svg"
            alt="twitter logo"
            className="w-6 h-6 cursor-pointer"
          />
        </Link>
      </div>

      <div className="mt-10 text-gray-200">
        <p>Hand crafted by me &copy; 2022</p>
      </div>
      {/*  */}
      <div className="flex mt-1 mx-auto place-content-center pb-16">
        <p className="pt-7 mr-5 text-gray-400">Powered by </p>
        <img
            src="/svg/nextjs.svg"
            alt="twitter logo"
            className="w-32  cursor-pointer"
          />
      </div>
    </div>
  );
};

export default Footer;
