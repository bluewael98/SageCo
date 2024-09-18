import React from "react";
import Image from "next/image";

const Facts = () => {
  return (
    <div className="relative bg-secondary py-[200px] clip-top" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between ">
        <img
          src="bg2.jpg"
          className="absolute inset-0 object-cover w-full h-full opacity-10"
          alt="Background"
        />
        {/* Values Section */}
        <div className="w-full md:w-1/2 text-center text-white">
          <h2 className="text-4xl font-semibold mb-8" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>VALUES</h2>
          <ul className="space-y-4 text-3xl">
            <li>TRUST</li>
            <li>RECIPROCITY</li>
            <li>UNDERSTANDING</li>
            <li>STRENGTH</li>
            <li>TRANSPARENCY</li>
          </ul>
        </div>

        {/* Vision Section */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 bg-white shadow-lg rounded-[25px] p-8 text-center">
          <h2 className="text-4xl font-semibold text-[#6d7249] mb-6" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>VISION</h2>
          <p className="text-lg text-gray-600">
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
