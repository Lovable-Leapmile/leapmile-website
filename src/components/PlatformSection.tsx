import ScrollReveal from "@/components/ScrollReveal";

const PlatformSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="page-wrapper">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Platform
            </h2>
            
            <p className="text-lg leading-relaxed text-foreground mb-8">
              Components across the platform embody LeapMile's proprietary technology, meticulously crafted in-house designs. This approach pioneers innovative, more refined, and value-engineered solutions where each component is engineered for simplicity and efficacy, reflecting our vision for the future of warehouse automation that is modular, high-performing, and dependable.
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg p-6 border border-primary/20">
              <p className="text-xl font-semibold text-primary leading-relaxed">
                Our goal is streamlined solutions that are easy to implement, operate, upkeep, and expand, guided by this overarching philosophy.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlatformSection;