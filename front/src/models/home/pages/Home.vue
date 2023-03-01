<script setup>
// imports
//import { ref } from 'vue';
import { useHomeStore } from '../../../stores/home.js';

const store = useHomeStore();

import NightCard from "../../../components/ui/NightCard.vue";
</script>

<template>
    <q-page
    padding
    class="q-pa-md row items-start content-start q-gutter-lg"
    >
        <NightCard
            v-for="(item, index) in store.cards"
            :key='`menu-card-${index}`'
            :title="item.title"
            @click="console.log('hello')"
        >
        <template #sub-title>
            <div class="text-subtitle2">{{ item.subTitle }}</div>
        </template>
        </NightCard
>
    </q-page>
</template>