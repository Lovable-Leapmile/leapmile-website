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
const ContactSection = () => {
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
      let emailMessage = `Name: ${data.name}, Email: ${data.email}, Phone: ${data.phone}, Company: ${data.company}, Select Service: ${data.service}, Message: ${data.message}`;
      if (data.service === "schedule-demo" && selectedDate && selectedTime) {
        emailMessage += `, Demo Date: ${selectedDate.toDateString()}, Demo Time: ${selectedTime}`;
      }
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
        setSelectedDate(undefined);
        setSelectedTime("");
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
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
    subtitle: "Monday to Friday, 9AM - 6PM"
  }, {
    icon: MapPin,
    title: "Visit Us",
    details: `216/2, Plot No 8 SS Commercial Estate, Nagavarpalya, C.V. Raman Nagar`,
    subtitle: "Bangalore - 560093"
  }, {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9AM - 6PM",
    subtitle: "Weekend support available"
  }];
  return;
};
export default ContactSection;