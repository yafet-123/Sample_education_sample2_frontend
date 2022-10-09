import React from "react";
import Image from "next/image";
export function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white m-16">
      <h1 className="text-3xl md:text-7xl text-black font-bold uppercase text-center">
        About
      </h1>
      <div className="text-sm md:text-lg flex flex-col uppercase font-serif text-black tracking-wide leading-6 text-left font-normal mb-5">
        <p className="mb-5">
          about operational management inside of workflows to establish a
          framework. talking seamless key perfomace indicators offline to
          maximise the long tail.
        </p>
        <p className="mb-5 font-normal text-base">Email/Facebook/Twitter</p>
        <p className="mb-5 font-normal text-base">Contact:+(234)567-8900</p>
      </div>
      <div className="">
        <Image
          src="/image/bgImage2.avif"
          width={1000}
          height={1000}
          className="absolute w-full"
        />
      </div>
    </div>
  );
}
