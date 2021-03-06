import React from "react";
import Image from "next/image";
import HeroSVG from "./HeroSVG";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div className="text-center">
      <div className="my-14">
        <h1 className="text-4xl font-bold">
          Front-end Developer, Writer & Mentor
        </h1>
        <p className="mt-4 text-2xl font-light md:mx-40 mx-5">
          I am a front-end developer who creates interactive experiences using
          for businesses. I love writing and documentation. I am currently
          learning mobile development using React Native.
        </p>
      </div>
      {/*  */}
      <Image src="/ca-avatar.svg" width={250} height={250} alt="my avatar" />
      {/*  */}

      <HeroSVG />

      <Portfolio />
      {/*  */}
      <div
        className="text-white w-full bg-gradient-to-r py-20  md:px-72 px-4"
        style={{ backgroundColor: "#7510f7" }}
      >
        <div>
          <h2 className="text-3xl font-bold">
            Hi, I&apos;m Charles. Nice to meet you.
          </h2>
          {/*  */}
          <p className="mt-6 text-xl font-light">
            Since beginning my journey as a front-end developer nearly 4 years
            ago, I&apos;ve done remote work for agencies, and collaborated with
            talented people to create digital products for both business and
            consumer use. I&apos;m quietly confident, naturally curious, and
            perpetually working on improving my chops one app problem at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
