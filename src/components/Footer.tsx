import { Instagram, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-areia-900 text-areia-100 py-12">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo_maisup.png"
                alt="Mais Up Clínica de Estética"
                className="w-25 h-25 rounded-full object-cover"
              />            
            </div>        
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="text-areia-300 hover:text-dourado-400 transition-colors">Início</a></li>
              <li><a href="#historia" className="text-areia-300 hover:text-dourado-400 transition-colors">Nossa História</a></li>
              <li><a href="#procedimentos" className="text-areia-300 hover:text-dourado-400 transition-colors">Procedimentos</a></li>
              <li><a href="#equipe" className="text-areia-300 hover:text-dourado-400 transition-colors">Equipe</a></li>
              <li><a href="#contato" className="text-areia-300 hover:text-dourado-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://wa.me/5511985813441" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-areia-300 hover:text-dourado-400 transition-colors">
                <MessageCircle className="w-4 h-4" /> (11) 98581-3441
              </a>
              <a href="https://instagram.com/maisupestetica" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-areia-300 hover:text-dourado-400 transition-colors">
                <Instagram className="w-4 h-4" /> @maisupestetica
              </a>
              <a href="mailto:contato@clinicamaisup.com.br" className="flex items-center gap-2 text-areia-300 hover:text-dourado-400 transition-colors">
                <Mail className="w-4 h-4" /> contato@clinicamaisup.com.br
              </a>
              <div className="flex items-start gap-2 text-areia-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua Rússia, 65, Jardim Planalto, Salto - SP</span>
              </div>
              <div className="flex items-start gap-2 text-areia-300">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Seg. a Sex.: 8h às 18h<br />Sábado: 8h às 12h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-areia-800 pt-6 flex items-center justify-center">
          <p className="text-xs text-areia-400">
            © {new Date().getFullYear()} Clínica Mais Up. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
