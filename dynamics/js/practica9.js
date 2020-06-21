//Variable que se encarga de complicar los números aleatorios
var aumento = 9;
//Establece el primer número aleatorio que se encuentra delimitado por la variable anterior
var inicial = Math.round(Math.random()*aumento+1);
//Variables que identifican si el juego fue ganado o perdido
let ganadorJue = false;
let fallo = false;
//Función que muestra el primer número de la serie
function simonIni()
{
  alert(inicial)
}
//Función que se repite para cada ocasión que se solicite y ponga un numero
function simonCont()
{
  //Comprueba que el juego no esté perdido o ganado
  if((ganadorJue == false)&&(fallo == false))
  {
    //Se recupera el número anterior, se aumenta el límite de los números aleatorios y se establece un nuevo número a la serie
    numeroAnt = inicial;
    aumento = aumento * 5;
    inicial = Math.round(Math.random()*aumento + numeroAnt);
    //Pone en pantalla el nuevo número y solicita el anterior
    numero = parseInt(prompt("el nuevo número es: " + inicial + ", escribe el número anterior"));
    //En caso de ponerse un número erróneo, se envía a la función dedicada a ello
    if(numero != numeroAnt)
    {
      perdiste();
    }
  }
}
//Función que expresa la derrota
function perdiste()
{
  //Asegura que el juego no se haya perdido o ganado
  if((fallo == false)&&(ganadorJue == false))
  {
    //Reestablece los valores iniciales y marca que se ha perdido el juego
    aumento = 9;
    inicial = 0;
    fallo = true;
    alert("Simón está triste, te has equivocado :(");
    //Se reinicia la ventana para volver a empezar
    window.location.reload();
  }
}
//Función al ganar el juego
function ganador()
{
  //Se asegura que el juego no esté ganado o perdido
  if((fallo == false)&&(ganadorJue == false))
  {
    //Se marca el juego como ganado y se envía mensaje
    ganadorJue = true;
    alert("Felicidades, Simón está contento :)");
  }
}
//Se establece una serie de repeticiones de la función para formar la serie de números
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
