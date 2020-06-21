var aumento = 9;
var inicial = Math.round(Math.random()*aumento+1);
let ganadorJue = false;
let fallo = false;
var conteo = 0;
function simonIni(){
  alert(inicial)
}
function simonCont(){
  if((ganadorJue == false)&&(conteo < 6)&&(fallo == false))
  {
    conteo++;
    numeroAnt = inicial;
    aumento = aumento * 5;
    inicial = Math.round(Math.random()*aumento + numeroAnt);
    numero = parseInt(prompt("el nuevo número es: " + inicial + ", escribe el número anterior"));
    if(numero != numeroAnt)
    {
      perdiste();
    }
  }
  else
  {
    ganador();
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

/*let x = Math.round(Math.random()*20);
let y = x; */

/*const p = new Promise((resolve, reject) => {
  if(x >= 10){
    resolve("la variable es mayor o igual a 10");
  }
  else
  {
    reject("la variable es menor 10")
  }
});

console.log(x);
p
.then(res => {
  console.log("succes: " + res);
})
.catch(error => {
  console.log("error: " + error);
})*/
function repetido(){
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      repetido();
    }, 2000);
  });
  repetido;
  promesa.then(res => {
    perdiste();
  });
  simonCont();
}
simonIni();
repetido();

// let usuarios = [{
//   id: 1,
//   nombre: "Marcos"
// },
// {
//   id: 2,
//   nombre: "Lena"
// }]
// let telefonos = [{
//   id: 1,
//   telefono: 12345678
// },
// {
//   id: 2,
//   telefono: 87654321
// }];
//
// const obtenerUsuario = id => {
//   return new Promise((resolve, reject) => {
//     if(usuarios.find(usuario => usuario.id === id)){
//       resolve("El usuario existe");
//     }
//     else{
//       reject("El usuario no existe");
//     }
//   });
// }
// const obtenerTelefono = id => {
//   return new Promise((resolve, reject) => {
//     if(telefonos.find(telefono => telefono.id === id)){
//       resolve("El telefono existe");
//     }
//     else
//     {
//       reject("El telefono no existe");
//     }
//   });
// };
//
// obtenerUsuario(3)
// .then(res => {
//   console.log(res);
// })
// .catch(error => {
//   console.error(error);
// })
