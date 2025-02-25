<template>
  <div>
    <label>{{ label }}</label>
    <input
      :value="modelValue"
      :readonly="readonly"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="{ 'input-error': errorMessage }"
    />
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
defineProps(['label', 'modelValue', 'readonly', 'errorMessage'])
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

.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
