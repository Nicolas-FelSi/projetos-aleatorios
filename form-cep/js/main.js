import { inputDom } from "./controller-dom.js";

async function getCep(cep) {
    try {
        const linkApi = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const apiJson = await linkApi.json()

        if (apiJson.erro) {
            inputDom.textError.classList.remove('hide')
            inputDom.textError.innerText = "Este CEP não existe."
            inputDom.inputValueEmpty()
        } else {
            inputDom.textError.classList.add("hide")
            inputDom.inputEndereco.value = apiJson.logradouro
            inputDom.inputBairro.value = apiJson.bairro
            inputDom.inputCidade.value = apiJson.localidade
            inputDom.inputEstado.value = apiJson.uf
        }       
    } catch (error) {
        inputDom.textError.classList.remove('hide')
        inputDom.textError.innerText = "CEP digitado errado. Tente novamente."
        inputDom.inputValueEmpty()
    }
}

inputDom.inputCep.addEventListener('focusout', () => {
    if (!inputDom.inputCep.value == "") {
        getCep(inputDom.inputCep.value)
    }

    inputDom.inputValueEmpty()
})
