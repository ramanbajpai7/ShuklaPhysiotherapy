import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users, Clock, CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-in slide-in-from-left-5 duration-700">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-primary border-primary/20 px-4 py-1 text-sm bg-primary/10">
                About Me
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-heading tracking-tight">
                Your Trusted <span className="text-primary">Physiotherapy Expert</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With over 5 years of dedicated experience in physiotherapy, I specialize in providing comprehensive
                rehabilitation services that help patients regain mobility, reduce pain, and improve their quality of
                life.
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-6 pt-6 border-t border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Me?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                 {[
                     { icon: GraduationCap, title: "BPT Qualified", sub: "Certified Professional" },
                     { icon: Clock, title: "5+ Years Exp.", sub: "Proven Track Record" },
                     { icon: Award, title: "Neuro & Ortho", sub: "Specialist Training" },
                     { icon: Users, title: "500+ Patients", sub: "Successful Outcomes" }
                 ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-bold text-foreground text-lg">{item.title}</div>
                            <div className="text-sm text-muted-foreground font-medium">{item.sub}</div>
                        </div>
                    </div>
                 ))}
              </div>
            </div>

            {/* Specializations Ribbon */}
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Expertise In</h3>
              <div className="flex flex-wrap gap-2">
                {["Neurological Rehab", "Orthopedic Care", "Post-Op Recovery", "Pain Management", "Sports Injuries"].map((spec, i) => (
                    <Badge key={i} variant="outline" className="text-sm py-1 px-3 border-primary/20 bg-primary/5 text-primary">
                        {spec}
                    </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-in slide-in-from-right-5 duration-700 delay-200">
            <div className="aspect-[4/5] lg:aspect-square bg-gradient-to-br from-primary/5 to-secondary/20 rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10" />
              <img
                src="/professional-physiotherapist-portrait-in-clinical-.png"
                alt="Professional physiotherapist portrait"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Achievement Cards */}
            <Card className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl animate-bounce-slow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">BPT</div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mt-1">Certified</div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute top-12 -right-6 bg-card/90 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl animate-in zoom-in delay-500 duration-500">
              <CardContent className="p-4 flex items-center gap-3">
                 <div className="bg-green-100 p-2 rounded-full">
                     <CheckCircle className="w-5 h-5 text-green-600" />
                 </div>
                 <div>
                    <div className="font-bold text-foreground">Verified</div>
                    <div className="text-xs text-muted-foreground">Professional</div>
                 </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
