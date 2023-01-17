let qntCartas = prompt("Com quantas cartas você quer jogar?");

  while (qntCartas%2 !== 0 || qntCartas < 4 || qntCartas > 14) {
  qntCartas =  prompt("Digite um numero válido");
  }
  // GUARDANDO GIFS NUM ARRAY
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
//CRIANDO UM ARRAY DE "CARDS" VAZIO E POVOANDO ESSE ARRAY COM DOIS PATHS IGUAIS POR VEZ. 
let cards = [];
for(let i = 0; i < qntCartas/2; i++){
  cards.push(gifs[i]);
  cards.push(gifs[i]);
}
cards.sort(comparador);
function comparador() { 
  return Math.random() - 0.5;
}
// inserir elementos no DOM.
  for (let i = 0; i < qntCartas; i++){
    cartas.innerHTML +=
  `<li>
    <div data-test="card" class="card" onclick="revelarCarta(this)" id ="${i}">
      <div class="card__front face front">
        <img data-test="face-down-image" class="card__img" src="/img/back.png" alt="papagaio">
      </div>
      <div class="card__back face madruguinha">
        <img data-test="face-up-image" class="card__gif" src= ${cards[i]} alt="Sr. Madruga">
      </div>
    </div>
  </li>`;
  }
// Ao clicar, revela a carta e compara se tem algo igual a uma carta já virada ou, se for a primeira, espera uma carta ser virada.
let cartasViradas = [];
let cartasFront = [];
let jogadas = 0;
let acertos = 0;
let fimDeJogo = qntCartas/2

function revelarCarta(carta) {
  let cartaVirada = carta.querySelector(".madruguinha");
  let cartaFront = carta.querySelector(".front");
  if(cartaVirada.parentNode.classList.contains("virada")) {
    return;
  }
  cartaVirada.classList.remove("card__back");
  cartaVirada.classList.add("card__back--flip");
  cartaVirada.parentNode.classList.add("virada");
  cartaFront.classList.remove("card__front");
  cartaFront.classList.add("card__front--flip");
  cartasViradas.push(cartaVirada);
  cartasFront.push(cartaFront);
  jogadas++;

  if(cartasViradas.length == 1) {
    console.log(cartasViradas[0].querySelector("img").getAttribute("src"));
    return;
  }
  if(cartasViradas.length == 2) {
    //DESABILITANDO AS CARTAS APÓS SEGUNDA ESCOLHA
    let body = document.querySelector("body")
    body.classList.add('block');
    //CARTAS DIFERENTES!
    if(cartasViradas[0].querySelector("img").getAttribute("src") !== cartasViradas[1].querySelector("img").getAttribute("src")) {
      //DESVIRAR APÓS 1 SEGUNDO
      setTimeout(() => { 
        cartasViradas[0].classList.add("card__back");
        cartasViradas[0].parentNode.classList.remove("virada");
        cartasViradas[0].classList.remove("card__back--flip");
        cartasViradas[1].classList.add("card__back");
        cartasViradas[1].parentNode.classList.remove("virada");
        cartasViradas[1].classList.remove("card__back--flip");
        cartasFront[0].classList.add("card__front");
        cartasFront[0].classList.remove("card__front--flip");
        cartasFront[1].classList.add("card__front");
        cartasFront[1].classList.remove("card__front--flip");
        cartasViradas = [];
        cartasFront = [];
        body.classList.remove('block');
      }, 1000); 
      return;
    }
     //CARTAS IGUAIS!!
    if(cartasViradas[0].querySelector("img").getAttribute("src") == cartasViradas[1].querySelector("img").getAttribute("src")) {
      cartasViradas[0].parentNode.setAttribute("disabled", "");
      cartasViradas[1].parentNode.setAttribute("disabled", "");
      body.classList.remove('block');
      cartasViradas = [];
      cartasFront = [];
      acertos++;

      if(acertos == fimDeJogo) {
        alert(`Parabéns, Você ganhou com ${jogadas} jogadas!`);
      }
      return;
    }
  }
}
//IMPLEMENTAR UM SOM A CADA JOGADA/ACERTO/ERRO/FIMDEJOGO.