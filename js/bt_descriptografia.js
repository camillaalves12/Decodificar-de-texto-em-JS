
   
function descr (){

  let input = document.getElementById("meu-input");
    
  let segundoInput = document.getElementById("segundo-input").value;

  let listaDescripto = []

    for(let i = 0; i < segundoInput.length; i++){

    listaDescripto.push(segundoInput[i]);
    
      //RegExp
    var descriptografia = segundoInput.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

   input.value = descriptografia;
    
  }
}