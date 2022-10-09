import React from "react";
import Image from "next/image";
export function Aim() {
  return (
    <div>
      <div className="p-36 bg-black text-white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 mb-20">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold uppercase text-left mb-5">
              strategy
            </h1>
            <p className="capitalize font-serif tracking-wide leading-7 text-left font-light">
              strategic planning is an Organization process for defining for
              strategy so that they can accomplish specific goals and objectives
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold uppercase text-left mb-5">
              Concept
            </h1>
            <p className="capitalize font-serif tracking-wide leading-7 text-left font-light">
              A business concept is a statement that describes that reach and
              reason of existance of a given business idea in other words, it
              sumsup
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold uppercase text-left mb-5">
              Marketing
            </h1>
            <p className="capitalize font-serif tracking-wide leading-7 text-left font-light">
              we can help you to boost engagement with your visitors by ensuring
              that people have access to the information that they
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold uppercase text-left mb-5">
              Management
            </h1>
            <p className="capitalize font-serif tracking-wide leading-7 text-left font-light">
              in order to be effective, a managers style and outlookmust fit
              into the business Organization culture. Their must adhere to
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold uppercase text-left mb-5">
              business
            </h1>
            <p className="capitalize font-serif tracking-wide leading-7 text-left font-light">
              Aso a business owner should be very careful while creating a
              business plan that is properly defines its objectives and
              effectively helps to acheive those sumsup
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold uppercase text-left mb-5">
              design
            </h1>
            <p>
              we offer offedable custom website design done by professionals.
              one that actually generates sales, drivers interest in your
              products.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20">
        <div>
          <Image
            src="/image/bgImage3.avif"
            width={400}
            height={400}
            className="absolute w-full"
          />
          <h1 className="text-4xl font-bold uppercase text-left md:w-1/2 my-5">
            making your idea come alive.
          </h1>
          <p className="font-serif font-medium text-slate-900 tracking-wide leading-6 text-left capitalize md:w-3/4">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content ...
          </p>
        </div>
        <div className="relative">
          <Image
            src="/image/bgImage4.avif"
            width={300}
            height={200}
            className="z-10"
          />
          <div className="hidden lg:block absolute top-16 left-24 w-[26rem] h-72 bg-yellow-400"></div>
        </div>
      </div>
    </div>
  );
}
