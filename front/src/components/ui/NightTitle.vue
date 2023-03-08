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
});
</script>

<template>
  <section
    class="night-title flex justify-between"
  >
    <div class="flex col-grow night-page-title__title">
      <component
        :is="!subtitle ? 'h1' : 'h3'"
      >
        {{ title }}
      </component>
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
