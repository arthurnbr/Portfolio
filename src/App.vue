<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

</script>



<template class="w-full h-full flex justify-end align-middle">
  <router-view v-if="isLargeScreen" id="background" v-slot="{ Component, route }" class="absolute top-0 btn-0 w-full h-full z-50 text-red-50 bg-stone-900">
    <transition :name = "route.meta.transition || 'fade'" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <div v-if="!isLargeScreen">
    <h1>petit zizi</h1>
  </div>
  <div class="bg-red z-50 pb-8 pt-3 w-full flex justify-center align-middle bg-stone-900 footer ">
    <p class="text-orange-500">salut</p>
  </div>
</template>

<style scoped>

.footer {
  box-shadow: 0px -30px 50px #1c1917;
}

</style>
