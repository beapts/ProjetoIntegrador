//validação cadastro
window.addEventListener('load', function() {
    const formularioCadastro = document.getElementById("formulario-cadastro");
    let inputNome = document.getElementById('nome-cadastro');
    let inputEmail = document.getElementById('email-cadastro');
    let inputSenha = document.getElementById('senha-cadastro');
    let inputConfirmacaoSenha = document.getElementById('confirmacao-senha-cadastro');

    formularioCadastro.addEventListener('submit', function(event){
        let mensagemErroForm = []
        if (inputNome.value === "") {
            mensagemErroForm.push("o campo nome não pode estar vazio")
        } else if (inputNome.value.length < 3) {
            mensagemErroForm.push("o nome tem que ter pelo menos 3 letras")
        }
        if (inputEmail.value === "") {
            mensagemErroForm.push("o campo email não pode estar vazio")
        }
        if (inputSenha.value === "") {
            mensagemErroForm.push("o campo senha não pode estar vazio")
        }
        if (inputConfirmacaoSenha.value === "") {
            mensagemErroForm.push("o campo confirmação de senha não pode estar vazio")
        }
        if (mensagemErroForm.length > 0) {
            event.preventDefault();
        }
        let listaDeErros = document.querySelector("div.erro-form ul");
        for (let i = 0; i < mensagemErroForm.length; i++ ) {
            listaDeErros.innerHTML += "<li>"+mensagemErroForm[i]+"</li>";
        }
    
    })
})
