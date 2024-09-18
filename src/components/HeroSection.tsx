"use client";

import { Playfair_Display } from 'next/font/google';

export default function HeroSection() {
  return (
    <div className=" relative min-h-[500px] flex items-center justify-center clip-bottom bg-[#f2f7f2]" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-black">
          <div className="space-y-4">
            <h2 className="text-2xl " style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
              Sage Coordination offers Support Coordination, Navigation, and Psychosocial Recovery Coaching services. We cater to NDIS Participants of all ages and specialise in:
            </h2>
            <ul className="list-disc pl-5 max-w-[500px] flex flex-col gap-1">
              <li>Psychosocial disabilities and mental health conditions</li>
              <li>Neurodevelopmental conditions, including Autism, Intellectual Disabilities, and related conditions</li>
              <li>Support for individuals from CALD (Culturally and Linguistically Diverse) backgrounds</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-xl font-semibold italic  pl-4 text-justify" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
              “We know as humans that even though we’re in charge of our own lives and the best decision-makers of our own lives, challenges can come up that make it hard to stay on track. Sage Coordination is here to support you, helping you navigate your needs and making the coordination process easier and more manageable.”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}