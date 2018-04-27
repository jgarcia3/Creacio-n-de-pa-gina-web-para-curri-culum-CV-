/*document.getElementById("clase").addEventListener("click");
document.getElementById("trabajo").addEventListener("click");
document.getElementById("calle").addEventListener("click");
document.getElementById("otros").addEventListener("click");*/

function habilitar() {
  document.getElementById("otro").style.visibility = "visible";
}

function deshabilitar() {
  document.getElementById("otro").style.visibility = "hidden";
}



function wordCount() {
  textoArea = document.getElementById("peticiones").value;
  numeroCaracteres = textoArea.length;
  inicioBlanco = /^/;
  finBlanco = / $/;
  variosBlancos = /[ ]+/g;
  textoArea = textoArea.replace(inicioBlanco, "");
  textoArea = textoArea.replace(finBlanco, "");
  textoArea = textoArea.replace(variosBlancos, " ").trim();
  textoAreaDividido = textoArea.split(" ");
  numeroPalabras = textoAreaDividido.length;

  if (numeroPalabras >= 151)
    document.getElementById("peticiones").style.color = "red";
  if (numeroPalabras < 151)
    document.getElementById("peticiones").style.color = "black";

  document.getElementById("palabras").innerHTML =
    "Llevas " + numeroPalabras + " palabras escritas"

}

