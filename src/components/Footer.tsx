import { Sparkles, Heart, Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-areia-900 text-areia-100 py-12">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dourado-400 to-dourado-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-white">Mais Up</p>
                <p className="text-[10px] tracking-[3px] uppercase text-dourado-400">Clínica de Estética</p>
              </div>
            </div>
            <p className="text-sm text-areia-300 leading-relaxed max-w-xs">
              Mais que estética, a Mais Up entrega cuidado com propósito, segurança e verdade.
            </p>
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
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-areia-300 hover:text-dourado-400 transition-colors">
                <Instagram className="w-4 h-4" /> @clinicamaisup
              </a>
              <a href="mailto:contato@clinicamaisup.com.br" className="flex items-center gap-2 text-areia-300 hover:text-dourado-400 transition-colors">
                <Mail className="w-4 h-4" /> contato@clinicamaisup.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-areia-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-areia-400">
            © {new Date().getFullYear()} Clínica Mais Up. Todos os direitos reservados.
          </p>
          <p className="text-xs text-areia-400 flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-dourado-500 fill-dourado-500" /> e cuidado.
          </p>
        </div>
      </div>
    </footer>
  );
}
