"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Send } from "lucide-react"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSubmitted(true)
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Failed to send message. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
               <Badge variant="secondary" className="text-primary border-primary/20 mb-6 px-4 py-1 text-sm bg-primary/10">
                Get In Touch
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading tracking-tight">
                We're Here to Help
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our services or need to schedule an appointment? Reach out to us for a quick consultation.
              </p>
            </div>

            <div className="grid gap-8">
                {[
                    { icon: Phone, title: "Phone Support", info: "+91 9451194384", sub: "Available 24/7 for emergencies" },
                    { icon: Mail, title: "Email Us", info: "drshuklaphysiotherapy@gmail.com", sub: "Response within 2 hours" },
                    { icon: MapPin, title: "Service Area", info: "Delhi, Noida, Ghaziabad", sub: "Home visits at your doorstep" },
                    { icon: Clock, title: "Working Hours", info: "Mon - Sat: 8am - 8pm" }
                ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-5 p-4 rounded-xl hover:bg-background/80 transition-colors">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                            <p className="text-lg font-medium text-primary">{item.info}</p>
                            <p className="text-sm text-muted-foreground">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="pt-8 border-t border-border/50">
              <h4 className="font-semibold text-foreground mb-4">Immediate Assistance</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="flex-1 rounded-xl shadow-lg hover:-translate-y-1 transition-transform">
                  <a href="tel:+919451194384">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1 rounded-xl bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800 hover:border-green-300">
                  <a href="https://wa.me/919451194384" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl shadow-xl border border-border/50 p-8 md:p-10 sticky top-24">
            {isSubmitted ? (
               <div className="text-center py-12 space-y-6 animate-in zoom-in duration-300">
                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <CheckCircle className="w-10 h-10 text-green-600" />
                 </div>
                 <div className="space-y-2">
                   <h3 className="text-2xl font-bold text-foreground">Message Sent Successfully!</h3>
                   <p className="text-muted-foreground max-w-xs mx-auto">
                     Thank you for reaching out. Our team will contact you shortly to confirm your details.
                   </p>
                 </div>
                 <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                   Send Another Message
                 </Button>
               </div>
            ) : (
                <>
                <div className="mb-8">
                   <h3 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h3>
                   <p className="text-muted-foreground">Fill out the form below and we'll get back to you.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input
                          id="contact-name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone Number *</Label>
                        <Input
                          id="contact-phone"
                          placeholder="+91 9451194384"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">How can we help? *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Briefly describe your condition or requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={4}
                      className="resize-none rounded-xl"
                    />
                    <p className="text-xs text-muted-foreground text-right">{formData.message.length}/500</p>
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <span className="animate-spin mr-2">⏳</span> Sending...
                        </>
                    ) : (
                        <>
                          Send Message <Send className="w-4 h-4 ml-2" />
                        </>
                    )}
                  </Button>
                </form>
                </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
