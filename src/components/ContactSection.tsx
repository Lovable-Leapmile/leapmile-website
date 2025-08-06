import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, CheckCircle } from "lucide-react";
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const { toast } = useToast();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const emailMessage = `Name: ${data.name}, Email: ${data.email}, Phone: ${data.phone}, Company: ${data.company}, Select Service: ${data.service}, Message: ${data.message}`;
      
      const params = new URLSearchParams({
        msg_type: 'regular',
        email_to_address: 'support@leapmile.com',
        email_from_address: 'support@leapmile.com',
        email_subject: 'Product Request',
        email_message: emailMessage
      });

      const response = await fetch(`https://newproduction.qikpod.com:8985/notifications/email/send/?${params}`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE4NjQzNzUxODN9.3nKvoS0uuSwwZXPnv0-MyXKucUnpMBlCJuI97FR84z4'
        }
      });

      if (response.ok) {
        toast({
          title: "Mail Sent Successfully!",
          description: "We'll get back to you soon.",
          duration: 5000,
          className: "bg-green-50 border-green-200",
          action: <CheckCircle className="h-5 w-5 text-green-600" />
        });
        reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };
  const contactInfo = [{
    icon: Mail,
    title: "Email Us",
    details: "hello@leapmile.com",
    subtitle: "Get in touch for inquiries"
  }, {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    subtitle: "Monday to Friday, 9AM - 6PM"
  }, {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Innovation Drive, Tech Hub",
    subtitle: "San Francisco, CA 94105"
  }, {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9AM - 6PM",
    subtitle: "Weekend support available"
  }];
  return <section id="contact" className="py-20 bg-accent/30">
      <div className="page-wrapper">
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
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Name *
                      </label>
                      <Input 
                        {...register("name", { required: "Name is required" })}
                        placeholder="John Doe" 
                        className="w-full" 
                      />
                      {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email *
                        </label>
                        <Input 
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          type="email" 
                          placeholder="john@company.com" 
                          className="w-full" 
                        />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Phone
                        </label>
                        <Input 
                          {...register("phone")}
                          placeholder="+1 (555) 123-4567" 
                          className="w-full" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Company
                      </label>
                      <Input 
                        {...register("company")}
                        placeholder="Your Company Name" 
                        className="w-full" 
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Select Service
                      </label>
                      <select 
                        {...register("service")}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="nano-warehouse">Nano Warehouse</option>
                        <option value="qikpod-smart-locker">Qikpod Smart locker</option>
                        <option value="consultation">Consultation</option>
                        <option value="schedule-demo">Schedule Demo</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea 
                        {...register("message", { required: "Message is required" })}
                        placeholder="Tell us about your project requirements..." 
                        className="w-full min-h-[120px]" 
                      />
                      {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-tech-gradient hover:shadow-tech text-lg py-3"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
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
                {contactInfo.map((info, index) => <Card key={index} className="p-4">
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
                  </Card>)}
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
    </section>;
};
export default ContactSection;