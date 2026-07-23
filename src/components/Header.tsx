import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Nossa História', href: '#historia' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.08)]' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between py-4">
      <a href="#hero" className="flex items-center gap-2 group">
      <img
        src="/images/logo_maisup.png"
        alt="Clínica Mais Up"
         className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
         />
      </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-areia-800 font-medium text-sm hover:text-dourado-600 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-dourado-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5511985813441?text=Olá! Gostaria de agendar uma consulta na Clínica Mais Up."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-dourado-500 hover:bg-dourado-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Agendar Consulta
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-areia-800 p-2"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-5 pb-5 gap-3 bg-white/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-areia-800 font-medium py-2 border-b border-areia-100 hover:text-dourado-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511985813441?text=Olá! Gostaria de agendar uma consulta na Clínica Mais Up."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dourado-500 text-white text-center px-6 py-3 rounded-full font-semibold mt-2"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
