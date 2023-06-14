<script setup>
import { useRoute, useRouter } from 'vue-router';

defineProps({
  items: {
    type: Array,
    default: () => ([]),
  },
});

const router = useRouter();

const route = useRoute();

const routerPage = (url) => {
  router.push(url);
};

const checkActive = (item) => item.name === route.name;
</script>

<template>
  <q-drawer
    show-if-above
    :width="240"
    :breakpoint="500"
    bordered
    class="night-drawer bg-accent"
  >
    <q-scroll-area
      class="fit"
      :horizontal-thumb-style="{ opacity: 0 }"
    >
      <q-list class="night-drawer__list text-white">
        <q-item
          class="row items-center night-drawer__logo"
        >
          <q-item-section class="row content-center">
            <q-img
              src="../../assets/image/ykuipt_logo.png"
              class="flex items-center"
              width="60px"
            />
          </q-item-section>
        </q-item>
        <q-separator class="q-mb-lg" />
        <q-item
          v-for="(item, index) in items"
          :active="checkActive(item)"
          active-class="night-drawer__list-item__active text-white"
          :key="`item-menu-${index}`"
          clickable
          v-ripple
          @click="routerPage(item.url)"
        >
          <q-item-section>
            <div class="row">
              <q-icon
                :name="item.icon"
                size="18px"
                right
                color="text-dark"
                class="q-mr-sm"
              />
              <div
                class="text-body2 text-weight-medium"
                :class="[ checkActive(item) ? 'text-weight-bold' : 'text-weight-medium']"
              >
                {{ item.value }}
              </div>
            </div>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
        >
          <q-item-section>
            <a
              class="row text-body2 text-white"
              href="http://localhost:9011"
            >
              <q-icon
                name="o_group"
                size="18px"
                right
                color="text-grey-9"
                class="q-mr-sm"
              />
              <div
                class="text-body2 text-weight-medium"
              >
                Пользователи
              </div>
            </a>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style lang="sass" scoped>
.night-drawer
  &__list
    margin:
      top: 2px
    &-item
      &__active
        background: #091D34
  &__logo
    height: 64px
</style>
