<script setup>

import { ref, watch, watchEffect} from 'vue';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const {text, delay} = defineProps({
  text: String,
  delay : Number
})


var renderText = ref(text)

function replaceAt(text, index, replacement) {
    var textTab = String(text.value).split('')
    textTab[index] = replacement
    return textTab.join('')
}


watch(() => text, (newVal, oldVal) => {
  const maxlen = Math.max(newVal.length, oldVal.length)
  if(maxlen>renderText.value.length){
    for (let i = renderText.value.length; i < maxlen; i++) {
      renderText.value += ' '
    }
  }

  for (let i = 0; i < maxlen; i++) {
    if(oldVal[i] == newVal[i]){
      continue
    }
    if(renderText.value[i] != ' '){
      for(let j = 0; j < 3; j++){
        setTimeout(()=>{
          renderText.value = replaceAt(renderText, i, letters[Math.floor(Math.random() * letters.length)])
        }, delay*(i+1+j))
      }
    }

    if(i < newVal.length){
      setTimeout(()=>{
        renderText.value = replaceAt(renderText, i, newVal[i])
      }, delay*(i+4))
    }

    else{
      setTimeout(()=>{
        renderText.value = replaceAt(renderText, i, ' ')
      }, delay*(i+4))
    }

  }
})

</script>
<template>
  <div>
      <p>
        {{renderText}}
      </p>
  </div>
</template>

<style scoped>
</style>

