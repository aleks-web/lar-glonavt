<template>
    <div class="component-wrapper">

        <div :class="{select: true, required: required, error: !val && required || error, 'select--active': isOpen}" @click="toggleSelect()">
            <input class="select__input" v-model="val" type="hidden">

            <div class="select__current" :class="{disable: !val}">
                <span class="select__current-text">{{ nowSelectName() }}</span>
            </div>

            <div class="select__list">
                <div class="select__item select__item--default" :class="{'select__item--active': !val}" @click="unsetVal">{{ pls }}</div>
                <div :class="{'select__item--active': select[targetId] == val}" :data-id="select[targetId]" v-for="select in selects" :key="select[targetId]" class="select__item" @click="setActiveItem($event)">{{ select[targetName] }}</div>
            </div>
        </div>

        <div v-if="error" class="input-messages error input-messages--bottom">
            <span class="input-messages__icon"></span>
            <span class="input-messages__text">{{ error }}</span>
        </div>
    </div>
</template>

<script setup>
import {defineProps, ref, defineEmits} from "vue";

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
    selects: {
        type: Array,
        default: null
    },
    targetId: {
        type: [Number, String]
    },
    targetName: {
        type: String
    },
    error: {
        type: String,
        default: null
    }
});

const isOpen = ref(false);

let val = ref(props.val);

const emit = defineEmits(['update:modelValue']);


function toggleSelect() {
    isOpen.value ? isOpen.value = false : isOpen.value = true
}

function setActiveItem(e) {
    val.value = Number(e.currentTarget.dataset.id);
    emit('update:modelValue', val.value);
}

function unsetVal() {
    val.value = undefined;
    emit('update:modelValue', val.value);
}

function nowSelectName() {
    let name = undefined;
    props.selects.forEach(el => {
        if (el[props.targetId] == val.value) {
            name = el[props.targetName];
        }
    });

    if (!name) {
        return props.pls;
    } else {
        return name;
    }
}

</script>
