import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Star, Award } from 'lucide-react';
import riceProducts from '@/assets/rice-products.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Riz Blanc Premium",
      description: "Notre riz blanc de qualité supérieure, parfait pour tous vos plats quotidiens. Grains longs et savoureux.",
      image: riceProducts,
      formats: ["5kg", "10kg", "25kg"],
      category: "Premium",
      features: ["Grains longs", "Texture parfaite", "Goût authentique"]
    },
    {
      id: 2,
      name: "Riz Étuvé Traditionnel",
      description: "Riz étuvé selon les méthodes traditionnelles ivoiriennes, conservant tous les nutriments et le goût unique.",
      image: riceProducts,
      formats: ["5kg", "10kg", "25kg"],
      category: "Traditionnel",
      features: ["Riche en nutriments", "Méthode traditionnelle", "Cuisson rapide"]
    },
    {
      id: 3,
      name: "Riz Parfumé Jasmin",
      description: "Variété parfumée aux arômes délicats, idéale pour les occasions spéciales et la gastronomie raffinée.",
      image: riceProducts,
      formats: ["5kg", "10kg", "25kg"],
      category: "Gourmet",
      features: ["Arôme délicat", "Grains fins", "Qualité gourmet"]
    },
    {
      id: 4,
      name: "Riz Brisé Économique",
      description: "Option économique sans compromis sur la qualité, parfait pour les familles et les collectivités.",
      image: riceProducts,
      formats: ["5kg", "10kg", "25kg", "50kg"],
      category: "Économique",
      features: ["Rapport qualité-prix", "Grande quantité", "Nutritif"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Premium": return "bg-gradient-gold text-secondary-foreground";
      case "Traditionnel": return "bg-gradient-primary text-white";
      case "Gourmet": return "bg-secondary-dark text-white";
      case "Économique": return "bg-accent text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="produits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Nos Produits
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de riz de qualité premium, 
            adaptée à tous les goûts et tous les budgets.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-premium transition-all duration-300 group border-0 bg-white">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(product.category)} font-semibold`}>
                  {product.category}
                </Badge>
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