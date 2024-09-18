import React from "react";

const MeetTheTeam = () => {
  return (
    <div className="relative pb-12 pt-[300px] bg-primary  clip-top" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>

      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl  text-white">MEET THE TEAM</h2>
      </div>

      {/* Image and Text Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">

        {/* Image Section */}
        <div className="w-full md:w-[45%] flex justify-center">
          <img
            src="/person1.jpg"
            alt="Ahlam El Sage"
            className="rounded-[100px] shadow-lg object-top max-w-[400px]"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-[50%] mt-8 md:mt-0 px-4">
          <h3 className="text-3xl font-bold text-black mb-4">Ahlam El Sage</h3>
          <p className="text-xl font-semibold text-gray-800 mb-6">
            NDIS Support Coordinator and Psychosocial Recovery Coach.
          </p>
          <p className="text-lg text-white mb-4 text-justify">
            Ahlam El Sage is the Director of Sage Coordination and provides NDIS Support Coordination and Psychosocial Recovery Coaching services. Ahlam started working in the industry out of a deep passion for creating inclusive environments where everyone can thrive. Ahlam has worked in the Mental health industry with not-for-profit organisations as an NDIS Support Coordinator and Psychosocial Recovery Coach, supporting people with grappling mental health issues as they worked towards progressing in their recovery journey.
          </p>
          <p className="text-lg text-white mb-4 text-justify">
            Ahlam has also volunteered in the early children and youth sector, mentoring youth in high school, and assisting with facilitating programs for families with children requiring early intervention support. Ahlam has a background in Counselling and Social Sciences.
          </p>
          <p className="text-lg text-white mb-4 text-justify">
            Her dedication to the disability sector comes from her experience as a carer and advocate for family members with mental health conditions and neurodevelopmental conditions. She has seen firsthand how these conditions can severely impact a person&aposs ability to pursue their goals and manage everyday tasks that many take for granted.
          </p>
          <p className="text-lg text-white text-justify">
            This experience inspired her to pursue a career focused on assisting others in similar situations, helping them address these challenges and overcome barriers so they can continue to live a life they deserve.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MeetTheTeam;
