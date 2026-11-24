// 1895 — Ecos do Destino
// A lógica narrativa usa variáveis, funções, if/else if/else e um array de memória.
// Não há loops, switch, classes, arrow functions, prompt ou alert.

let genero = "";
let nome = "";
let idade = 12;
let dataAtual = "Outubro de 1895";
let etapa = 0;
let dinheiro = 3;
let reputacao = 0;
let confiancaMae = 0;
let confiancaPolicia = 0;
let suspeitaPolicia = 0;
let educacao = 0;
let amigoNome = "";
let amigoConfia = false;
let amigoVivo = true;
let aliadoOperarios = false;
let aliadoPolicia = false;
let encontrouSilas = false;
let silasVivo = false;
let chaveFerrovia = false;
let documento = false;
let cartaGuardada = false;
let pistaMae = false;
let pistaSilas = false;
let pistaEstacao = false;
let arquivoSecreto = false;
let provaCompleta = false;
let rotaYork = false;
let ajudaViagem = false;
let viajouSemBilhete = false;
let eventoAleatorio = 0;
let ocupacao = "";
let memoria = [];

let telaInicial = document.getElementById("telaInicial");
let telaJogo = document.getElementById("telaJogo");
let opcoes = document.getElementById("opcoes");
let tituloCena = document.getElementById("tituloCena");
let textoCena = document.getElementById("textoCena");
let marcadorCapitulo = document.getElementById("marcadorCapitulo");
let campoNomeArea = document.getElementById("campoNomeArea");
let campoNome = document.getElementById("campoNome");

// Cada botão recebe uma função própria. Assim, não precisamos de loops ou switch.
function criarOpcao(texto, acao) {
  let botao = document.createElement("button");
  botao.className = "botao";
  botao.type = "button";
  botao.textContent = texto;
  botao.addEventListener("click", acao);
  opcoes.appendChild(botao);
}

function limparOpcoes() {
  opcoes.innerHTML = "";
}

function registrarMemoria(texto) {
  memoria.push(texto);
  atualizarPainel();
}

function atualizarPainel() {
  document.getElementById("nomePainel").textContent = nome;
  document.getElementById("dataPainel").textContent = dataAtual;
  document.getElementById("idadePainel").textContent = idade + (idade == 1 ? " ano" : " anos");
  document.getElementById("dinheiroPainel").textContent = "£ " + dinheiro;

  let estadoReputacao = reputacao >= 3 ? "Respeitado(a)" : reputacao <= -2 ? "Malvisto(a)" : "Neutra";
  document.getElementById("reputacaoPainel").textContent = estadoReputacao;

  let estadoMae = confiancaMae >= 2 ? "confia em você" : confiancaMae <= -1 ? "magoada e desconfiada" : "cautelosa";
  let estadoSilas = encontrouSilas == false ? "não conhecido" : silasVivo == true ? "vivo; lembra de você" : "morto ou desaparecido";
  let estadoAmigo = amigoVivo == false ? "morto ou desaparecido" : amigoConfia == true ? "confia em você" : "relação ainda indefinida";
  let estadoPolicia = confiancaPolicia > 0 ? "inspetor receptivo" : suspeitaPolicia > 0 ? "sob suspeita" : "indiferente";

  document.getElementById("relacoesPainel").textContent = "Margaret: " + estadoMae + " · Silas: " + estadoSilas + " · " + amigoNome + ": " + estadoAmigo + " · Polícia: " + estadoPolicia;

  if (memoria.length > 0) {
    document.getElementById("memoriaPainel").textContent = memoria.join("  •  ");
  } else {
    document.getElementById("memoriaPainel").textContent = "Suas decisões importantes aparecerão aqui.";
  }
}


function atualizarImagemCena() {
  let imagemCena = document.getElementById("imagemCena");
  let caminhoImagem = "";
  let descricaoImagem = "";

  if (etapa == 1) {
    if (genero == "masculino") {
      caminhoImagem = "cenas_1895/cena_02_thomas_whitmore.jpg";
      descricaoImagem = "Retrato de Thomas Whitmore";
    } else {
      caminhoImagem = "cenas_1895/cena_03_eleanor_whitmore.jpg";
      descricaoImagem = "Retrato de Eleanor Whitmore";
    }
  } else if (etapa == 2) {
    caminhoImagem = "cenas_1895/cena_05_carta_da_ferrovia.jpg";
    descricaoImagem = "Margaret e a carta da ferrovia";
  } else if (etapa == 3) {
    caminhoImagem = "cenas_1895/cena_06_silas_reed_no_beco.jpg";
    descricaoImagem = "Silas Reed no beco";
  } else if (etapa == 4) {
    if (ocupacao == "ajudante no armazém de Hargreaves") {
      caminhoImagem = "cenas_1895/cena_07_armazem_de_hargreaves.jpg";
      descricaoImagem = "Armazém de Hargreaves";
    } else if (ocupacao == "aluno das aulas noturnas") {
      caminhoImagem = "cenas_1895/cena_08_aulas_noturnas.jpg";
      descricaoImagem = "Aulas noturnas";
    } else if (ocupacao == "ajudante ocasional nas docas") {
      caminhoImagem = "cenas_1895/cena_09_vagao_ferroviario.jpg";
      descricaoImagem = "Vagão ferroviário";
    } else if (ocupacao == "aprendiz na oficina de costura de Whitlock") {
      caminhoImagem = "cenas_1895/cena_10_oficina_de_whitlock.jpg";
      descricaoImagem = "Oficina de Whitlock";
    } else if (ocupacao == "aluno(a) das lições de Miss Finch") {
      caminhoImagem = "cenas_1895/cena_11_licoes_de_miss_finch.jpg";
      descricaoImagem = "Lições de Miss Finch";
    } else if (ocupacao == "voluntário(a) na enfermaria") {
      caminhoImagem = "cenas_1895/cena_12_enfermaria.jpg";
      descricaoImagem = "Enfermaria";
    }
  } else if (etapa == 5) {
    if (eventoAleatorio < 0.5) {
      caminhoImagem = "cenas_1895/cena_13_a_paralisacao.jpg";
      descricaoImagem = "Paralisação ferroviária";
    } else {
      caminhoImagem = "cenas_1895/cena_14_temporal_na_costa.jpg";
      descricaoImagem = "Temporal na costa";
    }
  } else if (etapa == 6) {
    caminhoImagem = "cenas_1895/cena_15_sala_de_registros_da_estacao.jpg";
    descricaoImagem = "Sala de registros da estação";
  } else if (etapa == 7) {
    caminhoImagem = "cenas_1895/cena_16_plataforma_nove_armario_9.jpg";
    descricaoImagem = "Plataforma nove e armário 9";
  } else if (etapa == 8) {
    caminhoImagem = "cenas_1895/cena_17_cidade_de_york.jpg";
    descricaoImagem = "Cidade de York";
  } else if (etapa == 99) {
    if (tituloCena.textContent == "O nome Whitmore" || tituloCena.textContent == "A verdade não apaga a ferida") {
      caminhoImagem = "cenas_1895/cena_18_reencontro_com_edward.jpg";
      descricaoImagem = "Reencontro com Edward";
    } else if (tituloCena.textContent == "O jornal não se calou" || tituloCena.textContent == "A verdade incompleta" || tituloCena.textContent == "Uma notícia abafada") {
      caminhoImagem = "cenas_1895/cena_19_exposicao_da_ferrovia.jpg";
      descricaoImagem = "Exposição da ferrovia";
    } else if (tituloCena.textContent == "A queda do diretor" || tituloCena.textContent == "A última noite na estação") {
      caminhoImagem = "cenas_1895/cena_20_confronto_com_o_diretor.jpg";
      descricaoImagem = "Confronto com o diretor";
    } else if (tituloCena.textContent == "O preço de uma acusação") {
      caminhoImagem = "cenas_1895/cena_21_instituicao_disciplinar.jpg";
      descricaoImagem = "Instituição disciplinar";
    } else if (tituloCena.textContent == "O que restou da família" || tituloCena.textContent == "Uma casa silenciosa" || tituloCena.textContent == "O retorno" || tituloCena.textContent == "Sem respostas") {
      caminhoImagem = "cenas_1895/cena_22_nova_vida_em_yorkshire.jpg";
      descricaoImagem = "Nova vida em Yorkshire";
    } else {
      caminhoImagem = "cenas_1895/cena_23_o_peso_dos_anos.jpg";
      descricaoImagem = "O peso dos anos";
    }
  }

  if (caminhoImagem == "") {
    imagemCena.hidden = true;
    imagemCena.src = "";
  } else {
    imagemCena.src = caminhoImagem;
    imagemCena.alt = descricaoImagem;
    imagemCena.hidden = false;
  }
}

function prepararCena(capitulo, titulo, texto) {
  limparOpcoes();
  campoNomeArea.hidden = true;
  marcadorCapitulo.textContent = capitulo;
  tituloCena.textContent = titulo;
  textoCena.textContent = texto;
  atualizarImagemCena();
  atualizarPainel();
}

function escolherThomas() {
  genero = "masculino";
  nome = "Thomas";
  amigoNome = "Samuel";
  telaInicial.hidden = true;
  telaJogo.hidden = false;
  etapa = 1;
  mostrarCena();
}

function escolherEleanor() {
  genero = "feminino";
  nome = "Eleanor";
  amigoNome = "Alice";
  telaInicial.hidden = true;
  telaJogo.hidden = false;
  etapa = 1;
  mostrarCena();
}

document.getElementById("btnThomas").addEventListener("click", escolherThomas);
document.getElementById("btnEleanor").addEventListener("click", escolherEleanor);

function confirmarNome() {
  if (campoNome.value == "") {
    nome = genero == "masculino" ? "Thomas" : "Eleanor";
  } else {
    nome = campoNome.value;
  }
  registrarMemoria("A campanha começou em Whitby, em outubro de 1895.");
  etapa = 2;
  mostrarCena();
}

function escolhaCartaDefender() {
  cartaGuardada = true;
  confiancaMae += 1;
  registrarMemoria("Você defendeu a memória de Edward e guardou a carta da ferrovia.");
  etapa = 3;
  mostrarCena();
}

function escolhaCartaPerguntar() {
  pistaMae = true;
  confiancaMae -= 1;
  registrarMemoria("Você pressionou Margaret. Ela revelou que Edward voltou para casa na noite anterior ao desaparecimento.");
  etapa = 3;
  mostrarCena();
}

function escolhaCartaQueimar() {
  cartaGuardada = false;
  confiancaMae += 1;
  registrarMemoria("Você queimou a carta para encerrar a discussão. A pista escrita foi perdida.");
  etapa = 3;
  mostrarCena();
}

function ajudarSilas() {
  encontrouSilas = true;
  if (dinheiro >= 2) {
    dinheiro -= 2;
    silasVivo = true;
    chaveFerrovia = true;
    pistaSilas = true;
    registrarMemoria("Você gastou £2 para socorrer Silas. Ele sobreviveu e confiou a você uma chave de latão.");
  } else {
    silasVivo = true;
    pistaSilas = true;
    registrarMemoria("Você socorreu Silas sem dinheiro. Ele sobreviveu, mas não conseguiu entregar a chave.");
  }
  dataAtual = "Novembro de 1895";
  etapa = 4;
  mostrarCena();
}

function roubarEnvelope() {
  encontrouSilas = true;
  documento = true;
  suspeitaPolicia += 1;
  silasVivo = false;
  registrarMemoria("Você roubou o envelope de Silas. Conseguiu um documento, mas ele não sobreviveu à noite.");
  dataAtual = "Novembro de 1895";
  etapa = 4;
  mostrarCena();
}

function chamarPolicia() {
  encontrouSilas = true;
  silasVivo = true;
  confiancaPolicia += 1;
  pistaSilas = true;
  registrarMemoria("Você chamou a polícia. Silas foi levado à enfermaria e o inspetor Hale anotou seu nome.");
  dataAtual = "Novembro de 1895";
  etapa = 4;
  mostrarCena();
}

function abandonarSilas() {
  encontrouSilas = true;
  silasVivo = false;
  registrarMemoria("Você deixou Silas no beco. Na manhã seguinte, soube que ele morreu.");
  dataAtual = "Novembro de 1895";
  etapa = 4;
  mostrarCena();
}

function irParaEvento() {
  dataAtual = "Novembro de 1895";
  eventoAleatorio = Math.random();
  etapa = 5;
  mostrarCena();
}

function trabalhoArmazem() {
  ocupacao = "ajudante no armazém de Hargreaves";
  dinheiro += 3;
  reputacao += 1;
  pistaEstacao = true;
  registrarMemoria("Você aceitou trabalho no armazém. Ganhou £3 e percebeu movimentações incomuns perto da estação.");
  irParaEvento();
}

function aulasNoturnas() {
  ocupacao = "aluno das aulas noturnas";
  educacao += 1;
  reputacao += 1;
  registrarMemoria("Você frequentou as aulas noturnas. Aprendeu a comparar registros e reconhecer assinaturas.");
  irParaEvento();
}

function seguirVagao() {
  ocupacao = "ajudante ocasional nas docas";
  pistaEstacao = true;
  suspeitaPolicia += 1;
  registrarMemoria("Você seguiu um vagão após o expediente. Viu um número de carga, mas alguém percebeu sua presença.");
  irParaEvento();
}

function costuraWhitlock() {
  ocupacao = "aprendiz na oficina de costura de Whitlock";
  dinheiro += 3;
  pistaEstacao = true;
  reputacao += 1;
  registrarMemoria("Você aceitou trabalho de costura. Uma entrega de uniformes permitiu observar o escritório da estação.");
  irParaEvento();
}

function aulasFinch() {
  ocupacao = "aluno(a) das lições de Miss Finch";
  educacao += 1;
  amigoConfia = true;
  registrarMemoria("Você frequentou as lições de Miss Finch. Alice passou a confiar mais em você e ajudou a ler documentos difíceis.");
  irParaEvento();
}

function ajudarEnfermaria() {
  ocupacao = "voluntário(a) na enfermaria";
  reputacao += 1;
  if (silasVivo == true) {
    pistaSilas = true;
    registrarMemoria("Na enfermaria, você reencontrou Silas. Ele confirmou que a ferrovia escondia um registro de carga.");
  } else {
    registrarMemoria("Na enfermaria, você ajudou os feridos. Uma enfermeira comentou sobre um livro de registros da estação.");
    pistaEstacao = true;
  }
  irParaEvento();
}

function mostrarCena() {
  if (etapa == 1) {
    let textoInicial = "";
    if (genero == "masculino") {
      textoInicial = "Você é Thomas Edward Whitmore, um garoto de doze anos. Seu pai, Edward, trabalhava na ferrovia; sua mãe, Margaret, costurava para famílias da região. Desde que Edward desapareceu, em outubro de 1894, você deixou de frequentar a escola regularmente e passou a ajudar em um armazém.\n\nVocê é observador, desconfiado e curioso. Seu pai lhe ensinou a ler mapas e horários de trens. Você quer descobrir por que a companhia afirma que ele abandonou o emprego.\n\nSeu amigo de infância, Samuel Pike, trabalha perto do cais. Ele conhece gente que prefere não conversar com a polícia.";
    } else {
      textoInicial = "Você é Eleanor Grace Whitmore, uma garota de doze anos. Seu pai, Edward, trabalhava na ferrovia; sua mãe, Margaret, costurava para famílias da região. Desde que Edward desapareceu, em outubro de 1894, você assumiu boa parte das tarefas de casa e passou a ajudar em pequenos trabalhos de costura.\n\nVocê é perspicaz, comunicativa e determinada. Seu pai lhe ensinou matemática, leitura e geografia, convencido de que conhecimento abriria portas que a sociedade tentava manter fechadas. Você quer descobrir por que a companhia afirma que ele abandonou o emprego.\n\nSua amiga de infância, Alice Finch, ajuda na oficina de costura da tia e conhece pessoas de diferentes bairros.";
    }
    prepararCena("PRÓLOGO · OUTUBRO DE 1895", "Uma casa com uma cadeira vazia", textoInicial);
    campoNomeArea.hidden = false;
    campoNome.value = nome;
    criarOpcao("Começar a história", confirmarNome);
  } else if (etapa == 2) {
    prepararCena("CAPÍTULO I · OUTUBRO DE 1895", "A carta da ferrovia", "A chuva bate nas janelas da pequena casa dos Whitmore. Sobre a mesa, Margaret segura uma carta oficial. A companhia ferroviária declara que Edward abandonou seu posto e que não há salário pendente a receber.\n\nSua mãe evita olhar diretamente para você. A carta tem uma dobra profunda no canto inferior, como se alguém a tivesse escondido e retirado várias vezes. O que você faz?");
    criarOpcao("Defender meu pai e guardar a carta", escolhaCartaDefender);
    criarOpcao("Exigir que minha mãe conte tudo", escolhaCartaPerguntar);
    criarOpcao("Queimar a carta para acabar com a discussão", escolhaCartaQueimar);
  } else if (etapa == 3) {
    let textoBeco = "Mais tarde, ao passar por uma rua estreita perto dos depósitos, você ouve um gemido. Um homem com uniforme ferroviário está encostado à parede. Seu nome é Silas Reed. Ele segura o lado do corpo e tenta esconder um envelope dentro do casaco.\n\nSilas reconhece o sobrenome Whitmore. 'Seu pai não fugiu', sussurra. 'Aquele livro... eles mudaram os números.' Passos se aproximam no fim da rua. Você precisa decidir depressa.";
    if (confiancaMae < 0) {
      textoBeco += "\n\nA discussão em casa ainda pesa em sua cabeça, mas a voz de Silas parece confirmar que Margaret sabe mais do que contou.";
    }
    prepararCena("CAPÍTULO II · OUTUBRO DE 1895", "O homem no beco", textoBeco);
    criarOpcao("Ajudar Silas e gastar £2 com atendimento", ajudarSilas);
    criarOpcao("Roubar o envelope enquanto ele está distraído", roubarEnvelope);
    criarOpcao("Chamar a polícia e esperar", chamarPolicia);
    criarOpcao("Deixar o homem e seguir para casa", abandonarSilas);
  } else if (etapa == 4) {
    if (genero == "masculino") {
      prepararCena("CAPÍTULO III · NOVEMBRO DE 1895", "Um lugar no mundo", "A situação financeira da família piora. Você precisa escolher como ocupar seus dias. Em Whitby, um garoto da sua idade pode carregar mercadorias, trabalhar nas docas ou tentar continuar estudando. Cada caminho oferece contatos diferentes.\n\nO que fará, " + nome + "?");
      criarOpcao("Aceitar trabalho no armazém de Hargreaves", trabalhoArmazem);
      criarOpcao("Frequentar as aulas noturnas da paróquia", aulasNoturnas);
      criarOpcao("Seguir um vagão até o depósito depois do expediente", seguirVagao);
    } else {
      prepararCena("CAPÍTULO III · NOVEMBRO DE 1895", "As portas que a sociedade fecha", "A situação financeira da família piora. Você precisa escolher como ocupar seus dias. As oportunidades para uma garota de sua condição são limitadas, mas não inexistentes. Trabalho, estudo e relações podem abrir caminhos que os outros não esperam.\n\nO que fará, " + nome + "?");
      criarOpcao("Aceitar trabalho na oficina de costura de Whitlock", costuraWhitlock);
      criarOpcao("Frequentar as lições de Miss Finch", aulasFinch);
      criarOpcao("Ajudar na enfermaria do bairro", ajudarEnfermaria);
    }
  } else if (etapa == 5) {
    if (eventoAleatorio < 0.5) {
      prepararCena("CAPÍTULO IV · NOVEMBRO DE 1895", "A paralisação", "Um movimento de trabalhadores ferroviários começa a se espalhar. Homens deixam ferramentas no chão e exigem pagamento justo e condições mais seguras. A estação fica tensa. O inspetor Hale observa quem se aproxima dos organizadores.\n\nVocê percebe que a paralisação pode revelar informações sobre seu pai, mas também pode transformar seu nome em assunto de conversa.");
      criarOpcao("Ajudar os trabalhadores a organizar a paralisação", apoiarOperarios);
      criarOpcao("Entregar ao inspetor o nome de um organizador", falarComPolicia);
      criarOpcao("Voltar para casa e ficar com minha mãe", ficarComMae);
    } else {
      prepararCena("CAPÍTULO IV · NOVEMBRO DE 1895", "O temporal na costa", "Uma tempestade atinge a região. O vento arranca telhas, a água invade parte do cais e moradores correm para proteger barcos e mercadorias. Você vê " + amigoNome + " perto do caminho que leva ao porto. Ao mesmo tempo, os documentos da sua família continuam em casa e o depósito ferroviário está vulnerável.\n\nNão será possível cuidar de tudo.");
      criarOpcao("Ajudar " + amigoNome + " e os moradores do cais", salvarAmigo);
      criarOpcao("Voltar para proteger os documentos da família", protegerDocumentos);
      criarOpcao("Ir à estação antes que a água alcance os depósitos", correrEstacao);
    }
  } else if (etapa == 6) {
    let textoArquivo = "Janeiro de 1896. O frio se instala em Yorkshire. Você consegue chegar à sala de registros da estação, onde livros antigos são guardados antes de serem enviados à administração. Um funcionário diz que os manifestos do mês do desaparecimento de Edward foram substituídos.\n\n";
    if (silasVivo == true) {
      textoArquivo += "Silas ainda está vivo. Ele se lembra de que você o ajudou e aceita falar, mas teme perder o emprego e a própria segurança.\n\n";
    } else if (documento == true) {
      textoArquivo += "O envelope roubado contém uma referência a um manifesto de carga, mas não explica quem alterou os registros.\n\n";
    } else {
      textoArquivo += "Sem o testemunho de Silas, você depende de registros incompletos e de pessoas que não querem se comprometer.\n\n";
    }
    if (confiancaMae >= 1) {
      textoArquivo += "Margaret deixou de impedir suas perguntas, embora ainda tenha medo do que você pode descobrir.";
    } else {
      textoArquivo += "Margaret está magoada com você e insiste que a investigação pode destruir o pouco que restou da família.";
    }
    prepararCena("CAPÍTULO V · JANEIRO DE 1896", "O livro de partidas", textoArquivo);
    criarOpcao("Consultar o registro público da estação", consultarLivro);
    criarOpcao("Procurar Silas no alojamento dos ferroviários", procurarSilas);
    criarOpcao("Pedir ajuda ao inspetor Hale", pedirInspetor);
    if (educacao >= 1) {
      criarOpcao("Comparar as assinaturas dos manifestos", compararRegistros);
    }
  } else if (etapa == 7) {
    let textoPlataforma = "Março de 1896. Você completa treze anos. A cidade mudou pouco, mas você já não é a mesma criança que começou a investigação. Um número aparece repetidamente nos registros: plataforma nove, armário de carga 9.\n\nA companhia afirma que o armário está vazio. Um funcionário, porém, diz que a fechadura foi trocada depois do desaparecimento de Edward. O que fará agora?";
    prepararCena("CAPÍTULO VI · MARÇO DE 1896", "A plataforma nove", textoPlataforma);
    if (cartaGuardada == true && chaveFerrovia == true && pistaEstacao == true) {
      criarOpcao("Usar a chave de Silas e a dobra da carta no armário 9", abrirArmarioSecreto);
    }
    if (pistaMae == true || pistaSilas == true || documento == true || pistaEstacao == true) {
      criarOpcao("Viajar para York seguindo as pistas que reuni", viajarYork);
    }
    if (documento == true || pistaEstacao == true) {
      criarOpcao("Entregar o que descobri ao jornal local", publicarProvas);
    }
    criarOpcao("Confrontar o diretor da ferrovia esta noite", confrontarDiretor);
    criarOpcao("Abandonar a investigação e cuidar da família", abandonarBusca);
  } else if (etapa == 8) {
    let textoYork = "Julho de 1896. A viagem até York consome parte das economias da família. Você chega cansado(a), com poucas moedas e uma pista que pode estar errada. A cidade é maior, mais movimentada e mais indiferente do que Whitby.\n\n";
    if (ajudaViagem == true) {
      textoYork += "\n\nUma pessoa que confia em você ajudou a pagar a viagem.";
    } else if (viajouSemBilhete == true) {
      textoYork += "\n\nSem dinheiro para a passagem, você viajou escondido(a) em um vagão de carga. Se for descoberto(a), poderá ser preso(a).";
    }
    if (arquivoSecreto == true) {
      textoYork += "O armário 9 continha um manifesto original. Nele, Edward aparece sob custódia de um intermediário da companhia, enviado a York com outro nome. Há também o endereço de uma pensão na rua Fossgate. Pela primeira vez, você tem um lugar concreto para procurar.";
    } else if (pistaSilas == true && pistaMae == true) {
      textoYork += "As lembranças de Silas e a revelação de sua mãe apontam para uma pensão em York. Não há endereço certo, apenas o nome de um homem que costumava receber ferroviários sem fazer perguntas.";
    } else {
      textoYork += "As pistas levam à região ferroviária, mas são vagas. Alguns trabalhadores se lembram de um homem parecido com Edward; ninguém confirma para onde ele foi. Você terá de decidir se arrisca o pouco que resta.";
    }
    prepararCena("CAPÍTULO VII · JULHO DE 1896", "A cidade de York", textoYork);
    if (arquivoSecreto == true || (pistaSilas == true && pistaMae == true)) {
      criarOpcao("Procurar a pensão e perguntar por Edward", encontrarPai);
    }
    if (arquivoSecreto == true && documento == true && amigoConfia == true && amigoVivo == true && (silasVivo == true || aliadoPolicia == true)) {
      criarOpcao("Reunir as testemunhas e entregar o dossiê completo", finalDossieCompleto);
    }
    if (documento == true || arquivoSecreto == true) {
      criarOpcao("Entregar as provas às autoridades de York", entregarAutoridades);
    }
    criarOpcao("Esperar, trabalhar e tentar novamente no próximo ano", esperarUmAno);
    criarOpcao("Voltar para Whitby sem encontrar seu pai", voltarWhitby);
  }
}

function apoiarOperarios() {
  aliadoOperarios = true;
  reputacao += 2;
  pistaEstacao = true;
  registrarMemoria("Você apoiou os ferroviários. Os trabalhadores passaram a confiar em você.");
  seguirParaJaneiro();
}

function falarComPolicia() {
  confiancaPolicia += 1;
  aliadoPolicia = true;
  suspeitaPolicia -= 1;
  registrarMemoria("Você colaborou com o inspetor Hale. Ele passou a considerar suas informações.");
  seguirParaJaneiro();
}

function ficarComMae() {
  confiancaMae += 2;
  registrarMemoria("Você ficou com Margaret durante a paralisação. Ela voltou a confiar um pouco mais em você.");
  seguirParaJaneiro();
}

function salvarAmigo() {
  amigoVivo = true;
  amigoConfia = true;
  reputacao += 2;
  registrarMemoria("Você ajudou " + amigoNome + " durante o temporal. Essa pessoa não esquecerá o que você fez.");
  seguirParaJaneiro();
}

function protegerDocumentos() {
  confiancaMae += 1;
  amigoVivo = false;
  if (cartaGuardada == true) {
    pistaMae = true;
  }
  registrarMemoria("Você protegeu os papéis da família e permaneceu ao lado de Margaret. " + amigoNome + " não conseguiu escapar da enchente e foi encontrado(a) sem vida na manhã seguinte.");
  seguirParaJaneiro();
}

function correrEstacao() {
  pistaEstacao = true;
  suspeitaPolicia += 1;
  amigoVivo = false;
  registrarMemoria("Você correu até a estação durante o temporal e viu o número do armário 9. " + amigoNome + " não conseguiu escapar da enchente e foi encontrado(a) sem vida na manhã seguinte.");
  seguirParaJaneiro();
}

function seguirParaJaneiro() {
  dataAtual = "Janeiro de 1896";
  etapa = 6;
  mostrarCena();
}

function consultarLivro() {
  pistaEstacao = true;
  registrarMemoria("Você consultou o registro público e encontrou uma referência à plataforma nove.");
  avancarParaMarco();
}

function procurarSilas() {
  if (silasVivo == true) {
    pistaSilas = true;
    pistaEstacao = true;
    registrarMemoria("Silas confirmou que o armário 9 guardava uma cópia do manifesto original.");
  } else {
    registrarMemoria("O alojamento confirmou que Silas morreu. Ninguém quis falar sobre o que ele sabia.");
  }
  avancarParaMarco();
}

function compararRegistros() {
  pistaEstacao = true;
  documento = true;
  registrarMemoria("O que você aprendeu nas aulas permitiu identificar uma assinatura falsificada no manifesto. Agora existe uma prova documental.");
  avancarParaMarco();
}

function pedirInspetor() {
  if (confiancaPolicia > 0 || documento == true) {
    pistaEstacao = true;
    aliadoPolicia = true;
    registrarMemoria("O inspetor Hale consultou um registro reservado e confirmou a existência do armário 9.");
  } else {
    suspeitaPolicia += 1;
    registrarMemoria("O inspetor Hale recusou ajuda e passou a desconfiar de suas perguntas.");
  }
  avancarParaMarco();
}

function avancarParaMarco() {
  dataAtual = "Março de 1896";
  idade = 13;
  etapa = 7;
  mostrarCena();
}

function abrirArmarioSecreto() {
  custearViagem();
  arquivoSecreto = true;
  provaCompleta = true;
  documento = true;
  registrarMemoria("A combinação da carta, da chave e do registro abriu o armário 9. Você encontrou o manifesto original e o destino de Edward.");
  dataAtual = "Julho de 1896";
  rotaYork = true;
  etapa = 8;
  mostrarCena();
}

function custearViagem() {
  if (dinheiro >= 2) {
    dinheiro -= 2;
    registrarMemoria("Você pagou £2 pela viagem até York.");
  } else if ((amigoVivo == true && amigoConfia == true) || aliadoOperarios == true || aliadoPolicia == true) {
    ajudaViagem = true;
    registrarMemoria("Uma pessoa que confia em você ajudou a pagar a viagem até York.");
  } else {
    viajouSemBilhete = true;
    suspeitaPolicia += 1;
    registrarMemoria("Sem dinheiro para a passagem, você viajou escondido(a) em um vagão de carga.");
  }
}

function viajarYork() {
  rotaYork = true;
  custearViagem();
  dataAtual = "Julho de 1896";
  registrarMemoria("Você partiu para York seguindo as pistas que conseguiu reunir.");
  etapa = 8;
  mostrarCena();
}

function publicarProvas() {
  if (arquivoSecreto == true && aliadoOperarios == true) {
    encerrarJogo("O jornal não se calou", "O manifesto original e o apoio dos trabalhadores tornam impossível esconder o caso. O jornal publica a falsificação dos registros e a companhia abre uma investigação. Edward continua desaparecido, mas seu nome deixa de ser tratado como o de um desertor. Em Whitby, outros trabalhadores encontram coragem para denunciar abusos.\n\nVocê não recuperou tudo o que perdeu, mas mudou o destino de muitas famílias.");
  } else if (documento == true && (aliadoPolicia == true || aliadoOperarios == true)) {
    encerrarJogo("A verdade incompleta", "O jornal publica parte do documento. A companhia nega as acusações, mas a cidade começa a fazer perguntas. Sem o manifesto original, ninguém consegue provar o destino de Edward. Sua decisão protege alguns trabalhadores, mas deixa o mistério aberto.");
  } else {
    encerrarJogo("Uma notícia abafada", "O jornal recebe suas informações, mas não encontra provas suficientes para publicar uma acusação. O diretor da ferrovia nega tudo. Sua tentativa chama atenção para o caso, porém também faz a companhia vigiar sua família.");
  }
}

function confrontarDiretor() {
  if (arquivoSecreto == true || aliadoPolicia == true || (silasVivo == true && amigoConfia == true)) {
    encerrarJogo("A queda do diretor", "Você não foi sozinho. Com documentos e testemunhas, conseguiu confrontar o diretor diante de pessoas que não podiam ser facilmente silenciadas. A companhia tenta negar as acusações, mas uma investigação oficial começa. Você sobrevive, embora sua família precise deixar Whitby por algum tempo.");
  } else if (documento == true && suspeitaPolicia > 0) {
    encerrarJogo("O preço de uma acusação", "Você entra no escritório do diretor sem apoio suficiente. A polícia encontra o documento roubado em sua posse e o diretor afirma que você tentou extorqui-lo. Sua idade impede uma sentença como a de um adulto, mas você é enviado para uma instituição disciplinar. A investigação termina ali, pelo menos por enquanto.");
  } else {
    encerrarJogo("A última noite na estação", "Você entra sozinho(a) na área de carga para confrontar o diretor. Um alarme é acionado; na confusão, uma estrutura antiga cede. Ninguém consegue retirar você a tempo. Sua história termina aos treze anos, e a verdade sobre Edward permanece enterrada nos registros da ferrovia.");
  }
}

function abandonarBusca() {
  if (confiancaMae >= 1) {
    encerrarJogo("O que restou da família", "Você decide que a investigação já custou demais. Margaret recebe sua decisão com alívio. Vocês deixam a casa mais tarde e começam uma vida modesta em outra parte de Yorkshire. Edward continua desaparecido, mas a relação entre vocês é reconstruída. Nem toda história termina com uma resposta.");
  } else {
    encerrarJogo("Uma casa silenciosa", "Você abandona a investigação, mas as palavras duras e os segredos não desaparecem. Margaret continua trabalhando, você procura um emprego estável e a família permanece unida apenas pelo sobrenome. O passado não foi resolvido; apenas deixou de ser discutido.");
  }
}

function encontrarPai() {
  if (arquivoSecreto == true) {
    if (confiancaMae >= 0) {
      encerrarJogo("O nome Whitmore", "Na pensão, você encontra Edward vivo, debilitado e usando outro nome. Ele explica que descobriu a falsificação de um manifesto após um acidente escondido pela companhia. Foi ameaçado e levado para York antes que pudesse avisar a família.\n\nQuando retorna a Whitby, não há abraço capaz de apagar os meses perdidos, mas Margaret finalmente sabe que ele não a abandonou. Você tem treze anos e uma família que começa, lentamente, a se recompor.");
    } else {
      encerrarJogo("A verdade não apaga a ferida", "Você encontra Edward vivo em York. Ele explica por que desapareceu, mas a raiva acumulada em casa não desaparece de imediato. Você decide voltar sem prometer perdão. A verdade foi encontrada; a reconciliação terá de ser conquistada com o tempo.");
    }
  } else {
    encerrarJogo("O homem que não voltou", "A pensão existe, mas Edward já partiu. O responsável pelo lugar confirma que ele esteve ali e deixou uma mensagem: não queria que a família fosse arrastada para o conflito com a companhia. Você chega perto da verdade, mas não consegue reencontrá-lo.");
  }
}

function finalDossieCompleto() {
  encerrarJogo("O segredo de Whitby", "Com o manifesto original, o documento de Silas e testemunhas que confiam em você, o caso chega às autoridades e à imprensa. A falsificação é exposta, o diretor perde o cargo e Edward é localizado em York. Os trabalhadores recebem uma compensação, e a família Whitmore recupera o direito de contar sua própria história.\n\nEste é um dos finais secretos: ele só foi possível porque você preservou pistas, construiu confiança e não deixou todas as testemunhas para trás.");
}

function entregarAutoridades() {
  if (arquivoSecreto == true && aliadoPolicia == true) {
    encerrarJogo("Justiça em York", "O inspetor Hale aceita o manifesto original e abre um inquérito. O diretor é afastado enquanto os registros são examinados. Edward é localizado, mas a investigação se arrasta por meses. Você volta a Whitby sabendo que a verdade não depende mais apenas da sua palavra.");
  } else if (documento == true && confiancaPolicia > 0) {
    encerrarJogo("Um inquérito frágil", "As autoridades aceitam o documento, mas não conseguem confirmar sua origem. A investigação começa e depois perde força. Você evitou que as provas desaparecessem, mas o destino de Edward continua incerto.");
  } else {
    encerrarJogo("A porta fechada", "Sem testemunhas confiáveis ou documentos completos, as autoridades recusam abrir um inquérito. Você volta para a pensão sem resposta. A viagem mudou sua visão do mundo, mas não trouxe justiça.");
  }
}

function esperarUmAno() {
  dataAtual = "Março de 1897";
  idade = 14;
  if (arquivoSecreto == true || aliadoOperarios == true || aliadoPolicia == true) {
    encerrarJogo("Um futuro em construção", "Você permanece em York, trabalha e continua reunindo informações. Em março de 1897, aos quatorze anos, recebe a notícia de que o caso de Edward será reaberto. Sua vida não se resume mais à busca pelo pai: você começa a construir uma reputação própria.");
  } else {
    encerrarJogo("O peso dos anos", "Você passa mais um ano trabalhando e tentando sobreviver. Em março de 1897, aos quatorze anos, ainda não sabe o que aconteceu com Edward. Algumas pistas se perderam, e outras pessoas seguiram suas vidas. Você amadureceu, mas a pergunta continua sem resposta.");
  }
}

function voltarWhitby() {
  if (confiancaMae >= 1) {
    encerrarJogo("O retorno", "Você volta para Whitby e encontra Margaret esperando na porta. A viagem não trouxe Edward, mas a decisão de voltar evita que a família se desfaça. Você passa a trabalhar e estudar quando pode. O mistério permanece, agora como uma parte da história de vocês.");
  } else {
    encerrarJogo("Sem respostas", "Você retorna para Whitby sem encontrar Edward. Margaret não faz perguntas. A distância entre vocês continua, e a investigação deixa de ser uma possibilidade concreta. Você sobrevive, mas carrega a sensação de ter chegado perto demais para desistir em paz.");
  }
}

function encerrarJogo(titulo, texto) {
  etapa = 99;
  prepararCena("FIM DE CAMPANHA · " + dataAtual.toUpperCase(), titulo, texto + "\n\nIDADE FINAL: " + idade + " anos.\nTRABALHO: " + (ocupacao == "" ? "Nenhum trabalho fixo registrado" : ocupacao) + ".\nDINHEIRO RESTANTE: £ " + dinheiro + ".\n\nDECISÕES QUE MARCARAM ESTA VIDA:\n" + (memoria.length > 0 ? memoria.join("\n— ") : "Nenhuma decisão registrada."));
  criarOpcao("Recomeçar com outra campanha", reiniciarJogo);
}

function reiniciarJogo() {
  window.location.reload();
}

atualizarPainel();
