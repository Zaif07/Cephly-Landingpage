import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Cephly has transformed how we present our automation work to clients. The dashboards make our value crystal clear.",
    author: "Alex Morgan",
    role: "Founder, AutomateNow Agency",
    avatar: "AM",
  },
  {
    quote: "Our clients love the transparency. They can finally see the ROI of our automation work in real-time.",
    author: "Sarah Chen",
    role: "Head of Client Success, Digital Flows",
    avatar: "SC",
  },
  {
    quote:
      "The AI blueprint generator saved us weeks of work when rolling out solutions across our client's departments.",
    author: "Michael Rodriguez",
    role: "Automation Consultant",
    avatar: "MR",
  },
]

const logos = ["Agency One", "TechFlow", "AutomateX", "ZapWorks", "FlowMasters", "AI Solutions"]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background/90 to-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              Leading Agencies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">See what automation professionals are saying about Cephly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 border-border/40 relative overflow-hidden">
              <CardContent className="p-6 pt-12">
                <div className="absolute top-6 left-6">
                  <Quote className="h-8 w-8 text-teal-400/20" />
                </div>
                <p className="mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 border border-border/40">
                    <AvatarImage src="/placeholder.svg" alt={testimonial.author} />
                    <AvatarFallback className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 text-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-xl border border-border/40 bg-card/30 p-8">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
              Trusted by automation professionals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-12">
                <div className="text-lg font-semibold text-muted-foreground/60">{logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
