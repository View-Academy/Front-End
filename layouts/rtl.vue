<template>
  <div
    id="app-layout"
    :class="isCollapsed ? 'g-sidenav-hidden' : 'g-sidenav-show'"
  >
    <div class="min-height-300 position-absolute w-100 bg-success" />
    <SidenavRTL />
    <main class="main-content position-relative max-height-vh-100 h-100">
      <NavbarRTL />
      <slot />
      <FooterRTL />
      <Configurator isRTL />
    </main>
  </div>
</template>

<script setup>
import SidenavRTL from "@/examples/Sidenav/RTL.vue";
import NavbarRTL from "@/examples/Navbar/RTL.vue";
import FooterRTL from "@/examples/Footer/RTL.vue";
import Configurator from "~~/examples/Configurator";
import { useNavStore } from "~~/stores/NavStore";

const navStore = useNavStore();
const isCollapsed = computed(() => {
  return navStore.isSidenavCollapsed;
});
useHead({
  bodyAttrs: {
    class: "bg-gray-100 rtl",
  },
  htmlAttrs: {
    lang: "ar",
    dir: "rtl",
  },
});
onUnmounted(() => {
  useHead({
    bodyAttrs: {
      class: "bg-gray-100",
    },
    htmlAttrs: {
      lang: "en",
      dir: "ltr",
    },
  });
});
</script>
