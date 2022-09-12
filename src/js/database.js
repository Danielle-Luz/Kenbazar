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
    img: "src/img/teclados/logitech.jpg",
    nome: "Teclado Logitech ERGO K860",
    descricao:
      "Digite mais naturalmente com o ERGO K860 - um teclado ergonômico avançado que promove uma postura de digitação mais relaxada - reduzindo a tensão do pulso em 25% e oferecendo 54% mais suporte para o pulso.",
    especificacoes: "Layout Dividido, Suporte para Descanso de Pulso, Conexão Bluetooth e USB, Windows e Mac",
    valor: 230,
    categorias: ["Periféricos", "Teclados"],
  },
  {
    id: 20,
    img: "src/img/teclados/microsoft.jpg",
    nome: "Teclado Microsoft Comfort",
    descricao:
    "Com o Microsoft Wireless Keyboard, aproveite um wireless comfort desktop com estilo e segurança. O teclado curvado ergonomicamente aprovado encoraja você a assumir uma postura mais natural que alinha seus braços, pulsos e mãos, oferecendo maior conforto.",
    especificacoes: "Preto, ABNT 2, USB 2.0, 2.4 Ghz,Windows e MAC",
    valor: 193,
    categorias: ["Periféricos", "Teclados"],
  },
  {
    id: 21,
    img: "src/img/teclados/microsoft-sculpt.jpg",
    nome: "Teclado Microsoft Sculpt",
    descricao:
      "O descanso de palma acolchoado oferece suporte e promove uma posição neutra do pulso. O design de teclado dividido ajuda a posicionar os pulsos e antebraços em uma posição natural e relaxada. O layout da chave de arco natural imita a forma curvada das pontas dos dedos. O design de teclado abobadado posiciona os pulsos em um ângulo natural e relaxado.",
    especificacoes: "Sem Fio, Preto, ABNT 2, USB 2.0, 2.4 Ghz,Windows e MAC",
    valor: 224,
    categorias: ["Periféricos", "Teclados"],
  },
];
