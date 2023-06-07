import { validaCampos } from "./campos-form.js";

function ehUmCpf(cpf) {
    const cpfReplace = cpf.value.replace(/\.|-| /g, "")
    if (cpfReplace.length == 11) {
        const regexCpf = /^(?:\d{3}\d{3}\d{3}\d{2})$/g
        const cpfTest = regexCpf.test(cpfReplace)
        const numeroRepetido = validaCampos.validaNumerosRepetidos(cpfReplace);
        if (!cpfTest || numeroRepetido) {
            cpf.setCustomValidity("CPF inválido")   
            validaCampos.borderColorInvalid(cpf)
            validaCampos.colorInvalid(cpf) 
            return false 
        } else {
            cpf.setCustomValidity("")
            validaCampos.borderColorValid(cpf)
            validaCampos.colorValid(cpf) 
            return true
        }
    } else {
        cpf.setCustomValidity("CPF inválido")   
        validaCampos.borderColorInvalid(cpf)
        validaCampos.colorInvalid(cpf)  
        return false
    }
}

function ehMaiorDeIdade(data) {
    const dataDeNascimento = new Date(data.value)
    if (!validaCampos.validaIdades(dataDeNascimento)) {
        data.setCustomValidity("O usuário não é maior de idade.")
        validaCampos.borderColorInvalid(data)
        validaCampos.colorInvalid(data)  
        return false
    } else {
        data.setCustomValidity("")
        validaCampos.borderColorValid(data)
        validaCampos.colorValid(data) 
        return true
    }
}

function ehUmNumero(numero) {
    const numeroReplace = numero.value.replace(/\.|-|\(|\)| /g, "")
    if (numeroReplace.length >= 10 && numeroReplace.length <= 11) {
        const regexCell = /^(?:\d{2}\d{1}\d{4}\d{4})/g
        const cellTest = regexCell.test(numeroReplace)
        if (cellTest) {
            numero.setCustomValidity("")
            validaCampos.borderColorValid(numero)
            validaCampos.colorValid(numero) 
            return true
        } else {
            numero.setCustomValidity("Número inválido")
            validaCampos.borderColorInvalid(numero)
            validaCampos.colorInvalid(numero) 
            return false 
        }
    } else {
        numero.setCustomValidity("Número inválido")   
        validaCampos.borderColorInvalid(numero)
        validaCampos.colorInvalid(numero)  
        return false
    }
}

function ehUmEmail(email) { 
    const regexEmail = /^[\w.-]+@[\w-]+\.[\w.-]+/gi
    const emailTest = regexEmail.test(email.value)
    if (emailTest) {
        email.setCustomValidity("")
        validaCampos.borderColorValid(email)
        validaCampos.colorValid(email) 
        return true
    } else {
        email.setCustomValidity("Email inválido.")
        validaCampos.borderColorInvalid(email)
        validaCampos.colorInvalid(email) 
        return false 
    }
} 


export { ehUmCpf, ehMaiorDeIdade, ehUmNumero, ehUmEmail }