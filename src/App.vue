<script setup lang="ts">
import ThreeView from './components/ThreeView.vue';
</script>


<template>
  <router-view v-slot="{ Component, route }" class="absolute top-0 btn-0 w-full h-full z-50 text-red-50">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <ThreeView />
</template>


<style scoped>

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

</style>
