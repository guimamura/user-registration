<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  gap: var(--row-gap, 16px);
}
</style>
