import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Leaf, Handshake, Star, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Qualité Premium",
      description: "Nous sélectionnons rigoureusement chaque grain pour garantir une qualité exceptionnelle à nos clients."
    },
    {
      icon: Shield,
      title: "Sécurité Alimentaire",
      description: "Nos processus de production respectent les plus hauts standards de sécurité et d'hygiène alimentaire."
    },
    {
      icon: Leaf,
      title: "Durabilité",
      description: "Nous nous engageons dans une agriculture durable qui préserve l'environnement et les ressources naturelles."
    },
    {
      icon: Handshake,
      title: "Soutien Local",
      description: "Nous soutenons activement les riziculteurs ivoiriens en leur offrant des partenariats équitables et durables."
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4">
        {/* Header Spectacular */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-primary mb-6 bg-gradient-vivid bg-clip-text text-transparent">
            À Propos d'IVOIRE RIZ
          </h2>
          <div className="w-32 h-2 bg-gradient-premium mx-auto mb-8 rounded-full shadow-gold"></div>
          <p className="text-xl md:text-2xl text-accent max-w-4xl mx-auto leading-relaxed font-bold animate-slide-up">
            "Vous pensez au vrai riz local, contactez IVOIRE RIZ pour vous satisfaire"
          </p>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto leading-relaxed mt-4 font-medium">
            Découvrez l'histoire d'une entreprise passionnée par l'excellence et l'innovation dans la production de riz en Côte d'Ivoire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">
              Notre Histoire
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              Fondée en 2009 à Abidjan, IVOIRE RIZ est née de la vision de créer une entreprise 
              qui valorise le patrimoine agricole ivoirien tout en répondant aux besoins croissants 
              du marché local et régional en riz de qualité.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Depuis nos débuts, nous avons développé un savoir-faire unique qui combine 
              techniques traditionnelles et innovations modernes pour produire des variétés 
              de riz qui célèbrent le goût authentique de la Côte d'Ivoire.
            </p>
            <p className="text-foreground leading-relaxed">
              Aujourd'hui, IVOIRE RIZ est reconnue comme l'un des leaders de la transformation 
              et de la distribution de riz en Côte d'Ivoire, avec plus de 500 partenaires 
              distributeurs et une production annuelle de plus de 10 000 tonnes.
            </p>
          </div>

          {/* Mission Spectacular */}
          <div className="bg-gradient-to-br from-white via-primary-light/5 to-secondary-light/10 rounded-3xl p-10 shadow-vivid animate-scale-in relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-premium opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-8">
                <Award className="h-10 w-10 text-secondary animate-glow" />
                <h3 className="text-3xl font-montserrat font-black text-primary">
                  Notre Mission
                </h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gradient-gold/10 rounded-xl">
                  <Star className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-primary-dark font-semibold text-lg">
                    Fournir aux consommateurs des produits de <span className="text-secondary font-black">riz local de qualité supérieure</span> qui allient 
                    tradition ivoirienne et standards internationaux.
                  </p>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gradient-vivid/10 rounded-xl">
                  <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-primary-dark font-semibold text-lg">
                    Soutenir l'économie agricole locale en créant des partenariats durables 
                    avec les <span className="text-accent font-bold">producteurs de riz ivoiriens</span>.
                  </p>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gradient-premium/10 rounded-xl">
                  <Star className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-primary-dark font-semibold text-lg">
                    Contribuer à la sécurité alimentaire en Côte d'Ivoire et dans la sous-région 
                    ouest-africaine avec des <span className="text-primary font-bold">produits 100% locaux</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Spectacular */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-montserrat font-black text-primary text-center mb-16 animate-fade-in">
            Nos Valeurs d'Excellence
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`text-center p-8 hover:shadow-glow transition-all duration-500 border-0 bg-gradient-to-br from-white to-primary-light/5 hover:scale-110 transform cursor-pointer animate-slide-up group`}
                    style={{animationDelay: `${index * 0.15}s`}}>
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-vivid rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-vivid group-hover:animate-glow transform group-hover:rotate-12 transition-all duration-500">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-montserrat font-black text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-primary-dark leading-relaxed font-medium group-hover:text-foreground transition-colors duration-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section Spectacular */}
        <div className="mt-20 text-center bg-gradient-premium rounded-3xl p-12 text-white relative overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-gradient-vivid opacity-20 animate-glow"></div>
          <div className="relative z-10">
            <Handshake className="h-16 w-16 mx-auto mb-6 animate-bounce text-white drop-shadow-lg" />
            <h3 className="text-3xl md:text-4xl font-montserrat font-black mb-6 bg-gradient-to-r from-white to-secondary-light bg-clip-text text-transparent">
              Contactez IVOIRE RIZ pour Vous Satisfaire
            </h3>
            <p className="mb-8 text-white/95 max-w-3xl mx-auto text-lg leading-relaxed font-semibold">
              Nous recherchons des distributeurs et partenaires commerciaux pour étendre 
              notre présence sur le territoire ivoirien et dans la sous-région. 
              <span className="text-secondary-light font-bold">Ensemble, cultivons l'excellence !</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-white font-bold text-lg px-8 py-4 shadow-vivid transform hover:scale-105 transition-all duration-300">
                Devenir Partenaire
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/20 hover:border-white font-bold text-lg px-8 py-4 backdrop-blur-sm">
                Nos Références
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;