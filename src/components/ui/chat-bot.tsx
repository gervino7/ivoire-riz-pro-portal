import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Package,
  Phone,
  MapPin,
  Award
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Invitation automatique après 3 secondes
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const quickReplies = [
    { text: "Vos produits", icon: Package },
    { text: "Nos prix", icon: Award },
    { text: "Contact", icon: Phone },
    { text: "Points de vente", icon: MapPin },
  ];

  const botResponses = {
    "bonjour": "Bonjour ! 👋 Bienvenue chez IVOIRE RIZ ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?",
    "salut": "Salut ! 😊 Ravi de vous accueillir sur notre site. En quoi puis-je vous être utile ?",
    "produits": "Nous proposons 4 gammes de riz de qualité : \n• Riz JT11 Parfumé 🌾\n• Riz CBONE Diététique 🥗\n• Riz Étuvé nutritif 💪\n• Riz Blanc premium ⭐\n\nTous disponibles en 5kg, 10kg et 25kg !",
    "vos produits": "Nous proposons 4 gammes de riz de qualité : \n• Riz JT11 Parfumé 🌾\n• Riz CBONE Diététique 🥗\n• Riz Étuvé nutritif 💪\n• Riz Blanc premium ⭐\n\nTous disponibles en 5kg, 10kg et 25kg !",
    "prix": "Pour connaître nos tarifs actuels et nos offres spéciales, je vous invite à nous appeler au +225 05 06 80 31 13 ou à remplir notre formulaire de contact. Nous proposons des prix compétitifs et des remises pour les gros volumes ! 💰",
    "nos prix": "Pour connaître nos tarifs actuels et nos offres spéciales, je vous invite à nous appeler au +225 05 06 80 31 13 ou à remplir notre formulaire de contact. Nous proposons des prix compétitifs et des remises pour les gros volumes ! 💰",
    "contact": "Vous pouvez nous contacter facilement : \n📞 +225 05 06 80 31 13\n📧 inddger7@gmail.com\n📍 Abidjan, Côte d'Ivoire\n\nLivraison gratuite à Abidjan pour 50kg+ ! 🚚",
    "téléphone": "Notre numéro : +225 05 06 80 31 13 📞\nNous sommes disponibles du lundi au vendredi pour répondre à toutes vos questions !",
    "adresse": "Nous sommes basés à Abidjan, Côte d'Ivoire 📍\nContactez-nous pour plus de détails sur notre localisation exacte !",
    "livraison": "🚚 Livraison GRATUITE partout à Abidjan pour tout achat de 50kg minimum ! Pour les autres zones, contactez-nous pour connaître nos conditions.",
    "points de vente": "Nos produits sont disponibles dans :\n🏪 Supermarchés et grandes surfaces\n🏬 Points de vente agréés\n🤝 Distributeurs partenaires\n\nContactez-nous pour devenir partenaire !",
    "qualité": "Chez IVOIRE RIZ, la qualité est notre priorité ! ✨\n• Traçabilité garantie\n• Normes strictes\n• Transformation moderne\n• Soutien aux producteurs locaux\n• Certification qualité",
    "partenariat": "Vous souhaitez devenir partenaire ? 🤝\nContactez-nous au +225 05 06 80 31 13 ou via notre formulaire. Nous proposons des conditions attractives pour nos distributeurs !",
    "default": "Merci pour votre question ! 😊 Pour une réponse personnalisée, n'hésitez pas à nous appeler au +225 05 06 80 31 13 ou à remplir notre formulaire de contact. Notre équipe sera ravie de vous aider !"
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && message.includes(key)) {
        return response;
      }
    }
    
    return botResponses.default;
  };

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Ajouter le message de l'utilisateur
    addMessage(inputMessage, false);
    
    // Simuler une réponse du bot après un délai
    setTimeout(() => {
      const response = getBotResponse(inputMessage);
      addMessage(response, true);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickReply = (reply: string) => {
    addMessage(reply, false);
    setTimeout(() => {
      const response = getBotResponse(reply);
      addMessage(response, true);
    }, 1000);
  };

  const initializeChat = () => {
    if (messages.length === 0) {
      setTimeout(() => {
        addMessage("Bonjour ! 👋 Je suis l'assistant virtuel d'IVOIRE RIZ. Je peux vous renseigner sur nos produits, nos prix, nos points de vente et bien plus ! Comment puis-je vous aider ?", true);
      }, 500);
    }
  };

  const toggleChat = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setShowWelcome(false);
      initializeChat();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <div className="fixed bottom-24 right-6 z-50">
        {!isOpen && showWelcome && (
          <div className="mb-4 relative">
            <div className="bg-white rounded-lg shadow-xl p-4 max-w-xs animate-in slide-in-from-bottom-5 duration-500">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-primary to-primary-dark p-2 rounded-full">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Une question sur nos produits ?</p>
                  <p className="text-xs text-gray-600 mt-1">Cliquez pour discuter avec moi ! 💬</p>
                </div>
                <button 
                  onClick={() => setShowWelcome(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute bottom-0 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
            </div>
          </div>
        )}
        
        <Button
          onClick={toggleChat}
          className={`relative h-14 w-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group ${
            isOpen 
              ? 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
              : 'bg-gradient-to-br from-primary to-primary-dark'
          }`}
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:animate-pulse"></div>
          <div className="relative z-10 transition-transform duration-300">
            {isOpen ? (
              <X className="h-6 w-6 rotate-0 transition-transform duration-300" />
            ) : (
              <MessageCircle className="h-6 w-6 rotate-0 transition-transform duration-300" />
            )}
          </div>
          {showWelcome && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-bounce">
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
            </div>
          )}
        </Button>
      </div>

      {/* Interface de chat */}
      {isOpen && (
        <div className="fixed bottom-36 right-6 z-40 w-96 h-[500px] animate-in slide-in-from-bottom-10 fade-in duration-300"
             style={{ animationFillMode: 'forwards' }}>
          <Card className="h-full shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-primary to-primary-dark text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Assistant IVOIRE RIZ</h3>
                    <p className="text-xs text-white/80">En ligne • Répond rapidement</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col h-full p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50/50 to-white">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {message.isBot && (
                      <div className="bg-gradient-to-br from-primary to-primary-dark p-2 rounded-full h-8 w-8 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isBot
                          ? 'bg-white shadow-md border border-gray-100'
                          : 'bg-gradient-to-br from-primary to-primary-dark text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {!message.isBot && (
                      <div className="bg-gray-200 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Réponses rapides */}
              {messages.length <= 1 && (
                <div className="p-4 border-t bg-gray-50/50">
                  <p className="text-xs text-gray-600 mb-2">Suggestions :</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickReplies.map((reply, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickReply(reply.text)}
                        className="justify-start gap-2 h-auto py-2 text-xs hover:bg-primary/5 hover:border-primary/30"
                      >
                        <reply.icon className="h-3 w-3" />
                        {reply.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Zone de saisie */}
              <div className="p-4 border-t bg-white">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Tapez votre message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 border-gray-200 focus:border-primary"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="bg-gradient-to-br from-primary to-primary-dark hover:scale-105 transition-transform"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Propulsé par l'IA IVOIRE RIZ
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;