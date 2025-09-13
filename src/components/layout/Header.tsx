import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/ivoire-riz-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Produits', href: '#produits' },
    { name: 'Actualités', href: '#actualites' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Témoignages', href: '#témoignages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-xl border-b border-border/50 shadow-premium animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <img 
                src={logoImage} 
                alt="IVOIRE RIZ Logo" 
                className="w-full h-full object-contain rounded-xl shadow-gold animate-glow"
              />
              <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl md:text-2xl font-montserrat font-bold text-primary group-hover:text-primary-vivid transition-colors duration-300">
                IVOIRE RIZ
              </span>
              <span className="text-xs text-secondary font-medium tracking-wider hidden sm:block">
                QUALITÉ SUPÉRIEURE
              </span>
            </div>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-lg hover:bg-muted/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300 z-0"></div>
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#produits">
              <Button className="relative overflow-hidden bg-gradient-gold hover:bg-gradient-premium text-secondary-foreground font-semibold shadow-gold hover:shadow-vivid transition-all duration-500 group px-6 py-3 rounded-xl">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Nos Produits</span>
                <div className="absolute inset-0 bg-gradient-vivid opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-premium opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500"></div>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-3 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              ) : (
                <Menu className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background/98 backdrop-blur-xl animate-slide-up shadow-xl">
            <nav className="py-4 space-y-1 px-2">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative block px-4 py-3 text-sm sm:text-base text-foreground hover:text-primary hover:bg-gradient-nature rounded-lg transition-all duration-300 font-medium animate-fade-in"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-lg"></div>
                  <div className="absolute left-4 right-4 bottom-2 h-0.5 bg-gradient-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0"></div>
                </a>
              ))}
              <div className="px-2 pt-4">
                <a href="#produits" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full relative overflow-hidden bg-gradient-gold hover:bg-gradient-premium text-secondary-foreground font-semibold shadow-gold hover:shadow-vivid transition-all duration-500 group py-3 text-sm rounded-xl">
                    <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Nos Produits</span>
                    <div className="absolute inset-0 bg-gradient-vivid opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;