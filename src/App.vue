<template>
  <div>
    <component :is="currentView"></component>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import UserRegistration from '@/pages/UserRegistration/UserRegistration.vue'
import NotFound from '@/pages/NotFound.vue'

const currentView = shallowRef(null)

function checkRoute() {
  if (window.location.pathname === '/registration') {
    currentView.value = UserRegistration
  } else {
    currentView.value = NotFound
  }
}

checkRoute()

window.addEventListener('popstate', checkRoute)
</script>
