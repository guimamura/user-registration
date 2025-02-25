<template>
  <Grid>
    <Stepper current="3" total="4" />
    <Title title="Senha de acesso" />

    <InputText v-model="localFormData.password" label="Sua senha" />

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
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import Col from '@/components/Col.vue'
import Grid from '@/components/Grid.vue'
import InputText from '@/components/InputText.vue'
import Row from '@/components/Row.vue'
import Stepper from '@/components/Stepper.vue'
import Title from '@/components/Title.vue'

const props = defineProps(['formData'])
const emit = defineEmits(['prev', 'next'])

const localFormData = ref({ ...props.formData })

const prev = () => emit('prev', localFormData.value)
const next = () => emit('next', localFormData.value)
</script>

<style scoped></style>
