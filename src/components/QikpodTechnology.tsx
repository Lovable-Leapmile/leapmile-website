import q71 from "@/assets/q71.png";

const QikpodTechnology = () => {
  const apiFeatures = [
    "Locker Remote Control & Management APIs",
    "User Data Management APIs",
    "Package Management and Tracking APIs",
    "APIs for integrating with custom applications",
    "Reporting and Analytics"
  ];

  return (
    <section className="py-16 bg-zinc-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-4">
            Technology
          </h2>
          <p className="text-xl text-qikpod-black mb-6">
            Scale securely with our hardware-agnostic platform.
          </p>
          <h3 className="text-2xl font-bold text-qikpod-black mb-4">
            Easy-to-use cloud platform with a high level of security and efficiency.
          </h3>
          <p className="text-lg text-qikpod-black max-w-4xl mx-auto">
            Innovative cloud-based software, secure APIs, and QikPod parcel storage solutions work together to power the end-to-end delivery solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img 
              src={q71} 
              alt="Technology Platform" 
              className="w-full max-w-sm object-contain"
            />
          </div>

          {/* Right Side - API Features */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <ul className="space-y-4">
              {apiFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-qikpod-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-qikpod-black text-lg leading-relaxed">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QikpodTechnology;