import { Heart, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-areia-50 to-white" />
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-dourado-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-areia-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-dourado-600 font-semibold text-sm tracking-[2px] uppercase animate-[fadeIn_0.8s_ease]">
            <Sparkles className="w-4 h-4" />
            <span>Clínica de Estética & Bem-estar</span>
          </div>

          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] text-areia-900 animate-[fadeIn_1s_ease]">
            Mais que estética,
            <br />
            <span className="text-dourado-600">cuidado com propósito</span>
          </h1>

          <p className="text-lg lg:text-xl text-areia-700 leading-relaxed max-w-xl animate-[fadeIn_1.2s_ease]">
            A Mais Up promete olhar para você antes de olhar para o procedimento.
            Cada cuidado começa pela sua queixa, pela sua rotina, pelos seus limites
            e pelo que realmente faz sentido para o seu corpo.
          </p>

          <div className="flex flex-wrap gap-4 mt-2 animate-[fadeIn_1.4s_ease]">
            <a
              href="#historia"
              className="inline-flex items-center gap-2 bg-dourado-500 hover:bg-dourado-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Nossa História
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#procedimentos"
              className="inline-flex items-center gap-2 border-2 border-dourado-500 text-areia-800 hover:bg-dourado-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Ver Procedimentos
            </a>
          </div>

          <div className="flex items-center gap-6 mt-6 animate-[fadeIn_1.6s_ease]">
            <div className="flex items-center gap-2 text-areia-600">
              <Heart className="w-5 h-5 text-dourado-500 fill-dourado-500" />
              <span className="text-sm font-medium">Atendimento humanizado</span>
            </div>
            <div className="flex items-center gap-2 text-areia-600">
              <Sparkles className="w-5 h-5 text-dourado-500" />
              <span className="text-sm font-medium">Protocolos personalizados</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-[fadeIn_1s_ease]">
          <div className="w-full h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700">
        <img
          src="/images/lilian_capa.jpg"
          alt="Clínica Mais Up — ambiente de cuidado e bem-estar"
          className="w-full h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
            <div className="absolute inset-0 bg-gradient-to-t from-areia-900/20 to-transparent" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3 max-w-xs">
            <div className="w-12 h-12 rounded-full bg-dourado-100 flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-dourado-600" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-areia-900">Não prometemos milagres</p>
              <p className="text-sm text-areia-600">Entregamos cuidado real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
