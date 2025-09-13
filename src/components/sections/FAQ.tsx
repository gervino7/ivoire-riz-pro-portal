import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Sparkles, Star } from 'lucide-react';

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
    <section id="faq" className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-bounce-gentle"></div>
        <Sparkles className="absolute top-32 right-20 h-6 w-6 text-primary/30 animate-pulse" />
        <Star className="absolute bottom-32 left-20 h-4 w-4 text-accent/40 animate-bounce-gentle" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <HelpCircle className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent mb-6 leading-tight">
            Questions Fréquentes
          </h2>
          <div className="relative mx-auto mb-8">
            <div className="w-32 h-1 bg-gradient-gold mx-auto rounded-full shadow-glow"></div>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full -mt-1 shadow-elegant"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Découvrez tout ce que vous devez savoir sur <span className="font-semibold text-primary">IVOIRE RIZ</span> - 
            vos questions, nos réponses expertes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-6 mb-16">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="relative overflow-hidden border-0 bg-card/80 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <button
                    onClick={() => toggleItem(index)}
                    className="relative w-full text-left p-8 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:animate-pulse"></div>
                          <div className="relative bg-gradient-to-br from-primary to-primary-dark p-3 rounded-full shadow-elegant">
                            <HelpCircle className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-montserrat font-bold text-primary pr-4 leading-tight group-hover:text-primary-dark transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <div className="w-12 h-0.5 bg-gradient-gold mt-2 group-hover:w-20 transition-all duration-300"></div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-md group-hover:animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-accent to-accent-dark p-2 rounded-full shadow-subtle group-hover:shadow-glow transition-all duration-300">
                          {openItem === index ? (
                            <ChevronUp className="h-5 w-5 text-white transform group-hover:scale-110 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-white transform group-hover:scale-110 transition-transform duration-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {openItem === index && (
                    <CardContent className="relative px-8 pb-8 pt-0 animate-accordion-down">
                      <div className="pl-16">
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full blur-sm"></div>
                          <div className="relative w-full h-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full"></div>
                        </div>
                        <div className="relative bg-gradient-to-br from-muted/50 to-background/50 rounded-2xl p-6 border border-border/50 backdrop-blur-sm">
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="absolute -top-2 -right-2 bg-gradient-to-br from-primary to-accent p-1 rounded-full shadow-elegant">
                            <Star className="h-3 w-3 text-white animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="relative group animate-scale-in">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative text-center bg-gradient-to-br from-card/90 via-background/95 to-card/90 backdrop-blur-lg rounded-3xl p-10 border border-border/50 shadow-glow">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-primary/20 rounded-full blur-md animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-accent/20 rounded-full blur-md animate-bounce-gentle"></div>
              
              <div className="relative">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-lg animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-primary to-accent p-4 rounded-full shadow-glow mx-auto w-fit">
                    <MessageCircle className="h-12 w-12 text-white animate-bounce-gentle" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-montserrat font-bold bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent mb-6 leading-tight">
                  Vous avez une autre question ?
                </h3>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Contactez-nous dès aujourd'hui ! Notre équipe d'experts est à votre disposition pour répondre 
                  à toutes vos questions et vous accompagner dans vos projets.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="group relative bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold px-8 py-4 text-lg shadow-glow hover:shadow-elegant transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative">Nous contacter</span>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="group relative border-2 border-primary text-primary hover:text-white font-bold px-8 py-4 text-lg hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative">Demander un rappel</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;