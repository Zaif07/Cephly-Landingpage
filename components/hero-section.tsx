import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute top-60 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-border/40 bg-background/95 px-4 py-1.5 text-sm font-medium text-foreground mb-8">
            <span className="flex h-2 w-2 rounded-full bg-teal-400 mr-2"></span>
            <span>Now in private beta</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Turn Automation Chaos into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400">
              Client-Ready Dashboards
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            <span className="block text-white font-medium mb-2">Intelligent Growth for AI Agencies</span>
            Cephly converts Make, Zapier, and n8n workflows into branded dashboards with onboarding, predictive
            analytics, and ROI tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Book a Demo
            </Button>
          </div>

          {/* Hero image */}
          <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-card">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-cyan-500/10 mix-blend-overlay" />
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Cephly Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
