<template>
  <div>
    Etapa <span class="highlight">{{ current }}</span> de {{ total }}
  </div>
</template>

<script setup>
defineProps(['current', 'total'])
</script>

<style scoped>
.highlight {
  color: var(--color-orange);
}
</style>
