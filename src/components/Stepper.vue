<template>
  <div>Etapa {{ current }} de {{ total }}</div>
</template>

<script setup>
defineProps(['current', 'total'])
</script>

<style scoped></style>
