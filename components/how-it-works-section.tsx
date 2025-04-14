import { ImportIcon as FileImport, LayoutDashboard, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: <FileImport className="h-12 w-12 text-teal-400" />,
    title: "Import Workflows",
    description:
      "Connect your Make, Zapier, or n8n account to import your existing automation workflows with a single click.",
    platforms: ["Make", "Zapier", "n8n"],
  },
  {
    icon: <LayoutDashboard className="h-12 w-12 text-cyan-400" />,
    title: "Auto-Generate Dashboards",
    description:
      "Cephly analyzes your workflows and automatically creates beautiful, branded dashboards with relevant metrics and KPIs.",
    highlight: "AI-powered",
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-emerald-400" />,
    title: "Share & Track ROI",
    description:
      "Invite clients to their personalized portal where they can track progress, see ROI metrics, and request changes.",
    highlight: "Real-time updates",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background/90 to-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              Cephly Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform your automation workflows into client-ready dashboards.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-24 bottom-24 w-0.5 bg-gradient-to-b from-teal-400 via-cyan-400 to-emerald-400 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br from-background to-card border border-border/40 shadow-lg">
                    <div className="absolute inset-1 rounded-full bg-card flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-card border border-border/40 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>

                {step.platforms && (
                  <div className="flex gap-2 justify-center">
                    {step.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-2 py-1 text-xs rounded-full bg-background border border-border/40"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                )}

                {step.highlight && (
                  <span className="mt-3 px-3 py-1 text-xs rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    {step.highlight}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
