<template>
  <Grid>
    <Stepper current="4" total="4" />
    <Title title="Revise suas informações" />

    <InputText v-model="localFormData.email" label="Endereço de e-mail" readonly />
    <InputText v-model="localFormData.name" :label="labels.name" readonly />
    <InputText v-model="localFormData.document" :label="labels.document" readonly />
    <InputText v-model="localFormData.date" :label="labels.date" readonly />
    <InputText v-model="localFormData.phone" label="Telefone" readonly />
    <InputText v-model="localFormData.password" label="Senha" readonly />

    <Row>
      <Col :cols="6">
        <Button variant="ghost" @click="prev" fullWidth>Voltar</Button>
      </Col>
      <Col :cols="6">
        <Button @click="submit" fullWidth>Cadastrar</Button>
      </Col>
    </Row>
  </Grid>
</template>

<script setup>
import { reactive } from 'vue'
import { useFormLabels } from '@/composables/useFormLabels'
import Button from '@/components/Button.vue'
import Col from '@/components/Col.vue'
import Grid from '@/components/Grid.vue'
import InputText from '@/components/InputText.vue'
import Row from '@/components/Row.vue'
import Stepper from '@/components/Stepper.vue'
import Title from '@/components/Title.vue'

const props = defineProps(['formData'])
const emit = defineEmits(['prev', 'submit'])

const { labels } = useFormLabels(props.formData)

const localFormData = reactive({ ...props.formData })

const prev = () => {
  emit('prev')
}

const submit = () => {
  emit('submit')
}
</script>

<style scoped></style>
