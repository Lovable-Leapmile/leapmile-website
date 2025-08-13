import q6 from "@/assets/q6.png";
import q62 from "@/assets/q62.png";
import q63 from "@/assets/q63.png";

const QikpodLockerFlow = () => {
  const steps = [
    {
      image: q6,
      title: "Courier drops the parcel",
      caption: "Authorised couriers deliver parcels into lockers"
    },
    {
      image: q62,
      title: "Secure OTP sent for pickup",
      caption: "User receives SMS with their secure pickup OTP"
    },
    {
      image: q63,
      title: "Customer picks the parcel",
      caption: "User enters secure pickup OTP to retrieve parcel"
    }
  ];

  return (
    <section className="py-16 bg-qikpod-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - GIF */}
          <div className="flex justify-center">
            <img 
              src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Qikpod/Gif/q82.gif" 
              alt="QikPod Locker Flow" 
              className="w-full max-w-lg h-96 object-contain rounded-lg"
            />
          </div>

          {/* Right Side - Steps */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-4">
                3 Simple Steps
              </h2>
              <p className="text-lg text-qikpod-black">
                Lockers solve the problem of having to be home to receive parcel deliveries.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-qikpod-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-qikpod-black">
                      {step.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QikpodLockerFlow;