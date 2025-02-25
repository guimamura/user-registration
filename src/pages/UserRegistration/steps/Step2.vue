<template>
  <Grid>
    <Stepper current="2" total="4" />

    <Title :title="labels.title" />

    <InputText v-model="localFormData.name" :label="labels.name" />
    <InputText v-model="localFormData.document" :label="labels.document" />
    <InputText v-model="localFormData.date" :label="labels.date" />
    <InputText v-model="localFormData.phone" label="Telefone" />

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
import { useFormLabels } from '@/composables/useFormLabels'
import Button from '@/components/Button.vue'
import Col from '@/components/Col.vue'
import Grid from '@/components/Grid.vue'
import InputText from '@/components/InputText.vue'
import Row from '@/components/Row.vue'
import Stepper from '@/components/Stepper.vue'
import Title from '@/components/Title.vue'

const props = defineProps(['formData'])
const emit = defineEmits(['prev', 'next'])

const { labels } = useFormLabels(props.formData)

const localFormData = ref({ ...props.formData })

const prev = () => emit('prev', localFormData.value)
const next = () => emit('next', localFormData.value)
</script>
