<template>
  <div>
    <Step1 v-if="currentStep === 1" @next="nextStep" />
    <Step2 v-if="currentStep === 2" @next="nextStep" @prev="prevStep" />
    <Step3 v-if="currentStep === 3" @next="nextStep" @prev="prevStep" />
    <Step4 v-if="currentStep === 4" @prev="prevStep" @submit="submitForm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserRegistration } from '@/composables/useUserRegistration'
import Step1 from './steps/Step1.vue'
import Step2 from './steps/Step2.vue'
import Step3 from './steps/Step3.vue'
import Step4 from './steps/Step4.vue'

const { updateFormData, submitForm } = useUserRegistration()
const currentStep = ref(1)

const nextStep = (data) => {
  updateFormData(data)
  currentStep.value++
}

const prevStep = () => {
  currentStep.value--
}
</script>

<style scoped></style>
