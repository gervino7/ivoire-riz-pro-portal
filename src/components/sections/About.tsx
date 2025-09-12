import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Leaf, Handshake } from 'lucide-react';

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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            À Propos d'IVOIRE RIZ
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-premium">
            <h3 className="text-2xl font-montserrat font-semibold text-primary mb-6">
              Notre Mission
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  Fournir aux consommateurs des produits de riz de qualité premium qui allient 
                  tradition ivoirienne et standards internationaux.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  Soutenir l'économie agricole locale en créant des partenariats durables 
                  avec les producteurs de riz ivoiriens.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  Contribuer à la sécurité alimentaire en Côte d'Ivoire et dans la sous-région 
                  ouest-africaine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl font-montserrat font-semibold text-primary text-center mb-12">
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-subtle transition-shadow duration-300 border-0 bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-premium">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-montserrat font-semibold text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;