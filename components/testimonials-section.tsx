"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mrs. Adaeze Okafor",
    role: "Homeowner",
    location: "New Owerri",
    rating: 5,
    text: "SparkleClean Pro transformed our home completely! Their attention to detail is incredible, and the team is so professional. I highly recommend their services to anyone looking for quality cleaning.",
    image: "/professional-nigerian-woman-smiling.png",
  },
  {
    name: "Mr. Chukwuma Eze",
    role: "Business Owner",
    location: "Owerri Municipal",
    rating: 5,
    text: "We have been using SparkleClean Pro for our office cleaning for over 2 years. They are reliable, thorough, and always deliver exceptional results. Our workspace has never looked better!",
    image: "/professional-nigerian-businessman-smiling.png",
  },
  {
    name: "Dr. Ngozi Okwu",
    role: "Medical Professional",
    location: "World Bank",
    rating: 5,
    text: "As a medical professional, cleanliness is paramount. SparkleClean Pro understands this and provides hospital-grade cleaning that meets our strict standards. Excellent service!",
    image: "/professional-nigerian-doctor-woman-smiling.png",
  },
  {
    name: "Mr. Emeka Nwachukwu",
    role: "Restaurant Owner",
    location: "Ikenegbu",
    rating: 5,
    text: "Running a restaurant requires impeccable cleanliness standards. SparkleClean Pro helps us maintain the highest hygiene levels. Their commercial cleaning service is top-notch!",
    image: "/professional-nigerian-chef-smiling.png",
  },
  {
    name: "Mrs. Chioma Ugwu",
    role: "Working Mother",
    location: "Orji",
    rating: 5,
    text: "With my busy schedule, SparkleClean Pro is a lifesaver! They clean our home thoroughly while we are at work. Coming home to a spotless house is such a blessing.",
    image: "/placeholder-srje9.png",
  },
  {
    name: "Chief Obiora Nnamani",
    role: "Retired Executive",
    location: "GRA Owerri",
    rating: 5,
    text: "I have tried several cleaning services, but none compare to SparkleClean Pro. Their professionalism, punctuality, and quality of work are unmatched. Highly recommended!",
    image: "/placeholder-3kvfw.png",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Star className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Client Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">{"What Our Clients Say"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {
              "Don't just take our word for it. Here's what our satisfied clients across Owerri have to say about our cleaning services."
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-6">
                <Quote className="h-12 w-12 text-primary mx-auto opacity-50" />

                <div className="space-y-4">
                  <p className="text-lg lg:text-xl text-card-foreground leading-relaxed text-pretty">
                    "{currentTestimonial.text}"
                  </p>

                  <div className="flex justify-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-card-foreground">{currentTestimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{currentTestimonial.role}</div>
                    <div className="text-sm text-primary">{currentTestimonial.location}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
