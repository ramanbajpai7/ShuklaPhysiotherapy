import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Video, Zap, Heart, Shield, Activity, Users, Clock, MapPin, Stethoscope } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Home Visits",
      description: "Convenient physiotherapy sessions in the comfort of your own home with all necessary equipment.",
      features: ["Personalized care", "Flexible scheduling", "No travel required"],
      popular: true,
    },
    {
      icon: Video,
      title: "Online Physiotherapy",
      description: "Virtual consultations and guided exercise sessions through secure video calls.",
      features: ["Remote guidance", "Exercise demonstrations", "Progress tracking"],
      popular: false,
    },
    {
      icon: Zap,
      title: "Electrotherapy",
      description: "Advanced electrical stimulation techniques for pain relief and muscle rehabilitation.",
      features: ["TENS therapy", "Muscle stimulation", "Pain management"],
      popular: false,
    },
    {
      icon: Heart,
      title: "Post-Operative Rehabilitation",
      description: "Specialized recovery programs designed for post-surgical patients.",
      features: ["Surgical recovery", "Mobility restoration", "Strength building"],
      popular: true,
    },
    {
      icon: Shield,
      title: "Pain Management",
      description: "Comprehensive pain relief strategies using proven physiotherapy techniques.",
      features: ["Chronic pain relief", "Acute injury treatment", "Preventive care"],
      popular: false,
    },
    {
      icon: Activity,
      title: "Sports Injury Recovery",
      description: "Specialized treatment for athletes and sports-related injuries.",
      features: ["Injury assessment", "Performance recovery", "Prevention strategies"],
      popular: false,
    },
    {
      icon: Users,
      title: "Geriatric Physiotherapy",
      description: "Tailored treatment programs for elderly patients focusing on mobility and independence.",
      features: ["Fall prevention", "Balance training", "Mobility enhancement"],
      popular: false,
    },
    {
      icon: Stethoscope,
      title: "Neurological Rehabilitation",
      description: "Specialized care for patients with neurological conditions and disorders.",
      features: ["Stroke recovery", "Parkinson's support", "Mobility training"],
      popular: false,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Comprehensive Physiotherapy Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From home visits to specialized rehabilitation programs, we offer a complete range of physiotherapy services
            tailored to meet your unique needs and recovery goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  service.popular ? "ring-2 ring-primary/20" : ""
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">Popular</Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
            <p className="text-muted-foreground text-sm">
              Available 7 days a week with morning, afternoon, and evening slots
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Wide Coverage Area</h3>
            <p className="text-muted-foreground text-sm">
              Serving patients across the city with reliable home visit services
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Insurance Accepted</h3>
            <p className="text-muted-foreground text-sm">
              We work with most major insurance providers for your convenience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
