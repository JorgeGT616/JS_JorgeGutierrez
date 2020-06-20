//Numero a evaluar
let numEva = null;
//While que se asegura que el número introducido sea 1
while((numEva == null)||(numEva<=1))
{
  numEva = parseInt(prompt("Escribe un número mayor a 1"));
}
if(isNaN(numEva))
{
  numEva = 1;
}
//Esta variable se va decrementando
let numBaj = numEva;
//Esta variable se utiliza para ser establecida varias veces mientras decrementa y
let segunEva = 0;
//Discriminará un número cuando no es primo
let unPrimo = false;
//Establece el número del indice para posicionar en el arreglo
let numArr = 0;
//Establece el arreglo general por primer vez
var divPrimos = [0];
//Mientras no se llegue al número 1, se evalúan todos los números inferiores al principal
while(numBaj > 1)
{
  //Se establece un nuevo punto de partida para ir conociendo los divisores
  segunEva = numBaj - 1;
  //Este número se va decrementando para evaluar si es no primo
  while(segunEva > 1)
  {
    if(((numBaj%segunEva) === 0)&&(unPrimo == false))
    {
      //Al identificar un número No primo, convierte la variable en verdadera
      unPrimo = true;
    }
    segunEva--;
  }
  //Al tener el número No primo, establece de nuevo la variable para repetir el proceso con otros números menores
  if(unPrimo == true)
  {
    unPrimo = false;
  }
  else
  {
    //De lo contrario, evalúa si el número primo obtenido es divisor del número principal
    if((numEva%numBaj) == 0)
    {
      //Va colocando ese número en el arreglo usando como indice numArr que se va incrementando
      divPrimos[numArr] = parseInt(numBaj);
      numArr = numArr + 1;
    }
  }
  numBaj--;
}
//Se imprimen los numeros
console.log("Número seleccionado = " + numEva);
console.log(divPrimos.sort());
