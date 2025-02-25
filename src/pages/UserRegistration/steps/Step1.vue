<template>
  <Grid>
    <Stepper current="1" total="4" />
    <Title title="Seja bem-vindo(a)" />

    <InputText v-model="localFormData.email" label="Endereço de e-mail" />

    <Row>
      <Col :cols="6">
        <InputRadio v-model="localFormData.type" value="PF" label="Pessoa Física" />
      </Col>
      <Col :cols="6">
        <InputRadio v-model="localFormData.type" value="PJ" label="Pessoa Jurídica" />
      </Col>
    </Row>

    <Row>
      <Col>
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
import InputRadio from '@/components/InputRadio.vue'
import Row from '@/components/Row.vue'
import Stepper from '@/components/Stepper.vue'
import Title from '@/components/Title.vue'

const props = defineProps(['formData'])
const emit = defineEmits(['next'])

const localFormData = ref({ ...props.formData })

const next = () => {
  emit('next', localFormData.value)
}
</script>
