<template>
  <div :class="colClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  cols: {
    type: Number,
    default: 12,
  },
})

const colClass = computed(() => `col-${props.cols}`)
</script>

<style scoped>
.col-1 {
  flex-basis: calc(100% / 12 * 1);
  max-width: calc(100% / 12 * 1);
}
.col-2 {
  flex-basis: calc(100% / 12 * 2);
  max-width: calc(100% / 12 * 2);
}
.col-3 {
  flex-basis: calc(100% / 12 * 3);
  max-width: calc(100% / 12 * 3);
}
.col-4 {
  flex-basis: calc(100% / 12 * 4);
  max-width: calc(100% / 12 * 4);
}
.col-6 {
  flex-basis: calc(100% / 12 * 6);
  max-width: calc(100% / 12 * 6);
}
.col-12 {
  flex-basis: 100%;
  max-width: 100%;
}

@media (max-width: 768px) {
  [class^='col-'] {
    flex-basis: 100%;
    max-width: 100%;
  }
}
</style>
