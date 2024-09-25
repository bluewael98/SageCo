"use client";

import { Playfair_Display } from 'next/font/google';

export default function HeroSection() {
  return (
    <div className=" relative min-h-[500px] flex items-center justify-center clip-bottom  bg-primary" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
      <img src='/bg.jpg' className='w-screen absolute inset-0 z-0 opacity-80 blur-sm' />

      <div className="relative z-10 max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-[150px] pt-[200px]">
        <h1 className='text-[45px] pb-10 text-white text-center'>Nurturing Potential Through Support and Guidance.</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8.1REM] text-black items-center">

          <div className="flex items-center justify-center">
            <div className=" bg-[#b4c186] rounded-[100px] p-8 text-center  py-10 px-10 text-white">
              <div className="text-xl  italic  pl-4 text " style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
                <p className='md:text-[30px] text-center mb-[20px] leading-10'>
                  As humans, we flourish when we have control over our lives and can fulfill our needs. However, life can present unexpected challenges that may affect our ability to navigate our circumstances and meet those needs.
                </p>
                <p className='md:text-[19px] text-center  '>Sage Coordination is here to support you, helping you navigate your needs and making the coordination process easier and more manageable.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 py-10 max-w-[500px]">
            <h2 className="md:text-[19px] text-justify text-white" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
              Sage Coordination provides Support Coordination, Navigation, and Psychosocial Recovery Coaching services tailored for NDIS participants of all ages. Our areas of expertise include psychosocial disabilities and mental health conditions, as well as neurodevelopmental conditions such as Autism and Intellectual Disabilities. We also specialise in providing support for individuals from Culturally and Linguistically Diverse (CALD) backgrounds.


            </h2>
            {/* <ul className="list-disc pl-5  flex flex-col gap-3 text-[19px] text-white">
              <li>Psychosocial disabilities and mental health conditions</li>
              <li>Neurodevelopmental conditions, including Autism, Intellectual Disabilities, and related conditions</li>
              <li>Support for individuals from CALD (Culturally and Linguistically Diverse) backgrounds</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}