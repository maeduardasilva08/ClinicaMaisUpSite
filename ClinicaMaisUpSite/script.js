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
// PROCEDIMENTOS - DADOS
// ===============================

const procedimentos = [
  {
    nome: "Alongamento de Cílios",
    categoria: "Facial",
    descricao: "Técnica que adiciona fios sintéticos aos cílios naturais, proporcionando mais volume, curvatura e comprimento, com acabamento natural ou dramático.",
    beneficios: ["Mais volume e curvatura", "Efeito natural ou dramático", "Praticidade no dia a dia"],
    indicacoes: ["Olhos pequenos", "Cílios finos", "Ocasiões especiais"]
  },
  {
    nome: "Aplicação de Enzimas para Gordura, Flacidez e Celulite",
    categoria: "Corporal",
    descricao: "Injeção de enzimas lipolíticas que aceleram a quebra de gordura localizada, melhoram a firmeza da pele e reduzem a aparência da celulite.",
    beneficios: ["Redução de gordura localizada", "Melhora da firmeza", "Redução de celulite"],
    indicacoes: ["Gordura localizada", "Celulite", "Flacidez corporal"]
  },
  {
    nome: "Aplicação de Enzimas para Papada",
    categoria: "Corporal",
    descricao: "Aplicação de enzimas específicas na região submentoniana para reduzir o acúmulo de gordura e definir o contorno da mandíbula.",
    beneficios: ["Redução da papada", "Contorno facial definido", "Procedimento não cirúrgico"],
    indicacoes: ["Papada", "Duplo queixo", "Contorno facial"]
  },
  {
    nome: "Aplicação de Vasinhos",
    categoria: "Facial",
    descricao: "Escleroterapia para tratamento de pequenas veias superficiais visíveis no rosto, eliminando-as com segurança e sem cirurgia.",
    beneficios: ["Eliminação de vasinhos", "Pele mais uniforme", "Procedimento seguro"],
    indicacoes: ["Vasinhos no rosto", "Rosácea leve", "Eritrose"]
  },
  {
    nome: "Avaliação Nutricional",
    categoria: "Nutrição",
    descricao: "Consulta com profissional de nutrição para análise do perfil alimentar, composição corporal e elaboração de plano nutricional individualizado.",
    beneficios: ["Plano alimentar individualizado", "Acompanhamento profissional", "Melhora da qualidade de vida"],
    indicacoes: ["Emagrecimento", "Ganho de massa", "Reeducação alimentar"]
  },
  {
    nome: "Bioestimulador de Colágeno",
    categoria: "Facial",
    descricao: "Substância injetável que estimula a produção natural de colágeno, promovendo rejuvenescimento progressivo, melhora da firmeza e preenchimento de áreas flácidas.",
    beneficios: ["Estímulo natural de colágeno", "Rejuvenescimento progressivo", "Melhora da firmeza"],
    indicacoes: ["Flacidez facial", "Envelhecimento", "Perda de volume"]
  },
  {
    nome: "Botox",
    categoria: "Facial",
    descricao: "Aplicação de toxina botulínica para relaxamento muscular controlado, suavizando rugas de expressão e prevenindo novas marcas.",
    beneficios: ["Suaviza rugas de expressão", "Efeito preventivo", "Resultado natural"],
    indicacoes: ["Rugas de expressão", "Pés de galinha", "Linha do leão"]
  },
  {
    nome: "Brow Lamination",
    categoria: "Facial",
    descricao: "Procedimento que alinha e fixa os fios das sobrancelhas em uma posição desejada, criando um efeito penteado, volumoso e uniforme.",
    beneficios: ["Sobrancelhas alinhadas", "Efeito volumoso", "Resultado duradouro"],
    indicacoes: ["Sobrancelhas desalinhadas", "Fios rebeldes", "Volume e definição"]
  },
  {
    nome: "Carboxiterapia",
    categoria: ["Corporal", "Facial"],
    descricao: "Infiltração de gás carbônico medicinal sob a pele para estimular a circulação e a oxigenação dos tecidos. Pode ser aplicada tanto no corpo quanto no rosto, com benefícios específicos para cada região.",
    beneficios: ["Melhora da circulação", "Redução de celulite", "Combate à flacidez"],
    indicacoes: ["Celulite", "Gordura localizada", "Estrias", "Olheiras"],
    areas: [
        {
            nome: "Corporal",
            exemplo: "Celulite, estrias e gordura localizada",
            beneficios: ["Melhora da circulação sanguínea", "Redução da celulite e das estrias", "Combate à flacidez corporal"]
        },
        {
            nome: "Facial",
            exemplo: "Olheiras",
            beneficios: ["Redução de olheiras", "Pele mais oxigenada", "Aumento do viço e da luminosidade"]
        }
    ]
  },
  {
    nome: "Melasma",
    categoria: "Facial",
    descricao: "Avaliação dermatológica especializada para diagnóstico e elaboração de protocolo personalizado no tratamento de manchas escuras na pele.",
    beneficios: ["Diagnóstico especializado", "Protocolo personalizado", "Pele mais uniforme"],
    indicacoes: ["Melasma", "Manchas hormonais", "Hiperpigmentação"]
  },
  {
    nome: "Criofrequência",
    categoria: ["Corporal", "Facial"],
    descricao: "Combinação de radiofrequência com resfriamento controlado que estimula a produção de colágeno e firma a pele. Pode ser aplicada tanto no corpo quanto no rosto, com benefícios específicos para cada região.",
    beneficios: ["Estímulo de colágeno", "Pele mais firme", "Procedimento não invasivo"],
    indicacoes: ["Flacidez", "Abdômen", "Flancos", "Papada"],
    areas: [
        {
            nome: "Corporal",
            exemplo: "Abdômen, flancos e braços",
            beneficios: ["Firmeza da pele do corpo", "Estímulo de colágeno", "Melhora da flacidez corporal"]
        },
        {
            nome: "Facial",
            exemplo: "Papada e contorno do rosto",
            beneficios: ["Firmeza facial", "Efeito lifting sutil", "Estímulo de colágeno no rosto"]
        }
    ]
  },
  {
    nome: "Criolipólise",
    categoria: ["Corporal", "Facial"],
    descricao: "Técnica que utiliza frio intenso e controlado para eliminar células de gordura localizada de forma não invasiva, sem tempo de recuperação. Pode ser aplicada tanto no corpo quanto no rosto, com benefícios específicos para cada região.",
    beneficios: ["Eliminação de gordura localizada", "Procedimento não invasivo", "Sem tempo de recuperação"],
    indicacoes: ["Gordura localizada", "Abdômen", "Flancos", "Papada"],
    areas: [
        {
            nome: "Corporal",
            exemplo: "Abdômen, flancos e culote",
            beneficios: ["Eliminação de gordura localizada no corpo", "Sem tempo de recuperação", "Resultado progressivo e natural"]
        },
        {
            nome: "Facial",
            exemplo: "Papada",
            beneficios: ["Redução da papada", "Contorno facial mais definido", "Procedimento não invasivo"]
        }
    ]
  },
  {
    nome: "Depilação a Laser",
    categoria: "Corporal",
    descricao: "Tecnologia de luz pulsada que destrói o folículo piloso de forma definitiva e progressiva, reduzindo significativamente o crescimento dos pelos.",
    beneficios: ["Redução definitiva dos pelos", "Menos irritação na pele", "Praticidade no dia a dia"],
    indicacoes: ["Pelos indesejados", "Pele sensível", "Foliculite"]
  },
  {
    nome: "Depilação com Cera",
    categoria: "Corporal",
    descricao: "Remoção dos pelos pela raiz com cera quente ou fria, deixando a pele lisa por mais tempo em comparação ao barbear convencional.",
    beneficios: ["Pele lisa por mais tempo", "Resultado imediato", "Pelos mais finos com o tempo"],
    indicacoes: ["Pelos em qualquer região", "Resultado imediato"]
  },
  {
    nome: "Depilação Egípcia",
    categoria: "Corporal",
    descricao: "Método ancestral de depilação com pasta de açúcar natural, indicada para peles sensíveis, com menor risco de irritação e pelos encravados.",
    beneficios: ["Menor irritação da pele", "Reduz pelos encravados", "Ingredientes naturais"],
    indicacoes: ["Pele sensível", "Pelos encravados", "Opção natural"]
  },
  {
    nome: "Descolamento com Cânula",
    categoria: "Facial",
    descricao: "Técnica minimamente invasiva que utiliza cânula para soltar aderências da pele, combatendo marcas de expressão profundas e cicatrizes.",
    beneficios: ["Suaviza marcas profundas", "Técnica minimamente invasiva", "Melhora de cicatrizes"],
    indicacoes: ["Rugas profundas", "Cicatrizes", "Sulcos"]
  },
  {
    nome: "Design de Sobrancelha com ou sem Henna",
    categoria: "Facial",
    descricao: "Modelagem personalizada das sobrancelhas de acordo com o formato do rosto, com opção de coloração com henna para maior definição e durabilidade.",
    beneficios: ["Design personalizado", "Maior definição", "Durabilidade com henna"],
    indicacoes: ["Sobrancelhas sem definição", "Assimetria", "Design personalizado"]
  },
  {
    nome: "Detox Corporal",
    categoria: "Corporal",
    descricao: "Protocolo de tratamento corporal que combina técnicas manuais e ativos cosméticos para eliminar toxinas, reduzir retenção hídrica e revitalizar o organismo.",
    beneficios: ["Eliminação de toxinas", "Redução de inchaço", "Revitalização do corpo"],
    indicacoes: ["Inchaço", "Retenção hídrica", "Cansaço corporal"]
  },
  {
    nome: "Drenagem Linfática",
    categoria: "Corporal",
    descricao: "Técnica de massagem que estimula o sistema linfático, elimina líquidos e toxinas acumulados no organismo e reduz o inchaço. A Clínica Mais Up oferece protocolos adaptados a diferentes necessidades.",
    beneficios: ["Reduz inchaço", "Melhora a circulação", "Elimina líquidos e toxinas retidos"],
    indicacoes: ["Retenção hídrica", "Inchaço", "Gestação", "Pré-TPM"],
    subtipos: [
        {
            nome: "Drenagem para Gestante",
            descricao: "Massagem suave e segura adaptada para gestantes, que estimula o sistema linfático, reduz inchaço e promove bem-estar durante a gravidez."
        },
        {
            nome: "Drenagem para Retenção",
            descricao: "Técnica de massagem que estimula o fluxo da linfa, eliminando líquidos e toxinas acumulados no organismo, reduzindo inchaço e sensação de peso."
        }
    ]
  },
  {
    nome: "Endermologia",
    categoria: ["Corporal", "Facial"],
    descricao: "Massagem mecânica com sucção controlada que estimula a circulação, a drenagem linfática e a produção de colágeno. Pode ser aplicada tanto no corpo quanto no rosto, com benefícios específicos para cada região.",
    beneficios: ["Estímulo da circulação e drenagem", "Redução da celulite", "Melhora da qualidade da pele"],
    indicacoes: ["Celulite", "Gordura localizada", "Flacidez", "Contorno facial"],
    areas: [
        {
            nome: "Corporal",
            exemplo: "Celulite, gordura localizada, abdômen e coxas",
            beneficios: ["Redução da celulite e da gordura localizada", "Modelagem corporal", "Melhora da circulação e da drenagem"]
        },
        {
            nome: "Facial",
            exemplo: "Contorno facial e olheiras",
            beneficios: ["Efeito lifting e drenante no rosto", "Estímulo de colágeno facial", "Redução de inchaço e olheiras"]
        }
    ]
  },
  {
    nome: "Fios de PDO",
    categoria: "Facial",
    descricao: "Fios absorvíveis inseridos sob a pele para promover sustentação imediata e estimular o colágeno, resultando em lifting sem cirurgia.",
    beneficios: ["Sustentação imediata", "Estímulo de colágeno", "Lifting sem cirurgia"],
    indicacoes: ["Flacidez facial", "Papada", "Lifting não cirúrgico"]
  },
  {
    nome: "Fotobiomodulação",
    categoria: ["Facial", "Corporal"],
    descricao: "Terapia que utiliza luz de LED ou laser de baixa intensidade para estimular processos celulares, acelerando a reparação dos tecidos. Pode ser aplicada tanto no rosto quanto no corpo, com benefícios específicos para cada região.",
    beneficios: ["Estímulo celular e de colágeno", "Ação anti-inflamatória", "Recuperação tecidual mais rápida"],
    indicacoes: ["Rejuvenescimento", "Acne", "Dores musculares", "Cicatrização"],
    areas: [
        {
            nome: "Facial",
            exemplo: "Rejuvenescimento e tratamento de acne",
            beneficios: ["Estímulo de colágeno e elastina", "Ação bactericida no tratamento de acne", "Redução de linhas finas"]
        },
        {
            nome: "Corporal",
            exemplo: "Alívio de dores e redução de medidas",
            beneficios: ["Alívio de dores musculares", "Auxílio na redução de medidas", "Melhora da cicatrização"]
        }
    ]
  },
  {
    nome: "Glúteo Max",
    categoria: "Corporal",
    descricao: "Protocolo corporal com combinação de tecnologias e ativos para modelar, firmar e aumentar visualmente o volume dos glúteos.",
    beneficios: ["Modelagem dos glúteos", "Efeito firmador", "Aumento visual de volume"],
    indicacoes: ["Glúteos flácidos", "Modelagem corporal", "Estética corporal"]
  },
  {
    nome: "Laser CO2",
    categoria: "Facial",
    descricao: "Laser fracionado de alta precisão que promove renovação celular profunda, tratando rugas, manchas, cicatrizes e poros dilatados com eficácia.",
    beneficios: ["Renovação celular profunda", "Redução de manchas e rugas", "Poros mais refinados"],
    indicacoes: ["Manchas", "Rugas", "Cicatrizes de acne", "Rejuvenescimento"]
  },
  {
    nome: "Laser Lavieen",
    categoria: "Facial",
    descricao: "Laser de picossegundos indicado para tratamento de manchas, melasma e rejuvenescimento, com mínimo desconforto e recuperação rápida.",
    beneficios: ["Recuperação rápida", "Mínimo desconforto", "Pele mais uniforme"],
    indicacoes: ["Melasma", "Manchas", "Pele opaca"]
  },
  {
    nome: "Laserterapia (LED / Laser)",
    categoria: ["Corporal", "Facial"],
    descricao: "Terapia com luz LED ou laser de baixa intensidade que estimula a cicatrização, reduz inflamação e melhora a saúde da pele. Pode ser aplicada tanto no corpo quanto no rosto, com benefícios específicos para cada região.",
    beneficios: ["Alívio de dores", "Redução de inflamação", "Estímulo à cicatrização"],
    indicacoes: ["Dores musculares", "Cicatrização", "Inflamação", "Acne"],
    areas: [
        {
            nome: "Corporal",
            exemplo: "Dores musculares e cicatrização",
            beneficios: ["Alívio de dores musculares", "Redução de inflamação", "Estímulo à cicatrização de tecidos"]
        },
        {
            nome: "Facial",
            exemplo: "Acne e rejuvenescimento",
            beneficios: ["Ação anti-inflamatória na acne", "Estímulo de colágeno", "Pele com aspecto mais uniforme"]
        }
    ]
  },
  {
    nome: "Lash Lifting",
    categoria: "Facial",
    descricao: "Permanente para cílios naturais que os curva da raiz às pontas, criando efeito de olhar aberto e expressivo sem necessidade de máscara.",
    beneficios: ["Olhar mais aberto", "Dispensa uso de máscara", "Efeito duradouro"],
    indicacoes: ["Cílios retos", "Olhar cansado", "Praticidade no dia a dia"]
  },
  {
    nome: "Limpeza de Pele",
    categoria: "Facial",
    descricao: "Procedimento que remove impurezas, cravos e células mortas da pele por meio de esfoliação, vapor e extração, deixando o rosto limpo e renovado.",
    beneficios: ["Remove impurezas e cravos", "Pele renovada", "Melhora a textura"],
    indicacoes: ["Pele oleosa", "Cravos", "Poros dilatados", "Acne"]
  },
  {
    nome: "Massagem",
    categoria: "Corporal",
    descricao: "A Clínica Mais Up oferece diferentes tipos de massagem, unindo técnica e bem-estar para atender às necessidades de cada paciente.",
    beneficios: ["Melhora da circulação", "Alívio de tensões", "Bem-estar físico e mental"],
    indicacoes: ["Tensão muscular", "Estresse", "Celulite e gordura localizada", "Relaxamento"],
    subtipos: [
        {
            nome: "Massagem Modeladora",
            descricao: "Massagem vigorosa com movimentos específicos para quebrar nódulos de gordura, modelar o contorno corporal e melhorar a circulação."
        },
        {
            nome: "Massagem Relaxante",
            descricao: "Técnica de massagem com movimentos suaves e rítmicos para aliviar tensão muscular, reduzir o estresse e proporcionar bem-estar geral."
        }
    ]
  },
  {
    nome: "Microagulhamento",
    categoria: "Facial",
    descricao: "Técnica com microagulhas que cria microlesões controladas na pele, estimulando a produção de colágeno e elastina para rejuvenescimento e tratamento de cicatrizes.",
    beneficios: ["Estímulo de colágeno e elastina", "Redução de cicatrizes", "Pele rejuvenescida"],
    indicacoes: ["Cicatrizes de acne", "Rugas finas", "Poros dilatados", "Manchas"]
  },
  {
    nome: "Micropigmentação de Sobrancelha",
    categoria: "Facial",
    descricao: "Técnica semipermanente de implantação de pigmento na derme para redesenhar, preencher ou definir as sobrancelhas com resultado natural.",
    beneficios: ["Resultado natural", "Efeito semipermanente", "Praticidade diária"],
    indicacoes: ["Sobrancelhas ralas", "Alopecia", "Praticidade"]
  },
  {
    nome: "Micropigmentação Labial",
    categoria: "Facial",
    descricao: "Pigmentação semipermanente nos lábios para definir o contorno, uniformizar a cor e dar aparência de lábios mais cheios e corados.",
    beneficios: ["Contorno definido", "Cor uniforme", "Aparência de lábios mais cheios"],
    indicacoes: ["Lábios apagados", "Contorno irregular", "Assimetria labial"]
  },
  {
    nome: "Peeling Coreano",
    categoria: "Facial",
    descricao: "Peeling suave de origem coreana que renova a camada superficial da pele, deixando-a mais luminosa, uniforme e com textura refinada.",
    beneficios: ["Pele mais luminosa", "Textura refinada", "Renovação suave"],
    indicacoes: ["Opacidade", "Manchas leves", "Pele sem brilho"]
  },
  {
    nome: "Peeling de Diamante",
    categoria: "Facial",
    descricao: "Esfoliação mecânica com ponteira de diamante que remove células mortas e estimula a renovação celular, melhorando textura e viço da pele.",
    beneficios: ["Remove células mortas", "Estimula renovação celular", "Pele com mais viço"],
    indicacoes: ["Pele opaca", "Textura irregular", "Cravos"]
  },
  {
    nome: "Peeling Químico",
    categoria: "Facial",
    descricao: "Aplicação de ácidos em concentrações controladas para promover esfoliação profunda, tratar manchas, acne e rugas, e renovar a pele.",
    beneficios: ["Esfoliação profunda", "Redução de manchas e acne", "Pele renovada"],
    indicacoes: ["Manchas", "Acne", "Rugas", "Cicatrizes"]
  },
  {
    nome: "Peeling Ultrassônico",
    categoria: "Facial",
    descricao: "Esfoliação por vibração ultrassônica que remove impurezas e células mortas sem contato abrasivo, indicada para peles sensíveis e reativas.",
    beneficios: ["Esfoliação sem abrasão", "Indicado para peles sensíveis", "Remove impurezas"],
    indicacoes: ["Pele sensível", "Impurezas", "Oleosidade"]
  },
  {
    nome: "Plataforma Vibratória",
    categoria: "Corporal",
    descricao: "Equipamento que emite vibrações mecânicas para estimular a musculatura, melhorar a circulação, combater celulite e auxiliar na perda de medidas.",
    beneficios: ["Estímulo muscular", "Melhora da circulação", "Auxilia na perda de medidas"],
    indicacoes: ["Celulite", "Tonificação muscular", "Circulação"]
  },
  {
    nome: "Pós-Operatório",
    categoria: "Corporal",
    descricao: "Protocolo de cuidados especializados após cirurgias plásticas, incluindo drenagem linfática, ultrassom e outros recursos para acelerar a recuperação.",
    beneficios: ["Recuperação mais rápida", "Redução de inchaço e fibrose", "Cuidado especializado"],
    indicacoes: ["Pós-cirurgia plástica", "Inchaço", "Fibrose"]
  },
  {
    nome: "Preenchimento Facial",
    categoria: "Facial",
    descricao: "Injeção de ácido hialurônico para restaurar volumes perdidos, suavizar sulcos e contornar lábios, maçãs do rosto e mandíbula.",
    beneficios: ["Restaura volume perdido", "Suaviza sulcos", "Contorno definido"],
    indicacoes: ["Perda de volume", "Sulco nasogeniano", "Lábios", "Olheiras"]
  },
  {
    nome: "Radiofrequência",
    categoria: ["Corporal", "Facial"],
    descricao: "Tecnologia que emite ondas de calor nas camadas profundas da pele, estimulando colágeno e firmando os tecidos. Pode ser aplicada tanto no corpo quanto no rosto, com benefícios específicos para cada região.",
    beneficios: ["Estímulo de colágeno", "Firmeza dos tecidos", "Redução de gordura localizada"],
    indicacoes: ["Flacidez", "Celulite", "Gordura", "Rejuvenescimento facial"],
    areas: [
        {
            nome: "Corporal",
            exemplo: "Abdômen, braços e coxas",
            beneficios: ["Firmeza dos tecidos do corpo", "Redução de gordura localizada", "Melhora da celulite"]
        },
        {
            nome: "Facial",
            exemplo: "Rosto e pescoço",
            beneficios: ["Rejuvenescimento facial", "Estímulo de colágeno no rosto", "Efeito lifting não cirúrgico"]
        }
    ]
  },
  {
    nome: "Skinbooster Revitalização e Hidratação",
    categoria: "Facial",
    descricao: "Microinjeções de ácido hialurônico de baixa densidade que hidratam profundamente a pele, melhoram a luminosidade e reduzem linhas finas.",
    beneficios: ["Hidratação profunda", "Mais luminosidade", "Redução de linhas finas"],
    indicacoes: ["Pele desidratada", "Opacidade", "Linhas finas"]
  },
  {
    nome: "Tork (Ondas de Choque)",
    categoria: ["Corporal", "Facial"],
    descricao: "Equipamento de ondas de choque que gera microestímulos mecânicos no tecido, promovendo remodelação do colágeno e melhora da circulação. Pode ser aplicado tanto no corpo quanto no rosto, com benefícios específicos para cada região.",
    beneficios: ["Estímulo de colágeno", "Melhora da circulação", "Remodelação do tecido"],
    indicacoes: ["Celulite", "Gordura localizada", "Estrias", "Flacidez", "Rejuvenescimento facial"],
    areas: [
        {
            nome: "Corporal",
            exemplo: "Celulite, gordura localizada e estrias",
            beneficios: ["Redução da celulite", "Modelagem do contorno corporal", "Melhora de estrias e flacidez"]
        },
        {
            nome: "Facial",
            exemplo: "Rejuvenescimento facial",
            beneficios: ["Estímulo de colágeno no rosto", "Melhora da firmeza facial", "Efeito rejuvenescedor"]
        }
    ]
  },
  {
    nome: "Ultrassom",
    categoria: ["Corporal", "Facial"],
    descricao: "Equipamento que utiliza ondas sonoras de alta frequência para tratar gordura, celulite e flacidez, promovendo modelagem sem dor. Pode ser aplicado tanto no corpo quanto no rosto, com benefícios específicos para cada região.",
    beneficios: ["Modelagem corporal", "Sem dor", "Redução de gordura e celulite"],
    indicacoes: ["Gordura", "Celulite", "Flacidez"],
    areas: [
        {
            nome: "Corporal",
            exemplo: "Abdômen, celulite e gordura localizada",
            beneficios: ["Modelagem do contorno corporal", "Redução de gordura e celulite", "Melhora da circulação"]
        },
        {
            nome: "Facial",
            exemplo: "Auxílio na drenagem e penetração de ativos",
            beneficios: ["Melhora a absorção de ativos cosméticos", "Efeito drenante e relaxante no rosto", "Pele com aspecto mais uniforme"]
        }
    ]
  },
  {
    nome: "Ultracavitação",
    categoria: "Corporal",
    descricao: "Tecnologia que utiliza ondas ultrassônicas de baixa frequência para romper as células de gordura localizada, que são posteriormente eliminadas pelo organismo. É um procedimento exclusivamente corporal.",
    beneficios: ["Eliminação de gordura localizada", "Redução de medidas", "Procedimento não invasivo e indolor"],
    indicacoes: ["Gordura localizada", "Abdômen", "Flancos", "Coxas"]
  },
  {
    nome: "Ultrassom Micro / Macro Focado",
    categoria: "Facial",
    descricao: "Tecnologia de ultrassom focalizado que atinge camadas profundas da pele para promover lifting, firmeza e contorno facial sem cirurgia.",
    beneficios: ["Lifting sem cirurgia", "Maior firmeza", "Contorno facial definido"],
    indicacoes: ["Flacidez facial", "Lifting não invasivo", "Papada"]
  },
];

// ===============================
// RENDERIZAR CARDS DE PROCEDIMENTOS
// ===============================

// Guarda qual categoria está aberta no momento (null = nenhuma)
let categoriaAtiva = null;

function renderProcedimentos(lista = []) {
    // OBS: o id abaixo precisa ser IGUAL ao id do container no HTML.
    // No HTML atual o container é <div id="lista-procedimentos">.
    const container = document.getElementById("lista-procedimentos");

    if (!container) return;

    container.innerHTML = "";

    lista.forEach((procedimento) => {
        // índice real dentro do array original "procedimentos"
        // (necessário para abrir o modal certo, mesmo com a lista filtrada)
        const indexReal = procedimentos.indexOf(procedimento);

        const card = document.createElement("div");
        card.className = "card-procedimento";
        card.style.cursor = "pointer";

        // Card enxuto: só nome, categoria e uma dica de que dá pra clicar.
        // Descrição, benefícios e indicações completos ficam só no modal.
        // Se o procedimento pertence a mais de uma categoria (ex.: aparelhos usados
        // tanto no rosto quanto no corpo), mostra as duas no badge do card.
        const categoriaTexto = Array.isArray(procedimento.categoria)
            ? procedimento.categoria.join(" / ")
            : procedimento.categoria;

        card.innerHTML = `
            <div class="procedimento-header">
                <h3>${procedimento.nome}</h3>
                <span class="categoria">${categoriaTexto}</span>
            </div>

            <span class="ver-mais">Toque para ver detalhes</span>
        `;

        // Abre o modal (janela flutuante com fundo embaçado) ao clicar no card.
        // O clique no link do WhatsApp não deve abrir o modal, então checamos o alvo do clique.
        card.addEventListener("click", (event) => {
            if (event.target.closest("a")) return; // deixa o link do WhatsApp funcionar normalmente
            abrirModalProcedimento(indexReal);
        });

        container.appendChild(card);
    });
}

// ===============================
// FILTRO DE CATEGORIAS (COM TOGGLE)
// ===============================

function filtrarCategoria(categoria) {
    const listaFiltrada = procedimentos.filter(procedimento => {
        if (Array.isArray(procedimento.categoria)) {
            return procedimento.categoria.includes(categoria);
        }
        return procedimento.categoria === categoria;
    });

    renderProcedimentos(listaFiltrada);
}

// Liga os botões de categoria (.categoria-btn) à função de filtro,
// com comportamento de "sanfona": clicar de novo na mesma categoria fecha a lista.
document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".categoria-btn");
    const container = document.getElementById("lista-procedimentos");

    // Nada aparece até o usuário clicar em uma categoria.
    if (container) container.innerHTML = "";
    botoes.forEach(b => b.classList.remove("active"));

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const categoria = botao.dataset.filter;

            if (categoriaAtiva === categoria) {
                // Clicou na mesma categoria que já estava aberta: fecha tudo.
                categoriaAtiva = null;
                botao.classList.remove("active");
                if (container) container.innerHTML = "";
                return;
            }

            // Abre a nova categoria (fechando qualquer outra que estivesse aberta).
            categoriaAtiva = categoria;
            botoes.forEach(b => b.classList.remove("active"));
            botao.classList.add("active");
            filtrarCategoria(categoria);
        });
    });
});

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

    document.getElementById("indicacoesProcedimento").textContent = proc.indicacoes.join(", ");

    // Seção "Tipos Disponíveis" — só aparece quando o procedimento tem subtipos
    const tiposSection = document.getElementById("tiposProcedimentoSection");
    const tiposContainer = document.getElementById("tiposProcedimento");

    tiposContainer.innerHTML = "";

    if (proc.subtipos && proc.subtipos.length > 0) {

        proc.subtipos.forEach(subtipo => {
            tiposContainer.innerHTML += `
                <div class="subtipo-item">
                    <h4>${subtipo.nome}</h4>
                    <p>${subtipo.descricao}</p>
                </div>
            `;
        });

        tiposSection.style.display = "block";

    } else {

        tiposSection.style.display = "none";

    }

    // Seção "Onde pode ser aplicado" — mostra os benefícios específicos
    // quando o mesmo aparelho/procedimento é usado no rosto e no corpo
    // (ex.: Criolipólise no abdômen e na papada).
    const areasSection = document.getElementById("areasProcedimentoSection");
    const areasContainer = document.getElementById("areasProcedimento");

    areasContainer.innerHTML = "";

    if (proc.areas && proc.areas.length > 0) {

        proc.areas.forEach(area => {

            const beneficiosArea = area.beneficios
                .map(item => `<li>${item}</li>`)
                .join("");

            areasContainer.innerHTML += `
                <div class="area-item">
                    <h4>${area.nome} <span class="area-exemplo">(ex.: ${area.exemplo})</span></h4>
                    <ul>${beneficiosArea}</ul>
                </div>
            `;
        });

        areasSection.style.display = "block";

    } else {

        areasSection.style.display = "none";

    }

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