import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, MessageSquare, Calendar, DollarSign } from "lucide-react"

export default function UseCaseSection() {
  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              Cephly in Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how Cephly transforms complex automation workflows into clear, actionable insights for your
            clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-border/40 bg-background/95 px-4 py-1.5 text-sm font-medium mb-2">
              <Badge variant="outline" className="mr-2 bg-teal-500/10 text-teal-400 border-teal-500/20">
                Use Case
              </Badge>
              <span>eCommerce Sales Automation</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold">AI-Powered Sales Funnel Visualization</h3>

            <p className="text-muted-foreground">
              See how an AI-powered sales automation workflow for an eCommerce client gets visualized in Cephly, with
              clear KPIs and ROI metrics that clients can understand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-card/50 border-border/40">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-2">
                    <MessageSquare className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="text-2xl font-bold">1,240</div>
                  <div className="text-xs text-muted-foreground">Leads Contacted</div>
                  <div className="text-xs text-teal-400 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +12.5%
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/40">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-2">
                    <Calendar className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold">328</div>
                  <div className="text-xs text-muted-foreground">Bookings</div>
                  <div className="text-xs text-cyan-400 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +18.3%
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/40">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2">
                    <DollarSign className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold">$48.2K</div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                  <div className="text-xs text-emerald-400 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +24.7%
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-cyan-500/5 rounded-xl" />
            <div className="relative rounded-xl overflow-hidden border border-border/40 shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="eCommerce Sales Automation Dashboard"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-teal-500/10 blur-2xl" />
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
