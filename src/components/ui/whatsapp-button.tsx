import { MessageCircle } from 'lucide-react';
import { Button } from './button';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'inline';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  text?: string;
}

const WhatsAppButton = ({ 
  variant = 'inline', 
  size = 'default', 
  className = '',
  text = 'Contactez-nous'
}: WhatsAppButtonProps) => {
  const phoneNumber = "2250506803113"; // Format international pour la Côte d'Ivoire
  const message = "Bonjour, je vous contacte depuis le site web d'Ivoire Riz. J'aimerais avoir des informations sur vos produits.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (variant === 'floating') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse ${className}`}
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    );
  }

  return (
    <Button
      asChild
      size={size}
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MessageCircle className="h-4 w-4" />
        {text}
      </a>
    </Button>
  );
};

export default WhatsAppButton;