import React from "react";
import Image from "next/image";

const Facts = () => {
  return (
    <div className="relative bg-[#b4c186] py-[200px] clip-top" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between ">
        <img
          src="bg2.jpg"
          className="absolute inset-0 object-cover w-full h-full opacity-5"
          alt="Background"
        />
        {/* Values Section */}
        <div className="w-full md:w-1/2 text-center text-white">
          <h2 className="text-[70px] mb-4" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>VALUES</h2>
          <ul className="space-y-6 text-[30px]">
            <li>TRUST</li>
            <li>RECIPROCITY</li>
            <li>UNDERSTANDING</li>
            <li>STRENGTH</li>
            <li>TRANSPARENCY</li>
          </ul>
        </div>

        {/* Vision Section */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 bg-white shadow-lg rounded-[100px] p-8 text-center max-w-[500px] py-10 px-10">
          <h2 className="text-4xl font-semibold text-[#b4c186]  mb-4 text-[70px]" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>VISION</h2>
          <p className="text-[24px] text-gray-600 leading-9">
            Our aim is to empower others and focus on their strengths. We want
            to bridge gaps, facilitate access to support, and walk alongside
            others while they work on achieving their goals. We want to
            encourage their independence and their right to be decision-makers
            in their lives. We want to promote their growth and increased
            wellbeing regardless of their lived experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
