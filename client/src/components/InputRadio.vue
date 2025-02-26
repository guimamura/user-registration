<template>
  <label>
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />
    {{ label }}
  </label>
</template>

<script setup>
defineProps(['label', 'value', 'modelValue'])
defineEmits(['update:modelValue'])
</script>

<style scoped>
input {
  cursor: pointer;
}
label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
