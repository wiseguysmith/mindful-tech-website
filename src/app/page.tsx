"use client";
import Hero from "@/components/v3/Hero";
import Automation from "@/components/v3/Automation";
import Blockchain from "@/components/v3/Blockchain";
import Vision from "@/components/v3/Vision";
import LocalPresence from "@/components/v3/LocalPresence";
import Footer from "@/components/v3/Footer";
import SectionDivider from "@/components/v3/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider className="mx-6" />
      <Automation />
      <SectionDivider className="mx-6" />
      <Blockchain />
      <SectionDivider className="mx-6" />
      <Vision />
      <SectionDivider className="mx-6" />
      <LocalPresence />
      <Footer />
    </>
  );
}
