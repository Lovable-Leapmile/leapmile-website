import q34 from "@/assets/q34.jpeg";

const QikpodHostLocations = () => {
  return (
    <section className="py-16 bg-qikpod-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-6">
            Large network of host locations!
          </h2>
          <p className="text-lg text-qikpod-black max-w-3xl mx-auto">
            The QikPod locker network covers residential, commercial, and retail locations.
          </p>
        </div>

        {/* Full Width Image */}
        <div className="mb-8">
          <img 
            src={q34} 
            alt="QikPod Network Locations" 
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
        </div>

        {/* Below Image Text */}
        <div className="text-center">
          <p className="text-lg text-qikpod-black max-w-4xl mx-auto">
            Simplify and automate last-mile delivery, robotic fulfillment, curbside pickups, dark store operations, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QikpodHostLocations;