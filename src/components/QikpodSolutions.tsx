import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import q57 from "@/assets/q57.png";
import q58 from "@/assets/q58.png";
import q65 from "@/assets/q65.png";
import q60 from "@/assets/q60.png";
import q36 from "@/assets/q36.png";
interface SolutionCardProps {
  title: string;
  image: string;
  caption: string;
  buttonText: string;
  pageName: string;
}
const SolutionCard = ({
  title,
  image,
  caption,
  buttonText,
  pageName
}: SolutionCardProps) => {
  const handleNavigation = () => {
    // For now, we'll just log the navigation. 
    // These routes would need to be added to the router
    console.log(`Navigate to: ${pageName}`);
  };
  return <Card className="h-full flex flex-col text-center bg-qikpod-white border-gray-200 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-qikpod-black">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {/* Image */}
        <div className="flex justify-center mb-4">
          <img src={image} alt={title} className="w-20 max-w-xs object-contain" />
        </div>
        
        {/* Caption */}
        <CardDescription className="text-qikpod-black mb-6 flex-1">
          {caption}
        </CardDescription>
        
        {/* Button */}
        <Button onClick={handleNavigation} className="bg-qikpod-yellow hover:bg-qikpod-yellow/90 text-qikpod-black">
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>;
};
const QikpodSolutions = () => {
  const solutions = [{
    title: "Retail Click & Collect",
    image: q57,
    caption: "Offer click & collect at stores to enhance customer satisfaction and save costs.",
    buttonText: "Know More",
    pageName: "Retail Click & Collect"
  }, {
    title: "Last Mile Delivery",
    image: q58,
    caption: "Build faster, more secure, and high-efficiency delivery processes.",
    buttonText: "Know More",
    pageName: "Last Mile Delivery"
  }, {
    title: "Digital Mailroom",
    image: q65,
    caption: "Ensure employees & residents enjoy hassle-free, contactless pick-up.",
    buttonText: "Know More",
    pageName: "Digital Mailroom"
  }, {
    title: "University Parcel Hub",
    image: q60,
    caption: "Set up automated self-serve parcel hubs for students, staff & faculty.",
    buttonText: "Know More",
    pageName: "University Parcel Hub"
  }, {
    title: "Late Night Deliveries",
    image: q36,
    caption: "Allowing third-party logistics providers to operate during off-peak hours.",
    buttonText: "Know More",
    pageName: "Late Night Deliveries"
  }];
  return <section className="py-16 bg-qikpod-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-6">Match Our Solution to Your Use Case</h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {solutions.map((solution, index) => <SolutionCard key={index} title={solution.title} image={solution.image} caption={solution.caption} buttonText={solution.buttonText} pageName={solution.pageName} />)}
        </div>
      </div>
    </section>;
};
export default QikpodSolutions;