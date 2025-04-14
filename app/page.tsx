import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HowItWorksSection from "@/components/how-it-works-section"
import UseCaseSection from "@/components/use-case-section"
import TestimonialsSection from "@/components/testimonials-section"
import WaitlistSection from "@/components/waitlist-section"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCaseSection />
        <TestimonialsSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  )
}
