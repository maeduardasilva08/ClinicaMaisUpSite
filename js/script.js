// ===============================
// DADOS DAS PROFISSIONAIS
// ===============================

const profissionais = {

    lilian: {

        nome: "Lilian Gabriel",

        cargo: "Esteticista e Cosmetóloga",


        formacao: "Formada em Estética e Cosmetologia pelo CEUNSP - Universidade Cruzeiro do Sul.",

        sobre: "Lilian Gabriel dedica sua carreira ao cuidado corporal, oferecendo tratamentos personalizados para promover saúde, bem-estar e autoestima. Seu atendimento é realizado de forma humanizada, buscando compreender as necessidades de cada paciente e proporcionar resultados seguros e eficazes.",

        especialidades: [
            "Tratamentos corporais",
            "Pós-operatório de cirurgias",
            "Protocolos personalizados",
            "Estética corporal"
        ],

        missao: "Acredito que cada paciente merece um atendimento individualizado, com carinho, dedicação e foco em alcançar os melhores resultados.",

        whatsapp: "https://wa.me/5511985813441?text=Olá! Gostaria de agendar uma consulta com a Lilian Gabriel."

    },

    larissa: {

        nome: "Larissa Cotrim",

        cargo: "Biomédica Esteta • Responsável Técnica",



        formacao: "Biomédica formada pela Universidade de Rio Claro.",

        sobre: "Especialista em procedimentos faciais injetáveis e tratamentos corporais. Além dos atendimentos clínicos, atua como Responsável Técnica da Clínica Mais Up, garantindo segurança e excelência em todos os procedimentos.",

        especialidades: [
            "Harmonização Facial",
            "Procedimentos Faciais Injetáveis",
            "Tratamentos Corporais",
            "Avaliação Estética"
        ],

        missao: "Meu compromisso é unir conhecimento técnico, segurança e naturalidade para valorizar a beleza única de cada paciente.",

        whatsapp: "https://wa.me/5511985813441?text=Olá! Gostaria de agendar uma consulta com a Larissa Cotrim."

    },

    fabiola: {

        nome: "Fabiola Nizola",

        cargo: "Esteticista e Nutricionista",



        formacao: "Graduada em Estética e Cosmetologia e Nutrição pelo CEUNSP - Universidade Cruzeiro do Sul.",

        sobre: "Fabiola acredita que saúde e estética caminham juntas. Seu atendimento integra estética e nutrição para oferecer tratamentos completos e personalizados.",

        especialidades: [
            "Depilação a Laser",
            "Avaliação Nutricional",
            "Acompanhamento Nutricional",
            "Estética Corporal"
        ],

        missao: "Cuidar da saúde e da autoestima de forma integrada, proporcionando qualidade de vida e bem-estar.",

        whatsapp: "https://wa.me/5511985813441?text=Olá! Gostaria de agendar uma consulta com a Fabiola Nizola."

    },

    janaina: {

        nome: "Janaína Camargo",

        cargo: "Designer de Sobrancelhas e Lash Designer",



        formacao: "Especialista em embelezamento do olhar e harmonização facial.",

        sobre: "Janaína Camargo é apaixonada por valorizar a beleza natural de cada cliente. Atua com técnicas modernas, oferecendo um atendimento personalizado e cuidadoso.",

        especialidades: [
            "Design de Sobrancelhas",
            "Micropigmentação de Sobrancelhas",
            "Micropigmentação Labial",
            "Extensão de Cílios",
            "Embelezamento Facial"
        ],

        missao: "Realçar a beleza natural através de um atendimento cuidadoso, preciso e personalizado.",

        whatsapp: "https://wa.me/5511985813441?text=Olá! Gostaria de agendar uma consulta com a Janaína Camargo."

    }

};

// ===============================
// ABRIR MODAL
// ===============================

function abrirModal(id){

    const p = profissionais[id];

    document.getElementById("modalNome").textContent = p.nome;

    document.getElementById("modalCargo").textContent = p.cargo;

    document.getElementById("modalFormacao").textContent = p.formacao;

    document.getElementById("modalSobre").textContent = p.sobre;

    document.getElementById("modalMissao").textContent = p.missao;

    const lista = document.getElementById("modalEspecialidades");

    lista.innerHTML = "";

    p.especialidades.forEach(item => {

        lista.innerHTML += `<li>${item}</li>`;

    });

    document.getElementById("btnWhatsapp").href = p.whatsapp;

    document.getElementById("modalProfissional").style.display = "flex";

}

// ===============================
// FECHAR MODAL
// ===============================

function fecharModal(){

    document.getElementById("modalProfissional").style.display = "none";

}

// ===============================
// FECHAR CLICANDO FORA
// ===============================

window.onclick = function(event){

    const modalProfissional = document.getElementById("modalProfissional");

    const modalProcedimento = document.getElementById("modalProcedimento");

    if(event.target == modalProfissional){

        fecharModal();

    }

    if(event.target == modalProcedimento){

        fecharModalProcedimento();

    }

}

// ===============================
// PROCEDIMENTOS - RENDERIZAR CARDS
// ===============================

const procedimentos = [

    {
        nome:"Limpeza de Pele",

        categoria:"facial",

        descricao:"A limpeza de pele promove uma higienização profunda, removendo impurezas, células mortas e controlando a oleosidade, deixando a pele saudável e renovada.",

        beneficios:[
            "Pele mais limpa",
            "Controle da oleosidade",
            "Remoção de cravos",
            "Renovação celular"
        ],

        indicacoes:"Indicada para todos os tipos de pele, principalmente para quem apresenta excesso de oleosidade, cravos ou deseja manter a pele saudável."
    },

    {
        nome:"Bioestimulador de Colágeno",

        categoria:"facial",

        descricao:"Procedimento que estimula naturalmente a produção de colágeno, melhorando a firmeza e a sustentação da pele.",

        beneficios:[
            "Mais firmeza",
            "Melhora da flacidez",
            "Estimula colágeno",
            "Resultado natural"
        ],

        indicacoes:"Indicado para quem deseja prevenir ou tratar a flacidez facial."
    },

    {
        nome:"Preenchimento Facial",

        categoria:"facial",

        descricao:"Realiza a reposição de volume e melhora os contornos da face utilizando ácido hialurônico.",

        beneficios:[
            "Harmonização facial",
            "Reposição de volume",
            "Resultados naturais"
        ],

        indicacoes:"Indicado para quem deseja realçar lábios, queixo, mandíbula ou suavizar sulcos."
    },

    {
        nome:"Botox",

        categoria:"facial",

        descricao:"Aplicação de toxina botulínica para suavizar linhas de expressão e prevenir rugas.",

        beneficios:[
            "Redução de rugas",
            "Prevenção do envelhecimento",
            "Aspecto natural"
        ],

        indicacoes:"Indicado para rugas da testa, glabela e pés de galinha."
    },

    {
        nome:"Microagulhamento",

        categoria:"facial",

        descricao:"Tratamento que estimula a produção de colágeno através de microperfurações controladas na pele.",

        beneficios:[
            "Melhora cicatrizes",
            "Reduz poros",
            "Uniformiza a pele"
        ],

        indicacoes:"Ideal para cicatrizes de acne, manchas e rejuvenescimento."
    },

    {
        nome:"Laser Lavieen",

        categoria:"facial",

        descricao:"Laser de última geração indicado para rejuvenescimento, manchas e melhora da textura da pele.",

        beneficios:[
            "Pele iluminada",
            "Redução de manchas",
            "Rejuvenescimento"
        ],

        indicacoes:"Para quem deseja renovar a pele e melhorar sua aparência."
    },

    {
        nome:"Laser CO₂",

        categoria:"facial",

        descricao:"Laser fracionado utilizado para rejuvenescimento e tratamento de cicatrizes.",

        beneficios:[
            "Redução de rugas",
            "Melhora cicatrizes",
            "Estimula colágeno"
        ],

        indicacoes:"Indicado para rejuvenescimento facial e cicatrizes."
    },

    {
        nome:"Skinbooster",

        categoria:"facial",

        descricao:"Hidratação profunda da pele através da aplicação de ácido hialurônico de baixa densidade.",

        beneficios:[
            "Hidratação intensa",
            "Mais brilho",
            "Melhora textura"
        ],

        indicacoes:"Ideal para peles ressecadas e envelhecidas."
    },

    {
        nome:"Micropigmentação",

        categoria:"embelezamento",

        descricao:"Técnica que deposita pigmento na pele para desenhar e preencher os fios das sobrancelhas, proporcionando um efeito natural e duradouro.",

        beneficios:[
            "Sobrancelhas definidas",
            "Efeito fio a fio natural",
            "Resultado duradouro",
            "Menos tempo na rotina de maquiagem"
        ],

        indicacoes:"Indicada para quem tem falhas nas sobrancelhas ou deseja um design mais definido e duradouro."
    },

    {
        nome:"Design de Sobrancelhas (com ou sem Henna)",

        categoria:"embelezamento",

        descricao:"Modelagem das sobrancelhas de acordo com o formato do rosto, podendo incluir a aplicação de henna para intensificar a cor e o preenchimento visual.",

        beneficios:[
            "Harmonização facial",
            "Sobrancelhas simétricas",
            "Efeito preenchido com henna",
            "Realça o olhar"
        ],

        indicacoes:"Indicado para quem deseja simetria e um contorno personalizado para as sobrancelhas."
    },

    {
        nome:"Lash Lifting",

        categoria:"embelezamento",

        descricao:"Técnica que curva e alonga visualmente os cílios naturais, dando um efeito de curvatura duradoura sem a necessidade de extensões.",

        beneficios:[
            "Cílios curvados naturalmente",
            "Efeito duradouro",
            "Dispensa uso de curvex",
            "Olhar mais aberto"
        ],

        indicacoes:"Indicado para quem deseja realçar os cílios naturais sem aplicar extensões."
    },

    {
        nome:"Brow Lamination",

        categoria:"embelezamento",

        descricao:"Técnica que alinha e fixa os fios das sobrancelhas em um novo formato, criando um efeito mais volumoso e uniforme.",

        beneficios:[
            "Sobrancelhas mais cheias",
            "Fios alinhados",
            "Efeito duradouro",
            "Look natural e moderno"
        ],

        indicacoes:"Indicado para quem tem sobrancelhas desalinhadas ou deseja um efeito mais volumoso."
    },

    {
        nome:"Depilação com Cera",

        categoria:"depilacao",

        descricao:"Remoção dos pelos pela raiz utilizando cera quente ou morna, proporcionando uma pele lisa por mais tempo.",

        beneficios:[
            "Pele lisa e macia",
            "Resultado duradouro",
            "Reduz o volume de pelos com o tempo"
        ],

        indicacoes:"Indicada para quem busca uma remoção rápida e acessível dos pelos."
    },

    {
        nome:"Depilação a Laser",

        categoria:"depilacao",

        descricao:"Tecnologia que reduz progressivamente o crescimento dos pelos através da emissão de luz concentrada no folículo piloso.",

        beneficios:[
            "Redução progressiva dos pelos",
            "Menos pelos encravados",
            "Pele lisa por mais tempo",
            "Praticidade no dia a dia"
        ],

        indicacoes:"Indicada para quem deseja reduzir o crescimento de pelos de forma definitiva e duradoura."
    },

    {
        nome:"Avaliação Nutricional",

        categoria:"nutricao",

        descricao:"Consulta individualizada para avaliar hábitos alimentares e montar um plano nutricional alinhado aos objetivos estéticos e de saúde do paciente.",

        beneficios:[
            "Plano alimentar personalizado",
            "Acompanhamento profissional",
            "Potencializa resultados estéticos",
            "Melhora da saúde geral"
        ],

        indicacoes:"Indicada para quem deseja aliar alimentação saudável aos tratamentos estéticos."
    },

    {
        nome:"Aplicação de Vasinhos",

        categoria:"corporal",

        descricao:"Procedimento que trata vasinhos e microvarizes através da aplicação de substância que promove o fechamento dos vasos.",

        beneficios:[
            "Redução dos vasinhos",
            "Pernas com aspecto mais uniforme",
            "Procedimento rápido"
        ],

        indicacoes:"Indicado para quem tem vasinhos visíveis nas pernas e deseja um resultado mais uniforme na pele."
    },

    {
        nome:"Aplicação de Enzimas",

        categoria:"corporal",

        descricao:"Aplicação de enzimas que auxiliam na quebra de gordura localizada e na melhora da textura da pele.",

        beneficios:[
            "Auxilia na redução de gordura localizada",
            "Melhora a textura da pele",
            "Complementa outros tratamentos corporais"
        ],

        indicacoes:"Indicado para gordura localizada e áreas com irregularidades na pele."
    },

    {
        nome:"Criofrequência",

        categoria:"corporal",

        descricao:"Combina o efeito da radiofrequência com o resfriamento da pele, auxiliando na redução de medidas e na melhora da flacidez.",

        beneficios:[
            "Redução de medidas",
            "Melhora da flacidez",
            "Estimula a produção de colágeno"
        ],

        indicacoes:"Indicado para gordura localizada e flacidez corporal."
    },

    {
        nome:"Criolipólise",

        categoria:"corporal",

        descricao:"Técnica não invasiva que utiliza o frio controlado para reduzir a gordura localizada em áreas específicas do corpo.",

        beneficios:[
            "Redução de gordura localizada",
            "Procedimento não invasivo",
            "Sem tempo de recuperação"
        ],

        indicacoes:"Indicado para gordura localizada resistente a dieta e exercícios."
    },

    {
        nome:"Carboxiterapia",

        categoria:"corporal",

        descricao:"Aplicação de gás carbônico medicinal sob a pele, que melhora a circulação local e auxilia na redução de gordura e flacidez.",

        beneficios:[
            "Melhora a circulação",
            "Auxilia na redução de gordura localizada",
            "Melhora a flacidez e celulite"
        ],

        indicacoes:"Indicado para gordura localizada, flacidez e celulite."
    },

    {
        nome:"Ultrassom",

        categoria:"corporal",

        descricao:"Tratamento que utiliza ondas de ultrassom para estimular a quebra de células de gordura e melhorar a textura da pele.",

        beneficios:[
            "Auxilia na redução de medidas",
            "Melhora a textura da pele",
            "Estimula a circulação"
        ],

        indicacoes:"Indicado para gordura localizada e melhora do contorno corporal."
    },

    {
        nome:"Radiofrequência",

        categoria:"corporal",

        descricao:"Tecnologia que aquece as camadas mais profundas da pele, estimulando a produção de colágeno e melhorando a firmeza.",

        beneficios:[
            "Melhora da flacidez",
            "Estimula colágeno",
            "Pele mais firme"
        ],

        indicacoes:"Indicado para flacidez corporal e melhora da firmeza da pele."
    },

    {
        nome:"Pós-Operatório",

        categoria:"corporal",

        descricao:"Conjunto de cuidados e técnicas para auxiliar na recuperação após cirurgias plásticas, reduzindo inchaço e melhorando a cicatrização.",

        beneficios:[
            "Reduz inchaço e edemas",
            "Melhora a cicatrização",
            "Acelera a recuperação"
        ],

        indicacoes:"Indicado para pacientes no período de recuperação de cirurgias plásticas."
    }

];

function renderProcedimentos(categoria){

    const lista = document.getElementById("listaProcedimentos");

    lista.innerHTML = "";

    const filtrados = procedimentos.filter(p => p.categoria === categoria);

    if(filtrados.length === 0){

        lista.innerHTML = "<p class='sem-procedimentos'>Em breve novos procedimentos nesta categoria.</p>";

        return;

    }

    filtrados.forEach(proc => {

        const indexReal = procedimentos.indexOf(proc);

        lista.innerHTML += `
            <div class="card-procedimento">
                <h3>${proc.nome}</h3>
                <p>${proc.descricao}</p>
                <button class="btn-saiba" onclick="abrirModalProcedimento(${indexReal})">Saiba Mais</button>
            </div>
        `;

    });

}

// ===============================
// FILTRO DE CATEGORIAS
// ===============================

document.querySelectorAll(".categoria").forEach(botao => {

    botao.addEventListener("click", function(){

        document.querySelectorAll(".categoria").forEach(b => b.classList.remove("ativa"));

        this.classList.add("ativa");

        renderProcedimentos(this.dataset.categoria);

    });

});

// Renderiza a categoria inicial (facial) assim que a página carrega
renderProcedimentos("facial");

// ===============================
// ABRIR MODAL DE PROCEDIMENTO
// ===============================

function abrirModalProcedimento(index){

    const proc = procedimentos[index];

    document.getElementById("tituloProcedimento").textContent = proc.nome;

    document.getElementById("descricaoProcedimento").textContent = proc.descricao;

    const lista = document.getElementById("beneficiosProcedimento");

    lista.innerHTML = "";

    proc.beneficios.forEach(item => {

        lista.innerHTML += `<li>${item}</li>`;

    });

    document.getElementById("indicacoesProcedimento").textContent = proc.indicacoes;

    document.getElementById("btnWhatsappProcedimento").href =
        `https://wa.me/5511985813441?text=Olá! Gostaria de saber mais sobre o procedimento: ${proc.nome}.`;

    document.getElementById("modalProcedimento").style.display = "flex";

}

// ===============================
// FECHAR MODAL DE PROCEDIMENTO
// ===============================

function fecharModalProcedimento(){

    document.getElementById("modalProcedimento").style.display = "none";

}