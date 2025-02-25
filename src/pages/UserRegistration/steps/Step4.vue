<template>
  <Stepper current="4" total="4" />
  <Title title="Revise suas informações" />
  <button @click="prev">Voltar</button>
  <button @click="submit">Cadastrar</button>
</template>

<script setup>
import Stepper from '@/components/Stepper.vue'
import Title from '@/components/Title.vue'

const emit = defineEmits(['prev', 'submit'])

const prev = () => {
  emit('prev')
}
const submit = () => {
  emit('submit')
}
</script>

<style scoped></style>
