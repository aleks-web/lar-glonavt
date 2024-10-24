<template>
    <div class="component-wrapper">
        <div :class="{textarea: true, required: required, error: error}" @click="onFocusInput">
            <textarea ref="InputText" cols="30" rows="8" v-model="val" :placeholder="pls" @input="updateValue">{{ val }}</textarea>
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
    pls: {
        type: String,
        default: null
    },
    val: {
        type: String,
        default: null
    },
    error: {
        type: String,
        default: null
    }
});

let val = ref(props.val);
let InputText = ref(null);

const emit = defineEmits(['update:modelValue']);

function updateValue() {
    emit('update:modelValue', val.value);
}

function onFocusInput() {
    InputText.value.focus()
}

</script>
