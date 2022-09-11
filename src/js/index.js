
const vitrine = document.querySelector (".vitrine");
const carrinhoAdicionados = document.querySelector (".carrinho-adicionados");

const bComputadores = document.getElementById ("b-computadores");
const bHardware = document.getElementById ("b-hardware");
const bPerifericos = document.getElementById ("b-perifericos");
const bLinks = document.querySelectorAll (".links button");

const filtros = JSON.parse (localStorage.getItem ("filtros"));
const filtroNaoExiste = !filtros;
if (filtroNaoExiste) {
    localStorage.setItem ("filtros", JSON.stringify ([]));
}

let listaProdutos = data.slice (0);

bComputadores.onclick = () => {
    localStorage.setItem ("filtros", JSON.stringify (["Computadores"]));

    window.location.reload ();
};

bHardware.onclick = () => {
    localStorage.setItem ("filtros", JSON.stringify (["Hardware"]));

    window.location.reload ();
};

bPerifericos.onclick = () => {
    localStorage.setItem ("filtros", JSON.stringify (["Periféricos"]));
    
    window.location.reload ();
};

listaProdutos = filtrarElementos (filtros, data);

renderizarProdutos (listaProdutos, criarProdutoVitrine);


function filtrarElementos (filtros, lista) {
    let copiaLista = lista.splice (0);
    if (!filtros) {
        return lista;
    } else {
        for (let filtro of filtros) {
            copiaLista = copiaLista.filter (produto => {
                return produto.categorias.includes (filtro);
            });
        }
        return copiaLista;
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
    console.log (figure.id);
    figure.innerHTML = `
    <div class="div-imagem">
        <img src=${produto.img} alt="">
    </div>
    <figcaption>
        <ul class="lista-categorias">
        </ul>
        <h2 class="nome-produto">${produto.nome}</h2>
        <p class="descricao">${produto.descricao}</p>
        <span class="preco">R$ ${produto.valor.toFixed (2)}</span>
        <button>Adicionar ao carrinho</button>
    </figcaption>`;

    vitrine.appendChild (figure)
    figure = document.getElementById (id);
    console.log (figure);
    const listaCategorias = figure.querySelector (".lista-categorias");
    const categoriasProduto = produto.categorias;
    for (let categoria of categoriasProduto) {
        listaCategorias.insertAdjacentHTML ("beforeend",`<li><small class="categoria">${categoria}</small></li>`);
    }
}

function criarProdutoCarrinho (produto) {
    return `
    <figure class="produto"  id="carrinho_${produto.id}">
        <div class="div-imagem">
            <img src=${produto.img} alt="">
        </div>
        <figcaption>
            <h4 class="nome-produto">${produto.nome}</h4>
            <span class="preco">R$ ${produto.valor.toFixed (2)}</span>
            <button>Remover produto</button>
        </figcaption>
    </figure>`;
}

//PRODUTO NA VITRINE
/*
<figure class="produto">
    <div class="div-imagem">
        <img src="src\img\camiseta_preta.svg" alt="">
    </div>
    <figcaption>
        <small class="categoria">Camisetas</small>
        <h2 class="nome-produto">Lightweight Jacket</h2>
        <p class="descricao">Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante esta jaqueta vibrante</p>
        <span class="preco">R$ 100.00</span>
        <button>Adicionar ao carrinho</button>
    </figcaption>
</figure>
*/

//PRODUTO NO CARRINHO
/*
<figure class="produto">
    <div class="div-imagem">
        <img src="src\img\camiseta_preta.svg" alt="">
    </div>
    <figcaption>
        <h4 class="nome-produto">Lightweight Jacket</h4>
        <span class="preco">R$ 100.00</span>
        <button>Remover produto</button>
    </figcaption>
</figure>

*/