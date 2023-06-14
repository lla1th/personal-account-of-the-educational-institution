<script setup>
defineProps({
  title: {
    type: String,
    default: () => (''),
    required: true,
  },
  subtitle: {
    type: Boolean,
    default: false,
  },
  hasButton: {
    type: Boolean,
    default: false,
  },
  buttonLabel: {
    type: String,
    default: () => '',
  },
  disable: {
    type: Boolean,
    default: false,
  },
  colorTitle: {
    type: Boolean,
    default: false,
  },
  contentTop: {
    type: String,
    default: '',
    required: false,
  },
  contentBottom: {
    type: String,
    default: '',
    required: false,
  },
  notPadding: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['ButtonClick']);
</script>

<template>
  <section
    class="night-title flex justify-between"
    :class="{ 'q-mb-lg': !notPadding }"
  >
    <div class="flex-grow-1">
      <div class="col-grow night-page-title__title">
        <div
          v-if="contentTop"
          class="row text-subtitle1"
        >
          {{ contentTop }}
        </div>
        <component
          :is="!subtitle ? 'h4' : 'h5'"
          :class="[
            { 'text-weight-medium': !subtitle },
            {'text-primary': colorTitle },
          ]"
        >
          {{ title }}
        </component>
        <div
          v-if="contentBottom"
          class="row text-subtitle1 q-mt-xs q-mb-md text-primary"
        >
          {{ contentBottom }}
        </div>
      </div>
    </div>
    <div
      v-if="hasButton"
      class="flex justify-end"
    >
      <slot name="action">
        <NightButton
          :label="buttonLabel"
          :disabled="disable"
          icon-left="add"
          outline
          @click="$emit('ButtonClick')"
        />
      </slot>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@mixin titleFlexBasic($count)
  .night-page-title__title
    flex-basis: $count
    word-break: break-word
    min-height: 52px
    color: rgba(0,0,0, 0.87)

.night-title
  margin:
    top: 20px
  @include titleFlexBasic(100%)
  &_action
    @include titleFlexBasic(calc(100% - 200px))
  &__action
    gap: 16px
    min-height: 200px
</style>
