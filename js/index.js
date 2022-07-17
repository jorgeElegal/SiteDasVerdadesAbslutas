var i,  btn, clickou
 i =0;
 btn = document.querySelector('button');
  


btn.onclick = function() {

i++;

if (i===1) {
  console.log(i)
}

if (i<=2) {
  alert("por favor, pare de clicar no butão")
  
}

if (i===3) {
  alert("PARE DE CLICKAR NO BUTÃO")
  

}
if (i===4) {
 var rndCol = 'rgb(255, 255, 255)';

}
btn.style.color = rndCol;
btn.style.backgroundColor = rndCol;


}