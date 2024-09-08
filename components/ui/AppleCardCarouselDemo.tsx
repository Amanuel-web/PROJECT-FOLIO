"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import design from "/public/design.png";
import ReactCode from "/public/ReactCode.png";
import tsCode from "/public/tsCode.jpg";
import build from "/public/build.png";
import selenium from "/public/selenium.png";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="mt-20 max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200">
        My Experiance
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "React Developer",
    title: "Building Apps in React",
    src: ReactCode,
  },
  {
    category: "Typescript",
    title: "Building Apps suing TypeScript",
    src: tsCode,
  },
  {
    category: "Web Design",
    title: "Designing Web",
    src: design,
  },

  {
    category: "Front End",
    title: "Front end development",
    src: build,
  },
  {
    category: "Testing",
    title: "Selenium and Cucumber testing",
    src: selenium,
  },
];
