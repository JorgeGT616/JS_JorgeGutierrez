//Función que descompone la cadena de las cookies
function obtenerCookie(clave)
{
  var name = clave + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++)
  {
    var c = ca[i];
    while (c.charAt(0) == ' ')
    {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
    {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//Se establecen las torres como cadenas
let preTorre1 = obtenerCookie("cookie1");
if(preTorre1 === "")
{
  var torre1 = "0,1,2,3,4,5";
}
else
{
  var torre1 = preTorre1;
}
let preTorre2 = obtenerCookie("cookie2");
if(preTorre2 === "")
{
  var torre2 = "";
}
else
{
  var torre2 = preTorre2;
}
let preTorre3 = obtenerCookie("cookie3");
if(preTorre3 === "")
{
  var torre3 = "";
}
else
{
  var torre3 = preTorre3;
}
//Se convierten las cadenas de las torres en arreglos
torre1 = torre1.split(",",10);
torre2 = torre2.split(",",10);
torre3 = torre3.split(",",10);

let recorro = 0;
//Convierte cada elemento de la cadena en entero
while(recorro < 6)
{
  if(torre1[recorro])
  {
    torre1[recorro] = parseInt(torre1[recorro])
  }
  recorro++;
}
recorro = 0;
while(recorro < 6)
{
  if(torre2[recorro])
  {
    torre2[recorro] = parseInt(torre2[recorro])
  }
  recorro++;
}
recorro = 0;
while(recorro < 6)
{
  if(torre3[recorro])
  {
    torre3[recorro] = parseInt(torre3[recorro])
  }
  recorro++;
}


let pieza = 0;
//Toma el primer valor
let cambio1 = parseInt(prompt("Torre de partida"));
if((isNaN(cambio1) == true)||(cambio1 > 3)||(cambio1 < 1))
{
  cambio = 1;
}

if(cambio1 == 1)
{
  pieza = parseInt(torre1.pop());
  console.log(torre1);
}
else if(cambio1 == 2)
{
  pieza = parseInt(torre2.pop());
  console.log(torre2);
}
else if(cambio1 == 3)
{
  pieza = parseInt(torre3.pop());
  console.log(torre3);
}
//Toma el segundo valor
let cambio2 = parseInt(prompt("Torre de llegada"));
if((isNaN(cambio2) == true)||(cambio2 > 3)||(cambio2 < 1))
{
  cambio2 = 1;
}
//Se realiza la transicion de piezas
if((isNaN(pieza)) == false)
{
  if(cambio2 == 1)
  {
    torre1.push(pieza);
    console.log(torre1);
  }
  else if(cambio2 == 2)
  {
    torre2.push(pieza);
    console.log(torre2);
  }
  else if(cambio2 == 3)
  {
    torre3.push(pieza);
    console.log(torre3);
  }
}
//Se guardan los arreglos como cadenas
guard1 = torre1.join(",");
guard2 = torre2.join(",");
guard3 = torre3.join(",");
console.log(guard1);
console.log(guard2);
console.log(guard3);

//Se dibujan las torres
//torre1
var recorr = 0;
while(recorr <= 5)
{
  if(torre1[recorr] == 1)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #FF0000; border: 2px solid black; height: 10px; width: 20px");
    var conten1 = document.getElementById("barra1");
    conten1.prepend(objCol);
  }
  else if(torre1[recorr] == 2)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #00FF00; border: 2px solid black; height: 10px; width: 40px");
    var conten1 = document.getElementById("barra1");
    conten1.prepend(objCol);
  }
  else if(torre1[recorr] == 3)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #0000FF; border: 2px solid black; height: 10px; width: 60px");
    var conten1 = document.getElementById("barra1");
    conten1.prepend(objCol);
  }
  else if(torre1[recorr] == 4)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #FFFF00; border: 2px solid black; height: 10px; width: 80px");
    var conten1 = document.getElementById("barra1");
    conten1.prepend(objCol);
  }
  else if(torre1[recorr] == 5)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #00FFFF; border: 2px solid black; height: 10px; width: 100px");
    var conten1 = document.getElementById("barra1");
    conten1.prepend(objCol);
  }
  recorr++;
}
recorr = 0;
//Torre 2
while(recorr <= 5)
{
  if(torre2[recorr] == 1)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #FF0000; border: 2px solid black; height: 10px; width: 20px");
    var conten1 = document.getElementById("barra2");
    conten1.prepend(objCol);
  }
  else if(torre2[recorr] == 2)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #00FF00; border: 2px solid black; height: 10px; width: 40px");
    var conten1 = document.getElementById("barra2");
    conten1.prepend(objCol);
  }
  else if(torre2[recorr] == 3)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #0000FF; border: 2px solid black; height: 10px; width: 60px");
    var conten1 = document.getElementById("barra2");
    conten1.prepend(objCol);
  }
  else if(torre2[recorr] == 4)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #FFFF00; border: 2px solid black; height: 10px; width: 80px");
    var conten1 = document.getElementById("barra2");
    conten1.prepend(objCol);
  }
  else if(torre2[recorr] == 5)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #00FFFF; border: 2px solid black; height: 10px; width: 100px");
    var conten1 = document.getElementById("barra2");
    conten1.prepend(objCol);
  }
  recorr++;
}
recorr = 0;
//Torre 3
while(recorr <= 5)
{
  if(torre3[recorr] == 1)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #FF0000; border: 2px solid black; height: 10px; width: 20px");
    var conten1 = document.getElementById("barra3");
    conten1.prepend(objCol);
  }
  else if(torre3[recorr] == 2)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #00FF00; border: 2px solid black; height: 10px; width: 40px");
    var conten1 = document.getElementById("barra3");
    conten1.prepend(objCol);
  }
  else if(torre3[recorr] == 3)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #0000FF; border: 2px solid black; height: 10px; width: 60px");
    var conten1 = document.getElementById("barra3");
    conten1.prepend(objCol);
  }
  else if(torre3[recorr] == 4)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #FFFF00; border: 2px solid black; height: 10px; width: 80px");
    var conten1 = document.getElementById("barra3");
    conten1.prepend(objCol);
  }
  else if(torre3[recorr] == 5)
  {
    var objCol = document.createElement("div");
    objCol.setAttribute("style","background-color: #00FFFF; border: 2px solid black; height: 10px; width: 100px");
    var conten1 = document.getElementById("barra3");
    conten1.prepend(objCol);
  }
  recorr++;
}
recorr = 0;

var c = new Date();

c.setTime(c.getTime()+1000*60*50);
//Se guardan las cadenas de torres como cookies
document.cookie = "cookie1 =" + guard1 + " ;expires=" + c.toGMTString();
document.cookie = "cookie2 =" + guard2 + " ;expires=" + c.toGMTString();
document.cookie = "cookie3 =" + guard3 + " ;expires=" + c.toGMTString();
//Se confirma si el juego se ganó o no ha terminado
if(guard3 === ",1,2,3,4,5")
{
  alert("Bien hecho")
}
else
{
  setTimeout(()=>{
    window.location.reload();
  }, 3000);
}
