//validação login
window.addEventListener('load', function() {
    const formularioLogin = document.getElementById("formulario-login");
    let inputEmailLogin = document.getElementById('email');
    let inputSenhaLogin = document.getElementById('senha');

    formularioLogin.addEventListener('submit', function(event){
        let mensagemErroForm = []
        event.preventDefault();
        console.log("chegou em submit")
       try {
        if (inputEmailLogin.value === "") {
            mensagemErroForm.push("o campo email não pode estar vazio")
        }
        if (inputSenhaLogin.value === "") {
            mensagemErroForm.push("o campo senha não pode estar vazio")
        }

        if (mensagemErroForm.length == 0) {
            formularioLogin.submit()
        }
       } catch (error) {
        console.log(error)
       }
        let listaDeErros = document.querySelector("div.erro-form ul");
        for (let i = 0; i < mensagemErroForm.length; i++ ) {
            listaDeErros.innerHTML += "<li>"+mensagemErroForm[i]+"</li>";
        }
    
    })
})