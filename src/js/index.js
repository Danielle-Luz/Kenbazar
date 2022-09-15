import { data } from "./database.js";
//elementos do dom
const linkLogo = document.querySelector (".logo").querySelector ("a");
const bLinks = document.querySelectorAll (".links>li>button");
const navbar = document.querySelector (".links");
const hamburguerMenu = document.querySelector (".hamburguer-menu");
const vitrine = document.querySelector (".vitrine");
const botaoPesquisar = document.querySelector (".b-pesquisar");
const carrinhoAdicionados = document.querySelector (".carrinho-adicionados");
const footer = document.querySelector ("footer");
//obtenção de filtro ativos
const filtro = JSON.parse (localStorage.getItem ("filtro"));
const campoPesquisa = document.getElementById ("campo-pesquisa");
let listaProdutos = data.slice (0);

//tentando converter possível falsy value em true
if (!filtro) {
    //setando lista vazia no local storage caso não exista
    localStorage.setItem ("filtro", JSON.stringify (""));
}

if (!localStorage.getItem ("carrinho")) {
    localStorage.setItem ("carrinho", JSON.stringify ([]));
}

//fazendo cópia da lista de produtos

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

//-------------------
//CHAMADAS DE FUNÇÃO:
//-------------------
listaProdutos = filtrarElementos (filtro, data);
renderizarProdutos (listaProdutos, criarProdutoVitrine);
carrinhoAdicionados.innerHTML = "";
const carrinho = JSON.parse (localStorage.getItem ("carrinho"));
renderizarProdutos (carrinho, criarProdutoCarrinho);
alterarQuantidadeTotal (carrinho.length, "+");
alterarValorTotal (1, "+", carrinhoAdicionados.querySelectorAll (".produto"));
mostraCarrinho ();


//-------------------
//LISTENERS:
//-------------------
linkLogo.addEventListener ("click", evento => {
    evento.preventDefault ();
    localStorage.setItem ("filtro", JSON.stringify (""));
    window.location.href = "index.html";
});

navbar.addEventListener ("click", guardarFiltro);

hamburguerMenu.addEventListener ("click", () => {
    const nav = document.querySelector ("nav");
    nav.style.display = nav.style.display == "flex" ? "none" : "flex";
    hamburguerMenu.classList.toggle ("rotacionar");
});

vitrine.addEventListener ("click", evento => {
    if (evento.target.className == "b-adicionar") {
        const botao = evento.target;
        const id = parseInt (botao.closest (".produto").id.split ("_")[1]) - 1;
        const estaNoCarrinho = carrinhoAdicionados.querySelector (`#carrinho_${id + 1}`);
        if (!estaNoCarrinho) {
            const produto = data[id];
            const carrinho = JSON.parse (localStorage.getItem ("carrinho"));
            carrinho.push (produto);
            localStorage.setItem ("carrinho", JSON.stringify (carrinho));
            criarProdutoCarrinho (produto);
            mostraCarrinho ();
            alterarQuantidadeTotal (1, "+");
            const produtosCarrinho = carrinhoAdicionados.querySelectorAll (".produto");
            alterarValorTotal (1, "+", [produtosCarrinho[produtosCarrinho.length - 1]]);
        }
    } else {
        guardarFiltro (evento);
    }
});

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
            const carrinhoVazio = document.querySelector (".carrinho-vazio");
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

campoPesquisa.addEventListener ("input", evento => {
    const resultadosPesquisa = [];
    if (campoPesquisa.value) {
        //limpando elementos na vitrine
        vitrine.innerHTML = "";
        let palavrasChavePesquisa = campoPesquisa.value.split (" ");
        console.log (palavrasChavePesquisa);
        for (let produto of data) {
            const categorias = produto.categorias;
            let palavrasProduto = produto.nome.split (" ");
            for (let categoria of categorias) {
                for (let i = categoria.length; i >= 0 ; i--) {
                    const indexEncontrado = palavrasProduto.findIndex ( palavra => {
                        return categoria.substring (0, i) == palavra;
                    });
                    if (indexEncontrado != -1) {
                        console.log (indexEncontrado)
                        palavrasProduto.splice (indexEncontrado, 1);
                    }
                }
            }
            palavrasProduto = palavrasProduto.concat (categorias);
            //para evitar que strings vazias (falsy values) persistam no array
            palavrasChavePesquisa = palavrasChavePesquisa.filter (palavra => {
                return palavra;
            });
            let quantidadePalavrasIguais = palavrasProduto.filter (palavra => {
                return palavrasChavePesquisa.filter (palavraChave => {
                    return compararPalavra (palavraChave, palavra);
                }).length > 0;
            }).length;
            //verifica se o nome do produto + as categorias têm pelo menos as palavras presentes no campo de busca
            if (quantidadePalavrasIguais >= palavrasChavePesquisa.length) {
                resultadosPesquisa.push (produto);
            }
        }
        renderizarProdutos (resultadosPesquisa, criarProdutoVitrine);
        if (!resultadosPesquisa.length) {
            vitrine.innerHTML = "<p class='nenhum-resultado'>Nenhum resultado encontrado</p>"
        }
    } else {
        vitrine.innerHTML = "";
        listaProdutos = filtrarElementos ("", data);
        renderizarProdutos (listaProdutos, criarProdutoVitrine);
    }
});

footer.addEventListener ("click", guardarFiltro);


//-------------------
//DECLARAÇÕES DE FUNÇÕES:
//-------------------
function compararPalavra (palavraChave, palavra) {
    for (let i = 0; i < palavra.length; i++) {
        let letrasRestantes = palavra.length - i;
        if (letrasRestantes >= palavraChave.length) {
            let pedaco = palavra.substring (i, i + palavraChave.length);
            if (pedaco.toLowerCase () == palavraChave.toLowerCase ()) {
                return true;
            }
        } else {
            return false;
        }
    }
}

function guardarFiltro (evento) {
    if (evento.target.tagName == "BUTTON" && evento.target.className != "b-adicionar") {
        let botao = evento.target;
        let filtro = botao.innerText != "Todos" ? botao.innerText : "";
        let filtroNormalizado = filtro != "" ? filtro.toLowerCase () : "";
        localStorage.setItem ("filtro", JSON.stringify (filtroNormalizado));
        window.location.reload ();
        window.scrollTo (0, 0);
    }
}

//função pra exibir ou mostrar a div "carrinho vazio"
function mostraCarrinho () {
    if (carrinhoAdicionados.querySelectorAll ("figure").length > 0) {
        const carrinhoVazio = document.querySelector (".carrinho-vazio");
        carrinhoVazio.classList.add ("hidden");
        carrinhoAdicionados.parentNode.closest ("section").classList.remove ("hidden");
    }
}

function filtrarElementos (filtro, lista) {
    //caso não haja filtro, retorna a lista sem filtragem
    if (!filtro) {
        return lista;
    } else {
        lista = lista.filter (produto => {
            const listaNormalizada = produto.categorias.map (categoria => {
                return categoria.toLowerCase ();
            })
            //só inclui o produto na lista se o filtro atual for uma das suas categorias
            return listaNormalizada.includes (filtro);
        });
        return lista;
    }
}

//repete a função de criação para cada elemento da lista passada como argumento
function renderizarProdutos (lista, funcaoCriacao) {
    for (let produto of lista) {
        funcaoCriacao (produto);
    }
}

function criarProdutoVitrine (produto) {
    let itemLista = document.createElement ("li");
    const id = `vitrine_${produto.id}`;
    itemLista.innerHTML = `
    <figure class="produto" id="vitrine_${produto.id}">
        <div class="div-imagem">
            <img src="${produto.img}" alt="${produto.alt}" width="100" height="100">
        </div>
        <figcaption>
            <ul class="lista-categorias">
            </ul>
            <h2 class="nome-produto">${produto.nome}</h2>
            <p class="descricao">${produto.descricao}</p>
            <span class="preco">${produto.valor.toLocaleString ("pt-BR", {style: "currency", currency: "BRL"})}</span>
            <button class="b-adicionar">Adicionar ao carrinho</button>
        </figcaption>
    </figure>`;
    vitrine.appendChild (itemLista)
    itemLista = document.getElementById (id);
    const listaCategorias = itemLista.querySelector (".lista-categorias");
    const categoriasProduto = produto.categorias;
    for (let categoria of categoriasProduto) {
        listaCategorias.insertAdjacentHTML ("beforeend",`<li><button class="categoria">${categoria}</button></li>`);
    }
}

function criarProdutoCarrinho (produto) {
    let itemLista = document.createElement ("li");
    itemLista.innerHTML = `
    <figure class="produto" id="carrinho_${produto.id}">
        <div class="div-imagem">
            <img src="${produto.img}" alt="${produto.alt}">
        </div>
        <figcaption>
            <h4 class="nome-produto">${produto.nome}</h4>
            <span class="preco">${produto.valor.toLocaleString ("pt-BR", {style: "currency", currency: "BRL"})}</span>
            <div class="container-quantidade">
            <button class="b-diminuir">-</button>
            <input type="text" value="1" disabled>
            <button class="b-aumentar">+</button>
            </div>
            <button class="b-remover">Remover produto</button>
        </figcaption>
    </figure>`
    carrinhoAdicionados.appendChild (itemLista);
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
        const precoProduto = Number (produto.querySelector (".preco").innerText.split ("\xa0")[1].replace (".", "").replace(",", "."));
        console.log (produto.querySelector (".preco").innerText.split("\xa0"));
        const valorAtual = parseFloat (carrinhoTotal.innerText.split (" ")[1]);

        if (tipoAlteracao == "+") {
            carrinhoTotal.innerText = `R$ ${valorAtual + quantidade * precoProduto}`;
        } else {
            carrinhoTotal.innerText = `R$ ${valorAtual - quantidade * precoProduto}`;
        }
    }
}