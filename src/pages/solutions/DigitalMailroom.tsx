import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { navigateToContact } from "@/lib/navigation";
import { Smartphone, Package, Bell, User, Users, Building, BarChart3 } from "lucide-react";
import q35 from "@/assets/q35.png";
import Footer from "@/components/Footer";

const DigitalMailroom = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    navigateToContact(navigate, location.pathname);
  };

  const solutions = [
    { name: "Retail Click & Collect", path: "/solutions/retail-click-collect", active: false },
    { name: "Last Mile Delivery", path: "/solutions/last-mile-delivery", active: false },
    { name: "Digital Mailroom", path: "/solutions/digital-mailroom", active: true },
    { name: "University Parcel Hub", path: "/solutions/university-parcel-hub", active: false },
    { name: "Late Night Deliveries", path: "/solutions/late-night-deliveries", active: false },
  ];

  const timelineSteps = [
    { 
      icon: <Smartphone className="h-8 w-8" />, 
      title: "Order Online", 
      description: "Store receives online order and a QR code is generated" 
    },
    { 
      icon: <Package className="h-8 w-8" />, 
      title: "Process & Drop", 
      description: "Store processes the order & scans QR code to drop parcel" 
    },
    { 
      icon: <Bell className="h-8 w-8" />, 
      title: "Notify", 
      description: "User receives notification with unique QR Code" 
    },
    { 
      icon: <User className="h-8 w-8" />, 
      title: "Pickup", 
      description: "User scans the QR to receive parcel" 
    },
  ];

  const benefits = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "For Residents",
      description: "Safe & private, no courier calls, enhanced experience"
    },
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "For Property Managers",
      description: "No storage issues, no disputes, no extra workload"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Usage & Billing Reports",
      description: "Reduced failed deliveries, efficient coordination"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://leapmile-website.blr1.cdn.digitaloceanspaces.com/qikpod-bg.png')"
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Hassle-free mailroom management for Corporates and Residents.
          </h1>
          <h3 className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Our robots store, sort, and hand off parcels to your building residents.
          </h3>
          <Button 
            onClick={handleContactClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            Reach Out
          </Button>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How do we make mailroom operations efficient?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A safe, secure, and contact-free parcel management experience
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Elevate your residents experience
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={q35} alt="QikPod Solution" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Manage orders in real time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Save time on sorting and delivery</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Optimize storage & manage inventory</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Boost community satisfaction</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Instant delivery notifications & contact-free retrieval</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How it works..
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Provide a secure, curbside pickup experience with QikPod Parcel Management Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {timelineSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                </div>
                <div className="relative">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-4 left-1/2 w-full h-px bg-primary/30 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              Request Locker
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Robots can help you gain customers, save costs, and serve them efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {solutions.map((solution, index) => (
              <Button
                key={index}
                variant={solution.active ? "default" : "outline"}
                onClick={() => solution.path && navigate(solution.path)}
                className="px-6 py-2"
              >
                {solution.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DigitalMailroom;