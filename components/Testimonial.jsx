import React from "react";
import { InfiniteMovingCards } from "./ui/infinit-moving-cards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonial">
      <h1 className="heading">
        People I have worked with{" "}
        <span className="text-purple">and devOps i learnt from</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
