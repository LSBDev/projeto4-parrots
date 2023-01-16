let qntCartas = prompt("Com quantas cartas você quer jogar?");

  while (qntCartas%2 !== 0 || qntCartas < 4 || qntCartas > 14) {
  qntCartas =  prompt("Digite um numero válido");
  } 

// inserir cartas no html (elementos no DOM com js).
//inserir com os gifs aleatórios.
//criar lista com os gifs.
const gifs = [
  '/img/madruga1.gif',
  '/img/madruga2.gif',
  '/img/madruga3.gif',
  '/img/madruga4.gif',
  '/img/madruga5.gif',
  '/img/madruga6.gif',
  '/img/madruga7.gif'
];
let cartas = document.querySelector("ul");
cartas.innerHTML = [];
//criando um array de 'cards' vazio e povoando o array com dois paths iguais por vez. 

let cards = [];
for(let i = 0; i < qntCartas/2; i++){
  cards.push(gifs[i]);
  cards.push(gifs[i]);
}

cards.sort(comparador);
function comparador() { 
  return Math.random() - 0.5; 
}

// inserir cartas no html (elementos no DOM com js).
  for (let i = 0; i < qntCartas; i++){
    cartas.innerHTML +=
  `<li>
    <div class="card" onclick="revelarCarta(this)" id ="${i}">
      <div class="card__front face">
        <img class="card__img" src="/img/back.png" alt="papagaio">
      </div>
      <div class="card__back face">
        <img class="card__gif" src= ${cards[i]} alt="Sr. Madruga">
      </div>
    </div>
  </li>`;
  }
  
// Ao clicar, revela a carta e compara se tem algo igual a uma carta já virada ou, se for a primeira, espera uma carta ser virada.
let cartaEscolhida;
console.log(cartaEscolhida);


/*let cartasSelecionadas = qntCartas;

while(true) {

  while(false) {

  }
  while(false) {

  }
  if (carta1 == carta2) {
    cartasSelecionadas -= 2;
  }
  if (cartasSelecionadas == 0){
    break;
  }
}*/


// Ao clicar, revela a carta e compara se tem algo igual a uma carta já virada ou, se for a primeira, espera uma carta ser virada. 
function revelarCarta(carta) {
let cartaVirada = carta.querySelector(".card__back").classList.remove("card__back");
cartaEscolhida = carta.getAttribute("id");
}











// var cartas = [];
// var indice = 0;
// function criarElementos() {
//   const ul = document.querySelectorAll("ul");
 
//   while (indice)
// }

// for(let indice = 0; indice < tarefa.lenght; indice++)
// // usar for