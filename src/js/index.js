import { data } from "./database.js";

//elementos do dom
const vitrine = document.querySelector (".vitrine");
const carrinhoAdicionados = document.querySelector (".carrinho-adicionados");
const carrinhoVazio = document.querySelector (".carrinho-vazio");
const bLinks = document.querySelectorAll (".links>li>button");
const todosBotoesHeader = document.querySelectorAll (".links button");
const hamburguerMenu = document.querySelector (".hamburguer-menu");
const botaoPesquisar = document.querySelector (".b-pesquisar");

//obtenção de filtro ativos
const filtro = JSON.parse (localStorage.getItem ("filtro"));
//tentando converter falsy value em true
const filtroNaoExiste = !filtro;
if (filtroNaoExiste) {
    //setando lista vazia no local storage caso não exista
    localStorage.setItem ("filtro", JSON.stringify (""));
}

//fazendo cópia da lista de produtos
let listaProdutos = data.slice (0);

//filtragem com base no botão clicado
for (let botao of todosBotoesHeader) {
    botao.onclick = () => {
        let filtro = botao.innerText != "Todos" ? botao.innerText : "";
        localStorage.setItem ("filtro", JSON.stringify (filtro));
        window.location.reload ();
    }
}

//exibição do dropdown
for (let botao of bLinks) {
    if (botao.innerText != "Todos") {
        //capturando dropdown do botão
        const subcategorias = botao.closest ("li").querySelector (".links-subcategorias");
        botao.onmouseenter = () => {
            //tornando dropdown visível
            subcategorias.classList.remove ("hidden");
            //adicionando visual que indica a qual botão pertence o dropdown
            botao.classList.add ("dropdown-ativo");
        };
        //tornando dropdown invisível
        botao.onmouseleave = () => {
            subcategorias.classList.add ("hidden");
        }
        //retirando estilização do botão quando o mouse sair de cima do dropdown ou dele
        botao.closest ("li").onmouseleave = () => {
            botao.classList.remove ("dropdown-ativo");
        };
    }
}

hamburguerMenu.addEventListener ("click", () => {
    const nav = document.querySelector ("nav");
    nav.style.display = nav.style.display == "flex" ? "none" : "flex";
    hamburguerMenu.classList.toggle ("rotacionar");
});

listaProdutos = filtrarElementos (filtro, data);
renderizarProdutos (listaProdutos, criarProdutoVitrine);

//adicionar ao carrinho
vitrine.addEventListener ("click", evento => {
    if (evento.target.className == "b-adicionar") {
        const botao = evento.target;
        const id = parseInt (botao.closest (".produto").id.split ("_")[1]) - 1;
        const estaNoCarrinho = carrinhoAdicionados.querySelector (`#carrinho_${id + 1}`);
        if (!estaNoCarrinho) {
            const produto = data[id];
            if (!localStorage.getItem ("carrinho")) {
                localStorage.setItem ("carrinho", JSON.stringify ([]));
            }
            const carrinho = JSON.parse (localStorage.getItem ("carrinho"));
            carrinho.push (produto);
            localStorage.setItem ("carrinho", JSON.stringify (carrinho));
            criarProdutoCarrinho (produto);
            mostraCarrinho ();
            alterarQuantidadeTotal (1, "+");
            alterarValorTotal (1, "+", [carrinhoAdicionados.querySelectorAll (".produto")[carrinhoAdicionados.children.length - 1]]);
        }
    }
});

carrinhoAdicionados.innerHTML = "";
const carrinho = JSON.parse (localStorage.getItem ("carrinho"));
renderizarProdutos (carrinho, criarProdutoCarrinho);
alterarQuantidadeTotal (carrinho.length, "+");
alterarValorTotal (1, "+", carrinhoAdicionados.querySelectorAll (".produto"));

carrinhoAdicionados.addEventListener ("click", evento => {
    if (evento.target.className == "b-remover") {
        const botaoExcluir = evento.target;
        const produto = botaoExcluir.closest (".produto");
        const quantidadeCarrinho = parseInt (produto.querySelector ("input").value);
        const id = parseInt (produto.id.split ("_")[1]);
        const carrinho = JSON.parse (localStorage.getItem ("carrinho"));
        const posicao = carrinho.findIndex (produto => {
            return produto.id == id;
        });
        carrinho.splice (posicao, 1);
        localStorage.setItem ("carrinho", JSON.stringify (carrinho));
        produto.remove ();
        if (carrinhoAdicionados.querySelectorAll ("figure").length == 0) {
            carrinhoVazio.classList.remove ("hidden");
            carrinhoAdicionados.parentNode.closest ("section").classList.add ("hidden");
        }
        alterarQuantidadeTotal (quantidadeCarrinho, "-");
        alterarValorTotal (quantidadeCarrinho, "-", [produto]);
    }
    
    if (evento.target.className == "b-aumentar") {
        const botaoAumentar = evento.target;
        const produto = botaoAumentar.closest (".produto");
        const inputQuantidade = botaoAumentar.parentNode.querySelector ("input");
        const quantidadeAtual = parseInt (inputQuantidade.value);
        if (quantidadeAtual < 20) {
            inputQuantidade.value = quantidadeAtual + 1;
            alterarQuantidadeTotal (1, "+")
            alterarValorTotal (1, "+", [produto]);
        }
    }

    if (evento.target.className == "b-diminuir") {
        const botaoAumentar = evento.target;
        const produto = botaoAumentar.closest (".produto");
        const inputQuantidade = botaoAumentar.parentNode.querySelector ("input");
        const quantidadeAtual = parseInt (inputQuantidade.value);
        if (quantidadeAtual > 1) {
            inputQuantidade.value = quantidadeAtual - 1;
            alterarQuantidadeTotal (1, "-");
            alterarValorTotal (1, "-", [produto]);
        }
    }
});

botaoPesquisar.addEventListener ("click", evento => {
    evento.preventDefault ();
    const campoPesquisa = document.getElementById ("campo-pesquisa");
    const resultadosPesquisa = [];
    if (campoPesquisa.value) {
        //limpando elementos na vitrine
        vitrine.innerHTML = "";
        //vitrine.parentNode.insertAdjacentHTML ("beforebegin", "<h1>Resultados de busca</h1>");
        let palavrasChavePesquisa = campoPesquisa.value.split (" ");
        //normalizando cada palavra no campo de busca
        palavrasChavePesquisa = palavrasChavePesquisa.map ( palavraChave => {
            return palavraChave.toLowerCase ();
        });

        for (let produto of data) {
            const categorias = produto.categorias;
            const palavrasNomeProduto = produto.nome.split (" ");
            let quantidadePalavrasIguais = palavrasNomeProduto.filter (palavra => {
                //verifica se uma das palavras no nome do produto é uma das palavras no campo de busca
                return palavrasChavePesquisa.includes (palavra.toLowerCase ());
            }).length;
            quantidadePalavrasIguais += categorias.filter (categoria => {
                //verifica se uma das categorias é igual a uma das palavras no campo de busca
                return palavrasChavePesquisa.includes (categoria.toLowerCase ());
            }).length;
            //verifica se o nome do produto ou as categorias têm pelo menos as palavras no campo de busca
            if (quantidadePalavrasIguais >= palavrasChavePesquisa.length) {
                resultadosPesquisa.push (produto);
            }
        }
        renderizarProdutos (resultadosPesquisa, criarProdutoVitrine);
    }
});

function mostraCarrinho () {
    if (carrinhoAdicionados.querySelectorAll ("figure").length > 0) {
        carrinhoVazio.classList.add ("hidden");
        carrinhoAdicionados.parentNode.closest ("section").classList.remove ("hidden");
    }
}

mostraCarrinho ();

function filtrarElementos (filtro, lista) {
    //caso não haja filtro, retorna a lista sem filtragem
    if (!filtro) {
        return lista;
    } else {
        lista = lista.filter (produto => {
            //só inclui o produto na lista se o filtro atual for uma das suas categorias
            return produto.categorias.includes (filtro);
        });
        return lista;
    }
}

function renderizarProdutos (lista, funcaoCriacao) {
    for (let produto of lista) {
        funcaoCriacao (produto);
    }
}

function criarProdutoVitrine (produto) {
    let figure = document.createElement ("figure");
    const id = `vitrine_${produto.id}`;
    figure.className = "produto";
    figure.id = id;
    figure.innerHTML = `
    <div class="div-imagem">
        <img src="${produto.img}" alt="${produto.alt}" width="100" height="100">
    </div>
    <figcaption>
        <ul class="lista-categorias">
        </ul>
        <h2 class="nome-produto">${produto.nome}</h2>
        <p class="descricao">${produto.descricao}</p>
        <span class="preco">R$ ${produto.valor.toFixed (2)}</span>
        <button class="b-adicionar">Adicionar ao carrinho</button>
    </figcaption>`;
    vitrine.appendChild (figure)
    figure = document.getElementById (id);
    const listaCategorias = figure.querySelector (".lista-categorias");
    const categoriasProduto = produto.categorias;
    for (let categoria of categoriasProduto) {
        listaCategorias.insertAdjacentHTML ("beforeend",`<li><small class="categoria">${categoria}</small></li>`);
    }
}

function criarProdutoCarrinho (produto) {
    let figure = document.createElement ("figure");
    figure.className = "produto";
    figure.id = `carrinho_${produto.id}`;
    figure.innerHTML = `
    <div class="div-imagem">
        <img src="${produto.img}" alt="${produto.alt}">
        </div>
    <figcaption>
        <h4 class="nome-produto">${produto.nome}</h4>
        <span class="preco">R$ ${produto.valor.toFixed (2)}</span>
        <div class="container-quantidade">
        <button class="b-diminuir">-</button>
        <input type="text" value="1" disabled>
        <button class="b-aumentar">+</button>
        </div>
        <button class="b-remover">Remover produto</button>
    </figcaption>`
    carrinhoAdicionados.appendChild (figure);
}

function alterarQuantidadeTotal (quantidade, tipoAlteracao) {
    const carrinhoQuantidade = document.getElementById ("carrinho-quantidade");
    const quantidadeAtual = parseInt (carrinhoQuantidade.innerText);
    if (tipoAlteracao == "+") {
        carrinhoQuantidade.innerText = (quantidadeAtual + quantidade);
    } else {
        carrinhoQuantidade.innerText = (quantidadeAtual - quantidade);
    }
}

function alterarValorTotal (quantidade, tipoAlteracao, produtos) {
    const carrinhoTotal = document.getElementById ("carrinho-total");
    for (let produto of produtos) {
        const precoProduto = parseFloat (produto.querySelector (".preco").innerText.split (" ")[1]);
        const valorAtual = parseFloat (carrinhoTotal.innerText.split (" ")[1]);

        if (tipoAlteracao == "+") {
            carrinhoTotal.innerText = `R$ ${valorAtual + quantidade * precoProduto}`;
        } else {
            carrinhoTotal.innerText = `R$ ${valorAtual - quantidade * precoProduto}`;
        }
    }
}