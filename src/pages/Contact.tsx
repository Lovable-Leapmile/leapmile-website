import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us - LeapMile Robotics"
        description="Get in touch with LeapMile Robotics for inquiries about nano warehouses, QikPod smart lockers, and automation solutions. Schedule a demo or consultation today."
        keywords="contact leapmile, warehouse automation inquiry, schedule demo, robotics consultation"
      />
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
