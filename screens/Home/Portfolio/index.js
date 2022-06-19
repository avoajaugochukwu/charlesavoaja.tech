/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "./Box";

const index = () => {
  return (
    <div className="my-10 mx-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Box
          title="Bycking.com"
          technologies="REACT + NEXTJS + REDUX + REST API + TAILWIND CSS "
          byline="E-commerce store for bicycles"
          liveLink="https://www.bycking.com/"
          codeLink="https://github.com/avoajaugochukwu/bycking.com"
        />
        <Box
          title="Nnecta"
          technologies="REACT + NEXTJS + TAILWIND CSS + STORYBOOK"
          byline="CBD Landing Page"
          liveLink="https://nnecta.netlify.app/"
          codeLink="https://github.com/avoajaugochukwu/nectara"
        />
        <Box
          title="Lasles"
          technologies="REACT + CUSTOM HOOKS + REDUX"
          byline="VPN Landing Page"
          liveLink="https://www.bycking.com/"
          codeLink="https://github.com/avoajaugochukwu/earnipay-t"
        />
      </div>
    </div>
  );
};

export default index;
