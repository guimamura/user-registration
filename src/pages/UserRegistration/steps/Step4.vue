<template>
  <Grid>
    <Stepper current="4" total="4" />
    <Title title="Revise suas informações" />
    <Row>
      <Col cols="6">
        <Button variant="ghost" @click="prev" fullWidth>Voltar</Button>
      </Col>
      <Col cols="6">
        <Button @click="submit" fullWidth>Cadastrar</Button>
      </Col>
    </Row>
  </Grid>
</template>

<script setup>
import Button from '@/components/Button.vue'
import Col from '@/components/Col.vue'
import Grid from '@/components/Grid.vue'
import Row from '@/components/Row.vue'
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
