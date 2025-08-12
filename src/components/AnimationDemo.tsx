import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FadeInSection from "./FadeInSection";
import HeroFadeIn from "./HeroFadeIn";
import ScrollReveal from "./ScrollReveal";

const AnimationDemo = () => {
  const demoCards = [
    { title: "Card 1", content: "This card animates with a 100ms delay", delay: 100 },
    { title: "Card 2", content: "This card animates with a 200ms delay", delay: 200 },
    { title: "Card 3", content: "This card animates with a 300ms delay", delay: 300 },
    { title: "Card 4", content: "This card animates with a 400ms delay", delay: 400 },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="page-wrapper space-y-20">
        
        {/* Hero Section with Staggered Animation */}
        <section className="text-center">
          <HeroFadeIn staggerDelay={200}>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Animation Demo
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              This section demonstrates the HeroFadeIn component with staggered animations.
              Each element appears with a 200ms delay between them.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </HeroFadeIn>
        </section>

        {/* Scroll-Triggered Sections */}
        <section>
          <FadeInSection distance={40} duration={800}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Scroll-Triggered Animations
              </h2>
              <p className="text-lg text-muted-foreground">
                These sections animate when they enter the viewport during scrolling.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={100} distance={30} duration={700}>
              <Card>
                <CardHeader>
                  <CardTitle>FadeInSection Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This card uses FadeInSection with custom delay, distance, and duration.
                    It animates from 30px below with a 100ms delay.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={200} distance={25} duration={800}>
              <Card>
                <CardHeader>
                  <CardTitle>Enhanced ScrollReveal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This card uses the enhanced ScrollReveal component with improved
                    performance and GPU acceleration.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </section>

        {/* Staggered Card Grid */}
        <section>
          <FadeInSection distance={50} duration={900}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Staggered Card Animations
              </h2>
              <p className="text-lg text-muted-foreground">
                Each card animates with an increasing delay for a cascading effect.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoCards.map((card, index) => (
              <FadeInSection 
                key={index}
                delay={card.delay}
                distance={35}
                duration={750}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {card.content}
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Performance Features Demo */}
        <section>
          <FadeInSection distance={40} duration={800}>
            <Card className="bg-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Performance Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">GPU Accelerated</h4>
                    <p className="text-sm text-muted-foreground">
                      Uses transform and opacity for smooth 60fps animations
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">Intersection Observer</h4>
                    <p className="text-sm text-muted-foreground">
                      Efficient scroll detection without performance impact
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">One-Time Animation</h4>
                    <p className="text-sm text-muted-foreground">
                      Each element animates only once per session
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </section>

      </div>
    </div>
  );
};

export default AnimationDemo;
