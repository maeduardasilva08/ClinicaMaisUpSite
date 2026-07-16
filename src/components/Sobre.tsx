import { Eye, HeartHandshake, Layers, ShieldCheck } from 'lucide-react';

const valores = [
  {
    icon: Eye,
    titulo: 'Olhar Individual',
    texto: 'Olhamos para a pessoa antes de olhar para o procedimento. Cada caso é único e merece atenção integral.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Segurança & Verdade',
    texto: 'Procedimentos responsáveis, com responsável técnica e equipe que discute cada caso nos bastidores.',
  },
  {
    icon: HeartHandshake,
    titulo: 'Cuidado Humanizado',
    texto: 'Acolhimento, escuta e empatia em cada atendimento. Não empurramos tendências nem prometemos milagres.',
  },
  {
    icon: Layers,
    titulo: 'Tratamento Integrado',
    texto: 'Estética, nutrição e tecnologia combinadas em protocolos personalizados para resultados reais.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 text-dourado-600 font-semibold text-sm tracking-[3px] uppercase mb-4">
              <span>Sobre a Clínica</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-areia-900 mb-6">
              Uma clínica que nasceu de uma<br />experiência de cuidado
            </h2>
            <p className="text-areia-600 text-lg leading-relaxed mb-4">
              A Mais Up não existe para vender procedimentos por impulso, tendências passageiras
              ou promessas superficiais. Existe para cuidar de pessoas com segurança, verdade e
              responsabilidade.
            </p>
            <p className="text-areia-600 text-lg leading-relaxed mb-4">
              Aqui, cada pessoa é olhada de forma individual. Não existe protocolo pronto, indicação
              automática ou solução de gaveta. Existe escuta, avaliação, critério e construção
              personalizada.
            </p>
            <p className="text-areia-600 text-lg leading-relaxed">
              Se uma pessoa não quer injetáveis, o caminho é adaptado. Se precisa de um olhar
              nutricional, o cuidado é integrado. Cada decisão é pensada para respeitar o corpo,
              a história, os limites e os objetivos de quem chega.
            </p>
          </div>

          {/* Right: values cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {valores.map((v, i) => (
              <div
                key={i}
                className="bg-areia-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-full bg-dourado-100 flex items-center justify-center mb-4 group-hover:bg-dourado-500 transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-dourado-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-base font-bold text-areia-900 mb-2">{v.titulo}</h3>
                <p className="text-sm text-areia-600 leading-relaxed">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
