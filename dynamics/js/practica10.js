//Se establecen variables iniciales del juego
var aumento = 9;
var inicial = Math.round(Math.random()*aumento+1);
let ganadorJue = false;
let fallo = false;
//Se establece también un contador de la cantidad que se repite la solicitud
var conteo = 0;
//Función que establece el primer número
function simonIni(){
  alert(inicial)
}
//Función de cada número solicitado
function simonCont(){
  if((ganadorJue == false)&&(conteo < 6)&&(fallo == false))
  {
    //Ahora se aumenta el contador
    conteo++;
    numeroAnt = inicial;
    aumento = aumento * 5;
    inicial = Math.round(Math.random()*aumento + numeroAnt);
    numero = parseInt(prompt("el nuevo número es: " + inicial + ", escribe el número anterior"));
    if(numero != numeroAnt)
    {
      //Al no coincidir el número se envía a la función de perder
      perdiste();
    }
  }
  else
  {
    //Al llegar el contador a su límite envia a la función de ganar
    ganador();
  }
}
//Función al perder el juego
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
//Función al ganar el juego
function ganador()
{
  if((fallo == false)&&(ganadorJue == false))
  {
    ganadorJue = true;
    alert("Felicidades, Simón está contento :)");
  }
}
//Función que se repite para llamar a la solicitud de un número
function repetido(){
  //Se establece una promesa para la solicitud de número en caso de tener respuesta errada
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      repetido();
    }, 2000);
  });
  promesa.then(res => {
    perdiste();
  });
  simonCont();
}
//Llama a la función para el primer número
simonIni();
//Comienza el ciclo para formar la cadena
repetido();
