import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Calendar
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@leapmile.com",
      subtitle: "Get in touch for inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Monday to Friday, 9AM - 6PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Drive, Tech Hub",
      subtitle: "San Francisco, CA 94105"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM",
      subtitle: "Weekend support available"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-accent/30">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Build the Future
              <span className="block text-primary">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to revolutionize your operations? Get in touch with our team of experts 
              to discuss your project requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <MessageSquare className="h-6 w-6 text-primary mr-2" />
                    Send us a message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          First Name *
                        </label>
                        <Input placeholder="John" className="w-full" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Last Name *
                        </label>
                        <Input placeholder="Doe" className="w-full" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email *
                        </label>
                        <Input type="email" placeholder="john@company.com" className="w-full" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Phone
                        </label>
                        <Input placeholder="+1 (555) 123-4567" className="w-full" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Company
                      </label>
                      <Input placeholder="Your Company Name" className="w-full" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Project Type
                      </label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                        <option value="">Select a service</option>
                        <option value="robotics">Autonomous Robotics</option>
                        <option value="logistics">Smart Logistics</option>
                        <option value="automation">Industrial Automation</option>
                        <option value="software">AI-Powered Software</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project requirements..." 
                        className="w-full min-h-[120px]" 
                      />
                    </div>

                    <Button className="w-full bg-tech-gradient hover:shadow-tech text-lg py-3">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg text-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Live Chat
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{info.title}</h4>
                          <p className="text-foreground font-medium">{info.details}</p>
                          <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="p-4 bg-primary/5 border-primary/20">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-primary mb-2">24/7 Emergency Support</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    For critical system issues and urgent technical support
                  </p>
                  <p className="font-medium text-foreground">+1 (555) 911-TECH</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;