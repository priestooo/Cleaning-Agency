import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Leaf, Clock } from "lucide-react"

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Team Members" },
  { number: "99%", label: "Satisfaction Rate" },
]

const values = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "We guarantee exceptional results with every cleaning service we provide.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Our team consists of experienced and certified cleaning professionals.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use environmentally safe cleaning products that are safe for your family.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "Punctual, consistent, and dependable cleaning services you can trust.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Users className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">About SparkleClean Pro</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
                {"Your Trusted Cleaning Partner in "}
                <span className="text-primary">Owerri</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {
                  "Founded in 2019, SparkleClean Pro has been serving the Owerri community with exceptional cleaning services. We take pride in transforming spaces and exceeding client expectations through our commitment to quality, reliability, and customer satisfaction."
                }
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Learn More About Us</Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img
                src="/professional-cleaning-team-working-in-modern-offic.png"
                alt="Our professional cleaning team"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
