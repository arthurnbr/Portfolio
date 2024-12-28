<script setup>
import { ref } from 'vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
import TypewriterText from '../../components/TypeWriterText.vue';

var text = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit tincidunt tincidunt. Nullam nec purus nec elit tincidunt tincidunt. Nullam nec purus nec elit tincidunt tincidunt. Nullam nec purus nec elit tincidunt tincidunt. Nullam nec purus nec elit tincidunt tincidunt. Nullam nec purus nec elit tincidunt tincidunt. Nullam nec purus nec elit')


</script>

<template>
  <div class="w-full h-full flex flex-col align-middle pt-32">
    <h1 class="text-7xl">Test Transi</h1>
    <TypewriterText :text=text :delay="1"></TypewriterText>
    <button @click="text = 'Un text un peu long pour montrer que l\'animation de fou que arthur a fait wsh mais il est trop fort'">Change text</button>
  </div>
</template>

<style>

</style>