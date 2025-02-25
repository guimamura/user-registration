<template>
  <Grid>
    <Stepper current="1" total="4" />
    <Title title="Seja bem vindo(a)" />
    <Row>
      <Col>
        <Button fullWidth @click="next">Continuar</Button>
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

const emit = defineEmits(['next'])
const email = ref('')
const type = ref('PF')

const next = () => {
  emit('next', {
    email: email.value,
    type: type.value,
  })
}
</script>

<style scoped></style>
