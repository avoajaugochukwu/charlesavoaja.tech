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
          Software Engineer, Writer & Mentor
        </h1>
        <p className="mt-4 text-2xl font-light md:mx-40 mx-5">
          React, Angular, NodeJS, Java, Kubernetes, Docker, Ansible, and Terraform 
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
            I am a skilled frontend and backend developer with React, Angular, NodeJS, Java, Kubernetes, Docker, Ansible, and Terraform skills. With a firm grasp of user experience and a business-oriented mindset, I excel in solving complex problems using technology. My proficiency enables me to build robust systems while my knowledge of containerization and infrastructure orchestration streamlines deployment and management. I bridge the gap between technology and business objectives, combining a passion for innovation with a strategic mindset.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
