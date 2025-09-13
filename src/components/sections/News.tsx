import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { handleNavClick } from '@/utils/smoothScroll';
import salonAgroImage from '@/assets/salon-agro-industrie.jpg';
import { useState } from 'react';

const News = () => {
  const [showAllArticles, setShowAllArticles] = useState(false);
  const articles = [
    {
      id: 1,
      title: "IVOIRE RIZ au Salon de l'Agro-Industrie 2025",
      summary: "IVOIRE RIZ a participé avec succès au Salon de l'Agro-Industrie, présentant ses produits de qualité et renforçant ses partenariats stratégiques.",
      date: "Août 2025",
      category: "Événement",
      readTime: "4 min",
      image: salonAgroImage
    },
    {
      id: 2,
      title: "IVOIRE RIZ participe au Salon International de l'Agriculture 2024",
      summary: "Notre entreprise sera présente au SARA 2024 pour présenter nos dernières innovations et rencontrer nos partenaires.",
      date: "15 Mars 2024",
      category: "Événement",
      readTime: "3 min"
    },
    {
      id: 3,
      title: "Nouveau partenariat avec la Coopérative des Riziculteurs du Nord",
      summary: "Signature d'un accord stratégique pour soutenir 200 producteurs locaux et augmenter notre capacité de production.",
      date: "2 Mars 2024", 
      category: "Partenariat",
      readTime: "5 min"
    },
    {
      id: 4,
      title: "Certification ISO 22000 obtenue pour nos unités de production",
      summary: "IVOIRE RIZ renforce son engagement qualité avec l'obtention de la certification internationale ISO 22000.",
      date: "18 Février 2024",
      category: "Qualité",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Lancement de notre nouvelle gamme de riz biologique",
      summary: "Découvrez nos nouveaux produits biologiques certifiés, cultivés selon les pratiques de l'agriculture durable.",
      date: "5 Février 2024",
      category: "Produit",
      readTime: "6 min"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Événement": return "bg-gradient-gold text-secondary-foreground";
      case "Partenariat": return "bg-gradient-primary text-white";
      case "Qualité": return "bg-secondary-dark text-white";
      case "Produit": return "bg-accent text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="actualites" className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Actualités
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Restez informé des dernières nouvelles d'IVOIRE RIZ : 
            nos innovations, partenariats et participation aux événements du secteur.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Card className="overflow-hidden hover:shadow-premium transition-all duration-300 border-0 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-gradient-hero p-8 lg:p-12 text-white flex items-center">
                <div>
                  <Badge className="bg-white/20 text-white mb-4 backdrop-blur-sm">
                    À la Une
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
                    {articles[0].title}
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {articles[0].summary}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-white/80 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {articles[0].date}
                    </div>
                    <span>•</span>
                    <span>{articles[0].readTime} de lecture</span>
                  </div>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden">
                {articles[0].image ? (
                  <div className="relative h-80 lg:h-full">
                    <img 
                      src={articles[0].image} 
                      alt={articles[0].title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  </div>
                ) : (
                  <div className="bg-primary/5 flex items-center justify-center p-8 h-80 lg:h-full">
                    <Newspaper className="h-32 w-32 text-primary/20" />
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Other Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(showAllArticles ? articles.slice(1) : articles.slice(1, 4)).map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-subtle transition-all duration-300 group border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${getCategoryColor(article.category)} font-semibold`}>
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                </div>
                
                <h3 className="text-lg font-montserrat font-semibold text-primary mb-3 group-hover:text-primary-dark transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {article.readTime} de lecture
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark p-0 h-auto">
                    Lire plus
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-primary-dark text-white font-semibold" 
            onClick={() => setShowAllArticles(!showAllArticles)}
          >
            {showAllArticles ? 'Voir moins d\'actualités' : 'Voir toutes les actualités'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
