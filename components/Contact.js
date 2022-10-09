import React from "react";
import Image from "next/image";

export function Contact() {
  return (
    <div>
      <div className="contact-background h-full w-full p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col my-20">
            <h1 className="text-2xl font-normal uppercase text-center md:text-left md:w-1/2 my-5">
              About Our collage
            </h1>
            <h1 className="text-4xl font-bold uppercase text-center my-5">
              Margo dawson
            </h1>
            <p className="font-serif font-medium text-black tracking-wide leading-6 text-center capitalize px-10">
              There are two types of people who will tell you that you cannot
              make diffrence in this world: who are afraid to try and those who
              are afraid you will scuessed.
            </p>
          </div>

          <div>
            <Image
              src="/image/bgImage8.avif"
              width={450}
              height={500}
              alt="Image"
              className=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20 bg-black text-white">
        <div>
          <h1 className="text-2xl font-normal uppercase text-center md:text-left my-5">
            Contact Us
          </h1>
          <h1 className="text-4xl font-bold uppercase text-center md:text-left my-5 md:w-1/2">
            subscribe to school newsletter
          </h1>
          <p className="font-serif font-medium tracking-wide leading-10 text-center md:text-left capitalize md:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col">
          <input
            placeholder="Enter Your Email"
            type="text"
            className="w-full border-white border-2 rounded-lg p-3 mb-3 bg-black placeholder:text-white"
          />

          <input
            placeholder="Enter your phone(e.g +251934781038)"
            type="email"
            className="w-full border-white border-2 rounded-lg p-3 mb-3  bg-black placeholder:text-white"
          />

          <input
            placeholder="Enter your address"
            type="email"
            className="w-full border-white border-2 rounded-lg p-3 mb-3 bg-black placeholder:text-white"
          />

          <button className="bg-yellow-400 border rounded-lg text-black py-2 px-5 w-32">
            Submit
          </button>
        </div>
      </div>
      <div className="bg-slate-600 p-20">
        <p className="font-serif text-white font-medium tracking-wide leading-6 text-center capitalize max-w-2xl mx-auto">
          sample text click to select the text box click again or double click
          to start editing the text.
        </p>
      </div>
    </div>
  );
}
