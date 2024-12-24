
<script setup>
</script>

<template>
  <div class="w-full h-full flex align-middle justify-center">
    <div class="flex flex-col justify-center align-middle w-1/2 gap-2">
      <h1 class="text-7xl text-center ">Bienvenue sur mon Portefollio</h1>
      <p>Ingénieur en formation, passionné d'informatique, mon objectif est d'en apprendre plus sur ces métiers en entreprise, en particulier dans le domaine des systèmes embarqués ou du développement WEB/Mobile. Pour cette raison, je recherche un contrat de professionnalisation dans ces domaines pour la période de septembre 2025 à juin 2026.</p>
      <router-link to="/projects" class="text-4xl text-center">Projects</router-link>
    </div>
  </div>
</template>

<style>
  body {
    margin: 0;
    overflow: hidden;
  }

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
</style>
  