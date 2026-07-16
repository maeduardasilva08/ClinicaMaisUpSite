import { useState } from 'react';
import { procedimentos, type Procedimento, type SubtipoProcedimento, type AreaProcedimento } from './Data';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';

const categorias = ['Facial', 'Corporal', 'Nutrição'] as const;

export default function Procedimentos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null);
  const [modalProc, setModalProc] = useState<Procedimento | null>(null);

  const listaFiltrada = categoriaAtiva
    ? procedimentos.filter((p: Procedimento) => (Array.isArray(p.categoria) ? p.categoria.includes(categoriaAtiva) : p.categoria === categoriaAtiva))
    : [];

  return (
    <section id="procedimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-dourado-600 font-semibold text-sm tracking-[3px] uppercase mb-4">
            <span>Nossos Procedimentos</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-areia-900 mb-4">
            Tratamentos pensados para você
          </h2>
          <p className="text-areia-600 text-lg max-w-2xl mx-auto">
            Selecione uma categoria para explorar os procedimentos disponíveis.
            Cada tratamento é avaliado e personalizado conforme suas necessidades.
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(categoriaAtiva === cat ? null : cat)}
              className={`px-7 py-3 rounded-full font-semibold text-sm border-2 transition-all duration-300 ${
                categoriaAtiva === cat
                  ? 'bg-dourado-500 text-white border-dourado-500 shadow-lg scale-105'
                  : 'bg-white text-areia-800 border-dourado-300 hover:bg-dourado-50 hover:border-dourado-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        {categoriaAtiva && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeIn_0.4s_ease]">
            {listaFiltrada.map((proc: Procedimento, i: number) => {
              const catTexto = Array.isArray(proc.categoria) ? proc.categoria.join(' / ') : proc.categoria;
              return (
                <div
                  key={i}
                  onClick={() => setModalProc(proc)}
                  className="bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-areia-100 hover:border-dourado-300 flex flex-col justify-between min-h-[160px] group"
                >
                  <div>
                    <h3 className="font-serif text-lg font-bold text-dourado-700 mb-3 group-hover:text-dourado-600 transition-colors">
                      {proc.nome}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-areia-100 text-areia-700 text-xs font-semibold">
                      {catTexto}
                    </span>
                  </div>
                  <span className="text-sm italic text-areia-400 mt-4 group-hover:text-dourado-600 transition-colors">
                    Toque para ver detalhes
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {!categoriaAtiva && (
          <div className="text-center py-12 text-areia-400 text-lg">
            Selecione uma categoria acima para ver os procedimentos disponíveis.
          </div>
        )}
      </div>

      {/* Modal */}
      {modalProc && (
        <ProcedimentoModal proc={modalProc} onClose={() => setModalProc(null)} />
      )}
    </section>
  );
}

function ProcedimentoModal({ proc, onClose }: { proc: Procedimento; onClose: () => void }) {
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

        <h3 className="font-serif text-2xl lg:text-3xl text-dourado-700 mb-2 pr-12">{proc.nome}</h3>
        <p className="text-areia-500 text-sm mb-6">
          {Array.isArray(proc.categoria) ? proc.categoria.join(' / ') : proc.categoria}
        </p>

        <hr className="border-areia-100 mb-6" />

        {/* Description */}
        <div className="mb-6">
          <h4 className="font-serif text-lg font-bold text-areia-900 mb-2">Descrição</h4>
          <p className="text-areia-600 leading-relaxed">{proc.descricao}</p>
        </div>

        {/* Beneficios */}
        <div className="mb-6">
          <h4 className="font-serif text-lg font-bold text-areia-900 mb-3">Benefícios</h4>
          <ul className="space-y-2">
            {proc.beneficios.map((b: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-areia-600">
                <CheckCircle2 className="w-5 h-5 text-dourado-500 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Indicações */}
        <div className="mb-6">
          <h4 className="font-serif text-lg font-bold text-areia-900 mb-2">Indicações</h4>
          <p className="text-areia-600">{proc.indicacoes.join(', ')}</p>
        </div>

        {/* Subtipos */}
        {proc.subtipos && proc.subtipos.length > 0 && (
          <div className="mb-6">
            <h4 className="font-serif text-lg font-bold text-areia-900 mb-3">Tipos Disponíveis</h4>
            <div className="space-y-3">
              {proc.subtipos.map((sub: SubtipoProcedimento, i: number) => (
                <div key={i} className="bg-dourado-50 rounded-xl p-4">
                  <h5 className="font-semibold text-dourado-700 mb-1">{sub.nome}</h5>
                  <p className="text-sm text-areia-600 leading-relaxed">{sub.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Áreas */}
        {proc.areas && proc.areas.length > 0 && (
          <div className="mb-6">
            <h4 className="font-serif text-lg font-bold text-areia-900 mb-3">Onde pode ser aplicado</h4>
            <div className="space-y-3">
              {proc.areas.map((area: AreaProcedimento, i: number) => (
                <div key={i} className="bg-verde-50 border-l-4 border-verde-400 rounded-lg p-4">
                  <h5 className="font-semibold text-verde-500 mb-1">
                    {area.nome} <span className="text-areia-400 font-normal text-sm">(ex.: {area.exemplo})</span>
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    {area.beneficios.map((b: string, j: number) => (
                      <li key={j} className="text-sm text-areia-600">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/5511985813441?text=Olá! Gostaria de saber mais sobre o procedimento: ${proc.nome}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full max-w-sm mx-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <MessageCircle className="w-5 h-5" />
          Saber mais pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
