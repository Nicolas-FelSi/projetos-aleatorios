const tiposDeErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError',
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        customError: "Por favor, preencha um email válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        customError: "Por favor, preencha um CPF válido.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    celular: {
        valueMissing: 'O campo do celular não pode estar vazio.',
        patternMismatch: "Por favor, preencha um número válido.",
        customError: "Por favor, preencha um número válido.",
        tooShort: "O campo de celular não tem caractéres suficientes."
    },
    data: {
        valueMissing: 'O campo data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

export { tiposDeErros, mensagens }