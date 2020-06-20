var aumento = 9;
var inicial = Math.round(Math.random()*aumento+1);
let ganadorJue = false;
function simonIni(){
  alert(inicial)
}
function simonCont(){
  if(ganadorJue == false)
  {
    numeroAnt = inicial;
    aumento = aumento * 5;
    inicial = Math.round(Math.random()*aumento + numeroAnt);
    numero = parseInt(prompt("el nuevo número es: " + inicial + ", escribe el número anterior"));
    if(numero != numeroAnt)
    {
      perdiste();
    }
  }
}
function perdiste(){
  aumento = 9;
  inicial = 0;
  alert("Simón está triste, te has equivocado :(");
  window.location.reload();
}
function ganador(){
  ganadorJue = true;
  alert("Felicidades, Simón está contento :)");
}

function juegoInterno(){
  simonIni();
  setTimeout(()=>{
    simonCont();
    setTimeout(()=>{
      simonCont();
      setTimeout(()=>{
        simonCont();
        setTimeout(()=>{
          simonCont();
          setTimeout(()=>{
            simonCont();
            setTimeout(()=>{
              simonCont();
              ganador();
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 100);
}
juegoInterno();
