<template>
    <div class="component-wrapper">
        <div :class="{'input-text': true, required: required, error: error}" @click="onFocusInput">
            <span v-if="title" class="input-text__name">{{ title }}</span>
            <input ref="InputText" type="text" v-model="val" :placeholder="pls" @input="updateValue">
        </div>

        <div v-if="error" class="input-messages error input-messages--bottom">
            <span class="input-messages__icon"></span>
            <span class="input-messages__text">{{ error }}</span>
        </div>
    </div>
</template>

<script setup>
import {defineProps, ref, watch, defineEmits} from "vue";

const props = defineProps({
    required: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: null,
    },
    pls: {
        type: String,
        default: null
    },
    val: {
        type: String,
        default: null
    },
    error: {
        type: [String, null],
        default: null
    }
});

let val = ref(props.val);
let InputText = ref(null);

watch(val, (n, o) => {

})

const emit = defineEmits(['update:modelValue']);

function updateValue() {
    emit('update:modelValue', val.value);
}

function onFocusInput() {
    InputText.value.focus()
}

</script>
