import * as yup from "yup";

// Define o esquema de validação com Yup
export const schemaValidation = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Z\s]*$/, "O nome só pode conter letras e espaços").required("Campo obrigatório").min(3, "Nome invalido"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    phone: yup.string().required('Campo obrigatório').matches(/^\d{11}$/, 'O telefone deve conter 11 dígitos numéricos'),
    cargo: yup.string().required("Campo obrigatório"),
    linkedin: yup.string(),
    github: yup.string()
});

// Função para verificar e armazenar os dados no localStorage
export const checkAndStorageData = (data) => {
    let formData = localStorage.getItem('formData');

    if (formData) {
        try {
            formData = JSON.parse(formData);

            if (!Array.isArray(formData)) { // Garante que é um array
                storedData = []
            }
        } catch (error) {
            formData = []; // Caso ocorra erro no parse, inicia como um array vazio
        }
    } else {
        formData = []; // Caso não exista 'formData', cria um array vazio
    }

    // Verifica se os dados já existem comparando campos específicos
    const isDataAlreadyStored = formData.some(item => {
        return item.email === data.email || item.phone === data.phone;
    });

    if (isDataAlreadyStored) {
        return { success: false, message: 'Ja existe um cadastro com esses dados! ❌' };
    } else {
        const updatedFormData = [...formData, data];

        localStorage.setItem('formData', JSON.stringify(updatedFormData));

        return { success: true, message: 'Cadastro realizado com sucesso!' };
    }
}