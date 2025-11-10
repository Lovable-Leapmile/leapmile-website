import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { MapPin, Play, Tag, ArrowLeft, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type EventItem = {
  id: string;
  title: string;
  location: string;
  description: string;
  videoUrl?: string;
  tags?: string[];
  caption?: string;
};

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();

  const events: EventItem[] = [
    {
      id: "IMS2025",
      title: "IMS 2025",
      location: "Bengaluru",
      description:
        "Leapmile Robotics showcased its cutting-edge warehouse automation and robotics systems at IMS 2025, Bengalore — connecting innovation, technology, and industry leaders under one roof.",
      videoUrl:
        "https://leapmile-website.blr1.digitaloceanspaces.com/Leapmile_IMS_EVENT.mp4",
      tags: [
        "#IMS2025",
        "#Bengaluru",
        "#LeapmileRobotics",
        "#Automation",
        "#Innovation",
      ],
      caption:
        "Leapmile Robotics at IMS 2025: Powering the Future of Warehousing",
    },
  ];

  const event = events.find((e) => e.id === eventId);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeFlowIndex, setActiveFlowIndex] = useState<number | null>(null);

  const videoFlows: { title: string; seconds: number }[] = [
    { title: "Conveyor", seconds: 7 },
    { title: "Shuttle", seconds: 15 },
    { title: "Secure Baydoor", seconds: 36 },
    { title: "Scissor Lift", seconds: 47 },
    { title: "Smart Door", seconds: 70 },
    { title: "Pick to Light", seconds: 70 },
    { title: "Picker Arm", seconds: 79 },
    { title: "AMR", seconds: 113 },
  ];

  useEffect(() => {
    if (videoRef.current) {
      try {
        videoRef.current.playbackRate = 1.25;
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      } catch (_) {
        // ignore autoplay rejection
      }
    }
  }, [eventId]);

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Event Not Found</h1>
          <Link
            to="/events"
            className="text-primary hover:underline flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${event.title} - ${event.location}`,
    description: event.description,
    location: {
      "@type": "Place",
      name: event.location,
    },
    organizer: {
      "@type": "Organization",
      name: "Leapmile Robotics",
      url: "https://leapmileweb.lovable.app",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${event.title} - ${event.location} | Leapmile Robotics`}
        description={event.description}
        keywords={`${event.title}, ${event.location}, Leapmile Robotics, warehouse automation`}
        canonical={`/events/${eventId}`}
        schemaData={eventSchema}
      />

      <div className="pt-12" />

      <section className="container mx-auto px-6 md:px-12 py-10">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
              {event.title} — {event.location}
            </h1>
            <p className="mt-2 text-muted-foreground">{event.description}</p>
          </div>

          {event.videoUrl && (
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-4/5">
                <div className="rounded-lg overflow-hidden border border-border">
                  <video
                    ref={videoRef}
                    src={event.videoUrl}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-auto"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <aside className="w-full md:w-1/5">
                <div className="border border-border rounded-lg p-3 md:p-4">
                  <div className="text-sm font-medium text-foreground mb-2">
                    Robot Components
                  </div>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
                    {videoFlows.map((flow, index) => (
                      <button
                        key={flow.title}
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.currentTime = flow.seconds;
                            try {
                              videoRef.current.play();
                              videoRef.current.playbackRate = 1.25;
                            } catch (_) {
                              // ignore
                            }
                          }
                          setActiveFlowIndex(index);
                        }}
                        className={`text-left text-xs md:text-sm px-3 py-2 rounded-md border transition-colors whitespace-nowrap overflow-hidden text-ellipsis ${
                          activeFlowIndex === index
                            ? "border-primary bg-accent/40 text-accent-foreground"
                            : "border-border hover:bg-accent/30 hover:text-accent-foreground"
                        }`}
                      >
                        {flow.title}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          )}

          {event.caption && (
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <Play className="h-4 w-4" /> {event.caption}
            </div>
          )}

          {event.tags && event.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-border text-muted-foreground"
                >
                  <Tag className="h-3 w-3" /> {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PDF Brochure Section */}
      {eventId === "IMS2025" && (
        <section className="container mx-auto px-6 md:px-12 py-10">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">Event Brochure</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Preview our comprehensive brochure showcasing Leapmile Robotics solutions
              </p>
              <div className="w-full h-[400px] border border-border rounded-lg overflow-hidden bg-muted/10 shadow-sm">
                <iframe
                  src="https://leapmile-website.blr1.digitaloceanspaces.com/leapmile_brochure.pdf"
                  className="w-full h-full"
                  title="Leapmile Brochure Preview"
                />
              </div>
              <Button asChild className="mt-4 w-full md:w-auto">
                <a
                  href="https://leapmile-website.blr1.digitaloceanspaces.com/leapmile_brochure.pdf"
                  download="Leapmile_Brochure.pdf"
                  className="inline-flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Full Brochure
                </a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Event Gallery Section */}
      {eventId === "IMS2025" && (
        <section className="container mx-auto px-6 md:px-12 py-10">
          <div className="space-y-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Event Gallery</h2>
              <p className="text-muted-foreground">
                Experience the highlights from our booth at IMS 2025 Bengaluru — showcasing live demonstrations, 
                engaging conversations, and innovative warehouse automation solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { image: "DSC07752.JPG", span: "col-span-2 row-span-2" },
                { image: "DSC07864.JPG", span: "col-span-1 row-span-1" },
                { image: "DSC07925.JPG", span: "col-span-1 row-span-1" },
                { image: "DSC08039.JPG", span: "col-span-1 row-span-2" },
                { image: "DSC08109.JPG", span: "col-span-1 row-span-1" },
                { image: "DSC08137.JPG", span: "col-span-2 row-span-1" },
                { image: "DSC08153.JPG", span: "col-span-1 row-span-1" },
                { image: "DSC08174.JPG", span: "col-span-1 row-span-2" },
                { image: "DSC08321.JPG", span: "col-span-1 row-span-1" },
                { image: "DSC08323.JPG", span: "col-span-2 row-span-2" },
                { image: "DSC08545.JPG", span: "col-span-1 row-span-1" },
                { image: "DSC08698.JPG", span: "col-span-1 row-span-1" },
                { image: "stall1.jpeg", span: "col-span-1 row-span-1" },
                { image: "stall2.jpeg", span: "col-span-1 row-span-2" },
                { image: "stall3.jpeg", span: "col-span-2 row-span-1" },
                { image: "stall4.jpeg", span: "col-span-1 row-span-1" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.span} rounded-lg overflow-hidden group relative cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={`https://leapmile-website.blr1.digitaloceanspaces.com/${item.image}`}
                    alt={`IMS 2025 Event - Booth Image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default EventDetail;
