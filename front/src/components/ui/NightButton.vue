<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: 'Кнопка',
  },
  size: {
    type: String,
    default: 'md',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  iconLeft: {
    type: String,
    default: '',
    required: false,
  },
});

const sizeButton = computed(() => {
  const typeSize = [
    {
      name: 'md',
      class: 'q-px-lg q-py-sm',
      size: '14px',
    },
    {
      name: 'sm',
      class: 'q-px-lg q-py-sm',
      size: '12px',
    },
  ];

  return typeSize.find(({ name }) => name === props.size.toLowerCase().trim()) || typeSize[0];
});

defineEmits(['click']);
</script>

<template>
  <q-btn
    :size="sizeButton.size"
    :class="sizeButton.class"
    :loading="loading"
    :disable="disabled || loading"
    color="primary"
    :outline="outline"
    :unelevated="!outline"
    no-caps
    square
    class="night-button text-weight-bold"
    @click="$emit('click')"
  >
    <slot name="left-icon">
      <q-icon
        v-if="iconLeft"
        left
        color="primary"
        :name="iconLeft"
      />
    </slot>
    <slot name="content">
      {{ label }}
    </slot>
  </q-btn>
</template>

<style lang="sass" scoped>
.night-button
  padding:
    top: 10px
    bottom: 10px
</style>
