<script setup lang="ts">
import { grained } from './utils/grained';
import { onMounted } from 'vue';


onMounted(() => {
  grained('background', {
    // Vos options personnalisées
    animate: true,
    patternWidth: 500,
    patternHeight: 500,
    grainOpacity: 0.1,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1,
    grainSpeed: 1,
  });
});

</script>



<template>
  <router-view id="background" v-slot="{ Component, route }" class="absolute top-0 btn-0 w-full h-full z-50 text-red-50 bg-stone-900">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>

.typingEffect {
    width: 0;
    overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
    border-right: 2px solid white; /* The cursor*/
    font-size: 16px;
    white-space: nowrap; /* Keeps the text on a single line */
    animation: typing 2s forwards;
  }

/* The typing animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

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
