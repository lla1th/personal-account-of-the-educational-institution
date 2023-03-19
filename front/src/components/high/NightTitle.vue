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
  getIconLeft: {
    type: String,
    default: () => '',
  },
  buttonOutline: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section
    class="night-title flex justify-between"
  >
    <div class="flex-grow-1">
      <div class="col-grow night-page-title__title">
        <component
            :is="!subtitle ? 'h4' : 'h5'"
            :class="[{ 'medium': !subtitle }]"
        >
          {{ title }}
        </component>
      </div>
    </div>
    <div
      v-if="hasButton"
      class="flex justify-end"
    >
      <slot name="action">
        <q-btn
          :disable="disable"
          :outline="buttonOutline"
          @click="$emit('click')"
          push
        >
          <q-icon
              v-if="getIconLeft.length"
              left
              :name="getIconLeft"
          />
          <div class="row">
            {{ buttonLabel }}
          </div>
        </q-btn>
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

.night-title
  @include titleFlexBasic(100%)
  &_action
    @include titleFlexBasic(calc(100% - 200px))
  &__action
    gap: 16px
    min-height: 200px
</style>
