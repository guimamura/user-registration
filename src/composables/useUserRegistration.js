import { ref } from 'vue'

export function useUserRegistration() {
  const formData = ref({
    name: '',
    email: '',
    password: '',
    address: '',
  })

  const updateFormData = (newData) => {
    formData.value = { ...formData.value, ...newData }
  }

  const submitForm = async () => {
    try {
      const response = await fetch('/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData.value),
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário')
      }

      console.log('Registro concluído com sucesso!')
    } catch (error) {
      console.error(error)
    }
  }

  return { formData, updateFormData, submitForm }
}
