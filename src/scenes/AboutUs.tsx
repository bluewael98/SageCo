import React from "react";

const TwoSectionLayout = () => {
  return (
    <section className="w-screen bg-[#b8bc7f] " style={{ fontFamily: 'Minerva Modern Bold, sans-serif' }}>
      <div className="w-full bg-[#b8bc7f] relative flex justify-center items-center h-[150px] md:h-[220px] overflow-hidden z-10 mt-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-white  text-2xl md:text-[45px] text-center" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>Support Coordination & Psychosocial Recovery Coaching</h1>

        </div>
      </div>
      {/* Responsive Banner */}
      <img src="/ob.JPG" className="w-screen" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-black bg-[#b8bc7f] " >



        {/* Content Sections */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Left Section - Support Coordination */}
          <div className="w-full md:w-1/2 text-justify" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
            <h2 className="text-3xl  mb-8 text-center" >SUPPORT COORDINATION</h2>
            <p className=" mb-4">
              Support coordination helps you make the most of the supports outlined
              in your NDIS plan. It is a capacity-building service designed to:
            </p>
            <ul className="flex flex-col gap-4">
              <li>- Help you understand and use your NDIS plan to reach your goals</li>
              <li>- Connect you with NDIS providers, community resources, mainstream services, and other government services</li>
              <li>- Develop your confidence and skills to effectively manage and coordinate your supports</li>
            </ul>
            <p className=" mb-4">
              Support coordination is provided by either a support coordinator or a specialist support coordinator.
            </p>
            <p className=" mb-4">
              There are three levels of support coordination available in your plan:
            </p>
            <div className="  space-y-4">
              <p>
                1. Support Connection – This level focuses on helping you connect with informal, community, and funded supports so you can get the most out of your plan and work towards your goals.
              </p>
              <p>
                2. Support Coordination – This level assists you in building the skills needed to understand and use your plan. A support coordinator will help you ensure a balanced mix of supports, enhancing your ability to maintain relationships, manage services, live more independently, and participate in your community.
              </p>
              <p>
                3. Specialist Support Coordination – This advanced level is for individuals with more complex needs who require specialist help. A specialist support coordinator will support you in managing challenges within your support environment and ensure consistent service delivery.
              </p>
            </div>
          </div>

          {/* Right Section - Psychosocial Recovery Coaching */}
          <div className="w-full md:w-1/2 text-justify" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
            <h2 className="text-3xl text-center mb-8">PSYCHOSOCIAL RECOVERY COACHING</h2>
            <p className="mb-4">
              A Recovery Coach is an NDIS-funded professional with expertise in mental health. A recovery coach will:
            </p>
            <div className=" flex flex-col gap-4 mb-4">
              <p>- Spend time with you and those important to you to get to know you and understand your needs</p>
              <p>- Assist you in discovering various services and supports and explain how they can benefit you</p>
              <p>- Help you access support from mental health services</p>
              <p>- Provide guidance on understanding the NDIS and assist you with navigating it</p>
            </div>
            <p className=" mb-4">
              You can choose a recovery coach with lived experience. This type of recovery coach has personal experience with mental health issues and recovery, which they use to enhance their support and guidance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TwoSectionLayout;
