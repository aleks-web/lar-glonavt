<template>
    <div class="component-wrapper">
        <div :class="{'input-text': true, required: required, error: error}" @click="onFocusInput">
            <span v-if="title" class="input-text__name">{{ title }}</span>
            <input ref="InputText" type="text" :value="props.modelValue" :placeholder="pls" @input="emit('update:modelValue', $event.target.value)">
        </div>

        <div v-if="error" class="input-messages error input-messages--bottom">
            <span class="input-messages__icon"></span>
            <span class="input-messages__text">{{ error }}</span>
        </div>
    </div>
</template>

<script setup>
import {defineProps, ref, defineEmits} from "vue";

let props = defineProps({
    required: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: null,
    },
    pls: {
        type: String,
        default: null
    },
    error: {
        type: [String, null],
        default: null
    }
});

let InputText = ref(null);

const emit = defineEmits(['update:modelValue']);

function onFocusInput() {
    InputText.value.focus()
}

</script>
