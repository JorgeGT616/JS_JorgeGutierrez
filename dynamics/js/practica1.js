//Introducción de valores mediante prompt
var gama = parseInt(prompt("El piso de Gama"));
var elevA = parseInt(prompt("El piso del primer elevador"));
var elevB = parseInt(prompt("El piso del segundo elevador"));

if((isNaN(gama))||(isNaN(elevA))||(isNaN(elevB)))
{
  console.log("Alguno de los datos introducidos no es un número, intente de nuevo")
}

//Encuentra la diferencia entre Gama y el elevador A como valor absoluto
var difA = Math.abs(gama - elevA);

//Encuentra la diferencia entre Gama y el elevador B como valor absoluto
var difB = Math.abs(gama - elevB);

//Si la diferencia A es mayor a la diferencia B, recomienda a Gama ir al elevadorb B
if(difA > difB)
{
  if(difB != gama)
  {
    console.log("Es más conveniente para Gama tomar el elevador B");
  }
  else
  {
    console.log("Es más conveniente para Gama tomar el elevador B pues está en el mismo piso");
  }
  console.log("Gama está en el piso " + gama);
  console.log("El elevador A está en el piso " + elevA);
  console.log("El elevador B está en el piso " + elevB);
}
else if(difB > difA)//Si la diferencia A es mayor a la diferencia B, recomienda a Gama ir al edificio B
{
  if(difA != gama)
  {
    console.log("Es más conveniente para Gama tomar el elevador A");
  }
  else
  {
    console.log("Es más conveniente para Gama tomar el elevador A pues está en el mismo piso");
  }
  console.log("Gama está en el piso " + gama);
  console.log("El elevador A está en el piso " + elevA);
  console.log("El elevador B está en el piso " + elevB);
}
else if(difA == difB)//Si la diferencia A es igual a la diferencia B, recomienda a Gama tomar cualquiera
{
  if(elevA != elevB)
  {
    //Si los elevadores están en diferente lugar, lo manda a cualquiera
    console.log("Gama puede tomar cualquiera de los elevadores pues están a la misma distancia");
    console.log("Gama está en el piso " + gama);
    console.log("El elevador A está en el piso " + elevA);
    console.log("El elevador B está en el piso " + elevB);
  }
  else if(elevA == elevB)
  {
    //Si los elevadores están en diferente lugar, lo manda a cualquiera
    console.log("Gama puede tomar cualquiera de los elevadores pues están a la misma distancia y en el mismo piso");
    console.log("Gama está en el piso " + gama);
    console.log("El elevador A está en el piso " + elevA);
    console.log("El elevador B está en el piso " + elevB);
  }
  else if((elevA == gama)&&(elevB == gama))
  {
    //Le avisa a Gama que está al nivel de los dos elevadores
    console.log("Gama está al mismo nivel que los dos elevadores");
    console.log("Gama está en el piso " + gama);
    console.log("El elevador A está en el piso " + elevA);
    console.log("El elevador B está en el piso " + elevB);
  }
}
