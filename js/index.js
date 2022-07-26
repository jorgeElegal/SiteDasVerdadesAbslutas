
const listadeb = [ 
  'uma linha é o conjunto de pontos',
  '',
  'kkk', 
  'fccccc',
  'zdf dr', 
  'evrtbvet',
  'sevrttqe',
  'taertvbaet',
  'bevt54yb',
  '54tvsert',
  'ertrgadf'
];




a=0;
var i = 0

const h1texto = document.querySelector('h1');

const btn = document.querySelector("button"); 


//embaralha as frases


function embaralhar (){

  let randomNumber;
  let tmp;
  
for (i = listadeb.length; i;) {
    randomNumber = Math.random() * i-- | 0;
    tmp = listadeb[randomNumber];
    // troca o número aleatório pelo atual
    listadeb[randomNumber] = listadeb[i];
    // troca o atual pelo aleatório
    listadeb[i] = tmp;
}

}

//chama a frase
function oi() {
  a++
  h1texto.innerHTML= listadeb[a];

if (a = 10 ) {
  console.log("oi")
 }
}

btn.addEventListener("click", oi );

var e =0;

