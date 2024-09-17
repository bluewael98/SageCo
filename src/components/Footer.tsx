"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-[#f6f7e2] py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start text-sm md:text-base" style={{ fontFamily: 'Minerva Modern Bold, sans-serif' }}>
        {/* Left Side: Hours and Info */}
        <div className="space-y-4 text-left">
          <h3 className="text-[#d7df73] uppercase md:text-2xl" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>Hours</h3>
          <p>Monday – Friday</p>
          <p>9am - 5pm</p>
          <p>ABN: 29668527483</p>
          <p>Provider Number: 4050149547</p>
        </div>

        {/* Right Side: Contact Info */}
        <div className="space-y-4 text-left md:text-right ">
          <h3 className="text-[#d7df73]  uppercase md:text-2xl" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>Contact</h3>
          <p>PO Box 11, Chester Hill</p>
          <p>NSW 2142</p>
          <p>sagecoordination@gmail.com</p>
          <p>0409 611 780</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-sm">
        <p>Copyright © 2024 Sage Coordination</p>
      </div>
    </div>
  );
};

export default Footer;
