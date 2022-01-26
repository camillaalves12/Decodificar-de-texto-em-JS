

    function copiarTexto() {

        let resultado = document.getElementById("segundo-input")

        navigator.clipboard.writeText(resultado.value)
        
    }
