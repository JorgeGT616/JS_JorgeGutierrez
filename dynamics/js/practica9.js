var aumento = 9;
var inicial = Math.round(Math.random()*aumento+1);
let ganadorJue = false;
let fallo = false;
function simonIni(){
  alert(inicial)
}
function simonCont(){
  if((ganadorJue == false)&&(fallo == false))
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
function perdiste()
{
  if((fallo == false)&&(ganadorJue == false))
  {
    aumento = 9;
    inicial = 0;
    fallo = true;
    alert("Simón está triste, te has equivocado :(");
    window.location.reload();
  }
}
function ganador()
{
  if((fallo == false)&&(ganadorJue == false))
  {
    ganadorJue = true;
    alert("Felicidades, Simón está contento :)");
  }
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
