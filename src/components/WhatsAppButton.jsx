import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ whatsappLink }) => {
  return (
    <a href={whatsappLink} target="_blank" rel="noreferrer" className="whatsapp-float">
      <MessageCircle size={35} color="white" />
    </a>
  );
};

export default WhatsAppButton;
