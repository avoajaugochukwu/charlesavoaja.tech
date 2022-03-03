/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "./Box";

const index = () => {
  return (
    <div className="my-10 mx-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Box
          title="REACT + NEXTJS + REST API"
          byline="E-commerce store for bicycles"
          link="https://www.bycking.com/"
        />

        <Box
          title="REACT + NEXTJS + REST API"
          byline="E-commerce store for bicycles"
          link="https://www.bycking.com/"
        />
        <Box
          title="REACT + NEXTJS + REST API"
          byline="E-commerce store for bicycles"
          link="https://www.bycking.com/"
        />
      </div>
    </div>
  );
};

export default index;
