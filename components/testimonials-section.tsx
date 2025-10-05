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
      name: "Priya Sharma",
      age: 45,
      condition: "Post-Surgery Recovery",
      rating: 5,
      text: "After my knee surgery, I was worried about recovery. The physiotherapist's home visits made all the difference. Professional, caring, and incredibly effective treatment. I'm back to my daily activities much sooner than expected!",
      image: "/middle-aged-indian-woman-smiling.png",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      age: 52,
      condition: "Chronic Back Pain",
      rating: 5,
      text: "I suffered from chronic back pain for years. The personalized treatment plan and regular home sessions have been life-changing. The pain has reduced significantly, and I can finally sleep peacefully again.",
      image: "/middle-aged-indian-man-professional.png",
    },
    {
      id: 3,
      name: "Anita Patel",
      age: 38,
      condition: "Sports Injury",
      rating: 5,
      text: "As a tennis player, my shoulder injury was devastating. The specialized sports rehabilitation program got me back on the court stronger than before. Excellent knowledge of sports physiotherapy!",
      image: "/young-indian-woman-athletic.png",
    },
    {
      id: 4,
      name: "Vikram Singh",
      age: 67,
      condition: "Stroke Recovery",
      rating: 5,
      text: "After my stroke, mobility was a major challenge. The neurological physiotherapy sessions at home have helped me regain independence. The therapist's patience and expertise are remarkable.",
      image: "/elderly-indian-man-kind-face.png",
    },
    {
      id: 5,
      name: "Meera Reddy",
      age: 29,
      condition: "Pregnancy-related Pain",
      rating: 5,
      text: "During my pregnancy, I experienced severe back pain. The gentle and safe physiotherapy techniques provided immense relief. The therapist understood my concerns perfectly and adapted the treatment accordingly.",
      image: "/placeholder-rmk8k.png",
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
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 mb-4">
            Patient Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">What Our Patients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from patients who have experienced our physiotherapy services and achieved remarkable recovery
            results.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Main Testimonial Card */}
          <Card className="shadow-lg overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Patient Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentSlide].image || "/placeholder.svg"}
                      alt={testimonials[currentSlide].name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1">
                      <Quote className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentSlide].text}"
                  </blockquote>

                  {/* Patient Info */}
                  <div className="space-y-1">
                    <div className="font-semibold text-lg text-foreground">{testimonials[currentSlide].name}</div>
                    <div className="text-muted-foreground">
                      Age {testimonials[currentSlide].age} • {testimonials[currentSlide].condition}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">600</div>
            <div className="text-muted-foreground">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
