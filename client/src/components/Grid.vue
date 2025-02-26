<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
  gap: var(--grid-gap, 16px);
}
</style>
