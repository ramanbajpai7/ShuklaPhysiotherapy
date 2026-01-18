"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

export default function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative py-20 lg:py-32 px-4 overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-in slide-in-from-left-5 fade-in duration-700">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 border border-secondary text-primary text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2 fill-primary" />
              #1 Rated Home Physiotherapy Service
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground font-heading leading-[1.1] tracking-tight">
                Recover Faster,
                <span className="text-primary block mt-2">Right at Home</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Experience expert-led rehabilitation without the commute. We bring specialized physiotherapy care directly to your doorstep for neurological, orthopedic, and post-operative recovery.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              {[
                "Certified Physiotherapists (BPT Qualified)",
                "Personalized 1-on-1 Treatment Plans",
                "Advanced Pain Management Equipment"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-lg">
                  <div className="p-1 rounded-full bg-primary/10">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-foreground/80 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={scrollToBooking} className="text-lg px-8 py-7 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
                Book First Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="text-lg px-8 py-7 rounded-2xl border-2 hover:bg-secondary/50 transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gray-200 flex items-center justify-center overflow-hidden">
                     <span className="text-xs font-bold text-gray-500">U{i}</span>
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="font-bold text-foreground">500+ patients</span> this month</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-in slide-in-from-right-5 fade-in duration-1000 delay-200">
            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
               <img
                src="/professional-physiotherapist-helping-patient-with-.png"
                alt="Professional physiotherapy session at home"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
               {/* Floating Badge 1 */}
              <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 max-w-[200px] animate-bounce-slow">
                 <div className="text-3xl font-bold text-primary">98%</div>
                 <div className="text-sm font-medium text-gray-600">Patient Recovery Rate</div>
              </div>

               {/* Floating Badge 2 */}
              <div className="absolute top-12 right-8 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex gap-3 items-center animate-in zoom-in fade-in duration-700 delay-500">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                 </div>
                 <div>
                    <div className="font-bold text-sm">Certified Experts</div>
                    <div className="text-xs text-gray-500">Verified Professionals</div>
                 </div>
              </div>
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute -z-10 -bottom-12 -right-12 w-64 h-64 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
