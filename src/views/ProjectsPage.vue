<script setup>

import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
import { computed, ref } from 'vue';
import { routerViewLocationKey } from 'vue-router';
import TypeWriterText from '../components/TypeWriterText.vue';

const projects = [
  {
    name: "Mowg'Lille",
    description: "Application mobile de covoiturage pour les étudiants de Lille Application mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de LilleApplication mobile de covoiturage pour les étudiants de Lille",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/mowglille"
  },
  {
    name: "Homee",
    description: "Application mobile de gestion de tâches pour les familles",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/homee"
  },
  {
    name: "BlaBla2i",
    description: "Application mobile de covoiturage pour les étudiants de l'ISEN",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/blabla2i"
  },
  {
    name: "inTouch",
    description: "Application mobile de gestion de contacts",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/intouch"
  },
  {
    name: "BDE",
    description: "Application mobile de gestion de contacts",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/bde"
  },
  {
    name: "Bientot",
    description: "Application mobile de gestion de contacts",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/incomming"
  },
  {
    name: "Bientot",
    description: "Application mobile de gestion de contacts",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/vrm2026"
  },
  {
    name: "Bientot",
    description: "Application mobile de gestion de contacts",
    technologies: ["React Native", "Node.js", "MongoDB"],
    route : "/projects/vous-etes-pas-pret"
  }
]

const selectedIndex = ref(0);
const scrollContainer = ref("scrollContainer");

function onWheel(event) {
  event.preventDefault();
  if (event.deltaY > 0) {
    selectedIndex.value = Math.min(selectedIndex.value + 1, projects.length - 4);
  } else {
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0);
  }
  scrollContainer.value.scrollTo({
    top: selectedIndex.value * 98, // Adjust the scroll amount as needed
    behavior: 'smooth'
  });
}

function comptuteOpacity(index) {
  if(index < selectedIndex.value) {
    return 1 - Math.max(Math.abs(index + 1 - selectedIndex.value) * 1, 0.3);
  } else {
    return 1 - Math.abs(index - selectedIndex.value) * 0.3;
  }
}


</script>

<template>
  <div class="w-full h-full flex justify-between items-center px-32">
    <Transition name="slide-fade-left" appear>
      <div class="h-full flex">
        <div class="h-full flex flex-col pt-24 items-center">
          <ChevronRightIcon fillColor="#ffa500" :size="94"/>
        </div>
        <div class="pt-24 h-[784px] w-full flex flex-col overflow-auto no-scrollbar snap-y" ref="scrollContainer" @wheel="onWheel">
          <h1 
            v-for="(projects, index) in projects"
            :key="index"
            class="text-8xl cursor-pointer"
            :style="{
              opacity: comptuteOpacity(index), 
              transition: 'opacity .5s ease', 
              transform : `translateX(${Math.abs(index-selectedIndex)*3}px)`,
              }"
            :class="{'text-8xl': index === selectedIndex, 'text-7xl': index !== selectedIndex}"
            @click="selectedIndex == index ? $router.push(projects.route) : null" 
            >
            {{projects.name}}
          </h1>
          <!-- TEMPORARY METHODE THIS NOT A VERY CLASSI WAY TO DO I KNOW -->
          <h1 
            v-for="(projects, index) in projects"
            :key="index"
            class="text-8xl cursor-pointer"
            :style="{
              opacity: 0, 
              transition: 'opacity .5s ease', 
              transform : `translateX(${Math.abs(index-selectedIndex)*3}px)`,
              }"
            :class="{'text-8xl': index === selectedIndex, 'text-7xl': index !== selectedIndex}"
            @click="selectedIndex == index ? $router.push(projects.route) : null" 
            >
            {{projects.name}}
          </h1>
        </div>
      </div>
    </Transition>
    <div class="h-full flex flex-col py-24 gap-4">
      <div class="h-[550px] w-[800px] bg-red-50"></div>
      <div class="flex gap-4">
        <p>Salut</p>
        <p>Salut</p>
        <p>Salut</p>
      </div>
      <TypeWriterText class="max-w-[800px]" :text=projects[selectedIndex].description :delay=5></TypeWriterText>
    </div>

    <router-link to="/" class="absolute top-0 left-0 p-4 cursor-pointer">
    <ChevronRightIcon fillColor="#ffa500" :size="94"/>
    </router-link>
  </div>
</template>


<style>
body {
  margin: 0;
  overflow: hidden;
}

.slide-fade-left-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>

