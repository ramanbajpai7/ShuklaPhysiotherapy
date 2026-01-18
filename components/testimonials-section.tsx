"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Mrs. Priya Sharma",
      age: 45,
      condition: "Post-Surgery Recovery",
      rating: 5,
      text: "After my knee surgery, I was worried about recovery. The physiotherapist's home visits made all the difference. Professional, caring, and incredibly effective treatment. I'm back to my daily activities much sooner than expected!",
      image: "/middle-aged-indian-woman-smiling.png",
    },
    {
      id: 2,
      name: "Mr. Rajesh Kumar",
      age: 52,
      condition: "Chronic Back Pain",
      rating: 5,
      text: "I suffered from chronic back pain for years. The personalized treatment plan and regular home sessions have been life-changing. The pain has reduced significantly, and I can finally sleep peacefully again.",
      image: "/middle-aged-indian-man-professional.png",
    },
    {
      id: 3,
      name: "Ms. Anita Patel",
      age: 38,
      condition: "Sports Injury",
      rating: 5,
      text: "As a tennis player, my shoulder injury was devastating. The specialized sports rehabilitation program got me back on the court stronger than before. Excellent knowledge of sports physiotherapy!",
      image: "/young-indian-woman-athletic.png",
    },
    {
      id: 4,
      name: "Mr. Vikram Singh",
      age: 67,
      condition: "Stroke Recovery",
      rating: 5,
      text: "After my stroke, mobility was a major challenge. The neurological physiotherapy sessions at home have helped me regain independence. The therapist's patience and expertise are remarkable.",
      image: "/elderly-indian-man-kind-face.png",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section id="testimonials" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary border-primary/20 mb-6 px-4 py-1 text-sm bg-primary/10">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading tracking-tight">What Our Patients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from patients who have experienced our physiotherapy services and achieved remarkable recovery
            results.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Main Testimonial Card */}
          <Card className="shadow-2xl border-none overflow-hidden bg-card rounded-3xl">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                 {/* Image Side */}
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={testimonials[currentSlide].image || "/placeholder.svg"}
                      alt={testimonials[currentSlide].name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                      <div className="absolute bottom-4 left-4 text-white md:hidden">
                          <p className="font-bold text-lg">{testimonials[currentSlide].name}</p>
                          <p className="text-sm opacity-90">{testimonials[currentSlide].condition}</p>
                      </div>
                </div>

                {/* Content Side */}
                <div className="md:w-3/5 p-8 md:p-12 md:py-16 flex flex-col justify-center relative bg-muted/20">
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10 rotate-180" />
                  
                  {/* Rating Stars */}
                  <div className="flex mb-6">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                    "{testimonials[currentSlide].text}"
                  </blockquote>

                  {/* Patient Info */}
                  <div className="space-y-1 hidden md:block">
                    <div className="font-bold text-xl text-foreground">{testimonials[currentSlide].name}</div>
                    <div className="text-muted-foreground font-medium">
                      {testimonials[currentSlide].condition}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none w-full md:w-[106%] md:-left-[3%]">
               <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full shadow-lg border-border bg-background/80 hover:bg-background pointer-events-auto transition-transform hover:scale-110"
                onClick={prevSlide}
               >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full shadow-lg border-border bg-background/80 hover:bg-background pointer-events-auto transition-transform hover:scale-110"
                onClick={nextSlide}
               >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </Button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 pt-12 border-t border-border/40 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { number: "500+", label: "Happy Patients" },
                { number: "5+", label: "Years Experience" },
                { number: "98%", label: "Success Rate" },
                { number: "24/7", label: "Support Available" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">{stat.number}</div>
                <div className="text-muted-foreground font-medium text-lg">{stat.label}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
