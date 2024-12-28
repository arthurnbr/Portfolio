<template>
    <div>
        <router-link v-if="to" :to="to" class="" :class='{"css-selector":animated}'>
            <slot></slot>
        </router-link>
        <button v-else @click="handleClick" class="" :class='{"css-selector":animated}'>
            <slot></slot>
        </button>
    </div>
</template>

<style scoped>
</style>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    to: {
        type: String,
        default: null
    },
    onClick: {
        type: Function,
        default: null
    },
    animated: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
    if (props.onClick) {
        props.onClick(event);
    }
    emit('click', event);
};
</script>