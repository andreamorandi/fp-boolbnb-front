<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<template>
  <AppHeader />
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-60%);
}

.slide-leave-to {
  opacity: 1;
}
</style>