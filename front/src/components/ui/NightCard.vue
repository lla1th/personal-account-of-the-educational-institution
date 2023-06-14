<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '300px',
  },
  height: {
    type: String,
    default: '200px',
  },
});
</script>

<template>
  <q-card
    class="night-card"
    square
    flat
    :style="{ width, minHeight: height }"
  >
    <q-card-section>
      <div class="text-h6">
        {{ title }}
      </div>
      <slot name="sub-title">
        <div class="text-body1 text-weight-regular">
          {{ subTitle }}
        </div>
      </slot>
    </q-card-section>
  </q-card>
</template>

<style lang="sass" scoped>
.night-card
  cursor: pointer
  &:nth-child(odd)
    background: $light-blue-2
  &:nth-child(even)
    background: $cyan-2
</style>
