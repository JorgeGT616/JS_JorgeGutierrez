let numFilas = null;
let numColumnas = null;
//Recibe la cantidad de filas y columnas necesaria
while((numFilas == null)||(numColumnas == null))
{
  numFilas = Math.abs(parseInt(prompt("Coloque el número de filas")));
  numColumnas = Math.abs(parseInt(prompt("Coloque el número de columnas")));
}
//Se comprueba que las medidas sean números
if(isNaN(numFilas))
{
  numFilas = 1;
}
if(isNaN(numColumnas))
{
  numColumnas = 1;
}
console.log(numFilas + "," + numColumnas);
//Obtiene el total de casillas
let nums = (numFilas)*(numColumnas);
//Contadores que ayudan a llevar un control de la cantidad de filas, columnas, casilas
let increm = 0;
let contFila = 0;
let antiMal = 1;
//Variables para formar la cadena que permite darle valor de columnas al Grid
let autos = " ";
let paraCads = 0;

//Esta estructura formará una cadena que ayuda en la elaboración de Grid con el tamaño de las columnas
while (paraCads < numColumnas )
{
  autos = autos + "30px ";
  paraCads = paraCads + 1;
}
//Mediante DOM se genera un contenedor donde se colocarán las casillas
var conten = document.createElement("div");
conten.setAttribute("style","display: grid; grid-template-columns:" + autos)
conten.classList.add("tamano");
let body = document.getElementsByTagName("body");
body[0].appendChild(conten);
//Esta estructura de inicio va a ir colocando las casillas totales
while(increm < nums)
{
  var casilla = document.createElement("div");
  //Al poner cada casilla, verifica que el número de filas sea par o impar pues estp complica el color asignado
  if((numColumnas%2)==0)
  {
    //De ser par, primero verifica si la fila es par o impar para turnar los colores de una forma
    if(((increm%2)!=0)&&((antiMal%2)!=0))
    {
      casilla.setAttribute("style","background-color: #FFFFFF; width: 30px; height: 30px; border: 1px solid black;");
    }
    else if (((increm%2)==0)&&((antiMal%2)!=0))
    {
      casilla.setAttribute("style","background-color: #000000; width: 30px; height: 30px; border: 1px solid black;");
    }
    //Al detectar que es una columna par, entonces las colorea de la forma inversa a las dos anteriores creando el efecto ajedrez.
    else if(((increm%2)!=0)&&((antiMal%2)==0))
    {
      casilla.setAttribute("style","background-color: #000000; width: 30px; height: 30px; border: 1px solid black;");
    }
    else if (((increm%2)==0)&&((antiMal%2)==0))
    {
      casilla.setAttribute("style","background-color: #FFFFFF; width: 30px; height: 30px; border: 1px solid black;");
    }
  }
  //Al no ser par, la cantidad de variantes se reduce
  else
  {
    //Únicamente verifica si el número de la casilla es par o impar
    if((increm%2)!=0)
    {
      casilla.setAttribute("style","background-color: #000000; width: 30px; height: 30px; border: 1px solid black;");
    }
    else
    {
      casilla.setAttribute("style","background-color: #FFFFFF; width: 30px; height: 30px; border: 1px solid black;");
    }
  }
  //Mediante DOM va colocando la casilla en turno
  let div = document.getElementsByTagName("div");
  div[0].prepend(casilla);
  increm = increm + 1;
  //Esta estructura ayuda a saber si la fila de turno es par o impar mediante un contador
  if(contFila < (numColumnas-1))
  {
    contFila = contFila + 1;
  }
  else
  {
    contFila = 0;
    antiMal = antiMal + 1;
  }
}
