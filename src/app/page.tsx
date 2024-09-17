import Facts from "@/components/Facts";
import HeroSection from "@/components/HeroSection";
import MeetTheTeam from "@/components/MeetTheTeam";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sage Coordination",
  description: "YOU Are the BEST coordinator of your own life",
};

const Home = () => {
  return (
    <section className="relative w-screen bg-secondary font-Oswald ">
      <Head>
        <title>SageCoordination - Home</title>
        <meta
          name="description"
        />
      </Head>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="bg2.jpg"
          className="object-fit h-full w-full opacity-10 "
          alt="Background"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Facts Section */}
        <Facts />
        <MeetTheTeam />
      </div>
    </section>
  );
};

export default Home;
