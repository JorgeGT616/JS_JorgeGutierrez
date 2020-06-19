//Se obtiene la cadena mediante Prompt
var cadena = prompt("Escribe lo que sabes...");
//Se establecen las regex que ayudarán a identificar los elementos de la cadena
var equisdeId = new RegExp('[Ee][Qq][Uu][Ii][Ss][Dd][Ee]','g');
var scriptId = new RegExp('<script>.*<\/script>|<script><\/script>','g');
//Las coincidencias encontradas se guardan en arreglos
var arregloEquisde = cadena.match(equisdeId);
var arregloScript = cadena.match(scriptId);
//En caso de no encontrar coincidencias, se dejan los arreglos como cadenas vacías
if(arregloScript == null)
{
  arregloScript = "";
}
if(arregloEquisde == null)
{
  arregloEquisde = "";
}
//Se identifica que exista la etiqueta script
if((arregloScript.length) >= 1)
{
  //Se identifica si se cumple con la cantidad de "Equisde"
  if((arregloEquisde.length) >= 5)
  {
    //De cumplirse las dos condiciones, se identifica como el hacker
    alert("Oso oso mentiroso, vete lejos antes de que te lance mis calcetines olor a queso.");
  }
  else
  {
    //De cumplirse la etiqueta script pero no cumplirse la cantidad de equisde, se identifica como aliado
    alert("¿Bob?\n¿Wade?.");
  }
}
else
{
  if((arregloEquisde.length) >= 5)
  {
    //De no cumplirse la etiqueta script pero sí la cantidad de equisde se identifica como aliado
    alert("¿Bob?\n¿Wade?.");
  }
  else
  {
    alert("No sé quién eres, perdón por la interrupción");
    //Aquí no hay nadie ajajaj
  }
}
