import QikpodHero from "@/components/QikpodHero";
import QikpodProducts from "@/components/QikpodProducts";
import QikpodSolutions from "@/components/QikpodSolutions";
import Footer from "@/components/Footer";

const Qikpod = () => {
  return (
    <div className="min-h-screen bg-background">
      <QikpodHero />
      <QikpodProducts />
      <QikpodSolutions />
      <Footer />
    </div>
  );
};

export default Qikpod;