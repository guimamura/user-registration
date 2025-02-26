<template>
  <Grid>
    <Stepper current="3" total="4" />
    <Title title="Senha de acesso" />

    <InputText v-model="localFormData.password" label="Sua senha" :errorMessage="errors.password" />

    <Row>
      <Col :cols="6">
        <Button variant="ghost" @click="prev" fullWidth>Voltar</Button>
      </Col>
      <Col :cols="6">
        <Button @click="next" fullWidth>Continuar</Button>
      </Col>
    </Row>
  </Grid>
</template>

<script setup>
import { reactive, watch } from 'vue'
import Button from '@/components/Button.vue'
import Col from '@/components/Col.vue'
import Grid from '@/components/Grid.vue'
import InputText from '@/components/InputText.vue'
import Row from '@/components/Row.vue'
import Stepper from '@/components/Stepper.vue'
import Title from '@/components/Title.vue'

const props = defineProps(['formData', 'errors'])
const emit = defineEmits(['prev', 'next'])

const localFormData = reactive({ ...props.formData })

watch(
  () => props.formData,
  (newVal) => {
    Object.assign(localFormData, newVal)
  },
)

const prev = () => emit('prev', localFormData)
const next = () => emit('next', localFormData)
</script>

<style scoped></style>
