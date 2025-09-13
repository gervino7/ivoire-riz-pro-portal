import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qui est IVOIRE RIZ ?",
      answer: "IVOIRE RIZ est une entreprise ivoirienne spécialisée dans la production, la transformation et la distribution de riz local. Basée à Abidjan, notre mission est de garantir un riz de qualité, sain et accessible, tout en soutenant la filière rizicole nationale et les producteurs locaux."
    },
    {
      question: "Quels produits proposez-vous ?",
      answer: "Nous proposons plusieurs gammes adaptées aux besoins des consommateurs et des distributeurs : Riz blanc, Riz étuvé, Riz parfumé, et Riz brisé. Tous nos produits sont disponibles en différents formats (5kg, 10kg, 25kg) pour les ménages comme pour les grandes surfaces et grossistes."
    },
    {
      question: "Pourquoi choisir IVOIRE RIZ ?",
      answer: "Nos produits répondent aux normes de qualité les plus strictes, avec une traçabilité garantie et un processus de transformation moderne. Nous privilégions l'approvisionnement local pour soutenir les riziculteurs ivoiriens, et contribuons à la sécurité alimentaire nationale. IVOIRE RIZ, c'est le goût, la qualité et la fierté ivoirienne."
    },
    {
      question: "Où trouver vos produits ? Comment devenir partenaire ?",
      answer: "Nos produits sont disponibles dans les supermarchés, points de vente agréés et chez nos distributeurs. Vous souhaitez devenir partenaire ou distributeur ? Contactez-nous via notre formulaire en ligne ou par téléphone au +225 05 06 80 31 13 pour recevoir plus d'informations sur nos modalités de partenariat."
    },
    {
      question: "Comment vous contacter ?",
      answer: "Vous pouvez nous joindre facilement : Par téléphone : +225 05 06 80 31 13, Par email : contact@ivoireriz.ci, Via notre formulaire de contact sur le site, ou en visitant notre siège social à Abidjan, Côte d'Ivoire. Une carte Google Maps est intégrée pour faciliter votre visite."
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
              Vous avez une autre question ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui ! Notre équipe est à votre disposition pour répondre 
              à toutes vos questions et vous accompagner dans vos projets.
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