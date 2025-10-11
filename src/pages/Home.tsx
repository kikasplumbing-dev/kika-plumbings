import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Droplets, 
  Wrench, 
  Package, 
  Shield, 
  Clock, 
  Award,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-plumbing.jpg";

const Home = () => {
  const services = [
    {
      icon: Droplets,
      title: "RO System Installation",
      description: "Professional reverse osmosis system installation for clean, safe drinking water."
    },
    {
      icon: Wrench,
      title: "Plumbing Repairs",
      description: "Expert repair services for leaks, pipes, toilets, sinks, and all plumbing fixtures."
    },
    {
      icon: Package,
      title: "Materials Supply",
      description: "Quality plumbing materials, pipes, fittings, filters, and RO membranes."
    }
  ];

  const features = [
    { icon: Clock, text: "24/7 Emergency Service" },
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "5+ Years Experience" },
  ];

  const testimonials = [
    {
      name: "John Kamau",
      rating: 5,
      text: "Excellent service! They installed our RO system quickly and professionally. The water quality has improved significantly."
    },
    {
      name: "Mary Wanjiku",
      rating: 5,
      text: "Very reliable and affordable. They fixed our leaking pipes and the issue hasn't come back. Highly recommend!"
    },
    {
      name: "Peter Ochieng",
      rating: 5,
      text: "Professional team that knows what they're doing. Great customer service and fair pricing."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <img 
          src={heroImage} 
          alt="Professional plumbing services" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="inline-block mb-4">
              <span className="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Since 2018
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Keeping Your Water Flowing, Since 2018
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
              Professional plumbing and water treatment solutions for homes and businesses. 
              Available 24/7 with guaranteed quality workmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="btn-cta text-lg px-8 h-14 w-full sm:w-auto">
                  Request Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 h-14 bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm w-full sm:w-auto"
                >
                  View Services
                </Button>
              </Link>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <feature.icon className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20">
            <path 
              fill="hsl(var(--background))" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive plumbing and water treatment solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-2 hover:border-secondary">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services" className="text-primary font-medium inline-flex items-center hover:text-secondary transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Why Choose Kika Plumbing?
              </h2>
              <p className="text-muted-foreground mb-8">
                With over 5 years of experience, we've built a reputation for reliability, 
                quality workmanship, and exceptional customer service.
              </p>

              <div className="space-y-4">
                {[
                  "Professional licensed plumbers",
                  "Transparent pricing with no hidden fees",
                  "High-quality materials and equipment",
                  "24/7 emergency response",
                  "Guaranteed workmanship",
                  "Free consultation and quotes"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button size="lg" className="mt-8">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 card-hover">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </Card>
              <Card className="text-center p-6 card-hover">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="text-center p-6 card-hover">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Emergency Service</div>
              </Card>
              <Card className="text-center p-6 card-hover">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-cta text-cta" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to help with all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14">
                Get Your Free Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-primary  text-lg px-8 h-14"
              asChild
            >
              <a href="tel:+254XXXXXXXXX">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
