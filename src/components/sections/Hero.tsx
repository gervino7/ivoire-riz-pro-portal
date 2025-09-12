import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Truck } from 'lucide-react';
import heroImage from '@/assets/hero-rice-fields.jpg';

const Hero = () => {
  const stats = [
    { icon: Award, label: "Années d'expérience", value: "15+" },
    { icon: Users, label: "Partenaires", value: "500+" },
    { icon: Truck, label: "Tonnes/an", value: "10K+" },
  ];

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Champs de riz IVOIRE RIZ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary/60 to-accent/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black mb-6 leading-tight bg-gradient-vivid bg-clip-text text-transparent animate-pulse">
              IVOIRE RIZ
            </h1>
            <div className="relative mb-6">
              <p className="text-2xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white drop-shadow-lg">
                RIZ LOCAL
              </p>
              <p className="text-lg md:text-2xl lg:text-3xl font-montserrat font-semibold text-accent-light">
                PRODUIT EN CÔTE D'IVOIRE
              </p>
              <p className="text-xl md:text-3xl lg:text-4xl font-montserrat font-bold text-secondary animate-bounce">
                QUALITÉ SUPÉRIEURE
              </p>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Depuis 15 ans, nous cultivons et transformons le meilleur riz de Côte d'Ivoire 
            pour offrir à nos clients des produits de qualité premium.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-gold hover:bg-secondary-dark text-secondary-foreground font-semibold text-lg px-8 py-4 shadow-gold">
              Découvrir nos produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold text-lg px-8 py-4 backdrop-blur-sm"
            >
              Notre histoire
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-subtle"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-secondary-light" />
                <div className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;