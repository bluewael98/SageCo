"use client";

import { Playfair_Display } from 'next/font/google';

export default function HeroSection() {
  return (
    <div className=" relative min-h-[500px] flex items-center justify-center clip-bottom" style={{ fontFamily: 'Minerva Modern Bold, sans-serif' }}>
      <img
        src="bg1.jpg"
        className="absolute inset-0 object-cover w-full h-full opacity-100"
        alt="Background"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
              Sage Coordination offers Support Coordination, Navigation, and Psychosocial Recovery Coaching services. We cater to NDIS Participants of all ages and specialise in:
            </h2>
            <ul className="list-disc pl-5">
              <li>Psychosocial disabilities and mental health conditions</li>
              <li>Neurodevelopmental conditions, including Autism, Intellectual Disabilities, and related conditions</li>
              <li>Support for individuals from CALD (Culturally and Linguistically Diverse) backgrounds</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <blockquote className="text-xl font-semibold italic border-l-4 border-black pl-4" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
              “YOU Are the BEST coordinator of your own life.” <br /> We are here to walk alongside you while you master it.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}