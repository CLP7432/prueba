const encriptar = () => {
 
  let texto = document.querySelector(".texto-entrada").value.toLowerCase();
  
    let cifrado = "";
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === "a") {
        cifrado += "ai";
      } else if (texto[i] === "e") {
        cifrado += "enter";
      } else if (texto[i] === "i") {
        cifrado += "imes";
      } else if (texto[i] === "o") {
        cifrado += "ober";
      } else if (texto[i] === "u") {
        cifrado += "ufat";
      } else {
        cifrado += texto[i];
      }
    }
    
      document.querySelector(".textarea").value = cifrado;
      document.querySelector(".texto-entrada").value = "";
      document.querySelector(".titulo-der").style.display = "none";
      document.querySelector(".boton3").style.display = "inline";      
};

const desencriptar = () => {
  // let texto = document.querySelector(".textarea").value;
  let textoEntrada = document.querySelector(".texto-entrada").value;

  let desifrado = textoEntrada.replace(/ai/g, "a");
  desifrado = desifrado.replace(/enter/g, "e");
  desifrado = desifrado.replace(/imes/g, "i");
  desifrado = desifrado.replace(/ober/g, "o");
  desifrado = desifrado.replace(/ufat/g, "u");

  document.querySelector(".textarea").value = desifrado;
  document.querySelector(".texto-entrada").value = "";
};

const copiar = () => {
  let textoCopiado = document.querySelector(".textarea").value;
  navigator.clipboard.writeText(textoCopiado);

  document.querySelector(".textarea").value = "";
};

const boton1 = document.querySelector(".boton1")
const boton2 = document.querySelector(".boton2")
const boton3 = document.querySelector(".boton3")

boton1.addEventListener("click", encriptar)
boton2.addEventListener("click", desencriptar)
boton3.addEventListener("click", copiar)
