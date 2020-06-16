
//Se establece un arreglo, las medidas deben ser las mismas de alto y ancho
var caracol = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];
//Se identifica la longitud del arreglo para tener variables con sus medidas
for (var cont1 in caracol)
{
  var medidor1 = (caracol[cont1].length) - 1;
  var medidor2 = cont1;
}
//Multiplicación de la altura por la anchura del arreglo (Cantidad de arreglos y los elementos que tienen)
var multiplic = (medidor1+1)*(medidor2-(-1));
//Establecida variable para aumentar respecto a la cantidad de elementos, que coincide con la cantidad de elementos del arreglo
var objetivo = 0;
//Se establecen variables para acceder a los índices y para limitar el progreso de la revisión del arreglo
var aumen1 = 0;
var aumen2 = 0;
var lim1 = 0;
var lim2 = 0;
//Se establecen tres variables que van a ayudar a ir formando la serie con los valores iniciales de 0 y 1
var varFibA = 0;
var varFibB = 1;
var varFibC = 0;
//Se establece el primer elemento del arreglo
caracol[aumen2][aumen1] = varFibA;
aumen1 = aumen1 + 1;
objetivo = objetivo + 1;
//Se establece el segundo elemento del arreglo
caracol[aumen2][aumen1] = varFibB;
aumen1 = aumen1 + 1;
objetivo = objetivo + 1;
//While que va a permitir recorrer el arreglo
while(objetivo <= multiplic)
{
  //Esto solo ocurre si aún no se llega a la meta de la cantidad de elementos
  if(objetivo <= multiplic)
  {
    //Recorre una fila del arreglo, aumentando el contador de objetos y cambiando rotando los números por lo anteriores
    while(aumen1 < medidor1)
    {
      varFibC = varFibA + varFibB;
      caracol[aumen2][aumen1] = varFibC;
      varFibA = varFibB;
      varFibB = varFibC;
      aumen1 = aumen1 + 1;
    }
    objetivo = objetivo + 1;
  }
  //Las variables de medidor se van reduciendo para formar el efecto de caracol limitando el recorrido
  medidor2 = medidor2 - 1;
  if(objetivo <= multiplic)
  {
    //Recorre una columna hacia abajo el arreglo
    while(aumen2 < medidor1)
    {
      varFibC = varFibA + varFibB;
      caracol[aumen2][aumen1] = varFibC;
      varFibA = varFibB;
      varFibB = varFibC;
      aumen2 = aumen2 + 1;
    }
    objetivo = objetivo + 1;
  }
  //Aumenta el límite que estaba en cero para evitar que se recorra de nuevo y forme el caracol
  lim2 = lim2 + 1;
  if(objetivo <= multiplic)
  {
    //Recorre una fila del arreglo en reversa
    while(aumen1 > lim1)
    {
      varFibC = varFibA + varFibB;
      caracol[aumen2][aumen1] = varFibC;
      varFibA = varFibB;
      varFibB = varFibC;
      aumen1 = aumen1 - 1;
    }
    objetivo = objetivo + 1;
  }
  //Aumenta el límite de la variable para formar el efecto de caracol
  medidor1 = medidor1 - 1;
  if(objetivo <= multiplic)
  {
    //Recore el arreglo hacia arriba
    while(aumen2 > lim2)
    {
      varFibC = varFibA + varFibB;
      caracol[aumen2][aumen1] = varFibC;
      varFibA = varFibB;
      varFibB = varFibC;
      aumen2 = aumen2 - 1;
    }
    objetivo = objetivo + 1;
  }
  //Vuelve a aumentar el límite para que no se vuelva a recorrer
  lim1 = lim1 + 1;
}
//Imprime el último elemento del arreglo que hace falta.
varFibC = varFibA + varFibB;
caracol[aumen2][aumen1] = varFibC;
//Se establecen las variables para poder recorrer el arreglo pero ahora en orden
let tamano1 = parseInt(caracol.length);
let imprimo = 0;
//Se recorre cada índice del arreglo
while(imprimo < tamano1)
{
  //Se imprime cada serie de números de cada índice separados por coma, donde se puede comprobar el caracol
  console.log("índ " + imprimo + ": " + caracol[imprimo].toString());
  imprimo = imprimo + 1;
}
