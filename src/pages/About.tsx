import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Target,
  Heart,
  TrendingUp,
  Shield,
  ArrowRight
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "We never compromise on the quality of our work or materials."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction and trust are our top priorities."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every job, big or small."
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Count on us to deliver on our promises, every time."
    }
  ];

  const milestones = [
    { year: "2018", event: "Kika Plumbing Founded", description: "Started with a vision to provide reliable plumbing services" },
    { year: "2019", event: "Expanded Services", description: "Added water treatment and RO system installation" },
    { year: "2021", event: "500+ Customers", description: "Reached milestone of serving over 500 satisfied customers" },
    { year: "2023", event: "Team Growth", description: "Expanded team to better serve our growing customer base" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Kika Plumbing
            </h1>
            <p className="text-lg text-white/90">
              Your trusted partner for professional plumbing and water treatment services since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Kika Plumbing was established in 2018 with a simple mission: to provide reliable, 
                    affordable, and high-quality plumbing solutions to homes and businesses across Nigeria.
                  </p>
                  <p>
                    What started as a small team of dedicated plumbers has grown into a trusted service 
                    provider specializing in both traditional plumbing and modern water treatment solutions. 
                    We've expanded our services to include reverse osmosis systems, water filtration, 
                    and comprehensive plumbing maintenance.
                  </p>
                  <p>
                    Today, we're proud to have served over 500 satisfied customers, building lasting 
                    relationships based on trust, quality, and exceptional service.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6 card-hover">
                  <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </Card>
                <Card className="text-center p-6 card-hover">
                  <Award className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="text-center p-6 card-hover">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Jobs Completed</div>
                </Card>
                <Card className="text-center p-6 card-hover">
                  <Shield className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground">
                Key milestones in our growth and development
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide reliable, affordable, and high-quality plumbing and water treatment 
                  solutions that improve the quality of life for our customers, while building 
                  lasting relationships based on trust and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and preferred plumbing and water treatment service provider 
                  in Nigeria, known for our commitment to quality, innovation, and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Work With a Trusted Team
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Experience the Kika Plumbing difference. Contact us today for professional service you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 h-14"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
