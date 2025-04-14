"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

export default function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email)
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-20 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join the{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                    Cephly Waitlist
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Be among the first to transform your automation services with Cephly's powerful dashboard platform.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="h-12 w-12 rounded-full bg-teal-500/20 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
                  <p className="text-muted-foreground text-center">
                    Thank you for joining our waitlist. We'll notify you when Cephly is ready for you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="h-12 bg-background"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button
                      type="submit"
                      className="h-12 px-6 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                    >
                      Join the Waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    By joining, you agree to our Privacy Policy and Terms of Service. We'll never share your information
                    with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
