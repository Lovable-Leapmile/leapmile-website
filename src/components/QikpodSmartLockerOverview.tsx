import q68Gif from "@/assets/q68.gif";

const QikpodSmartLockerOverview = () => {
  const points = [
    "Easy outdoor deployment with improved operational and space efficiency",
    "24/7 accessibility for drop and pick up of parcels.",
    "Enhanced customer experience.",
    "Store more parcel/sqft compared to static lockers.",
    "Track weight and dimension along with QR code to ensure delivery of the right parcel.",
    "Integrate with existing mobile apps/custom apps to enhance customer experience.",
    "Reduce carbon footprint and enable late-night/off-peak hour deliveries."
  ];

  return (
    <section 
      className="py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://leapmile-website.blr1.cdn.digitaloceanspaces.com/bg_pattern_qikpod.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-4">
            Smart Locker
          </h2>
          <p className="text-xl text-qikpod-black mb-6">
            Intelligent Parcel Storage & Retrieving Solution
          </p>
          <h3 className="text-2xl font-bold text-qikpod-black mb-4">
            Optimized Storage Solutions & Configurable to Specific Needs
          </h3>
          <p className="text-lg text-qikpod-black max-w-4xl mx-auto">
            Our cutting-edge technology eliminates your parcel management problems. Our goal is to provide our customers with the most secure and convenient-to-use parcel management solutions that are modular and easy to install.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - GIF */}
          <div className="flex justify-center">
            <img 
              src={q68Gif} 
              alt="Smart Locker Technology" 
              className="w-full max-w-md h-96 object-contain rounded-lg"
            />
          </div>

          {/* Right Side - Points */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-qikpod-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-qikpod-black leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QikpodSmartLockerOverview;