import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { MapPin, ArrowRight } from "lucide-react";
type EventItem = {
  id: string;
  title: string;
  location: string;
  description: string;
  logoUrl?: string;
};
const Events = () => {
  const events: EventItem[] = [{
    id: "IMS2025",
    title: "IMS - 2025",
    location: "Bengaluru",
    description: "Leapmile Robotics showcased its latest innovations in warehouse automation and robotics at IMS 2025 Bengaluru. Visitors experienced live demos of autonomous robots and smart warehouse systems, highlighting how Leapmile's technology is driving next-generation logistics efficiency. The event created valuable opportunities for collaboration and positioned Leapmile as a key force in India's robotics and automation landscape.",
    logoUrl: "https://indiamanufacturingshow.com/wp-content/uploads/2024/08/IMS-LOGO.png"
  }];
  const eventsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Events | Leapmile Robotics",
    description: "Explore Leapmile Robotics events, showcases, and exhibitions highlighting our automation innovations.",
    isPartOf: {
      "@type": "WebSite",
      name: "Leapmile Robotics",
      url: "https://leapmileweb.lovable.app"
    }
  };
  return <div className="min-h-screen bg-background">
      <SEO title="Events | Leapmile Robotics" description="Explore Leapmile Robotics events, showcases, and exhibitions highlighting our automation innovations." keywords="Leapmile Robotics events, IMS 2025, Bengaluru, warehouse automation events" canonical="/events" schemaData={eventsSchema} />

      <div className="pt-12" />

      <section className="container mx-auto px-6 md:px-12 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Our Events
          </h1>
          <p className="text-muted-foreground text-center">
            Discover our latest exhibitions, showcases, and innovation highlights
          </p>
        </div>

        <div className="space-y-6">
          {events.map(event => <Link key={event.id} to={`/events/${event.id}`} className="block group">
              <div className="border border-border rounded-lg p-6 md:p-8 hover:border-primary hover:shadow-lg transition-all duration-300 bg-card">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  {/* Left: Logo */}
                  {event.logoUrl && <div className="flex-shrink-0">
                      <img src={event.logoUrl} alt={`${event.title} Logo`} className="h-24 md:h-32 w-auto object-contain" />
                    </div>}

                  {/* Right: Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h2>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm md:text-base">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium pt-2">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>)}
        </div>
      </section>

      <Footer />
    </div>;
};
export default Events;