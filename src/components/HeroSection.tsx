import nanowarehouseView from "@/assets/nanowarehouse-view.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20 pb-8 bg-white">
      {/* Minimalist light purple line-based designs */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute top-20 left-10 w-32 h-px bg-purple-200/50"></div>
        <div className="absolute top-40 right-20 w-24 h-px bg-purple-200/50 rotate-45"></div>
        <div className="absolute bottom-32 left-20 w-20 h-px bg-purple-200/50 -rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-28 h-px bg-purple-200/50"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-px bg-purple-200/30 rotate-90"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-px bg-purple-200/30 rotate-12"></div>
      </div>
      
      <div className="page-wrapper relative z-10">
        {/* Centered Headers */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 leading-tight">
            NanoWarehouse Technology
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
            Robotic Nano Warehouse platform transforms fulfilment automation
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-left">
            <p className="text-lg leading-relaxed text-foreground">
              Nano Warehouses are compact fulfillment centers that are positioned close to customers and designed to efficiently manage a moderate volume of daily orders typically ranging from 1000 to 3000 items per day. The centers are typically of smaller scale, designed with automated infrastructure, and strategically placed in metropolitan areas. They are commonly found in densely populated areas such as tech parks, business centers, townships, and high-density metro localities.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={nanowarehouseView} 
                alt="NanoWarehouse View" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;