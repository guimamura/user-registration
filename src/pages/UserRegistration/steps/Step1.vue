<template>
  <Stepper current="1" total="4" />
  <Title title="Seja bem vindo(a)" />
  <button @click="next">Continuar</button>
</template>

<script setup>
import { ref } from 'vue'
import Stepper from '@/components/Stepper.vue'
import Title from '@/components/Title.vue'

const emit = defineEmits(['next'])
const name = ref('')
const email = ref('')

const next = () => {
  emit('next', { name: name.value, email: email.value })
}
</script>

<style scoped></style>
