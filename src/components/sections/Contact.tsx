import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi du formulaire
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    // Reset du formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Abidjan, Côte d'Ivoire", "Zone Industrielle de Yopougon"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Nos Lignes Directes",
      details: ["07 49 81 01 93", "07 87 01 39 4", "07 09 04 21 71"],
      color: "text-secondary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@ivoireriz.ci", "commercial@ivoireriz.ci"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven : 8h00 - 17h00", "Sam : 8h00 - 12h00"],
      color: "text-primary"
    }
  ];

  const subjects = [
    "Demande de devis",
    "Partenariat distributeur",
    "Information produit",
    "Service client",
    "Autre"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Contactez-Nous
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre équipe est à votre écoute pour répondre à toutes vos questions 
            et vous accompagner dans vos projets. N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-semibold text-primary mb-6">
                Nos Coordonnées
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-subtle hover:shadow-premium transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${info.color.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <info.icon className={`h-6 w-6 ${info.color}`} />
                        </div>
                        <div>
                          <h4 className="font-montserrat font-semibold text-primary mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-nature rounded-2xl p-8 text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-montserrat font-semibold text-primary mb-2">
                Notre Localisation
              </h4>
              <p className="text-muted-foreground mb-4">
                Située au cœur de la zone industrielle d'Abidjan, 
                notre entreprise est facilement accessible.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Voir sur Google Maps
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-premium">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-montserrat font-semibold text-primary">
                  Envoyez-nous un message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-primary font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-border focus:border-primary"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-primary font-medium">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 border-border focus:border-primary"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-primary font-medium">
                    Adresse email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 border-border focus:border-primary"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-primary font-medium">
                    Sujet *
                  </Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    required
                    className="mt-1 w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:border-primary bg-background"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-primary font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1 border-border focus:border-primary resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:bg-primary-dark text-white font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires. Nous vous répondrons dans les 24h ouvrées.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-montserrat font-semibold mb-4">
            Besoin d'une réponse rapide ?
          </h3>
          <p className="mb-6 text-white/90 max-w-2xl mx-auto">
            Pour les demandes urgentes, n'hésitez pas à nous appeler directement. 
            Notre équipe commerciale est disponible du lundi au vendredi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
              <Phone className="mr-2 h-5 w-5" />
              +225 27 22 XX XX XX
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
              <Mail className="mr-2 h-5 w-5" />
              commercial@ivoireriz.ci
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;