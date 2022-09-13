// Banco de dados dos produtos
export const data = [
  {
    id: 1,
    img: "src/img/notebooks/aspire-5.jpg",
    alt: "notebook cinza com teclado preto e descanso de tela com detalhes verdes",
    nome: "Notebook Acer Aspire 5",
    descricao:
      "Os notebooks da linha Aspire 5 atendem às necessidades de um programador iniciante, sua portabilidade permite que sejam transportados para qualquer lugar, caso queira mudar seu local de estudo. Com Processador Intel Core 10ª geração, faça loops infinitos sem se preocupar.",
    especificacoes: "Intel Core i5-10210U, GeForce MX 250, 8GB RAM, 512GB SSD NVMe, 15.6 IPS FHD, Windows 11 Home, Prata",
    valor: 2500,
    categorias: ["Computadores", "Notebooks"],
  },
  {
    id: 2,
    img: "src/img/notebooks/asus-ryzen-5.jpg",
    alt: "notebook cinza com bolhas de sabão com descanso de tela",
    nome: "Notebook Asus AMD Ryzen 5-3500U",
    descricao:
      "O ASUS M515 possui armazenamento SSD de 256GB, capaz de manter um ótimo desempenho ainda que você tenha várias guias do Stack Overflow abaertas no chrome. O ASUS M515 é menor, mais leve e não tem partes mecânicas extremamente sensíveis a impactos e solavancos, permitindo que você possa chutar traquilamente o seu notebook quando não conseguir identificar o bug no seu programa.",
    especificacoes: "AMD Ryzen 5-3500U, 8GB RAM, SSD 256GB, 15,6 Full HD, Radeon Vega 8, Linux, Cinza",
    valor: 1200,
    categorias: ["Computadores", "Notebooks"],
  },
  {
    id: 3,
    img: "src/img/notebooks/samsung-i5.jpg",
    alt: "notebook cinza escuro com machas de tintas roxas e amarelas como descanso de tela",
    nome: "Notebook Samsung Intel Core i5-1135G7",
    descricao:
      "O Samsung Book possui uma arquitetura de última geração e design elegante que agradará todo fanático por CSS. Conta com portas de acesso à memória e unidade de armazenamento, facilitando o upgrade quando você juntar dinheiro o bastante ao trabalhar como coach. A linha Samsung Books atende variados perfis de utilização, não importa qual IDE ou editor de texto você use para codar.",
    especificacoes: "Intel Core i5-1135G7, 8GB RAM, SSD 256GB, 15.6 Full HD, Windows 11 Pro, Cinza",
    valor: 2200,
    categorias: ["Computadores", "Notebooks"],
  },
  {
    id: 4,
    img: "src/img/pc/facil.jpg",
    alt: "gabinete cinza escuro de lado",
    nome: "Computador Fácil Intel Core i5-3470",
    descricao:
      "A Linha de Computador Fácil consegue suprir as demandas de um desenvolvedor iniciante que trabalhe com aplicações e IDES leves, ideal para alunos do M1 que busquem unir eficiência, bom desempenho na execução dos seus códigos e um excelente custo benefício.",
    especificacoes: "Intel Core i5-3470, 8GB DDR3, SSD 240GB, 230W, Linux",
    valor: 1100,
    categorias: ["Computadores", "PC"],
  },
  {
    id: 5,
    img: "src/img/pc/hp.jpg",
    nome: "Computador HP 280 G5 SFF",
    alt: "gabinete preto de frente",
    descricao:
    "O computador HP 280 G5 SFF concilia um excelente desempenho com um baixo custo, seu principal objetivo é ser versátil e útil para qualquer fim, rodando as aulas no canvas com alta definição e fazendo o modo noturno parecer ainda mais confortável aos olhos de qualquer programador.",
    especificacoes: "i3-10100, 4GB RAM DDR4, SSD 256GB, FreeDOs, Kit Teclado e Mouse - 48T03LA#AK4",
    valor: 1800,
    categorias: ["Computadores", "PC"],
  },
  {
    id: 6,
    img: "src/img/pc/le-novo.jpg",
    nome: "Computador Lenovo V50S",
    alt: "gabinete preto de lado",
    descricao:
      "Seja para codar ou assistir a um tutorial de JS no youtube, o Lenovo V50S é um computador que oferece desempenho poderoso e versatilidade. É equipado com processador I3 10100 e memória RAM de 4 GB, requisitos que atendem às necessidades de qualquer aluno do M1 ou M2.",
    especificacoes: "Intel Core i3-10100, 4GB RAM, HD 500GB, Windows 10 Pro, Kit teclado e Mouse - 11HA000QBP",
    valor: 100,
    categorias: ["Computadores", "PC"],
  },
  {
    id: 7,
    img: "src/img/monitores/lg-led-25.jpg",
    alt: "Monitor preto com personagens de jogo armados como descanso de tela",
    nome: "Monitor Gamer LG 25' IPS",
    descricao:
      "A proporção da imagem do monitor UltraWide torna as demos mais envolventes do que nunca. A nitidez da resolução Full HD de 1080P com IPS permite assistir ao Hudson codar em alta definição. Simplificando, de qualquer ângulo de visão, até suas páginas HTML sem CSS poderão ficar bonitas.",
    especificacoes: "Ultra Wide, 75 Hz, Full HD, 99% sRGB, HDMI, VESA - 25UM58-G",
    valor: 500,
    categorias: ["Computadores", "Monitores"],
  },
  {
    id: 8,
    img: "src/img/monitores/lg-led-23.jpg",
    alt: "monitor cinza com balões coloridos como descanso de tela",
    nome: "Monitor LG 23.8' IPS",
    descricao:
    "O novo Monitor LG 23,8 conta com tecnologia IPS para melhor reprodução de cores, permitindo que você visualize a paleta de cores e o layout do seu site com a mais alta definição.",
    especificacoes: "Full HD, HDMI, VESA, Ajuste de Ângulo - 24MK430H",
    valor: 750,
    categorias: ["Computadores", "Monitores"],
  },
  {
    id: 9,
    img: "src/img/monitores/AOC.jpg",
    alt: "monitor preto com prédios como descanso de tela",
    nome: "Monitor AOC 23.8' LED",
    descricao:
      "Com o Monitor AOC Série B1 24B1XHM você poderá visualizar os designs no figma com grande detalhamento e reconhecer os espaçamentos dos sites que acessar com facilidade. Completo e moderno, ele possui tela widescreen LED de 23.8 com resolução full HD e painel VA, proporcionando imagens incríveis, detalhes nítidos e cores vibrantes.",
    especificacoes: "Wide, Full HD, HDMI/VGA, VESA, Low Blue Light, Adaptive Sync - 24B1XHM",
    valor: 700,
    categorias: ["Computadores", "Monitores"],
  },
  {
    id: 10,
    img: "src/img/headsets/microsoft.jpg",
    alt: "headset preto com microfone",
    nome: "Headset Microsoft LifeChat LX3000",
    descricao:
      "O Headset LifeChat da Microsoft oferece diferentes recursos, é perfeito para entrar em chamadas no zoom sem que o seu microfone emita barulhos desagradáveis para os demais colegas na sala. Com alto-falantes almofadados e revestidos em PU, proporciona conforto e potencializa a qualidade do som de qualquer lo-fi.",
    especificacoes: "Microfone, Alto-falantes revestidos em PU, USB - JUG00013",
    valor: 80,
    categorias: ["Periféricos", "Headsets"],
  },
  {
    id: 11,
    img: "src/img/headsets/rydo.jpg",
    alt: "headset preto com microfone",
    nome: "Headset Rydo Trust On-Ear",
    descricao:
    "O Trust Rydo é um fone de ouvido compacto e confortável, com um microfone ajustável e audível para que você faça perguntas na demo a vontade. Fácil de usar, com ótima qualidade de som e extremamente adequando para reuniões no Zoom.",
    especificacoes: "USB, Microfone, Driver 24mm, Preto",
    valor: 55,
    categorias: ["Periféricos", "Headsets"],
  },
  {
    id: 12,
    img: "src/img/headsets/logitech.jpg",
    alt: "headset preto com microfone",
    nome: "Headset com fio Logitech",
    descricao:
      "Com o headset H390, escute as orientações do seu coach favorito com a melhor qualidade de som e clareza usando uma conexão USB plug-and-play. O microfone rígido do lado esquerdo pode ser colocado na posição mais adequada para capturar melhor sua voz sem que o seu facilitador peça pra você repetir a pergunta.",
    especificacoes: "USB, Com Almofadas, Controles de Áudio Integrado, Microfone com Redução de Ruído",
    valor: 100,
    categorias: ["Periféricos", "Headsets"],
  },
  {
    id: 13,
    img: "src/img/mouses/redragon.jpg",
    alt: "mouse preto com luzes verdes, amarelas e vermelhas nas extremidades",
    nome: "Mouse Gamer Redragon Cobra",
    descricao:
      "O Mouse Gamer Redragon Cobra é ideal para todo dev que quer postar a foto do seu setup no linkedin, possui sensor PIXART 3327 para Alta Performance (20 G / 100 IPS) e seu sistema é de Iluminação RGB Redragon Chroma Mk.II (7 Diferentes Modos de Iluminação). Possui Polling Rate de 1000hz (Tempo de Resposta Ajustável via Software de 1/2/4/8ms), com 8 Botões Programáveis e 2 Botões laterais para funções / atalhos, macros, etc.",
    especificacoes: "Chroma RGB, 12400DPI, 7 Botões, Preto",
    valor: 67,
    categorias: ["Periféricos", "Mouses"],
  },
  {
    id: 14,
    img: "src/img/mouses/redragon-lunar.jpg",
    alt: "mouse branco com luzes azuis, roxas, rosas e verdes nas extremidades",
    nome: "Mouse Dev Redragon Cobra Lunar White",
    descricao:
    "Trazendo a já amada iluminação Redragon Chroma Mark II, o mouse Dev Profissional Cobra permite que você clique com o botão direito para abrir o devtools quantas vezes quiser.",
    especificacoes: "Chroma RGB, 12400DPI, 7 Botões, White",
    valor: 73,
    categorias: ["Periféricos", "Mouses"],
  },
  {
    id: 15,
    img: "src/img/mouses/logitech.jpg",
    nome: "Mouse Dev Sem Fio Logitech",
    alt: "mouse preto com círculo azul iluminado na parte inferior",
    descricao:
      "Projetado em colaboração direta com programadores profissionais, o mouse dev PRO Wireless foi desenvolvido de acordo com os exigentes padrões de alguns dos maiores desenvolvedores do mundo, sendo resistente a quaisquer ataques de raiva e arremessos de alturas elevadas. O PRO Wireless dev mouse foi concebido para oferecer resistência, um desempenho de ponta e inclui as mais recentes e avançadas tecnologias disponíveis.",
    especificacoes: "Sem Fio, Wireless LIGHTSPEED, RGB LIGHTSYNC, Ambidestro, 6 Botões Programáveis, HERO 25K - 910-005271",
    valor: 150,
    categorias: ["Periféricos", "Mouses"],
  },

  {
    id: 16,
    img: "src/img/teclados/logitech.jpg",
    nome: "Teclado Logitech ERGO K860",
    alt: "teclado preto e curvo com formato ergonômico",
    descricao:
      "Presssione CTRL C + CTRL V nos códigos do Stack Overflow sem dificuldade, code naturalmente com o ERGO K860 - um teclado ergonômico avançado que promove uma postura de digitação mais relaxada - reduzindo a tensão do pulso em 25% e oferecendo 54% mais suporte para o pulso.",
    especificacoes: "Layout Dividido, Suporte para Descanso de Pulso, Conexão Bluetooth e USB, Windows e Mac",
    valor: 230,
    categorias: ["Periféricos", "Teclados"],
  },
  {
    id: 17,
    img: "src/img/teclados/microsoft.jpg",
    alt: "teclado preto e curvo com formato ergonômico",
    nome: "Teclado Microsoft Comfort",
    descricao:
    "Com o Microsoft Wireless Keyboard, aproveite um wireless comfort desktop com estilo e segurança. O teclado curvado ergonomicamente aprovado reduz a taxa de artrite entre programadores e encoraja você a assumir uma postura mais natural que alinha seus braços, pulsos e mãos, oferecendo maior conforto para que você programe sem reclamar de dor nas costas.",
    especificacoes: "Preto, ABNT 2, USB 2.0, 2.4 Ghz,Windows e MAC",
    valor: 193,
    categorias: ["Periféricos", "Teclados"],
  },
  {
    id: 18,
    img: "src/img/teclados/microsoft-sculpt.jpg",
    alt: "teclado preto e curvo com formato ergonômico e mouse com touchpad a direita",
    nome: "Teclado Microsoft Sculpt",
    descricao:
      "O descanso de palma acolchoado oferece suporte e promove uma posição neutra do pulso para que você possa refazer as entregas da sprint sem dores físicas, apenas psicológicas. O design de teclado dividido ajuda a posicionar os pulsos e antebraços em uma posição natural e relaxada, permitindo que a parte do seu dinheiro que iria para o ortopedista seja direcionada para dar um upgrade no seu PC",
    especificacoes: "Sem Fio, Preto, ABNT 2, USB 2.0, 2.4 Ghz,Windows e MAC",
    valor: 224,
    categorias: ["Periféricos", "Teclados"],
  },

  {
    id: 19,
    img: "src/img/placas-de-video/zotac.jpg",
    nome: "Placa de Vídeo Zotac NVIDIA GeForce RTX 3060",
    descricao:
      "NVIDIA, RT Cores, GDDR6 e muito mais para melhor desempenho, seu CSS ainda mais bonito na sua máquina! Amplie-se com a ZOTAC GAMING GeForce RTX 30 Series baseada na arquitetura NVIDIA Ampere. Construída com RT Cores e Tensor Cores aprimorados, novos multiprocessadores de streaming e memória GDDR6 de alta velocidade, a ZOTAC GAMING GeForce RTX 3060 Ti Twin Edge LHR faz com que as cores do VS Code sejam ainda mais coloridas",
    especificacoes: "8GB GDDR6, 14 Gbps, LHR, DLSS, Ray Tracing - ZT-A30610E-10MLHR",
    valor: 1230,
    categorias: ["Hardware", "Placas de vídeo"],
  },
  {
    id: 20,
    img: "src/img/placas-de-video/rtx-3060.jpg",
    nome: "Placa de Video Gigabyte GeForce RTX 3060",
    descricao:
    "A placa de vídeo GIGABYTE gira os ventiladores adjacentes na direção oposta, de forma que a direção do fluxo de ar entre os dois ventiladores seja a mesma, reduzindo a turbulência e aumentando a pressão do fluxo de ar, seu PC não vai mais explodir enquanto roda o zoom!",
    especifications: "Processamento de Gráficos: GeForce RTX 3060, Core Clock: 1837 MHz (cartão de referência: 1777 MHz), CUDA Cores: 3584, DirectX: 12 Ultimate, Sistema de resfriamento WINDFORCE 3X com ventiladores alternativos",
    valor: 1530,
    categorias: ["Hardware", "Placas de vídeo"],
  },
  {
    id: 21,
    img: "src/img/placas-de-video/rtx-2060.jpg",
    nome: "Placa de Vídeo Zotac NVIDIA GeForce RTX 2060",
    descricao:
      "A nova geração de placas gráficas ZOTAC GAMING GeForce está aqui. A nova e poderosa GeForce RTX 2060 aproveita a avançada arquitetura NVIDIA Turing para mergulhar você em incrível realismo e desempenho das suas IDES preferidas.",
    especificacoes: "Clock Boost  1680 MHz, Capacidade: 6GB, Clock: 14 Gbps, Resfriamento: Ventilador duplo, Windows 10 / 7 x64",
    valor: 750,
    categorias: ["Hardware", "Placas de vídeo"],
  },
  {
    id: 22,
    img: "src/img/processadores/i5-1040.jpg",
    nome: "Processador Intel Core i5-10400",
    descricao:
      "Os novos processadores Intel Core da 10ª Geração oferecem atualizações de desempenho incríveis para melhorar a produtividade e permitir que você code sem se preocupar com travamentos durante as 1:1's técnicas. Intel Wi-Fi 6 (Gig) tecnologia, HDR 4K, otimização de sistema inteligentes e muito mais",
    especificacoes: "Núcleos: 6, Threads: 12, Frequência: Baseada em processador 2.90 GHz, Frequência turbo máxima: 4,30 GHz, Cache: 12 MB Intel Smart Cache, Gráficos do processador: Intel UHD Graphics 630",
    valor: 750,
    categorias: ["Hardware", "Processadores"],
  },
  {
    id: 23,
    img: "src/img/processadores/ryzen-5-5600g.jpg",
    nome: "Processador AMD Ryzen 5 5600G",
    descricao:
      "Esteja você digitando uma página HTML, vendo as rubricas no canvas ou tentando debugar seu código, a velocidade sem precedentes dos processadores AMD Ryzen série 5000 G para desktop é imparável. Com os processadores AMD Ryzen para desktop, você está sempre na frente.",
    especificacoes: "Nº de núcleos de CPU: 6, Nº de threads: 12, Nº de núcleos de GPU: 7, Clock básico: 3.9GHz, Clock de Max Boost: Até 4.4GHz, Total de Cache L2: 3MB",
    valor: 680,
    categorias: ["Hardware", "Processadores"],
  },
  {
    id: 24,
    img: "src/img/processadores/i5-12400f.jpg",
    nome: "Processador Intel Core i5-12400F",
    descricao:
      "Processador Intel Core i5-12400F da 12ª Geração para desktop, com compatibilidade com PCIe 5.0 e 4.0, e compatibilidade com DDR5 e DDR4, os processadores Intel Core i5 da 12ª Geração para desktop foram otimizados para devs, e ajudam a oferecer alto desempenho. Agora a quantidade de loops while no seu código não será mais um problema!",
    especificacoes: "Soluções térmicas In-Box: RM1, Soquete: LGA1700,  Cache L2 total: 7,5MB, Núcleos do processador (P-cores + E-cores): 6 (6P+0E), Threads do processador: 12",
    valor: 730,
    categorias: ["Hardware", "Processadores"],
  },
  {
    id: 25,
    img: "src/img/ssd/husky.jpg",
    nome: "SSD Husky Gaming Sata 3",
    descricao:
      "O SSD Husky Gaming pode dar vida ao seu computador para uso diário durante as horas na Kenzie. Com excelente desempenho, ótima capacidade e uma velocidade até quatro vezes mais rápida por não possuir peças móveis. A demora pra inicialização não será mais uma desculpa pra se atrasar pra demo!",
    especificacoes: "Formato: 2,5 pol, Interface: SATA Rev. 3.0 (6Gb/s), Capacidades: 256GB, Performance de referência: até 570MB/s para leitura e 520MB/s para gravação, Suporte: AHCI, S.M.A.R.T, NCQ, TRIM, Temperatura de operação: 0 °C a 70 °C,  Voltagem: 5V, Consumo de energia: 4W",
    valor: 120,
    categorias: ["Hardware", "SSD"],
  },
  {
    id: 26,
    img: "src/img/ssd/crucial.jpg",
    nome: "SSD Crucial BX500",
    descricao:
    "Melhore a capacidade de resposta geral do sistema até para códigos sujos, podres e mal otimizados. Adicione a memória flash ao seu laptop ou computador desktop com o SSD Crucial BX500, o seu 'hello world!' será exibido em questão de nanossegundos!",
    especificacoes: "Fator de forma: SSD interno de 2,5 polegadas, Capacidade: 240 GB, Series: BX500, Interface: SATA 6.0Gb/s, Leitura: 540 MB/s, Gravação: 500 MB/s",
    valor: 110,
    categorias: ["Hardware", "SSD"],
  },
  {
    id: 27,
    img: "src/img/ssd/pny.jpg",
    nome: "SSD PNY CS900 SATA 240 GB",
    descricao:
    "Os SSDs da PNY reduzem a temperatura operacional e os possíveis danos causados por superaquecimento, não precisa mais fazer push a cada 2 segundos com medo do seu pc explodir! Os SSDs da PNY não produzem ruído, tornando o seu PC significativamente mais silencioso, code durante a noite sem acordar sua vizinhança.",
    especificacoes: "Capacidade: 240 GB, Interface: SATA III 6GB/s, Retrocompatível com SATA II 3GB/s, Leitura: 535 MB/s, Gravação: 500MB/s",
    valor: 116,
    categorias: ["Hardware", "SSD"],
  },
];
