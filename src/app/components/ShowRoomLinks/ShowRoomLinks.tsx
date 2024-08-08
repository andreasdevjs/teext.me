"use client";

import CountUp from "react-countup";

export default function HowItWorks() {
  return (
    <div>
      <div className="p-5 bg-[#eff2e8] text-center">
        <CountUp
          startOnMount
          className=" mb-2 text-center font-semibold text-4xl"
          start={0}
          end={11567}
        />
        <h6 className="text-center font-semibold text-base mt-1">
          Links created
        </h6>
        <p className="text-sm font-light leading-tight">
          The good ones are still available 🚀
        </p>
      </div>
    </div>
  );
}
