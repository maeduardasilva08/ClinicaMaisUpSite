import { useState } from 'react';
import { profissionais, type Profissional } from '../data';
import { X, GraduationCap, Target, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Equipe() {
  const [modalProf, setModalProf] = useState<Profissional | null>(null);

  return (
    <section id="equipe" className="py-24 bg-areia-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-dourado-600 font-semibold text-sm tracking-[3px] uppercase mb-4">
            <span>Nossa Equipe</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-areia-900 mb-4">
            Profissionais que cuidam de você
          </h2>
          <p className="text-areia-600 text-lg max-w-2xl mx-auto">
            Cada profissional da Mais Up foi escolhida pela excelência técnica
            e pelo compromisso com o cuidado humanizado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {profissionais.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group"
            >
              <div className="overflow-hidden">
                <img
                  src={p.imagem}
                  alt={p.nome}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-dourado-700">{p.nome}</h3>
                <h4 className="text-sm text-areia-500 mt-1 mb-3">{p.cargo}</h4>
                <p className="text-sm text-areia-600 leading-relaxed line-clamp-3">{p.sobre}</p>
                <button
                  onClick={() => setModalProf(p)}
                  className="w-full mt-5 bg-dourado-500 hover:bg-verde-500 text-white py-3 rounded-full font-semibold text-sm transition-all duration-300"
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalProf && <ProfissionalModal prof={modalProf} onClose={() => setModalProf(null)} />}
    </section>
  );
}

function ProfissionalModal({ prof, onClose }: { prof: Profissional; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-[fadeIn_0.3s_ease]"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] max-w-2xl max-h-[90vh] overflow-auto rounded-2xl p-8 lg:p-10 shadow-2xl relative animate-[modalIn_0.35s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-dourado-600 hover:bg-dourado-50 hover:rotate-90 transition-all duration-300"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <img
            src={prof.imagem}
            alt={prof.nome}
            className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-4 shadow-lg"
          />
          <h3 className="font-serif text-3xl text-dourado-700">{prof.nome}</h3>
          <p className="text-areia-500 text-base mt-1">{prof.cargo}</p>
        </div>

        <hr className="border-areia-100 mb-6" />

        {/* Formação */}
        <div className="mb-6">
          <h4 className="flex items-center gap-2 font-serif text-lg font-bold text-dourado-700 mb-2">
            <GraduationCap className="w-5 h-5" /> Formação
          </h4>
          <p className="text-areia-600 leading-relaxed">{prof.formacao}</p>
        </div>

        {/* Sobre */}
        <div className="mb-6">
          <h4 className="font-serif text-lg font-bold text-dourado-700 mb-2">Sobre</h4>
          <p className="text-areia-600 leading-relaxed">{prof.sobre}</p>
        </div>

        {/* Especialidades */}
        <div className="mb-6">
          <h4 className="font-serif text-lg font-bold text-dourado-700 mb-3">Especialidades</h4>
          <ul className="space-y-2">
            {prof.especialidades.map((e, i) => (
              <li key={i} className="flex items-center gap-2 text-areia-600">
                <CheckCircle2 className="w-5 h-5 text-dourado-500 flex-shrink-0" />
                {e}
              </li>
            ))}
          </ul>
        </div>

        {/* Missão */}
        <div className="mb-6 bg-verde-50 border-l-4 border-verde-400 rounded-lg p-4">
          <h4 className="flex items-center gap-2 font-serif text-lg font-bold text-verde-500 mb-2">
            <Target className="w-5 h-5" /> Missão
          </h4>
          <p className="text-areia-600 leading-relaxed italic">{prof.missao}</p>
        </div>

        {/* WhatsApp */}
        <a
          href={prof.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full max-w-sm mx-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <MessageCircle className="w-5 h-5" />
          Agendar consulta
        </a>
      </div>
    </div>
  );
}
