import { reactive } from 'vue'
import { isValidEmail, isValidDate, isValidCPF, isValidCNPJ } from '@/utils/validators'

export function useUserRegistration() {
  const formData = reactive({
    email: '',
    type: 'PF',
    name: '',
    document: '',
    date: '',
    phone: '',
    password: '',
  })

  const errors = reactive({
    email: '',
    name: '',
    document: '',
    date: '',
    phone: '',
    password: '',
  })

  const statusMessage = reactive({
    type: '',
    text: '',
  })

  const updateFormData = (newData) => {
    for (const key in newData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        formData[key] = newData[key]
      }
    }
  }

  const validateForm = (step) => {
    Object.keys(errors).forEach((key) => (errors[key] = ''))

    if (step === 1 || step === 4) {
      if (!formData.email.trim()) errors.email = 'Este campo é obrigatório'
      else if (!isValidEmail(formData.email)) errors.email = 'E-mail inválido'
    }

    if (step === 2 || step === 4) {
      if (!formData.name.trim()) errors.name = 'Este campo é obrigatório'
      if (!formData.document.trim()) errors.document = 'Este campo é obrigatório'
      else {
        if (formData.type === 'PF' && !isValidCPF(formData.document)) {
          errors.document = 'CPF inválido'
        }
        if (formData.type === 'PJ' && !isValidCNPJ(formData.document)) {
          errors.document = 'CNPJ inválido'
        }
      }
      if (!formData.date.trim()) errors.date = 'Este campo é obrigatório'
      else if (!isValidDate(formData.date)) errors.date = 'Data inválida (DD/MM/AAAA)'
      if (!formData.phone.trim()) errors.phone = 'Este campo é obrigatório'
    }

    if (step === 3 || step === 4) {
      if (!formData.password.trim()) errors.password = 'Este campo é obrigatório'
    }

    return Object.values(errors).every((error) => !error)
  }

  const submitForm = async () => {
    try {
      const response = await fetch('/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar o formulário')
      }

      statusMessage.type = 'success'
      statusMessage.text = 'Cadastro realizado com sucesso!'
    } catch (error) {
      statusMessage.type = 'error'
      statusMessage.text = error.message
    }
  }

  return { formData, errors, statusMessage, updateFormData, validateForm, submitForm }
}
