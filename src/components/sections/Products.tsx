import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Star, Award } from 'lucide-react';
import riceProducts from '@/assets/rice-products.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "JT 11 - Riz Parfumé",
      description: "Notre riz parfumé JT 11 aux arômes authentiques ivoiriens. Grains longs et savoureux pour une expérience culinaire exceptionnelle.",
      image: riceProducts,
      formats: ["5kg", "10kg", "25kg", "50kg"],
      category: "Parfumé",
      color: "bg-primary text-white",
      features: ["Arôme délicat", "Grains longs", "Qualité premium", "100% ivoirien"]
    },
    {
      id: 2,
      name: "CB ONE - Riz Diététique",
      description: "Riz diététique CB ONE spécialement sélectionné pour ses qualités nutritionnelles. Idéal pour une alimentation saine et équilibrée.",
      image: riceProducts,
      formats: ["5kg", "10kg", "25kg"],
      category: "Diététique",
      color: "bg-muted text-foreground border-2 border-primary",
      features: ["Faible en gras", "Riche en fibres", "Cuisson rapide", "Nutrition optimale"]
    },
    {
      id: 3,
      name: "Riz Étuvé",
      description: "Riz étuvé selon les méthodes traditionnelles ivoiriennes, conservant tous les nutriments et le goût authentique local.",
      image: riceProducts,
      formats: ["5kg", "10kg", "25kg", "50kg"],
      category: "Étuvé",
      color: "bg-accent text-white",
      features: ["Méthode traditionnelle", "Riche en nutriments", "Goût authentique", "Cuisson parfaite"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Parfumé": return "bg-primary text-white shadow-lg";
      case "Diététique": return "bg-gray-100 text-primary border-2 border-primary";
      case "Étuvé": return "bg-accent text-white shadow-lg";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="produits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-black text-primary mb-6">
            Les Différentes Qualités de Riz
          </h2>
          <p className="text-2xl md:text-3xl font-montserrat font-bold text-accent mb-4">
            À Votre Disposition
          </p>
          <div className="w-32 h-2 bg-gradient-vivid mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-primary-dark max-w-4xl mx-auto leading-relaxed font-semibold">
            Vous pensez au <span className="text-accent font-bold">vrai riz local</span>, 
            contactez <span className="text-primary font-black">IVOIRE RIZ</span> pour vous satisfaire
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={product.id} className={`overflow-hidden hover:shadow-vivid transition-all duration-500 group border-0 bg-white hover:scale-105 animate-fade-in`} 
                  style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-vivid opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 ${product.color} px-6 py-3 rounded-full font-bold text-lg transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  {product.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-primary">100% Local</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                    <Star className="h-4 w-4 mr-1 text-secondary" />
                    Caractéristiques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Formats */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                    <Package className="h-4 w-4 mr-1 text-secondary" />
                    Formats disponibles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.formats.map((format) => (
                      <Badge key={format} className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                        {format}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:bg-primary-dark text-white font-semibold">
                  Demander un devis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-nature rounded-2xl p-8">
          <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">
            Vous cherchez un format personnalisé ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nous proposons également des conditionnements sur mesure pour les professionnels, 
            les collectivités et les distributeurs. Contactez-nous pour discuter de vos besoins spécifiques.
          </p>
          <Button size="lg" className="bg-gradient-gold hover:bg-secondary-dark text-secondary-foreground font-semibold">
            Contactez notre équipe commerciale
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;