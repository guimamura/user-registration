<template>
  <div>
    <h1 class="heading">{{ title }}</h1>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style scoped>
.heading {
  font-weight: bold;
}
</style>
