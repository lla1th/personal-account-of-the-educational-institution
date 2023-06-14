<script setup>
defineProps({
  modalValue: {
    type: Boolean,
    required: true,
    default: () => false,
  },
  title: {
    type: String,
    default: () => '',
    required: false,
  },
});

defineEmits(['closeSidePage']);
</script>

<template>
  <q-drawer
    class="night-side-page"
    elevated
    :width="500"
    overlay
    :model-value="modalValue"
    side="right"
    mini-to-overlay
    bordered
    no-swipe-close
    no-swipe-backdrop
    behavior="mobile"
    @update:model-value="$emit('closeSidePage')"
  >
    <div class="night-side-page__container q-pa-xl column no-wrap justify-between">
      <div class="night-side-page__title q-pb-lg">
        <slot name="title">
          <NightTitle
            :title="title"
            subtitle
            not-padding
          />
        </slot>
      </div>

      <div class="night-side-page__content col">
        <div class="night-side-page__body">
          <slot name="body" />
        </div>
      </div>

      <div class="night-side-page__footer q-mt-lg">
        <slot name="footer" />
      </div>
    </div>
  </q-drawer>
</template>

<style lang="sass" scoped>
.night-side-page
  &__container
    height: 100%
  &__content
    height: 100%
    overflow-x: hidden
</style>
