<script setup>
import { onMounted, ref, watch,} from 'vue';
import xButton from '../components/x-button.vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';

const title = ref("title")
const titlewidth = ref("0")

watch(title, (newValue) => {
  titlewidth.value = newValue.offsetWidth;
});


</script>

<template>
  <div class="w-full h-full flex justify-center items-center flex-col">
    <div class="flex flex-col gap-2 w-fit h-fit items-start">
      <h1 class="text-6xl xl:text-7xl 2xl:text-8xl text-center typewriter" ref="title">Bienvenue sur mon Portefollio&nbsp;</h1>
      <p class="fade-in italic max-w-[800px] xl:max-w-[960px] 2xl:max-w-[1280px]">Ingénieur en formation, passionné d'informatique, mon objectif est d'en apprendre plus sur ces métiers en entreprise, en particulier dans le domaine des systèmes embarqués ou du développement WEB/Mobile. Pour cette raison, je recherche un contrat de professionnalisation dans ces domaines pour la période de septembre 2025 à juin 2026.</p>
      <div class="flex fade-in text-[#ffa500]" id="projects">
        <a @click="this.$router.push('/projects')" class="italic cursor-pointer">Voir mes projects</a>
        <ChevronRightIcon class="chevron-animation"/>
      </div>
    </div>
  </div>
</template>

<style>
  body {
    margin: 0;
    overflow: hidden;
  }

  p.fade-in  {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 1s 1s ease-in-out forwards;
  }

  .fade-in  {
    opacity: 0;
    transform: translateY(40px);
    animation: fadeIn 1s 1s ease-in-out forwards;
  }

  .typewriter {
    overflow: hidden;
    border-right: .15em solid #ffa500;
    white-space: nowrap; 
    margin: 0 auto;

    

    -webkit-animation: AnimationName 11s ease infinite;
    -moz-animation: AnimationName 11s ease infinite;
    animation: AnimationName 11s ease infinite;

    animation: 
      typing 1.5s steps(30, end),
      blink-caret 1s step-end infinite;
  }

  #projects:hover > .chevron-animation {
    animation: chevronMove 2s infinite;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #ffa500; }
  }

  @keyframes chevronMove {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
  }

</style>