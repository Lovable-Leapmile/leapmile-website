import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, Package, Truck, FileText, ScanLine, Settings, Bot, Cpu, MapPin, Cloud } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// Import images
import nanowarehouseView from "@/assets/nanowarehouse-view.png";
import binSizes from "@/assets/bin-sizes.png";
import redundantResilient from "@/assets/redundant-resilient.png";
import racksDimensions from "@/assets/racks-dimensions.png";
import shuttlesGroup from "@/assets/shuttles-group.png";
import allTotes from "@/assets/all-totes.png";
import trayHalfTray from "@/assets/tray-half-tray.png";
import conveyorBelt from "@/assets/conveyor-belt.png";
import scaraRobot from "@/assets/scara-robot.png";
import pickingAreas from "@/assets/picking-areas.png";
import safePickup from "@/assets/safe-pickup.png";
import pickingAreaDirect from "@/assets/picking-area-direct.png";
import orchestration from "@/assets/orchestration.png";
import dashboard from "@/assets/dashboard.png";
import mobileApps from "@/assets/mobile-apps.png";
import api from "@/assets/api.png";

interface VideoModalProps {
  videoUrl: string;
  children: React.ReactNode;
}

const VideoModal = ({ videoUrl, children }: VideoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <video 
          className="w-full h-auto" 
          controls 
          autoPlay
          onEnded={() => setIsOpen(false)}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  );
};

interface PartCardProps {
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  subheader?: string;
  additionalContent?: React.ReactNode;
}

const PartCard = ({ title, description, image, videoUrl, subheader, additionalContent }: PartCardProps) => (
  <ScrollReveal>
    <Card className="overflow-hidden group cursor-pointer">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative">
          {/* Image section - slides right on hover */}
          <div className="relative transition-all duration-500 ease-out group-hover:translate-x-4 group-hover:scale-105">
            <img 
              src={image} 
              alt={title}
              className="w-4/5 h-auto rounded-lg object-cover transition-transform duration-500 group-hover:rotate-1"
            />
          </div>
          
          {/* Content section - slides left on hover */}
          <div className="space-y-4 transition-all duration-500 ease-out group-hover:-translate-x-4 group-hover:scale-95">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            {subheader && (
              <h4 className="text-lg font-medium text-primary">{subheader}</h4>
            )}
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            {additionalContent}
            {videoUrl && (
              <VideoModal videoUrl={videoUrl}>
                <Button variant="outline" className="group/button">
                  <Play className="mr-2 h-4 w-4" />
                  View in Action
                </Button>
              </VideoModal>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  </ScrollReveal>
);

const SectionHeader = ({ title, icon: Icon, children }: { 
  title: string; 
  icon?: React.ComponentType<any>; 
  children?: React.ReactNode;
}) => (
  <ScrollReveal>
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-3 mb-4">
        {Icon && (
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center animate-fade-in">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      {children}
    </div>
  </ScrollReveal>
);

const NanoWarehouse = () => {
  const scaraApplications = [
    { icon: Package, title: "PART FEEDING", description: "Rapid pick from feeder bowl or tray" },
    { icon: Truck, title: "COLLATING", description: "Assemble components into units" },
    { icon: FileText, title: "SINGULATION", description: "Separate and orient for next process" },
    { icon: ScanLine, title: "INSPECTION", description: "Position for visual or automated scanning" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="page-wrapper">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              NanoWarehouse Technology
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
              Robotic Nano Warehouse platform transforms fulfilment automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nano Warehouses are compact fulfillment centers that are positioned close to customers and designed to efficiently manage a moderate volume of daily orders typically ranging from 1000 to 3000 items per day. The centers are typically of smaller scale, designed with automated infrastructure, and strategically placed in metropolitan areas. They are commonly found in densely populated areas such as tech parks, business centers, townships, and high-density metro localities.
              </p>
            </div>
            <div className="relative">
              <img 
                src={nanowarehouseView} 
                alt="Nano Warehouse View"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-16 bg-accent/5">
        <div className="page-wrapper">
          <SectionHeader title="Platform" icon={Settings}>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Components across the platform embody LeapMile's proprietary technology, meticulously crafted in-house designs. This approach pioneers innovative, more refined, and value-engineered solutions where each component is engineered for simplicity and efficacy, reflecting our vision for the future of warehouse automation that is modular, high-performing, and dependable.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg">
                <p className="text-lg font-medium text-foreground">
                  Our goal is streamlined solutions that are easy to implement, operate, upkeep, and expand, guided by this overarching philosophy.
                </p>
              </div>
            </div>
          </SectionHeader>
        </div>
      </section>

      {/* Component Sections */}
      <section className="py-16">
        <div className="page-wrapper space-y-16">
          
          {/* Storage Solutions */}
          <div className="space-y-8">
            <PartCard
              title="Flexible Storage Model"
              description="Racks offer versatile storage, accommodating bins of various sizes for flexible and adaptable storage solutions. From small bins for organizing small components to large bins for bulkier items, the racks can effortlessly accommodate them all. This ensures the storage space can evolve along with changing requirements, making it a practical choice for environments where versatility is key."
              image={binSizes}
            />
            
            <PartCard
              title="Redundant & Resilient"
              description="All components are designed for optimal performance, high reliability, and to ensure a safe environment for human and machine interactions. Each warehouse can be designed for desired redundancy levels by introducing as many additional shuttles, extra racks, and picking stations as are necessary to achieve an optimal level of resilience."
              image={redundantResilient}
            />
          </div>

          {/* Robot Components */}
          <div className="space-y-8">
            <SectionHeader title="Robot Components" icon={Bot} />
            
            <PartCard
              title="Racks"
              description="Racks constructed using readily available high-strength aluminum extrusions can be set up in flexible, high-density layouts for rapid deployment at both new locations and within existing infrastructures. The platform ensures optimal volumetric efficiency via dynamic positioning of totes within double-deep storage shelving."
              image={racksDimensions}
            />
            
            <PartCard
              title="Shuttles"
              description="Shuttles are an integral element that transport totes and trays between racks, facilitating automated decanting, storage, and retrieval. Prioritizing worker safety and efficiency, they expedite picking operations through intelligent software orchestration, intelligent routing, and efficient design. Shuttles adapt to diverse tote & tray sizes and accommodate multiple storage depths on both sides of the rack aisle."
              image={shuttlesGroup}
              videoUrl="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/Store&Retrieve.mp4"
            />
            
            <PartCard
              title="Totes"
              description="Totes employed are industry-standard and can be partitioned into 2, 3, 4, 6, or 8 compartments using removable dividers. This approach optimizes volume utilization, accommodates a greater number of SKUs, and reduces manual errors. Tote size and distribution can be easily adjusted by repositioning within the racks as per requirements."
              image={allTotes}
            />
            
            <PartCard
              title="Trays"
              description="Tray design optimizes existing infrastructure to accommodate various carton sizes and totes. The utilization of trays expedites the automated insertion and retrieval of items from storage, including full and mixed case picking as well. By accommodating carton sizes up to 600 x 400 x 400 mm (23.5 x 15.5 x 15.5 in), this reduces the need to decant cartons."
              image={trayHalfTray}
            />
            
            <PartCard
              title="Conveyors"
              description="The nanowarehouse platform integrates transport conveyors for intelligent tote injection and ejection. This system can interface with existing conveyor belts, rollers, AGVs, drones, etc., ensuring seamless integration with existing infrastructure and expedited goods access. (Optional)"
              image={conveyorBelt}
              videoUrl="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/conveyor.mp4"
            />
          </div>

          {/* SCARA Robot */}
          <div className="space-y-8">
            <SectionHeader title="SCARA Robot" icon={Cpu} />
            
            <PartCard
              title="SCARA"
              subheader="High-Speed Pick and Place for Sorting Applications"
              description="SCARA (Selective Compliance Assembly Robot Arm) robots are a popular choice for high-speed pick-and-place operations, particularly in sorting applications. Their unique design, featuring three axes of motion (two rotational and one vertical), makes them ideal for handling objects on horizontal surfaces with exceptional speed and precision. Our SCARA is equipped with a modular attachment, allowing different grippers to be used for various operations."
              image={scaraRobot}
              videoUrl="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/SCARA.mp4"
              additionalContent={
                <div className="space-y-4">
                  <h5 className="font-medium text-foreground">SCARA robots excel in a variety of sorting applications, including:</h5>
                  <div className="grid grid-cols-2 gap-4">
                    {scaraApplications.map((app, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                        <app.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h6 className="font-medium text-sm text-foreground">{app.title}</h6>
                          <p className="text-xs text-muted-foreground">{app.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />
          </div>

          {/* Pickup Stations */}
          <div className="space-y-8">
            <SectionHeader title="Pickup Stations" icon={MapPin} />
            
            <PartCard
              title="Flexible Pickup Station"
              description="Flexibility of the racking design allows nearly ad-hoc peripheral tote locations to be designated as direct pickup locations. This facilitates efficient decanting, sorting, picking, consolidation, audit, and dispatch operations."
              image={pickingAreas}
            />
            
            <PartCard
              title="Secure Pickup Station"
              description="Secure kiosk-style picking and drop-off stations. The station is fully enclosed, allowing parcel access only post-authentication via QR/BAR codes or other authentication methods. Upon authentication, the station sliding door opens to grant users access to pick up items or drop new items. Post pickup or drop-off, the item's weight, height, and image are recorded and verified. The station is equipped with safety curtains to ensure unobstructed door movement and hand safety. (Optional)"
              image={safePickup}
              videoUrl="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/safepickup.mp4"
            />
            
            <PartCard
              title="Direct Pickup Station"
              description="Dynamic in-rack pickup locations are supported to allow for maximum flexibility and faster operations, especially at peak loads. The software and indicator systems support picking of multiple orders concurrently, separate order picking, or even whole case picking."
              image={pickingAreaDirect}
            />
          </div>

          {/* Software Components */}
          <div className="space-y-8">
            <SectionHeader title="Software Components" icon={Cloud} />
            
            <PartCard
              title="Orchestration Software"
              description="The central orchestration software manages in real time the flow of goods and coordinates the movements of shuttles and conveyors for accessing precise and up-to-date information on all components and orders, tracking inventory, and ensuring overall warehouse operations are fully monitored in detail."
              image={orchestration}
            />
            
            <PartCard
              title="Central Dashboard"
              description="User-friendly interface for operators and managers to visualization in the overall warehouse, tasks in progress, capacities, and handle events. This dashboard leverages real-time data to facilitates swift decision-making and boosts warehouse efficiency."
              image={dashboard}
              videoUrl="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/dashb_vid.mp4"
            />
            
            <PartCard
              title="Mobile Apps"
              description="Instantly downloadable, secure mobile applications are provided for warehouse staff to assist them in decanting, picking, auditing, and monitoring the overall tasks and status of infrastructure."
              image={mobileApps}
            />
            
            <PartCard
              title="API"
              description="A comprehensive REST API that provides fine-grained access and control across the entire platform, ensures seamless integration with external software systems, and supports the development of custom scripts for specialized tasks."
              image={api}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NanoWarehouse;