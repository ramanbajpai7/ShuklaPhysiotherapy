"use client"

import { Phone, Mail, MapPin, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-bold text-xl font-heading">PhysioHome</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Professional physiotherapy services with 5+ years of experience, bringing expert care directly to your
              home.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+919876543210"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@physiohome.com"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Gallery
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <div className="space-y-2 text-background/80">
              <p>Home Visits</p>
              <p>Online Physiotherapy</p>
              <p>Post-Operative Care</p>
              <p>Pain Management</p>
              <p>Sports Injury Recovery</p>
              <p>Neurological Rehabilitation</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80">+91 98765 43210</p>
                  <p className="text-sm text-background/60">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80">info@physiohome.com</p>
                  <p className="text-sm text-background/60">Response within 24hrs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80">Mumbai, Pune, Delhi NCR</p>
                  <p className="text-sm text-background/60">Home visits available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/80 text-sm">
              © {currentYear} PhysioHome. All rights reserved. | Professional Physiotherapy Services
            </p>
            <div className="flex items-center space-x-1 text-background/80 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for better health</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
