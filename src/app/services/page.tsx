import AboutUs from "@/scenes/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn about our values and mission at SageCoordination",
};
export default function Page() {
  return <div className="bg-[#b4c186] ">
    <AboutUs />
  </div>;
}
