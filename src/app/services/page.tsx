import AboutUs from "@/scenes/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "Learn about our values and mission at JobsRUs.",
};
export default function Page() {
  return <div className="bg-secondary">
<AboutUs />
  </div> ;
}
