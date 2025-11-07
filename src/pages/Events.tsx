import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { MapPin, Play, Tag } from "lucide-react";

type EventItem = {
  id: string;
  title: string;
  location: string;
  description: string;
  videoUrl?: string;
  tags?: string[];
  caption?: string;
};
const Events = () => {
  const events: EventItem[] = [
    {
      id: "ims-2025-bengaluru",
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

  const [selectedId, setSelectedId] = useState(events[0].id);
  const selected = events.find((event) => event.id === selectedId) as EventItem;
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
  }, [selectedId]);

  const eventsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Events | Leapmile Robotics",
    description:
      "Explore Leapmile Robotics events, showcases, and exhibitions highlighting our automation innovations.",
    isPartOf: {
      "@type": "WebSite",
      name: "Leapmile Robotics",
      url: "https://leapmileweb.lovable.app",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Events | Leapmile Robotics"
        description="Explore Leapmile Robotics events, showcases, and exhibitions highlighting our automation innovations."
        keywords="Leapmile Robotics events, IMS 2025, Bengaluru, warehouse automation events"
        canonical="/events"
        schemaData={eventsSchema}
      />

      {/* Spacer to clear fixed header */}
      <div className="pt-12" />

      <section className="container mx-auto px-6 md:px-12 py-10">
        {/* Tabs */}
        <div className="flex items-stretch gap-4 overflow-x-auto pb-4">
          {events.map((event) => {
            const isActive = event.id === selectedId;
            return (
              <button
                key={event.id}
                onClick={() => {
                  setSelectedId(event.id);
                  setActiveFlowIndex(null);
                  setTimeout(() => {
                    const details = document.getElementById("event-details");
                    details?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 50);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-md border whitespace-nowrap transition-colors ${
                  isActive
                    ? "border-primary bg-accent/40 text-accent-foreground"
                    : "border-border hover:bg-accent/30 hover:text-accent-foreground"
                }`}
              >
                {event.id === "ims-2025-bengaluru" && (
                  <img
                    src="https://indiamanufacturingshow.com/wp-content/uploads/2024/08/IMS-LOGO.png"
                    alt="IMS 2025 Logo"
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                )}
                <div className="text-left">
                  <div className="font-medium text-base md:text-lg">{event.title}</div>
                  <div className="text-xs md:text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3 md:h-4 md:w-4" /> {event.location}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Details */}
        <div id="event-details" className="mt-4">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                {selected.title} — {selected.location}
              </h2>
              <p className="mt-2 text-muted-foreground">{selected.description}</p>
            </div>

            {selected.videoUrl && (
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-4/5">
                  <div className="rounded-lg overflow-hidden border border-border">
                    <video
                      ref={videoRef}
                      src={selected.videoUrl}
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
                    <div className="text-sm font-medium text-foreground mb-2">Robot Components</div>
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

            {selected.caption && (
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Play className="h-4 w-4" /> {selected.caption}
              </div>
            )}

            {selected.tags && selected.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {selected.tags.map((tag) => (
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;


