import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["09033421523", "Available 24/7"],
      action: "tel:09033421523"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["kikasplumbing@gmail.com", "support@kikaplumbing.com"],
      action: "mailto:kikasplumbing@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Lagos, Nigeria", "Serving all areas"],
      action: null
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["24/7 Emergency Service", "Mon-Sat: 8AM - 6PM Regular"],
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/90">
              Get in touch with our team. We're here to help with all your plumbing and water treatment needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-hover border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={`text-sm ${idx === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                      {detail}
                    </p>
                  ))}
                  {info.action && (
                    <Button 
                      variant="link" 
                      className="mt-2 text-primary hover:text-secondary p-0"
                      asChild
                    >
                      <a href={info.action}>Contact Now</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+254 XXX XXX XXX"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your plumbing needs..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="btn-cta w-full md:w-auto px-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <MessageSquare className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="gradient-primary text-white border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  For urgent plumbing issues or emergency services, call us directly. 
                  Our team is available 24/7 to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary  text-lg px-8 h-14"
                    asChild
                  >
                    <a href="tel:09033421523">
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-primary text-white hover:bg-primary/90 text-lg px-8 h-14"
                    asChild
                  >
                    <a href="https://wa.me/2349033421523" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 w-5 h-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Service Area
            </h2>
            <p className="text-muted-foreground mb-8">
              We proudly serve Lagos and surrounding areas. Contact us to confirm service availability in your location.
            </p>
            <div className="bg-muted/50 rounded-2xl p-12 border-2 border-border">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-primary mb-2">Lagos, Nigeria</p>
              <p className="text-muted-foreground">
                Serving all residential, commercial, and industrial areas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
