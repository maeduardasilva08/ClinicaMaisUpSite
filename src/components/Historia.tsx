import { Heart, Sparkles, Users, ShieldCheck } from 'lucide-react';

const valores = [
  {
    icon: Heart,
    titulo: 'Cuidado Individual',
    texto: 'Cada pessoa é olhada de forma individual. Não existe protocolo pronto, indicação automática ou solução de gaveta.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Segurança & Verdade',
    texto: 'Não empurramos tendências. Não seguimos protocolos prontos. Construímos um caminho seguro, personalizado e responsável.',
  },
  {
    icon: Users,
    titulo: 'Trabalho em Equipe',
    texto: 'Nos bastidores, as profissionais se reúnem, conversam sobre os casos e buscam o melhor caminho para cada pessoa.',
  },
  {
    icon: Sparkles,
    titulo: 'Beleza com Propósito',
    texto: 'Acreditamos na beleza que nasce do cuidado certo. Na beleza que respeita a saúde. Na beleza que não promete milagres.',
  },
];

export default function Historia() {
  return (
    <section id="historia" className="relative py-24 bg-gradient-to-b from-white to-areia-50 overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dourado-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-5">
        {/* Section label */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-dourado-600 font-semibold text-sm tracking-[3px] uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Nossa História</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-areia-900 mb-6">
            Uma clínica que nasceu de uma<br />experiência de cuidado
          </h2>
          <div className="w-20 h-1 bg-dourado-500 mx-auto rounded-full" />
        </div>

        {/* Story text */}
        <div className="space-y-6 text-areia-700 text-lg leading-relaxed">
          <p>
            A história da Mais Up não começa apenas com estética. Começa com cuidado.
            Antes de cuidar de outras pessoas, Lilian viveu na pele a força de ser bem cuidada.
            Em um momento delicado da sua vida, depois de passar por uma experiência que exigia
            atenção, acolhimento e segurança, ela encontrou em um profissional da área um cuidado
            que marcou sua história.
          </p>

          <p>
            Aquele atendimento não transformou apenas sua aparência. Transformou sua direção.
            Até então, Lilian imaginava seguir outro caminho. Pensava em psicologia, em cuidar de
            pessoas por outra via. Mas, ao perceber o impacto que um cuidado bem feito poderia gerar
            na vida de alguém, algo mudou dentro dela. Ela entendeu que a estética, quando feita com
            responsabilidade, não é sobre vaidade vazia. É sobre autoestima, bem-estar, confiança e
            reconstrução.
          </p>

          <p className="font-serif text-xl text-dourado-700 italic text-center py-4">
            Foi assim que nasceu sua paixão pela saúde estética.
          </p>

          <p>
            Anos depois, surgiu a oportunidade de assumir a Mais Up. À primeira vista, parecia a
            realização de um sonho. Uma marca já conhecida, uma estrutura bonita e uma possibilidade
            que parecia grande demais para ser ignorada.
          </p>

          <p>
            Mas, ao entrar mais fundo, Lilian e Alexandre descobriram que o desafio era muito maior
            do que parecia. Havia pouca clareza administrativa, pouca comprovação dos números e muita
            coisa para reorganizar. O que parecia apenas uma oportunidade se revelou também um chamado
            para reconstrução.
          </p>

          <p>
            A decisão mexeu com tudo. Com a família, com a vida financeira, com o casamento e com as
            estruturas emocionais dos dois. Houve momentos em que o sonho quase pareceu pesado demais
            para continuar.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 my-8 border-l-4 border-dourado-500">
            <p className="font-serif text-2xl text-areia-900 mb-2">Mas a Mais Up não foi abandonada.</p>
            <p className="font-serif text-2xl text-dourado-600">Ela foi reconstruída.</p>
          </div>

          <p>
            Alexandre assumiu a reorganização administrativa, fiscal e financeira. Lilian seguiu firme
            no cuidar, e a clínica começou a tomar forma.
          </p>

          <p>
            Hoje, a Mais Up carrega essa história em cada detalhe. A clínica não existe para vender
            procedimentos por impulso, tendências passageiras ou promessas superficiais. A Mais Up
            existe para cuidar de pessoas com segurança, verdade e responsabilidade.
          </p>

          <p>
            Aqui, cada pessoa é olhada de forma individual. Não existe protocolo pronto, indicação
            automática ou solução de gaveta. Existe escuta, avaliação, critério e construção
            personalizada.
          </p>

          <p>
            Se uma pessoa não quer injetáveis, o caminho é adaptado. Se precisa de um olhar nutricional,
            o cuidado é integrado. Se precisa de tecnologia, os aparelhos entram como parte de uma
            estratégia. Cada decisão é pensada para respeitar o corpo, a história, os limites e os
            objetivos de quem chega.
          </p>

          <p>
            Um dos maiores diferenciais da Mais Up acontece nos bastidores: as profissionais se reúnem,
            conversam sobre os casos, discutem protocolos e buscam o melhor caminho para cada pessoa.
            Esse cuidado nem sempre aparece para o cliente, mas é justamente ele que sustenta a
            segurança, a excelência e a confiança da clínica.
          </p>
        </div>

        {/* Values cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {valores.map((valor, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-full bg-dourado-100 flex items-center justify-center mb-4 group-hover:bg-dourado-500 transition-colors duration-300">
                <valor.icon className="w-7 h-7 text-dourado-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-areia-900 mb-2">{valor.titulo}</h3>
              <p className="text-sm text-areia-600 leading-relaxed">{valor.texto}</p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center space-y-4">
          <p className="font-serif text-2xl lg:text-3xl text-areia-900 leading-relaxed">
            A Mais Up acredita em beleza — mas não em qualquer beleza.
          </p>
          <div className="space-y-2 text-areia-700 text-lg">
            <p>Na beleza que nasce do cuidado certo.</p>
            <p>Na beleza que respeita a saúde.</p>
            <p>Na beleza que não promete milagres.</p>
            <p>Na beleza que não segue modismo, mas critério.</p>
            <p>Na beleza que olha para a pessoa antes de olhar o procedimento.</p>
          </div>
          <div className="bg-gradient-to-r from-dourado-50 via-areia-50 to-dourado-50 rounded-2xl p-8 mt-8 border border-dourado-200">
            <p className="font-serif text-xl lg:text-2xl text-areia-900 leading-relaxed">
              Porque a Mais Up não quer ser apenas mais uma clínica de estética.
              <br />
              A Mais Up quer ser um lugar onde ciência, verdade, bem-estar e cuidado caminham juntos
              para entregar resultados reais, seguros e coerentes.
            </p>
            <p className="mt-6 text-dourado-600 font-semibold text-lg">
              Mais que estética, a Mais Up entrega cuidado com propósito, segurança e verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
