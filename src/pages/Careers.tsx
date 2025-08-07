import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Shield, Coffee, MapPin, Scale } from "lucide-react";
import Footer from "@/components/Footer";
const Careers = () => {
  const benefits = [{
    icon: Award,
    title: "Competitive Compensation",
    description: "Market-competitive salary and performance-based incentives"
  }, {
    icon: Heart,
    title: "Paid & Sick Leave",
    description: "Comprehensive leave policy for work-life balance"
  }, {
    icon: Shield,
    title: "Provident Fund & Gratuity",
    description: "Secure your future with our retirement benefits"
  }, {
    icon: Shield,
    title: "Medical Insurance",
    description: "Coverage for you, spouse, and 2 children"
  }, {
    icon: Coffee,
    title: "Office Lunch & Snacks",
    description: "Daily company lunch and refreshments"
  }, {
    icon: MapPin,
    title: "Central Location Metro Proximity",
    description: "Well-connected office location"
  }, {
    icon: Scale,
    title: "Work-Life Balance",
    description: "Balanced and predictable work hours"
  }];
  const jobRoles = [{
    title: "Robotics Engineer",
    image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Company/Images/vacancy1.jpg",
    description: "Robotics Engineers are members of our product development team and help co-craft innovative automation systems and solutions. To excel in this role, you should have a good understanding of actuators, sensors, microcontroller & microprocessor boards, PLC, IPC & relay-logic-based systems, good logic development skills, and strong electrical foundation."
  }, {
    title: "Python Engineer",
    image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Company/Images/vacancy5.jpg",
    description: "Python Software Engineers are members of our product development team who build innovative automation systems and solutions. To excel in this role, you should be proficient in Python and have a working understanding of robotics and factory automation systems. You should be able to write programs from scratch and be able to test them in a real working system."
  }, {
    title: "Design Engineer",
    image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Company/Images/vacancy3.jpg",
    description: "Mechanical Design Engineers on our Robotics team have experience in the robotics and automation fields and are responsible for conceptualizing, designing, and developing new products, providing technical guidance, and executing cross-functional engineering projects. We expect them to exhibit technical expertise in individual project priorities, deadlines, and deliverables."
  }, {
    title: "Field Service Engineer",
    image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Company/Images/vacancy2.jpg",
    description: "Field Service Engineers support our deployed locker & robot network. For this job, you need to be familiar with the technical aspects of installing, servicing, and maintaining equipment at field locations. You should be an excellent problem-solver, be willing to travel throughout the day to field sites, and be able to manage customer-facing problem situations when they arise."
  }, {
    title: "Marketing Internship",
    image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Company/Images/vacancy4.jpg",
    description: "Marketing and business development teams to support us with market research, business development, and lead gen, and to assist us with marketing tactics we execute during the launch of our new robotics products. Your role is to identify and develop a rich set of prospects and also help us expand our audience. You will learn about various marketing operations and support our marketing team to create and implement our marketing strategies, both online as well as offline."
  }];
  const handleApplyNow = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd2d3ybFQFGy-KYIaX5ux3Miij_czWeSMB6-F1XBjO30jDP1g/viewform', '_blank');
  };
  return <div className="min-h-screen bg-background">
      {/* Header Section with Background Image */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
    }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-12 w-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Careers: Join Our Team
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Seeking talented, collaborative, driven, and innovative people to join our team.
            </h2>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-lg leading-relaxed text-[#351c75] mb-12">
            <p className="mb-6">
              Our goal is to make the last mile of eCommerce logistics simpler, safer, and speedier. The Leapmile product teams are building next-generation smart logistics robotic devices, cloud services, and mobile apps. We value expertise, initiative, problem-solving skills, high integrity, teamwork, a strong work ethic, self-motivation, and good time management skills across our team. Our work is challenging and ambitious, which makes for a fun and rich learning experience. Join us to build innovative products for the last mile of global eCommerce. We are backed by top-tier investors and global strategic partners.
            </p>
            <p className="mb-6">
              In addition to a market-competitive compensation package, you will be entitled to paid sick and casual time off, a provident fund (PF), gratuity, medical hospitalization insurance (for you, your spouse, & 2 children), daily company lunch, balanced predictable work hours, and a well-connected office location.
            </p>
            <p>
              If you are passionate about product engineering and development, cloud software, robotics, mechatronics, IoT, embedded systems, and Python, and are willing to work in a startup environment, then you might be a good match, and we encourage you to apply.
            </p>
          </div>

          {/* Key Benefits Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Key Benefits</h3>
            <div className="space-y-6">
              {/* First card centered */}
              <div className="flex justify-center">
                <Card className="border-none shadow-lg w-64">
                  <CardContent className="p-4 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="p-3 rounded-full bg-gradient-to-br from-[#351c75] to-[#8e7cc43] inline-flex bg-[#351c75]">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-base font-semibold mb-2 text-foreground">{benefits[0].title}</h4>
                    <p className="text-xs text-muted-foreground">{benefits[0].description}</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Remaining 6 cards in 2 rows of 3 */}
              <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
                {benefits.slice(1).map((benefit, index) => (
                  <Card key={index + 1} className="border-none shadow-lg">
                    <CardContent className="p-4 text-center">
                      <div className="mb-3 flex justify-center">
                        <div className="p-3 rounded-full bg-gradient-to-br from-[#351c75] to-[#8e7cc43] inline-flex bg-[#351c75]">
                          <benefit.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h4 className="text-base font-semibold mb-2 text-foreground">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Job Roles Section */}
          <div className="mb-16">
            
            <div className="space-y-8">
              {jobRoles.map((role, index) => <Card key={index} className="overflow-hidden border border-border">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 p-8 flex items-center justify-center">
                      <img src={role.image} alt={role.title} className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg" />
                    </div>
                    <div className="md:w-3/4 p-8">
                      <h4 className="text-2xl font-bold mb-6 text-foreground">{role.title}</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">{role.description}</p>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="text-center">
            <Button size="lg" onClick={handleApplyNow} className="px-8 py-4 text-lg">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default Careers;