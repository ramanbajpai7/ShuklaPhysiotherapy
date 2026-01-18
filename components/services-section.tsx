import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Video, Zap, Heart, Shield, Activity, Users, Clock, MapPin, Stethoscope, ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Home Visits",
      description: "Comprehensive physiotherapy sessions in the comfort of your own home with portable equipment.",
      features: ["Personalized care", "Flexible scheduling", "No travel required"],
      popular: true,
    },
    {
      icon: Heart,
      title: "Post-Op Rehabilitation",
      description: "Specialized recovery programs designed to restore mobility and strength after surgery.",
      features: ["Surgical recovery", "Mobility restoration", "Strength building"],
      popular: true,
    },
    {
      icon: Zap,
      title: "Electrotherapy",
      description: "Advanced electrical stimulation techniques (TENS/IFT) for effective pain relief.",
      features: ["TENS therapy", "Muscle stimulation", "Pain management"],
      popular: false,
    },
    {
      icon: Shield,
      title: "Pain Management",
      description: "Targeted strategies to alleviate chronic back, neck, and joint pain.",
      features: ["Chronic pain relief", "Acute injury treatment", "Preventive care"],
      popular: false,
    },
    {
      icon: Activity,
      title: "Sports Injury Recovery",
      description: "Fast-track recovery protocols for athletes to return to their sport safely.",
      features: ["Injury assessment", "Performance recovery", "Prevention strategies"],
      popular: false,
    },
    {
      icon: Stethoscope,
      title: "Neuro Rehabilitation",
      description: "Specialized care for stroke, Parkinson's, and other neurological conditions.",
      features: ["Stroke recovery", "Parkinson's support", "Mobility training"],
      popular: false,
    },
  ]

  return (
    <section id="services" className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="text-primary border-primary/20 mb-6 px-4 py-1 text-sm bg-primary/10">
            Our Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading tracking-tight">
            Comprehensive Physiotherapy Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From home visits to specialized rehabilitation programs, we offer a complete range of physiotherapy services
            tailored to meet your unique recovery goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`relative group bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden ${
                  service.popular ? "ring-2 ring-primary/10" : ""
                }`}
              >
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg">Most Popular</Badge>
                )}
                
                <CardHeader className="pb-4 pt-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-base">{service.description}</p>
                  <div className="space-y-3 pt-2 border-t border-border/50">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 animate-pulse"></div>
                        <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* Subtle Learn More Link */}
                   <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                       <span className="text-primary text-sm font-semibold flex items-center">
                           Learn more <ArrowRight className="w-4 h-4 ml-1" />
                       </span>
                   </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
           {[
               { icon: Clock, title: "Flexible Scheduling", desc: "Available 7 days a week with morning & evening slots" },
               { icon: MapPin, title: "Wide Coverage", desc: "Home visits across the entire metropolitan area" },
               { icon: Shield, title: "Insurance Accepted", desc: "We work with major providers to ease your expenses" }
           ].map((item, idx) => (
             <div key={idx} className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mb-4 text-primary">
                    <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
