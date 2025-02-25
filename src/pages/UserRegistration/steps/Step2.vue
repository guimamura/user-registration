<template>
  <Grid>
    <Stepper current="2" total="4" />
    <Title title="Pessoa Física" />
    <Title title="Pessoa Jurídica" />
    <Row>
      <Col cols="6">
        <Button variant="ghost" @click="prev" fullWidth>Voltar</Button>
      </Col>
      <Col cols="6">
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
import Row from '@/components/Row.vue'
import Stepper from '@/components/Stepper.vue'
import Title from '@/components/Title.vue'

const emit = defineEmits(['prev', 'next'])
const name = ref('')
const document = ref('')
const date = ref('')
const phone = ref('')

const prev = () => {
  emit('prev')
}
const next = () => {
  emit('next', {
    name: name.value,
    document: document.value,
    date: date.value,
    phone: phone.value,
  })
}
</script>

<style scoped></style>
