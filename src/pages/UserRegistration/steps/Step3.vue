<template>
  <Grid>
    <Stepper current="3" total="4" />
    <Title title="Senha de acesso" />
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
const password = ref('')

const prev = () => {
  emit('prev')
}
const next = () => {
  emit('next', { password: password.value })
}
</script>

<style scoped></style>
