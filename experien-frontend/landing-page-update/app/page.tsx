import Hero from "@/components/landing/Hero";
import IndustryCards from "@/components/landing/IndustryCards";
import LearningJourney from "@/components/landing/LearningJourney";
import CourseTabs from "@/components/landing/CourseTabs";
import Features from "@/components/landing/Features";
import EnrolSteps from "@/components/landing/EnrolSteps";
import Faq from "@/components/landing/Faq";
import CtaBanner from "@/components/landing/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustryCards />
      <LearningJourney />
      <CourseTabs />
      <Features />
      <EnrolSteps />
      <Faq />
      <CtaBanner />
    </>
  );
}
