import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="text-primary border-primary/20"
              >
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
                Your Trusted Physiotherapy Expert
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 5 years of dedicated experience in physiotherapy, I
                specialize in providing comprehensive rehabilitation services
                that help patients regain mobility, reduce pain, and improve
                their quality of life.
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Qualifications & Expertise
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">
                      Bachelor of Physiotherapy (BPT)
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Certified Professional
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">
                      5+ Years Experience
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Proven Track Record
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">
                      Neuro & Ortho Specialist
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Advanced Training
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">
                      600 Patients Treated
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Successful Outcomes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Neurological Physiotherapy</Badge>
                <Badge variant="secondary">Orthopedic Rehabilitation</Badge>
                <Badge variant="secondary">Pre & Post-operative Care</Badge>
                <Badge variant="secondary">Electrotherapy</Badge>
                <Badge variant="secondary">Ultrasonic Therapy</Badge>
                <Badge variant="secondary">Pain Management</Badge>
                <Badge variant="secondary">Sports Injury Recovery</Badge>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
              <img
                src="/WhatsApp Image 2025-10-05 at 21.07.28_6548a0eb.jpg"
                alt="Professional physiotherapist portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Achievement Cards */}
            <Card className="absolute -bottom-4 -left-4 bg-card border border-border shadow-lg">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">BPT</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -top-4 -right-4 bg-card border border-border shadow-lg">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
