<template>
  <div class="alert" :class="alertClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['type'])

const alertClass = computed(() => ({
  'alert-success': props.type === 'success',
  'alert-error': props.type === 'error',
  'alert-info': !props.type || props.type === 'info',
}))
</script>

<style scoped>
.alert {
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.alert-info {
  background-color: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}
</style>
