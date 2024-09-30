import React from "react";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import { Button } from "./Button";

export const TwoColumnLayout = () => {
  return (
    <section>
      <div className="xl:container xl:mx-auto max-w-6xl mx-auto p-6 space-y-6 font-roboto my-8 lg:my-20 flex flex-col lg:gap-8 2xl:gap-0">
        {/* First Div: Content on the left, Image on the right */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex p-4 flex-col gap-4">
            <h3 className="text-h3 font-bold">
              All Powerful Video Tools You Need
            </h3>
            <ul className="mt-2 flex flex-col gap-6 text-medium">
              <li>
                Quickly trim, <span className="font-bold">merge, reverse, and speed up or slow down</span> your
                video clips.
              </li>
              <li>
                <span className="font-bold">Keep audiences engaged</span> by adding text, subtitles, music,
                voiceover, etc.
              </li>
              <li>
                <span className="font-bold">Animate the elements</span> in the project and make your video flow.
              </li>
            </ul>
            <div className="py-4 text-center lg:text-left">
              <Button link={"#"} x={5} text={"Create now"} />
            </div>
          </div>
          <div className="flex lg:basis-8/12">
            <img src={feature1} alt="Description 1" className="w-full h-auto" />
          </div>
        </div>

        {/* Second Div: Image on the left, Content on the right */}
        <div className="flex flex-col-reverse lg:flex-row items-center ">
          <div className="flex lg:basis-8/12">
            <img src={feature2} alt="Description 2" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-4 p-4" >
            <h3 className="text-h3 font-bold">
              Collaborate and Share Seamlessly
            </h3>
            <ul className="mt-2 flex flex-col gap-6 text-medium">
              <li>
                <span className="font-bold">Collaborate</span> with teammates to work efficiently and build
                branding assets.
              </li>
              <li>
                <span className="font-bold">Cloud storage</span> gives smooth access to your files and designs.
              </li>
              <li>
                Export videos up to <span className="font-bold">4K resolution</span> and directly share to social
                platforms.
              </li>
            </ul>
            <div className="py-4 text-center lg:text-left">
              <Button link={"#"} x={5} text={"Create now"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
