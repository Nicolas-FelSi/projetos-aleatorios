import { camposForm, validaCampos } from "./campos-form.js"
import { mensagens, tiposDeErros } from "./erros-form.js"
import { ehMaiorDeIdade, ehUmCpf, ehUmEmail, ehUmNumero } from "./valida-campos.js"

camposForm.camposDoFormulário.forEach( campo => {
    campo.addEventListener("blur", () => verificaCampo(campo))
    campo.addEventListener("invalid", (event) => event.preventDefault())
})

function verificaCampo(campo) {
    let mensagem = ""

    // validação nome
    if (campo.name == "nome") {
        if (campo.value != "") {
            validaCampos.borderColorValid(campo)
            validaCampos.colorValid(campo)
        } else {
            validaCampos.borderColorInvalid(campo)
            validaCampos.colorInvalid(campo)
        }
    }

    // validação email
    if (campo.name == "email" && campo.value != "") {
        ehUmEmail(campo)
    }

    // validação rg
    if (campo.name == "rg") {
        if (campo.value != "") {
            validaCampos.borderColorValid(campo)
            validaCampos.colorValid(campo)
        } else {
            validaCampos.borderColorInvalid(campo)
            validaCampos.colorInvalid(campo)
        }
    }

    // validação de cpf
    if (campo.name == "cpf" && campo.value.length != "") {
        ehUmCpf(campo)
    }

    // validação de numero
    if (campo.name == "celular" && campo.value.length >= 10) {
        ehUmNumero(campo)
    }

    // validação de idade
    if (campo.name == "data" && campo.value != "") {
        ehMaiorDeIdade(campo)
    }

    if (campo.name == "termos") {
        if (campo.checked) {
            validaCampos.borderColorValid(campo)
            validaCampos.colorValid(campo)
        } else {
            validaCampos.borderColorInvalid(campo)
            validaCampos.colorInvalid(campo)
        }
    }

    
    tiposDeErros.forEach( erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro]
        }
    })

    const mensagemErro = campo.parentNode.querySelector(".textError")
    const validadorDeInput = campo.checkValidity() 

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem
        validaCampos.borderColorInvalid(campo)
        validaCampos.colorInvalid(campo)
    } else {
        mensagemErro.textContent = ""
    }    
}

camposForm.buttonSubmit.addEventListener("click", () => {
    const confirmCadastro = confirm("Deseja cadastrar esses dados?")
    if (confirmCadastro) {
        alert("Seus dados foram cadastrados")
    } 
})