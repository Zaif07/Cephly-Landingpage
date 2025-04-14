import { LayoutDashboard, UserPlus, LineChart, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: <LayoutDashboard className="h-10 w-10 text-teal-400" />,
    title: "Smart Automation Dashboards",
    description:
      "Transform complex automation workflows into beautiful, intuitive dashboards that clients can understand at a glance.",
  },
  {
    icon: <UserPlus className="h-10 w-10 text-cyan-400" />,
    title: "Seamless Client Onboarding",
    description:
      "Guide clients through a structured onboarding process with automated data collection and progress tracking.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-emerald-400" />,
    title: "Predictive Analytics & ROI Insights",
    description: "Leverage AI to forecast performance and demonstrate clear ROI from your automation solutions.",
  },
  {
    icon: <Users className="h-10 w-10 text-teal-400" />,
    title: "Multi-Client Management & Invoicing",
    description:
      "Manage all your clients in one place with customized dashboards, automated reporting, and integrated invoicing.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-cyan-400" />,
    title: "AI Blueprint Generator for Departments",
    description:
      "Create department-specific automation blueprints with our AI generator to quickly deploy solutions across client organizations.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              Automation Agencies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to transform your automation services into a scalable, client-friendly experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-xl border border-border/40 bg-card hover:border-border/80 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mb-4 p-2 rounded-lg inline-flex bg-background/50 border border-border/40">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
