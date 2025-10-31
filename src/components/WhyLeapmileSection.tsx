import ScrollReveal from "./ScrollReveal";
const WhyLeapmileSection = () => {
  return <section className="bg-background py-[35px]">
      <div className="page-wrapper">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why Choose Leapmile Robotics
            </h2>
            
            <h3 className="text-xl lg:text-2xl font-semibold text-muted-foreground">
              Smart Robotic Storage and Retrieval Systems
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our nano warehousing platform transforms fulfillment automation by optimizing labor-intensive logistics tasks. We enhance inventory management, accelerate warehouse operations, reduce manual tasks and errors, improve order accuracy, and significantly lower operational costs through intelligent robotics and AI-powered automation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>;
};
export default WhyLeapmileSection;