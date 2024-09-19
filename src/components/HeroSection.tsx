"use client";

import { Playfair_Display } from 'next/font/google';

export default function HeroSection() {
  return (
    <div className=" relative min-h-[500px] flex items-center justify-center clip-bottom bg-[#f2f7f2]" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-[150px] pt-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-black">

          <div className="flex items-center justify-center">
            <div className=" bg-[#b4c186] rounded-[100px] p-8 text-center  py-10 px-10 text-white">
              <div className="text-xl font-semibold italic  pl-4 text " style={{ fontFamily: 'Minerva Modern Italic, sans-serif', textTransform: 'uppercase' }}>
                <p className='md:text-[30px] text-center mb-[20px] leading-10'>
                  We know as humans that even though we’re in charge of our own lives and the best decision-makers of our own lives, challenges can come up that make it hard to stay on track.
                </p>
                <p className='md:text-[15px] text-center  '>Sage Coordination is here to support you, helping you navigate your needs and making the coordination process easier and more manageable.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 py-10">
            <h2 className="text-[19px] text-justify " style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
              Sage Coordination offers Support Coordination, Navigation, and Psychosocial Recovery Coaching services. We cater to NDIS Participants of all ages and specialise in:
            </h2>
            <ul className="list-disc pl-5 max-w-[500px] flex flex-col gap-1 text-[19px]">
              <li>Psychosocial disabilities and mental health conditions</li>
              <li>Neurodevelopmental conditions, including Autism, Intellectual Disabilities, and related conditions</li>
              <li>Support for individuals from CALD (Culturally and Linguistically Diverse) backgrounds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}