import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-basketball.jpg";
import { Dumbbell, Users, MapPin, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Verified Students Only",
      description: "Secure campus community with .edu email verification",
    },
    {
      icon: MapPin,
      title: "Nearby Games",
      description: "Find pickup games happening around your campus",
    },
    {
      icon: Users,
      title: "Easy Organization",
      description: "Create and join games in seconds with quick details",
    },
    {
      icon: Dumbbell,
      title: "All Sports Welcome",
      description: "Basketball, soccer, volleyball, tennis, and more",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/80" />
        </div>

        <div className="container relative z-10 px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-primary-foreground drop-shadow-lg">
                Campus Sports Made Easy
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-2xl mx-auto leading-relaxed">
                Join verified students at your university for pickup games. Find, create, and play
                - all in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => navigate("/auth")}
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/dashboard")}
                className="w-full sm:w-auto bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-secondary"
              >
                Browse Games
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-foreground">Why Pickup Play?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to turn spontaneous games into a consistent social experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="gradient-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-base group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-base">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-primary-foreground">Ready to Play?</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join your campus community and never miss a game. Sign up with your .edu email to get
              started.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-background text-primary hover:bg-background/90"
            >
              Join Your Campus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Pickup Play</h3>
              <p className="text-secondary-foreground/70">Campus Sports Made Easy</p>
            </div>
            <div className="text-center md:text-right text-sm text-secondary-foreground/70">
              <p>&copy; 2025 Pickup Play. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
