import React from "react";
import checkicon from "../assets/checkicon.svg";
import { Button } from "./Button";
import ourstory from "../assets/ourstory.png"

export const SplitContent = () => {
  return (
    <section className="mt-10 mb-20 md:mt-20 md:mb-12 lg:mb-16 xl:mb-0">
      <div className="flex flex-col-reverse md:flex-row xl:container xl:mx-auto p-6 gap-10 md:gap-20">
        <div className="flex basis-1/2 xl:basis-7/12 flex-col gap-6 md:gap-4 lg:gap-8 xl:gap-10">
          <h2 className="text-h2 font-roboto">
            Success in Every Click Welcome to Wishing{" "}
          </h2>
          <p className="text-small text-muted ">
            Since 2012, we've been pioneering innovative solutions, crafting
            unique narratives, and consistently delivering exceptional results.
            Join us in shaping the future of digital excellence!
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3 items-start">
              <img src={checkicon} alt="check-icon" className="pt-1" />
              <p className="text-medium text-muted">
                As Digital Innovation Leaders shaping digital future.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <img src={checkicon} alt="check-icon" className="pt-1" />
              <p className="text-medium text-muted">
                Tailored Strategy Experts ensuring a roadmap to success.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <img src={checkicon} alt="check-icon" className="pt-1" />
              <p className="text-medium text-muted">
                Proven Results Achievers: dedicated to achieving your success.
              </p>
            </li>
          </ul>
          <div className=" text-center md:text-left mt-3">
            <Button link="#" x={10} text="Find more about us" />
          </div>
        </div>
        <div className="basis-1/2 xl:basis-5/12 ">
            <img src={ourstory} alt="ourstory" className="max-h-full lg:max-h-[500px] xl:max-h-[85%] 2xl:max-h-[70%]"/>
        </div>
      </div>
    </section>
  );
};
