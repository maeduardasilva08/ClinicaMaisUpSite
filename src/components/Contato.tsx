import { MapPin, Phone, Clock, Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-areia-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-dourado-600 font-semibold text-sm tracking-[3px] uppercase mb-4">
            <span>Contato</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-areia-900 mb-4">
            Vamos conversar sobre o seu cuidado
          </h2>
          <p className="text-areia-600 text-lg max-w-2xl mx-auto">
            Entre em contato para agendar sua avaliação ou tirar dúvidas.
            Estamos prontos para ouvir e construir o melhor caminho para você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info cards */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-dourado-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-dourado-600" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-verde-500 mb-1">Endereço</h4>
                <p className="text-areia-600 text-sm leading-relaxed">
                  Clínica Mais Up<br />
                  Entre em contato para conhecer nosso espaço
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-dourado-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-dourado-600" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-verde-500 mb-1">Telefone / WhatsApp</h4>
                <p className="text-areia-600 text-sm leading-relaxed">
                  <a href="https://wa.me/5511985813441" target="_blank" rel="noopener noreferrer" className="hover:text-dourado-600 transition-colors">
                    (11) 98581-3441
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-dourado-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-dourado-600" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-verde-500 mb-1">Horário de Atendimento</h4>
                <p className="text-areia-600 text-sm leading-relaxed">
                  Segunda a sábado<br />
                  Consulte horários disponíveis via WhatsApp
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-dourado-100 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-dourado-600" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-verde-500 mb-1">Instagram</h4>
                <p className="text-areia-600 text-sm leading-relaxed">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-dourado-600 transition-colors">
                    @clinicamaisup
                  </a>
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5511985813441?text=Olá! Gostaria de agendar uma consulta na Clínica Mais Up."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-1 mt-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Consulta pelo WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[400px] lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975555!2d-46.6333!3d-23.5489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzU2LjAiUyA0NsKwMzgnMDAuMCJW!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Clínica Mais Up"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
