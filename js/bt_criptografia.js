

function crip() {

    let input = document.getElementById("meu-input").value;

    let segundoInput = document.getElementById("segundo-input");

    let criptografia = "";

    input.split("").forEach((letra) => {
      switch (letra) {
        case "a":
          criptografia = criptografia + "ai";
          break;
        case "e":
          criptografia = criptografia + "enter";
          break;
        case "i":
          criptografia = criptografia + "imes";
          break;
        case "o":
          criptografia = criptografia + "ober";
          break;
        case "u":
          criptografia = criptografia + "ufat";
          break;
  
        default:
            criptografia = criptografia + letra
          break;
      }
    });
  
    segundoInput.value = criptografia;
 
  }  





