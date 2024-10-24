<template>
    <div class="component-wrapper">
        <div :class="{'input-text': true, required: required}" @click="onFocusInput">
            <span v-if="title" class="input-text__name">{{ title }}</span>
            <input ref="InputText" type="text" v-model="val" :placeholder="pls" @input="updateValue">
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
