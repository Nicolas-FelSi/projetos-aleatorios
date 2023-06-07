export const camposForm = {
    camposDoFormulário: document.querySelectorAll("[required]"),
    buttonSubmit: document.querySelector('[type="submit"]'),
    buttonClear: document.querySelector('[type="reset"]')
}

export const validaCampos = {
    validaNumerosRepetidos(cpf) {
        const numerosRepetidos = [
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999'
        ]
    
        return numerosRepetidos.includes(cpf)
    },

    validaIdades(data) {
        const dataAtual = new Date()
        const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

        return dataAtual >= dataMais18
    },

    borderColorValid(campo) {  
        campo.classList.add("border-color-valid")
        campo.classList.remove("border-color-invalid")
    },
    
    borderColorInvalid(campo) {
        campo.classList.add("border-color-invalid")
        campo.classList.remove("border-color-valid")
    },
        
    colorValid(campo) {
        campo.nextElementSibling.classList.add("color-valid")
        campo.nextElementSibling.classList.remove("color-invalid")
    },
    
    colorInvalid(campo) {
        campo.nextElementSibling.classList.add("color-invalid")
        campo.nextElementSibling.classList.remove("color-valid")
    },
}