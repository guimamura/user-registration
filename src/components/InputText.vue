<template>
  <div>
    <label>{{ label }}</label>
    <input
      :value="modelValue"
      :readonly="readonly"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps(['label', 'modelValue', 'readonly'])
defineEmits(['update:modelValue'])
</script>

<style scoped>
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[readonly] {
  background-color: #f3f3f3;
  cursor: not-allowed;
}
</style>
