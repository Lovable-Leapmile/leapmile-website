import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, CheckCircle } from "lucide-react";
import DateTimePicker from "./DateTimePicker";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  demoDate?: string;
  demoTime?: string;
}

const QikpodContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    },
    watch,
    setValue
  } = useForm<ContactFormData>();
  
  const {
    toast
  } = useToast();
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const watchedService = watch("service");

  // Clear date/time when service changes away from "Schedule Demo"
  useEffect(() => {
    if (watchedService !== "schedule-demo") {
      setSelectedDate(undefined);
      setSelectedTime("");
      setValue("demoDate", "");
      setValue("demoTime", "");
    }
  }, [watchedService, setValue]);
  
  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Qikpod Contact Form - Starting submission:', data);
      
      let emailMessage = `Name: ${data.name}, Email: ${data.email}, Phone: ${data.phone}, Company: ${data.company}, Select Service: ${data.service}, Message: ${data.message}`;
      if (data.service === "schedule-demo" && selectedDate && selectedTime) {
        emailMessage += `, Demo Date: ${selectedDate.toDateString()}, Demo Time: ${selectedTime}`;
      }
      
      console.log('Qikpod Contact Form - Email message prepared:', emailMessage);
      
      const params = new URLSearchParams({
        msg_type: 'regular',
        email_to_address: 'support@leapmile.com',
        email_from_address: 'support@leapmile.com',
        email_subject: 'Product Request',
        email_message: emailMessage
      });
      
      console.log('Qikpod Contact Form - API params:', params.toString());
      console.log('Qikpod Contact Form - Making API call to:', 'https://newproduction.qikpod.com:8985/notifications/email/send/?');
      
      const response = await fetch(`https://newproduction.qikpod.com:8985/notifications/email/send/?${params}`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE4NjQzNzUxODN9.3nKvoS0uuSwwZXPnv0-MyXKucUnpMBlCJuI97FR84z4'
        }
      });
      
      console.log('Qikpod Contact Form - API response status:', response.status);
      console.log('Qikpod Contact Form - API response ok:', response.ok);
      
      if (response.ok) {
        const responseText = await response.text();
        console.log('Qikpod Contact Form - API response text:', responseText);
        
        toast({
          title: "Mail Sent Successfully!",
          description: "We'll get back to you soon.",
          duration: 5000,
          className: "bg-green-50 border-green-200",
          action: <CheckCircle className="h-5 w-5 text-green-600" />
        });
        reset();
        setSelectedDate(undefined);
        setSelectedTime("");
      } else {
        const errorText = await response.text();
        console.error('Qikpod Contact Form - API error response:', errorText);
        throw new Error(`Failed to send email: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('Qikpod Contact Form - Error occurred:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000
      });
    }
  };
  
  const contactInfo = [{
    icon: Mail,
    title: "Email Us",
    details: "support@leapmile.com",
    subtitle: "Get in touch for inquiries"
  }, {
    icon: Phone,
    title: "Call Us",
    details: "(+91) 80470-95986",
    subtitle: "Speak with our team"
  }, {
    icon: MapPin,
    title: "Visit Us",
    details: "Bangalore, KA",
    subtitle: "Schedule a meeting"
  }, {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 AM - 6:00 PM",
    subtitle: "IST Timezone"
  }];

  const services = [
    { value: "general-inquiry", label: "General Inquiry" },
    { value: "product-information", label: "Product Information" },
    { value: "schedule-demo", label: "Schedule Demo" },
    { value: "technical-support", label: "Technical Support" },
    { value: "partnership", label: "Partnership Opportunity" }
  ];

  return (
    <section id="contact" className="py-20 bg-yellow-100">
      <div className="page-wrapper">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-yellow-200 text-black border-yellow-300 mb-4">
              <MessageSquare className="h-3 w-3 mr-1" />
              Contact Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Let's Build Something
              <span className="text-yellow-600"> Amazing Together</span>
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Ready to revolutionize your logistics operations? Get in touch with our team to explore how QikPod can transform your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white border-yellow-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                          <info.icon className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">{info.title}</h4>
                          <p className="text-black font-medium">{info.details}</p>
                          <p className="text-black/60 text-sm">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-yellow-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-black">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Full Name *
                        </label>
                        <Input
                          {...register("name", { required: "Name is required" })}
                          className="bg-white border-yellow-300 text-black focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Email Address *
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
                          className="bg-white border-yellow-300 text-black focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="Enter your email"
                          required
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Phone Number
                        </label>
                        <Input
                          {...register("phone")}
                          className="bg-white border-yellow-300 text-black focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Company
                        </label>
                        <Input
                          {...register("company")}
                          className="bg-white border-yellow-300 text-black focus:border-yellow-500 focus:ring-yellow-500"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Service Interest *
                      </label>
                      <select
                        {...register("service", { required: "Please select a service" })}
                        className="w-full px-3 py-2 border border-yellow-300 rounded-md bg-white text-black focus:border-yellow-500 focus:ring-yellow-500"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                      )}
                    </div>

                    {watchedService === "schedule-demo" && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-black mb-2">
                            Preferred Date
                          </label>
                          <DateTimePicker
                            selectedDate={selectedDate}
                            selectedTime={selectedTime}
                            onDateChange={setSelectedDate}
                            onTimeChange={setSelectedTime}
                            onClear={() => {
                              setSelectedDate(undefined);
                              setSelectedTime("");
                            }}
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Message *
                      </label>
                      <Textarea
                        {...register("message", { required: "Message is required" })}
                        rows={4}
                        className="bg-white border-yellow-300 text-black focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Tell us about your requirements..."
                        required
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg font-semibold transition-colors"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QikpodContactSection;
