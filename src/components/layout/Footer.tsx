import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    entreprise: [
      { name: "À propos", href: "#apropos" },
      { name: "Notre histoire", href: "#apropos" },
      { name: "Nos valeurs", href: "#apropos" },
      { name: "Carrières", href: "#" }
    ],
    produits: [
      { name: "Riz blanc premium", href: "#produits" },
      { name: "Riz étuvé", href: "#produits" },
      { name: "Riz parfumé", href: "#produits" },
      { name: "Riz brisé", href: "#produits" }
    ],
    services: [
      { name: "Partenariat distributeur", href: "#contact" },
      { name: "Conditionnement personnalisé", href: "#contact" },
      { name: "Livraison", href: "#contact" },
      { name: "Support technique", href: "#contact" }
    ],
    ressources: [
      { name: "Actualités", href: "#actualites" },
      { name: "FAQ", href: "#faq" },
      { name: "Témoignages", href: "#témoignages" },
      { name: "Catalogue produits", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" }
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">IR</span>
              </div>
              <span className="text-2xl font-montserrat font-bold">
                IVOIRE RIZ
              </span>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Leader de la production et distribution de riz de qualité premium en Côte d'Ivoire. 
              Depuis 15 ans, nous cultivons l'excellence pour offrir le goût authentique de l'Afrique.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Abidjan, Zone Industrielle de Yopougon, Côte d'Ivoire
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80 text-sm">+225 27 22 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80 text-sm">contact@ivoireriz.ci</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-secondary">
              Entreprise
            </h4>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-secondary">
              Produits
            </h4>
            <ul className="space-y-2">
              {footerLinks.produits.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-secondary">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-md">
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-secondary">
              Restez informé
            </h4>
            <p className="text-white/70 text-sm mb-4">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres spéciales.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-secondary"
              />
              <button className="px-6 py-2 bg-gradient-gold hover:bg-secondary-dark text-secondary-foreground font-semibold rounded-lg transition-colors duration-200">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 bg-primary-dark/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © {currentYear} IVOIRE RIZ. Tous droits réservés.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors duration-200">
                CGV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;