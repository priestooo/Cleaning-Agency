import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">SparkleClean Pro</h3>
                <p className="text-xs opacity-80">Professional Cleaning Services</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {
                "Your trusted cleaning partner in Owerri. We provide exceptional residential and commercial cleaning services with a commitment to quality and customer satisfaction."
              }
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Deep Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Carpet & Upholstery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Window Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Post-Event Cleanup
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="opacity-80">
                  <div>+234 803 123 4567</div>
                  <div>+234 806 789 0123</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="opacity-80">
                  <div>info@sparklecleanpro.com</div>
                  <div>quotes@sparklecleanpro.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="opacity-80">
                  <div>Serving Owerri Municipal,</div>
                  <div>Owerri North & South</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <div>© 2024 SparkleClean Pro. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
