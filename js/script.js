let qntCartas = prompt("Com quantas cartas você quer jogar?");

  while (qntCartas%2 !== 0 || qntCartas < 4 || qntCartas > 14) {
  qntCartas =  prompt("Digite um numero válido");
  } 

// inserir cartas no html (elementos no DOM com js).
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
      <div class="card__back face madruguinha">
        <img class="card__gif" src= ${cards[i]} alt="Sr. Madruga">
      </div>
    </div>
  </li>`;
  }
  
// Ao clicar, revela a carta e compara se tem algo igual a uma carta já virada ou, se for a primeira, espera uma carta ser virada.

// Ao clicar, revela a carta e compara se tem algo igual a uma carta já virada ou, se for a primeira, espera uma carta ser virada. 
let cartasViradas = [];
let jogadas = 0;
let acertos = 0;
let fimDeJogo = qntCartas/2

function revelarCarta(carta) {
  let cartaVirada = carta.querySelector(".madruguinha");
  if(cartaVirada.classList.contains("virada")) {
    return;
  }
  cartaVirada.classList.remove("card__back");
  cartaVirada.classList.add("virada");

  cartasViradas.push(cartaVirada);
  jogadas++;

  if(cartasViradas.length == 1) {
    console.log(cartasViradas[0].querySelector("img").getAttribute("src"));
    return;
  }
  if(cartasViradas.length == 2) {
//CARTAS DIFERENTES!
    if(cartasViradas[0].querySelector("img"). getAttribute("src") !== cartasViradas[1].querySelector("img").getAttribute("src")) {
//DESVIRAR APÓS 1 SEGUNDO;
      setTimeout(() => {
      cartasViradas[0].classList.add("card__back");
      cartasViradas[0].classList.remove("virada");
      cartasViradas[1].classList.add("card__back");
      cartasViradas[1].classList.remove("virada");
      cartasViradas = [];}, 1000); 
      return;
    }
//CARTAS IGUAIS!!
    if(cartasViradas[0].querySelector("img").getAttribute("src") == cartasViradas[1].querySelector("img").getAttribute("src")) {

      cartasViradas[0].parentNode.setAttribute("disabled", "");
      cartasViradas[1].parentNode.setAttribute("disabled", "");
      cartasViradas = [];
      acertos++;

      if(acertos == fimDeJogo) {
        alert(`Parabéns, Você ganhou com ${jogadas} jogadas!`);

      }
      return;

    }
 
  }
}


//IMPLEMENTAR UM SOM A CADA JOGADA/ACERTO/ERRO/FIMDEJOGO.