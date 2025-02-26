import { reactive } from 'vue'

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

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

  const isValidDate = (date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    return regex.test(date)
  }

  const updateFormData = (newData) => {
    for (const key in newData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        formData[key] = newData[key]
      }
    }
  }

  const validateForm = (step) => {
    Object.keys(errors).forEach((key) => (errors[key] = ''))

    if (step === 1) {
      if (!formData.email.trim()) errors.email = 'Este campo é obrigatório'
      else if (!isValidEmail(formData.email)) errors.email = 'E-mail inválido'
    }

    if (step === 2) {
      if (!formData.name.trim()) errors.name = 'Este campo é obrigatório'
      if (!formData.document.trim()) errors.document = 'Este campo é obrigatório'
      if (!formData.date.trim()) errors.date = 'Este campo é obrigatório'
      else if (!isValidDate(formData.date)) errors.date = 'Data inválida (DD/MM/AAAA)'
      if (!formData.phone.trim()) errors.phone = 'Este campo é obrigatório'
    }

    if (step === 3) {
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

      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário')
      }

      console.log('Registro concluído com sucesso!')
    } catch (error) {
      console.error(error)
    }
  }

  return { formData, errors, updateFormData, validateForm, submitForm }
}
