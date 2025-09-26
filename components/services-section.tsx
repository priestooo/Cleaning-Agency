import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Sparkles, Droplets, Wind, Trash2 } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.",
    features: ["Deep cleaning", "Regular maintenance", "Move-in/out cleaning", "Post-construction cleanup"],
    price: "From ₦15,000",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional office and business cleaning services to maintain a pristine work environment.",
    features: ["Office cleaning", "Retail spaces", "Medical facilities", "Educational institutions"],
    price: "From ₦25,000",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning service that reaches every corner and surface of your space.",
    features: ["Detailed sanitization", "Hard-to-reach areas", "Appliance cleaning", "Furniture care"],
    price: "From ₦20,000",
  },
  {
    icon: Droplets,
    title: "Carpet & Upholstery",
    description: "Specialized cleaning for carpets, rugs, and upholstered furniture using advanced techniques.",
    features: ["Steam cleaning", "Stain removal", "Odor elimination", "Fabric protection"],
    price: "From ₦12,000",
  },
  {
    icon: Wind,
    title: "Window Cleaning",
    description: "Crystal-clear window cleaning for residential and commercial properties.",
    features: ["Interior & exterior", "High-rise buildings", "Screen cleaning", "Frame maintenance"],
    price: "From ₦8,000",
  },
  {
    icon: Trash2,
    title: "Post-Event Cleanup",
    description: "Comprehensive cleanup services after parties, events, or special occasions.",
    features: ["Event venues", "Party cleanup", "Waste removal", "Restoration services"],
    price: "From ₦18,000",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
            {"Comprehensive Cleaning Solutions"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {
              "From residential homes to commercial spaces, we provide tailored cleaning services that exceed expectations and deliver outstanding results."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-card-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-semibold text-primary">{service.price}</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
