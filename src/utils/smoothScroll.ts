export const smoothScrollToSection = (targetId: string) => {
  // Supprimer le # si présent
  const id = targetId.startsWith('#') ? targetId.slice(1) : targetId;
  
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = 80; // Hauteur du header fixe
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
  e.preventDefault();
  
  if (href.startsWith('#')) {
    smoothScrollToSection(href);
  } else if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    // Liens externes
    window.open(href, '_blank', 'noopener,noreferrer');
  }
};