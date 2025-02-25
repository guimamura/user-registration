import { computed } from 'vue'

export function useFormLabels(formData) {
  const labels = computed(() => {
    const isPF = formData.type === 'PF'
    return {
      title: isPF ? 'Pessoa Física' : 'Pessoa Jurídica',
      name: isPF ? 'Nome' : 'Razão Social',
      document: isPF ? 'CPF' : 'CNPJ',
      date: isPF ? 'Data de nascimento' : 'Data de abertura',
    }
  })

  return { labels }
}
