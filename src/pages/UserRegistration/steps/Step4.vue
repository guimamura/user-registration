<template>
  <Grid>
    <Stepper current="4" total="4" />
    <Title title="Revise suas informações" />

    <InputText
      v-model="localFormData.email"
      label="Endereço de e-mail"
      :errorMessage="errors.email"
    />
    <InputText v-model="localFormData.name" :label="labels.name" :errorMessage="errors.name" />
    <InputText
      v-model="localFormData.document"
      :label="labels.document"
      :errorMessage="errors.document"
    />
    <InputText v-model="localFormData.date" :label="labels.date" :errorMessage="errors.date" />
    <InputText v-model="localFormData.phone" label="Telefone" :errorMessage="errors.phone" />
    <InputText v-model="localFormData.password" label="Senha" :errorMessage="errors.password" />

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
import { reactive, watch } from 'vue'
import { useFormLabels } from '@/composables/useFormLabels'
import Button from '@/components/Button.vue'
import Col from '@/components/Col.vue'
import Grid from '@/components/Grid.vue'
import InputText from '@/components/InputText.vue'
import Row from '@/components/Row.vue'
import Stepper from '@/components/Stepper.vue'
import Title from '@/components/Title.vue'

const props = defineProps(['formData', 'errors'])
const emit = defineEmits(['prev', 'submit'])

const { labels } = useFormLabels(props.formData)

const localFormData = reactive({ ...props.formData })

watch(
  () => props.formData,
  (newVal) => {
    Object.assign(localFormData, newVal)
  },
)

const prev = () => {
  emit('prev', localFormData)
}

const submit = () => {
  emit('submit', localFormData)
}
</script>

<style scoped></style>
