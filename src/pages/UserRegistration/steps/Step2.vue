<template>
  <Stepper current="2" total="4" />
  <Title title="Pessoa Física" />
  <Title title="Pessoa Jurídica" />
  <button @click="prev">Voltar</button>
  <button @click="next">Continuar</button>
</template>

<script setup>
import { ref } from 'vue'
import Stepper from '@/components/Stepper.vue'
import Title from '@/components/Title.vue'

const emit = defineEmits(['prev', 'next'])
const name = ref('')
const email = ref('')

const prev = () => {
  emit('prev')
}
const next = () => {
  emit('next', { name: name.value, email: email.value })
}
</script>

<style scoped></style>
