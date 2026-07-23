import { HeartPulse, ShieldCheck, UserCheck, Stethoscope } from 'lucide-react';

const highlights = [
  {
    icon: UserCheck,
    titulo: 'Atendimento Individual',
    texto: 'Cada paciente é único. Avaliação, escuta e protocolos 100% personalizados.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Segurança em Primeiro Lugar',
    texto: 'Procedimentos responsáveis, com responsável técnica e excelência clínica.',
  },
  {
    icon: HeartPulse,
    titulo: 'Cuidado Integrado',
    texto: 'Estética, nutrição e tecnologia trabalhando juntas pelo seu bem-estar.',
  },
  {
    icon: Stethoscope,
    titulo: 'Decisão Clínica',
    texto: 'Equipe discute cada caso nos bastidores para o melhor caminho para você.',
  },
];

export default function Highlights() {
  return (
    <section className="relative -mt-10 z-10 max-w-7xl mx-auto px-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-dourado-100 flex items-center justify-center mb-4 group-hover:bg-dourado-500 transition-colors duration-300">
              <item.icon className="w-7 h-7 text-dourado-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-lg font-bold text-areia-900 mb-2">{item.titulo}</h3>
            <p className="text-sm text-areia-600 leading-relaxed">{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
