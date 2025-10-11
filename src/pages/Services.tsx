import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Droplets, 
  Wrench, 
  Package, 
  Filter,
  Zap,
  Shield,
  Settings,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Reverse Osmosis (RO) System Installation",
      description: "Professional installation of advanced RO water filtration systems for pure, safe drinking water. We handle complete setup, testing, and commissioning.",
      features: [
        "High-quality RO membrane installation",
        "Multi-stage filtration setup",
        "Water quality testing",
        "System optimization",
        "User training included"
      ]
    },
    {
      icon: Filter,
      title: "Water Treatment & Filtration",
      description: "Comprehensive water treatment solutions for homes and businesses. From whole-house filtration to specialized treatment for specific water issues.",
      features: [
        "Whole-house water filtration",
        "Borehole water treatment",
        "Iron & rust removal systems",
        "Odor and taste correction",
        "Hard water softening"
      ]
    },
    {
      icon: Wrench,
      title: "Plumbing Repairs & Maintenance",
      description: "Expert repair services for all plumbing issues. Fast response, quality workmanship, and lasting solutions for residential and commercial properties.",
      features: [
        "Leak detection and repair",
        "Toilet and sink repairs",
        "Pipe replacement",
        "Valve and fixture repair",
        "Emergency plumbing services"
      ]
    },
    {
      icon: Package,
      title: "Plumbing Materials Supply",
      description: "Quality plumbing materials and parts at competitive prices. From pipes and fittings to water filters and RO membranes.",
      features: [
        "Genuine RO membranes and filters",
        "Quality pipes and fittings",
        "Plumbing fixtures",
        "Water treatment chemicals",
        "Installation hardware"
      ]
    },
    {
      icon: Zap,
      title: "Borehole Systems",
      description: "Complete borehole solutions from drilling to water treatment. Expert installation and maintenance of borehole pumps and water distribution systems.",
      features: [
        "Borehole drilling coordination",
        "Pump installation and repair",
        "Water distribution setup",
        "Storage tank installation",
        "System automation"
      ]
    },
    {
      icon: Settings,
      title: "After-Installation Support",
      description: "Comprehensive maintenance and support services to keep your systems running optimally. Regular servicing, filter replacements, and system checks.",
      features: [
        "Filter replacement services",
        "System cleaning and sanitization",
        "Performance optimization",
        "Troubleshooting support",
        "Scheduled maintenance plans"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Comprehensive plumbing and water treatment solutions designed to meet all your needs. 
              Professional service, quality workmanship, guaranteed.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-cta">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-2 hover:border-secondary">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
              Why Choose Our Services?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground">
                  Fully licensed professionals with comprehensive insurance coverage
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Fast Response</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 emergency service with quick response times
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-muted-foreground">
                  High-quality workmanship backed by our satisfaction guarantee
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg border-2 border-primary/20">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Service Areas
              </h3>
              <p className="text-muted-foreground mb-6">
                We proudly serve residential, commercial, and industrial clients across Nairobi 
                and surrounding areas. Our mobile service units ensure we can reach you quickly, 
                wherever you are.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Residential Properties</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Commercial Buildings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Industrial Facilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Office Spaces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Get Expert Plumbing Service?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14">
                Request Free Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 h-14"
              asChild
            >
              <a href="tel:+254XXXXXXXXX">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
