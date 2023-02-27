<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: () => ([]),
    },
    open: {
        type: Boolean,
        default: () => true,
    },
})
</script>

<template>
<q-drawer
    v-model="props.open"
    show-if-above

    :width="200"
    :breakpoint="500"
    bordered
    class="bg-grey-3"
>
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
            <q-item
                v-for="(item, index) in items"
                :key="`item-menu-${index}`"
                clickable
                v-ripple
            >
                <q-item-section avatar>
                    <q-icon :name="item.icon" />
                </q-item-section>
                <q-item-section>{{ item.name }}</q-item-section>
            </q-item>
        </q-list>
    </q-scroll-area>
</q-drawer>
</template>