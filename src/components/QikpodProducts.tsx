import { Button } from "@/components/ui/button";
import q35 from "@/assets/q35.png";
import q47 from "@/assets/q47.png";
import q48 from "@/assets/q48.png";
const QikpodProducts = () => {
  return <section className="py-16 bg-qikpod-grey-light bg-zinc-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-6">
            QikPod Product
          </h2>
          <p className="text-lg md:text-xl text-qikpod-black max-w-4xl mx-auto">
            Need to handle more inbound parcels than ever but running out of storage space? 
            Our lockers and robots technologies offer you efficient and convenient solutions.
          </p>
        </div>

        {/* Content Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Smart Locker */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-qikpod-black text-center">
              Smart Locker
            </h3>
            
            {/* Main Image */}
            <div className="flex justify-center">
              <img src={q35} alt="Smart Locker" className="w-full max-w-md object-contain" />
            </div>
            
            {/* Description Box */}
            <div className="bg-qikpod-black p-6 rounded-lg">
              <p className="text-qikpod-yellow text-center font-medium">
                IoT lockers enable a contactless experience for apartments, small offices, and facilities.
              </p>
            </div>
            
            {/* Button */}
            <div className="flex justify-center">
              <Button className="bg-qikpod-yellow hover:bg-qikpod-yellow/90 text-qikpod-black px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Two Images */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <img src={q47} alt="Qikpod Solution" className="w-80 max-w-md object-contain" />
            </div>
            <div className="flex justify-center">
              <img src={q48} alt="Qikpod Technology" className="w-80 max-w-md object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default QikpodProducts;