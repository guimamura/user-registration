<script setup>
import { computed } from 'vue'

const props = defineProps(['variant', 'fullWidth'])

const variant = props.variant || 'default'

const fullWidth = props.fullWidth !== undefined && props.fullWidth !== false

const buttonClasses = computed(() => ({
  'btn-default': variant === 'default',
  'btn-ghost': variant === 'ghost',
  'btn-full': fullWidth,
}))
</script>

<template>
  <button :class="['btn', buttonClasses]">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid var(--color-orange);
}

.btn-default {
  background-color: var(--color-orange);
  color: var(--color-white);
}

.btn-ghost {
  background-color: transparent;
  color: var(--color-orange);
}

.btn-full {
  width: 100%;
}

.btn-default:hover {
  background-color: var(--color-orange-hover);
  border-color: var(--color-orange-hover);
}

.btn-ghost:hover {
  background-color: var(--color-orange-hover-ghost);
}
</style>
