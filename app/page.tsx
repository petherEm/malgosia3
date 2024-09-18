import { Metadata } from "next";
import Hero from "@/components/Hero";
import FullWidthBanner from "@/components/FullWidthBanner";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import FullWidthImg from "@/components/FullWidthImg";
import Expertise from "@/components/Expertise";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Małgorzata Szynkarczuk",
  description:
    "Business Development, General Management, Strategic Marketing,  Product Management, Automotive Industry, Electric Vehicles, and Renewable Energy.",
};
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FullWidthBanner />
      <AboutMe />
      <FullWidthImg />
      <Expertise />
      <Education />
      <Footer />
    </div>
  );
}
