import React from "react";
import checkicon from "../../assets/checkicon.svg";
import { Button } from "../common/Button";
import test from "../../assets/test.jpg";

const SplitContent = () => {
  return (
    <section className="mt-10 mb-20 md:mt-20 md:mb-12 lg:mb-16 xl:mb-0">
      <div className="flex flex-col-reverse md:flex-row xl:container xl:mx-auto p-6 gap-10 md:gap-20">
        <div className="flex basis-1/2 xl:basis-7/12 flex-col gap-6 md:gap-4 lg:gap-8 xl:gap-10">
          <h2 className="text-h2 font-roboto">
            Memories Made Special, Welcome to Wishing
          </h2>
          <p className="text-small text-muted ">
            We create personalized videos that turn your heartfelt wishes into
            unforgettable keepsakes. By combining creativity with simplicity, we
            make it easy for you to celebrate life’s special moments in a unique
            and meaningful way.
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3 items-start">
              <img src={checkicon} alt="check-icon" className="pt-1" />
              <p className="text-medium text-muted">
              <span className="font-bold">Memory Makers:</span> Crafting Personalized Videos for Every Celebration.

              </p>
            </li>
            <li className="flex gap-3 items-start">
              <img src={checkicon} alt="check-icon" className="pt-1" />
              <p className="text-medium text-muted">
              <span className="font-bold">Heartfelt Storytellers: </span>Turning Your Wishes into Unforgettable Memories.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <img src={checkicon} alt="check-icon" className="pt-1" />
              <p className="text-medium text-muted">
              <span className="font-bold">Joyful Celebrators: </span>Helping You Share Love and Happiness Effortlessly.

              </p>
            </li>
          </ul>
          <div className=" text-center md:text-left mt-3">
            <Button link="#" x={10} text="Find more about us" />
          </div>
        </div>
        <div className="basis-1/2 xl:basis-5/12 ">
          <img
            src={test}
            alt="ourstory"
            className="max-h-full lg:max-h-[500px] xl:max-h-[85%] 2xl:max-h-[70%]"
          />
        </div>
      </div>
    </section>
  );
};

export default SplitContent;
