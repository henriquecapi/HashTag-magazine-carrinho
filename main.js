// const nomeProduto = "Casaco Branco";
// const marca = "Zara";
// const preco = 70;
// const nomeArquivoImagem = "product-1.jpg";
// alert("Opa, olha o javascript aí funcionando!!!");
import { inicializarCarrinho } from "./src/menuCarrinho";
const catalogo = [{
    id: 1,
    marca: 'Zara',
    nome: 'Camisa Larga com Bolsos',
    preco: 70,
    imagem: "product-1",
    feminino: false,
}, {
    id: 2,
    marca: 'Zara',
    nome: 'Casaco Reto com Lã',
    preco: 85,
    imagem: "product-2",
    feminino: true,
}, {
    id: 3,
    marca: 'Zara',
    nome: 'Jaqueta com Efeito Camurça',
    preco: 60,
    imagem: "product-3",
    feminino: false,
}, {
    id: 4,
    marca: 'Zara',
    nome: 'Sobretudo em Mescla de Lã',
    preco: 160,
    imagem: "product-4",
    feminino: false,
}, {
    id: 5,
    marca: 'Zara',
    nome: 'Camisa Larga Acolchoada de Veludo Cotelé',
    preco: 110,
    imagem: "product-2",
    feminino: false,
}, {
    id: 6,
    marca: 'Zara',
    nome: 'Casaco de Lã com Botões',
    preco: 170,
    imagem: "product-6",
    feminino: true,
}, {
    id: 7,
    marca: 'Zara',
    nome: 'Casaco com Botões',
    preco: 75,
    imagem: "product-7",
    feminino: true,
}, {
    id: 8,
    marca: 'Zara',
    nome: 'Colete Comprido com Cinto',
    preco: 88,
    imagem: "product-8",
    feminino: true,
},];

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}">
<img src="./assets/img/${produtoCatalogo.imagem}.jpg" 
  alt="product-1.jpg"
  style="height: 300px;">
<p class='marca'>${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>$${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;
    document.getElementById("conteiner-produto").innerHTML += cartaoProduto;

}

inicializarCarrinho();