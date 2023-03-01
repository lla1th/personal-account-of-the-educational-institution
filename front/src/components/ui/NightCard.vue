<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    width: {
        type: String,
        default: '300px',
    },
    height: {
        type: String,
        default: '200px',
    },
})
</script>

<template>
    <q-card
        class="night-card"
        bordered
        :style='{ width, minHeight: height }'
    >
        <q-card-section>
            <div class="text-h6">{{ title }}</div>
            <slot name="sub-title" />
        </q-card-section>
    </q-card
>
</template>

<style lang="sass" scoped>
.night-card
    cursor: pointer
</style>