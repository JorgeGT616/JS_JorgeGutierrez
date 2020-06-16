var elemento = document.createElement("div");
//elemento.classList.add("claseA");
elemento.setAttribute("id","contenedorGen");
let body = document.getElementsByTagName("body");
body[0].appendChild(elemento);

var elemento1 = document.createElement("h1");
elemento1.classList.add("txtazul");
elemento1.innerHTML = "Soy el más grande...";

var elemento2 = document.createElement("div");
elemento2.classList.add("txtnegro");
elemento2.innerHTML = "<br><h2>Curso Web 2020</h2>";

var elemento3 = document.createElement("div");
elemento3.classList.add("txtazul");
elemento3.innerHTML = "<br><h2><i>Mediano<i></h2>";

var elemento4 = document.createElement("div");
elemento4.classList.add("clase4");
elemento4.innerHTML = "<br><h3>Jelou</h3>";

var elemento5 = document.createElement("div");
elemento5.classList.add("txtnegro");
elemento5.innerHTML = "<br><h3>Estoy medio chiquito :(</h3>";

let div = document.getElementsByTagName("div");
div[0].prepend(elemento1,elemento2,elemento3,elemento4,elemento5)
