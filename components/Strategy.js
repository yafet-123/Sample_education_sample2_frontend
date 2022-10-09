import React from "react";
import Image from "next/image";
export function Strategy() {
  return (
    <div>
      <div className="p-20 bg-slate-300">
        <h1 className="text-2xl font-bold uppercase text-left mb-5">
          business strategy
        </h1>
        <h1 className="text-5xl tracking-wide leading-[3.5rem] font-bold uppercase text-left mb-5 w-full md:w-1/2">
          leverage agile frameworkers to provide a robust synopsis for high
          level overviews
        </h1>
        <p className="font-serif font-medium text-slate-900 tracking-wide leading-10 text-left capitalize md:w-1/2">
          bring to the table win-win survival strategy to ensure proactive
          domination. at the end of the day. going forward, a new normal that
          has evolved from genation x is on the runway heading towards a
          streamlined cloud solution. user generated content in real time will
          have multiple touchpoints for offshoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20">
        <div>
          <Image
            src="/image/bgImage5.avif"
            width={400}
            height={500}
            alt="Image"
            className="absolute w-full"
          />
        </div>
        <div className="">
          <div className="mb-32">
            <h1 className="text-4xl font-bold uppercase text-left lg:w-1/2 my-5 leading-10">
              creative-thinking for business
            </h1>
            <p className="font-serif font-medium text-slate-900 tracking-wide leading-8 text-left capitalize lg:w-2/4">
              we use agile creaive thinking process to go deeper to challenge
              convonetional wisdom, to align yours team, to drive your business
            </p>
          </div>
          <div className="relative">
            <Image
              src="/image/bgImage6.avif"
              width={300}
              height={200}
              alt="Image"
              className="absolute w-full"
            />
            <div className="hidden lg:block absolute -top-16 left-64 w-[26rem] h-72 bg-yellow-400 z-10 p-10 font-serif font-medium text-slate-900 tracking-wide leading-6 text-left capitalize">
              impossible is just a big word thrown around by small men who find
              it easier to live in the world the have been given, than to
              explore the power they have to change it.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
