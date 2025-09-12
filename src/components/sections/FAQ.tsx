import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "Où puis-je trouver les produits IVOIRE RIZ ?",
      answer: "Nos produits sont disponibles dans plus de 500 points de vente à travers la Côte d'Ivoire, incluant les grandes surfaces, marchés locaux, et épiceries. Vous pouvez également nous contacter directement pour connaître le distributeur le plus proche de chez vous ou pour des commandes en gros."
    },
    {
      question: "Comment devenir partenaire distributeur d'IVOIRE RIZ ?",
      answer: "Pour devenir partenaire distributeur, vous devez remplir notre formulaire de candidature en ligne ou nous contacter directement. Nous évaluerons votre dossier en fonction de votre zone géographique, votre expérience dans la distribution alimentaire, et votre capacité de stockage. Un représentant commercial vous contactera pour discuter des modalités de partenariat."
    },
    {
      question: "Quelles sont les certifications qualité de vos produits ?",
      answer: "Tous nos produits sont certifiés ISO 22000 pour la sécurité alimentaire. Nous respectons également les normes HACCP et possédons les certifications locales requises par l'ANSSA (Agence Nationale de Sécurité Sanitaire des Aliments). Notre nouvelle gamme biologique est certifiée par Ecocert."
    },
    {
      question: "Proposez-vous des conditionnements personnalisés ?",
      answer: "Oui, nous proposons des conditionnements sur mesure pour les professionnels, collectivités, et gros distributeurs. Les formats peuvent aller de 1kg à 50kg selon vos besoins. Contactez notre équipe commerciale pour discuter de vos besoins spécifiques et obtenir un devis personnalisé."
    },
    {
      question: "Quelle est la durée de conservation de vos produits ?",
      answer: "La durée de conservation varie selon le type de riz : 24 mois pour le riz blanc et parfumé, 18 mois pour le riz étuvé, dans des conditions de stockage optimales (endroit sec, frais, à l'abri de la lumière). La date limite de consommation optimale est indiquée sur chaque emballage."
    },
    {
      question: "Livrez-vous dans toute la Côte d'Ivoire ?",
      answer: "Oui, nous assurons la livraison dans toute la Côte d'Ivoire grâce à notre réseau logistique national. Pour les commandes importantes (plus de 1 tonne), nous proposons également la livraison dans les pays limitrophes. Les délais et tarifs de livraison varient selon la destination et la quantité commandée."
    },
    {
      question: "Comment garantissez-vous la fraîcheur de vos produits ?",
      answer: "Nous appliquons la méthode FIFO (First In, First Out) dans nos entrepôts, contrôlons régulièrement la température et l'humidité de stockage, et effectuons des tests qualité à chaque étape de la production. Notre chaîne d'approvisionnement est optimisée pour réduire les délais entre la production et la mise sur le marché."
    },
    {
      question: "Soutenez-vous les producteurs locaux ?",
      answer: "Absolument ! Nous travaillons directement avec plus de 200 riziculteurs ivoiriens dans le cadre de partenariats équitables. Nous leur fournissons un soutien technique, des formations sur les bonnes pratiques agricoles, et nous leur garantissons l'achat de leur production à des prix rémunérateurs fixés à l'avance."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Questions Fréquentes
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à vos questions les plus courantes 
            sur nos produits, services et modalités de partenariat.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-subtle">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-3">
                      <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <h3 className="text-lg font-montserrat font-semibold text-primary pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    {openItem === index ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                  </div>
                </button>
                
                {openItem === index && (
                  <CardContent className="px-6 pb-6 pt-0">
                    <div className="pl-8">
                      <div className="w-full h-px bg-border mb-4"></div>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gradient-nature rounded-2xl p-8">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos projets. N'hésitez pas à nous contacter !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark text-white font-semibold">
                Nous contacter
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Demander un rappel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;