"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "/physiotherapy-session-home-visit.png",
      alt: "Home physiotherapy session",
      category: "Home Visits",
    },
    {
      id: 2,
      src: "/modern-physiotherapy-clinic-equipment.png",
      alt: "Modern physiotherapy equipment",
      category: "Equipment",
    },
    {
      id: 3,
      src: "/patient-doing-rehabilitation-exercises.png",
      alt: "Patient doing rehabilitation exercises",
      category: "Rehabilitation",
    },
    {
      id: 4,
      src: "/electrotherapy-treatment-session.png",
      alt: "Electrotherapy treatment session",
      category: "Electrotherapy",
    },
    {
      id: 5,
      src: "/post-surgery-recovery-session.png",
      alt: "Post-surgery recovery session",
      category: "Post-Op Care",
    },
    {
      id: 6,
      src: "/elderly-patient-mobility-training.png",
      alt: "Elderly patient mobility training",
      category: "Geriatric Care",
    },
    {
      id: 7,
      src: "/sports-injury-treatment.png",
      alt: "Sports injury treatment",
      category: "Sports Therapy",
    },
    {
      id: 8,
      src: "/neurological-rehabilitation-session.png",
      alt: "Neurological rehabilitation session",
      category: "Neuro Therapy",
    },
  ]

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 mb-4">
            Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">Our Work in Action</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a look at our professional physiotherapy sessions, modern equipment, and the positive impact we make in
            our patients' lives.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0 relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <Badge variant="secondary" className="bg-white/90 text-foreground">
                  {filteredImages[selectedImage].category}
                </Badge>
                <p className="text-white mt-2 text-sm">{filteredImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
