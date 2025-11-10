import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { MapPin, Play, Tag, ArrowLeft } from "lucide-react";

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
      id: "IMS-2025",
      title: "IMS-2025",
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

      <Footer />
    </div>
  );
};

export default EventDetail;
