import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CoreFormats from "@/components/sections/CoreFormats";
import BrandStatement from "@/components/sections/BrandStatement";
import FlagshipCases from "@/components/sections/FlagshipCases";
import ProcessSteps from "@/components/sections/ProcessSteps";
import InsightsPreview from "@/components/sections/InsightsPreview";
import PersonalContact from "@/components/sections/PersonalContact";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CoreFormats />
      <BrandStatement />
      <FlagshipCases />
      <ProcessSteps />
      <InsightsPreview />
      <PersonalContact />
      <ClosingCTA />
    </>
  );
}
