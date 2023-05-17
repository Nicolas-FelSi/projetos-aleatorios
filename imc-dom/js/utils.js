export function calcularIMC(peso, altura) {
    const imc = (peso.value / (altura.value ** 2)).toFixed(2)
    return imc
}

export function isNotANumber(valor) {
    return isNaN(valor) || valor == ""
}