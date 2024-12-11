import React from "react";
import CountUp from "react-countup";

const StatsCard = ({ heading, paragraph, endValue = 0, sign }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-[0px_0px_9px_-3px_#a8a5a5] bg-white hover:bg-primary transition duration-300 ease-in-out ">
      <div className="p-14  text-left">
        <h2 className="text-h3 font-bold text-black mb-2 font-roboto">
          <CountUp 
            enableScrollSpy={true} 
            scrollSpyOnce={true} 
            start={0} 
            end={endValue || 50}
            duration={5} 
            separator="," 
          />
          {sign && <span className="ml-1">{sign}</span>}
        </h2>
        <p className="text-muted text-small font-poppins">{heading}</p>
        <div className="border-t-2 border-dotted border-gray-400 my-6"></div>
        <p className="text-small font-poppins">{paragraph}</p>
        
      </div>
    </div>
  );
};


export default StatsCard;
