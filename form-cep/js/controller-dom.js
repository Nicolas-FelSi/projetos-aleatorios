export const inputDom = {
    inputCep: document.getElementById("cep"),
    inputEndereco: document.getElementById("endereco"),
    inputNumero: document.getElementById("numero"),
    inputComplemento: document.getElementById("complemento"),
    inputCidade: document.getElementById("cidade"),
    inputEstado: document.getElementById("estado"),
    inputBairro: document.getElementById("bairro"),
    textError: document.getElementById("erro"),

    inputValueEmpty() {
        this.inputEndereco.value = ""
        this.inputBairro.value = ""
        this.inputCidade.value = ""
        this.inputEstado.value = ""
    }
}