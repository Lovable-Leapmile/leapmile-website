import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { navigateToQikpodContact } from "@/lib/navigation";
import { Smartphone, Package, Bell, User, Users, Building, BarChart3 } from "lucide-react";
import q35 from "@/assets/q35.png";
import QikpodFooter from "@/components/QikpodFooter";

const DigitalMailroom = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    navigateToQikpodContact(navigate, location.pathname);
  };

  const solutions = [
    { name: "Retail Click & Collect", path: "/qikpod/solutions/retail-click-collect", active: false },
    { name: "Last Mile Delivery", path: "/qikpod/solutions/last-mile-delivery", active: false },
    { name: "Digital Mailroom", path: "/qikpod/solutions/digital-mailroom", active: true },
    { name: "University Parcel Hub", path: "/qikpod/solutions/university-parcel-hub", active: false },
    { name: "Late Night Deliveries", path: "/qikpod/solutions/late-night-deliveries", active: false },
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
      icon: <Users className="h-12 w-12 text-qikpod-yellow" />,
      title: "For Residents",
      description: "Safe & private, no courier calls, enhanced experience"
    },
    {
      icon: <Building className="h-12 w-12 text-qikpod-yellow" />,
      title: "For Property Managers",
      description: "No storage issues, no disputes, no extra workload"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-qikpod-yellow" />,
      title: "Usage & Billing Reports",
      description: "Reduced failed deliveries, efficient coordination"
    }
  ];

  return (
    <div className="min-h-screen bg-qikpod-white">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Qikpod/Images/q74.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="page-wrapper text-center text-white pt-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-qikpod-yellow">
            Hassle-free mailroom management for Corporates and Residents.
          </h1>
          <h3 className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Our robots store, sort, and hand off parcels to your building residents.
          </h3>
          <Button 
            onClick={handleContactClick}
            className="bg-qikpod-yellow hover:bg-qikpod-yellow/90 text-qikpod-black px-8 py-3 text-lg font-semibold"
          >
            Reach Out
          </Button>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-16 bg-qikpod-white">
        <div className="page-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-4">
              How do we make mailroom operations efficient?
            </h2>
            <p className="text-lg text-qikpod-black/80 mb-8">
              A safe, secure, and contact-free parcel management experience
            </p>
            <h3 className="text-xl font-semibold text-qikpod-black">
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
                  <div className="w-2 h-2 bg-qikpod-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-qikpod-black">Manage orders in real time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-qikpod-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-qikpod-black">Save time on sorting and delivery</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-qikpod-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-qikpod-black">Optimize storage & manage inventory</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-qikpod-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-qikpod-black">Boost community satisfaction</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-qikpod-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-qikpod-black">Instant delivery notifications & contact-free retrieval</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 bg-qikpod-yellow-light">
        <div className="page-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-4">
              How it works..
            </h2>
            <p className="text-lg text-qikpod-black/80 max-w-2xl mx-auto mb-8">
              Provide a secure, curbside pickup experience with QikPod Parcel Management Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {timelineSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-qikpod-yellow">
                    {step.icon}
                  </div>
                </div>
                <div className="relative">
                  <div className="w-8 h-8 bg-primary text-qikpod-yellow-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-4 left-1/2 w-full h-px bg-qikpod-yellow/30 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-qikpod-black mb-2">{step.title}</h3>
                <p className="text-qikpod-black/80 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90 text-qikpod-yellow-foreground px-8 py-3 text-lg"
            >
              Request Locker
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        className="py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://leapmile-website.blr1.cdn.digitaloceanspaces.com/bg_pattern_qikpod.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="page-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-4">Benefits</h2>
            <p className="text-lg text-qikpod-black/80">
              Robots can help you gain customers, save costs, and serve them efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-qikpod-white border-qikpod-yellow/20">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-qikpod-black/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-8 bg-qikpod-yellow-light">
        <div className="page-wrapper">
          <div className="flex flex-wrap justify-center gap-4">
            {solutions.map((solution, index) => (
              <Button
                key={index}
                variant={solution.active ? "default" : "outline"}
                onClick={() => solution.path && navigate(solution.path)}
                className={`px-6 py-2 ${solution.active ? 'bg-qikpod-yellow text-qikpod-black hover:bg-qikpod-yellow/90' : 'border-qikpod-yellow text-qikpod-black hover:bg-qikpod-yellow/10'}`}
              >
                {solution.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      <QikpodFooter />
    </div>
  );
};

export default DigitalMailroom;