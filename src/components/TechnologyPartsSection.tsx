import ScrollReveal from "@/components/ScrollReveal";
import VideoPopup from "@/components/VideoPopup";
import { Package, RefreshCw, Layers, Truck, Cpu, Settings } from "lucide-react";

// Import images
import binSizes from "@/assets/bin-sizes.png";
import redundantResilient from "@/assets/redundant-resilient.png";
import dimensions from "@/assets/dimensions.png";
import shuttles from "@/assets/shuttles.png";
import allTrays from "@/assets/all-trays.png";
import trayHalfTray from "@/assets/tray-half-tray.png";
import conveyorBelt from "@/assets/conveyor-belt.png";
import scaraRobot from "@/assets/scara-robot.png";
import pickingAreas from "@/assets/picking-areas.png";
import safePickup from "@/assets/safe-pickup.png";
import pickingArea1 from "@/assets/picking-area1.png";
import orchestration from "@/assets/orchestration.png";
import dashboard from "@/assets/dashboard.png";
import apps from "@/assets/apps.png";
import api2 from "@/assets/api2.png";

interface TechPartProps {
  title: string;
  detail: string;
  image: string;
  videoUrl?: string;
  reverse?: boolean;
}

const TechPart = ({ title, detail, image, videoUrl, reverse = false }: TechPartProps) => {
  return (
    <ScrollReveal>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Content */}
        <div className={reverse ? 'lg:col-start-2' : ''}>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            {title}
          </h3>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            {detail}
          </p>
          {videoUrl && (
            <VideoPopup videoUrl={videoUrl} />
          )}
        </div>
        
        {/* Image */}
        <div className={reverse ? 'lg:col-start-1' : ''}>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const ScaraSection = () => {
  const scaraApplications = [
    { icon: Package, title: "PART FEEDING", description: "SCARA robots can rapidly pick parts from a feeder bowl or tray and place them in a specific orientation for further processing." },
    { icon: Layers, title: "COLLATING", description: "SCARA robots can collect and assemble multiple components into a single unit, ensuring consistent product quality." },
    { icon: RefreshCw, title: "SINGULATION", description: "By separating and orienting objects, SCARA robots can ensure that parts are presented in a specific way for downstream processes." },
    { icon: Settings, title: "INSPECTION", description: "SCARA robots can precisely position parts for visual or automated inspection." }
  ];

  return (
    <ScrollReveal>
      <div className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              SCARA
            </h3>
            <h4 className="text-xl font-semibold text-primary mb-6">
              High-Speed Pick and Place for Sorting Applications
            </h4>
            <p className="text-lg leading-relaxed text-foreground mb-8">
              SCARA (Selective Compliance Assembly Robot Arm) robots are a popular choice for high-speed pick-and-place operations, particularly in sorting applications. Their unique design, featuring three axes of motion (two rotational and one vertical), makes them ideal for handling objects on horizontal surfaces with exceptional speed and precision. Our SCARA is equipped with a modular attachment, allowing different grippers to be used for various operations.
            </p>
            
            <h5 className="text-lg font-semibold text-foreground mb-6">
              SCARA robots excel in a variety of sorting applications, including:
            </h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {scaraApplications.map((app, index) => (
                <div key={index} className="bg-card rounded-lg p-4 border border-border">
                  <div className="flex items-start gap-3">
                    <app.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="font-semibold text-foreground mb-2">{app.title}</h6>
                      <p className="text-sm text-muted-foreground">{app.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <VideoPopup videoUrl="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/SCARA.mp4" />
          </div>
          
          {/* Image */}
          <div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={scaraRobot} 
                alt="SCARA Robot" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const TechnologyPartsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="page-wrapper">
        {/* Flexible Storage Model */}
        <TechPart 
          title="Flexible Storage Model"
          detail="Racks offer versatile storage, accommodating bins of various sizes for flexible and adaptable storage solutions. From small bins for organizing small components to large bins for bulkier items, the racks can effortlessly accommodate them all. This ensures the storage space can evolve along with changing requirements, making it a practical choice for environments where versatility is key."
          image={binSizes}
        />

        {/* Redundant & Resilient */}
        <TechPart 
          title="Redundant & Resilient"
          detail="All components are designed for optimal performance, high reliability, and to ensure a safe environment for human and machine interactions. Each warehouse can be designed for desired redundancy levels by introducing as many additional shuttles, extra racks, and picking stations as are necessary to achieve an optimal level of resilience."
          image={redundantResilient}
          reverse
        />

        {/* Robot Components Header */}
        <ScrollReveal>
          <div className="text-center py-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Robot Components
            </h2>
          </div>
        </ScrollReveal>

        {/* Racks */}
        <TechPart 
          title="Racks"
          detail="Racks constructed using readily available high-strength aluminum extrusions can be set up in flexible, high-density layouts for rapid deployment at both new locations and within existing infrastructures. The platform ensures optimal volumetric efficiency via dynamic positioning of totes within double-deep storage shelving."
          image={dimensions}
        />

        {/* Shuttles */}
        <TechPart 
          title="Shuttles"
          detail="Shuttles are an integral element that transport totes and trays between racks, facilitating automated decanting, storage, and retrieval. Prioritizing worker safety and efficiency, they expedite picking operations through intelligent software orchestration, intelligent routing, and efficient design. Shuttles adapt to diverse tote & tray sizes and accommodate multiple storage depths on both sides of the rack aisle."
          image={shuttles}
          videoUrl="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/Store&Retrieve.mp4"
          reverse
        />

        {/* Totes */}
        <TechPart 
          title="Totes"
          detail="Totes employed are industry-standard and can be partitioned into 2, 3, 4, 6, or 8 compartments using removable dividers. This approach optimizes volume utilization, accommodates a greater number of SKUs, and reduces manual errors. Tote size and distribution can be easily adjusted by repositioning within the racks as per requirements."
          image={allTrays}
        />

        {/* Trays */}
        <TechPart 
          title="Trays"
          detail="Tray design optimizes existing infrastructure to accommodate various carton sizes and totes. The utilization of trays expedites the automated insertion and retrieval of items from storage, including full and mixed case picking as well. By accommodating carton sizes up to 600 x 400 x 400 mm (23.5 x 15.5 x 15.5 in), this reduces the need to decant cartons."
          image={trayHalfTray}
          reverse
        />

        {/* Conveyors */}
        <TechPart 
          title="Conveyors"
          detail="The nanowarehouse platform integrates transport conveyors for intelligent tote injection and ejection. This system can interface with existing conveyor belts, rollers, AGVs, drones, etc., ensuring seamless integration with existing infrastructure and expedited goods access. (Optional)"
          image={conveyorBelt}
          videoUrl="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/conveyor.mp4"
        />

        {/* SCARA Robot */}
        <ScaraSection />

        {/* Pickup Stations Header */}
        <ScrollReveal>
          <div className="text-center py-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              🧾 Pickup Stations
            </h2>
          </div>
        </ScrollReveal>

        {/* Flexible Pickup Station */}
        <TechPart 
          title="🧺 Flexible Pickup Station"
          detail="Flexibility of the racking design allows nearly ad-hoc peripheral tote locations to be designated as direct pickup locations. This facilitates efficient decanting, sorting, picking, consolidation, audit, and dispatch operations."
          image={pickingAreas}
          reverse
        />

        {/* Secure Pickup Station */}
        <TechPart 
          title="Secure Pickup Station"
          detail="Secure kiosk-style picking and drop-off stations. The station is fully enclosed, allowing parcel access only post-authentication via QR/BAR codes or other authentication methods. Upon authentication, the station sliding door opens to grant users access to pick up items or drop new items. Post pickup or drop-off, the item's weight, height, and image are recorded and verified. The station is equipped with safety curtains to ensure unobstructed door movement and hand safety. (Optional)"
          image={safePickup}
          videoUrl="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/safepickup.mp4"
        />

        {/* Direct Pickup Station */}
        <TechPart 
          title="Direct Pickup Station"
          detail="Dynamic in-rack pickup locations are supported to allow for maximum flexibility and faster operations, especially at peak loads. The software and indicator systems support picking of multiple orders concurrently, separate order picking, or even whole case picking."
          image={pickingArea1}
          reverse
        />

        {/* Software Components Header */}
        <ScrollReveal>
          <div className="text-center py-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Software Components
            </h2>
          </div>
        </ScrollReveal>

        {/* Orchestration Software */}
        <TechPart 
          title="Orchestration Software"
          detail="The central orchestration software manages in real time the flow of goods and coordinates the movements of shuttles and conveyors for accessing precise and up-to-date information on all components and orders, tracking inventory, and ensuring overall warehouse operations are fully monitored in detail."
          image={orchestration}
        />

        {/* Central Dashboard */}
        <TechPart 
          title="Central Dashboard"
          detail="User-friendly interface for operators and managers to visualization in the overall warehouse, tasks in progress, capacities, and handle events. This dashboard leverages real-time data to facilitates swift decision-making and boosts warehouse efficiency."
          image={dashboard}
          videoUrl="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/dashb_vid.mp4"
          reverse
        />

        {/* Mobile Apps */}
        <TechPart 
          title="Mobile Apps"
          detail="Instantly downloadable, secure mobile applications are provided for warehouse staff to assist them in decanting, picking, auditing, and monitoring the overall tasks and status of infrastructure."
          image={apps}
        />

        {/* API */}
        <TechPart 
          title="API"
          detail="A comprehensive REST API that provides fine-grained access and control across the entire platform, ensures seamless integration with external software systems, and supports the development of custom scripts for specialized tasks."
          image={api2}
          reverse
        />
      </div>
    </section>
  );
};

export default TechnologyPartsSection;