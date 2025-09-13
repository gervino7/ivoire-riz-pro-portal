import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { handleNavClick } from '@/utils/smoothScroll';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amadou Diallo",
      position: "Directeur - Supermarché Diallo & Fils",
      content: "Nous travaillons avec IVOIRE RIZ depuis 8 ans et nous sommes toujours satisfaits de la qualité constante de leurs produits. Nos clients nous demandent spécifiquement leur riz blanc premium. Un partenaire de confiance !",
      rating: 5,
      location: "Abidjan"
    },
    {
      id: 2,
      name: "Aïcha Koné",
      position: "Responsable Achats - Restaurant Le Baobab",
      content: "Le riz étuvé d'IVOIRE RIZ est exceptionnel pour notre restaurant. La cuisson est parfaite à chaque fois, et nos clients apprécient vraiment la qualité. De plus, l'équipe commerciale est très professionnelle.",
      rating: 5,
      location: "Bouaké"
    },
    {
      id: 3,
      name: "Kouassi Bernard",
      position: "Riziculteur partenaire",
      content: "Grâce au partenariat avec IVOIRE RIZ, j'ai pu moderniser mon exploitation et améliorer mes rendements. Ils nous accompagnent techniquement et nous garantissent l'achat de notre production. Une collaboration gagnant-gagnant !",
      rating: 5,
      location: "Yamoussoukro"
    },
    {
      id: 4,
      name: "Fatou Traoré",
      position: "Gérante - Épicerie Moderne",
      content: "Mes clients sont fidèles aux produits IVOIRE RIZ. La qualité est toujours au rendez-vous et les emballages sont pratiques. Le service de livraison est ponctuel, ce qui est essentiel pour notre activité.",
      rating: 5,
      location: "San-Pédro"
    },
    {
      id: 5,
      name: "Jean-Claude Kouadio",
      position: "Chef Cuisinier - Hôtel Ivoire",
      content: "Pour notre cuisine gastronomique, nous utilisons exclusivement le riz parfumé jasmin d'IVOIRE RIZ. L'arôme est délicat et la texture parfaite pour nos plats raffinés. Un produit d'exception !",
      rating: 5,
      location: "Abidjan"
    },
    {
      id: 6,
      name: "Marie-Claire Ouattara",
      position: "Directrice - Cantine Scolaire",
      content: "Pour nourrir 500 élèves quotidiennement, nous avons besoin de produits de qualité à prix raisonnable. Le riz brisé économique d'IVOIRE RIZ répond parfaitement à nos attentes. Nutritif et abordable !",
      rating: 5,
      location: "Korhogo"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < rating ? 'text-secondary fill-current' : 'text-muted'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="témoignages" className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Témoignages Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que nos clients et partenaires disent de leur expérience 
            avec IVOIRE RIZ et nos produits de qualité premium.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-premium transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-montserrat font-semibold text-primary text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-secondary font-medium">
                    📍 {testimonial.location}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Taux de satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Années d'expérience</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-subtle">
          <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Découvrez pourquoi plus de 500 clients nous font confiance pour leurs besoins en riz de qualité. 
            Contactez-nous pour devenir notre prochain partenaire satisfait !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200" onClick={() => {
              const phoneNumber = '2250506803113';
              const message = "Bonjour, je souhaite demander un échantillon de vos produits IVOIRE RIZ.";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}>
              Demander un échantillon
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200" onClick={(e) => handleNavClick(e, '#contact')}>
              Devenir partenaire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;