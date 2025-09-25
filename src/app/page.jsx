import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import ProblemStatement from "@/components/sections/problem-statement";
import FinancialReasoningSection from "@/components/sections/financial-reasoning";
import AccurateResearch from "@/components/sections/accurate-research";
import WorkflowsSection from "@/components/sections/workflows";
import EmbedAiSection from "@/components/sections/embed-ai";
import EnterpriseFeatures from "@/components/sections/enterprise-features";
import SecuritySection from "@/components/sections/security";
import Testimonials from "@/components/sections/testimonials";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import SmartCropAdvisorySection from "@/components/sections/smart-crop";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SmartCropAdvisorySection />
      <ProblemStatement />
      <FinancialReasoningSection />
      <AccurateResearch />
      <WorkflowsSection />
      <EmbedAiSection />
      <EnterpriseFeatures />
      <SecuritySection />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}