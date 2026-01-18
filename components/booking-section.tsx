"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Phone, Mail, User, CheckCircle, Smartphone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function BookingSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "",
    date: "",
    time: "",
    message: "",
  })

  const services = [
    "Home Visits",
    "Online Physiotherapy",
    "Electrotherapy",
    "Post-Op Rehabilitation",
    "Pain Management",
    "Sports Injury Recovery",
    "Geriatric Physiotherapy",
    "Neurological Rehabilitation",
  ]

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSubmitted(true)
        toast({
          title: "Appointment Booked!",
          description: "We'll contact you shortly to confirm.",
        })
      } else {
        throw new Error(data.error || "Failed to submit booking")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book appointment. Please try again or call us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12 shadow-2xl rounded-3xl border-none">
            <CardContent className="space-y-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-foreground">Appointment Confirmed!</h3>
                <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Thank you for choosing our services. We have received your booking request and will contact you within 24 hours to confirm the details.
                </p>
              </div>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" size="lg" className="mt-4">
                Book Another Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary border-primary/20 mb-6 px-4 py-1 text-sm bg-primary/10">
            Book Appointment
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading tracking-tight">
            Schedule Your Session
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Take the first step towards recovery. Fill out the form below to book your appointment.
          </p>
        </div>

        <Card className="shadow-2xl border-none rounded-3xl overflow-hidden bg-card">
          <CardHeader className="bg-primary/5 p-8 border-b border-border/50">
            <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                Appointment Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-foreground border-b pb-2">Personal Information</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="flex items-center space-x-2 text-muted-foreground font-medium">
                        <User className="w-4 h-4" />
                        <span>Full Name *</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="flex items-center space-x-2 text-muted-foreground font-medium">
                        <Smartphone className="w-4 h-4" />
                        <span>Phone Number *</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9451194384"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                         className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="flex items-center space-x-2 text-muted-foreground font-medium">
                      <Mail className="w-4 h-4" />
                      <span>Email Address *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                       className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="address" className="flex items-center space-x-2 text-muted-foreground font-medium">
                      <MapPin className="w-4 h-4" />
                      <span>Home Address *</span>
                    </Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete address for home visits"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                      rows={3}
                       className="resize-none rounded-xl"
                    />
                  </div>
              </div>

              {/* Service and Scheduling */}
              <div className="space-y-6">
                 <h4 className="text-lg font-semibold text-foreground border-b pb-2">Treatment Details</h4>
                <div className="space-y-3">
                    <Label htmlFor="service" className="text-sm font-medium text-muted-foreground">
                      Service Type *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("serviceType", value)} required>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="date" className="flex items-center space-x-2 text-muted-foreground font-medium">
                        <Calendar className="w-4 h-4" />
                        <span>Preferred Date *</span>
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        required
                         className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="time" className="flex items-center space-x-2 text-muted-foreground font-medium">
                        <Clock className="w-4 h-4" />
                        <span>Preferred Time *</span>
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("time", value)} required>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-muted-foreground font-medium">Additional Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Any specific concerns or requirements you'd like to mention..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                       className="resize-none rounded-xl"
                    />
                  </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full text-lg h-14 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all" disabled={isSubmitting}>
                  {isSubmitting ? "Processing Booking..." : "Confirm Appointment"}
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4 bg-muted/30 py-2 rounded-lg">
                  * Required fields. We treat your data with strict confidentiality.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Need immediate assistance? Contact us directly:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-foreground font-medium hover:text-primary transition-colors bg-white px-5 py-3 rounded-full shadow-sm"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 9451194384</span>
            </a>
            <a
              href="mailto:drshuklaphysiotherapy@gmail.com"
              className="flex items-center space-x-2 text-foreground font-medium hover:text-primary transition-colors bg-white px-5 py-3 rounded-full shadow-sm"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>drshuklaphysiotherapy@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
