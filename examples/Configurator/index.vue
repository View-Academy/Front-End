<template>
   <div class="fixed-plugin" :class="showConfig && 'show'">
      <a class="px-3 py-2 fixed-plugin-button text-dark position-fixed" @click="toggleShowConfig">
         <i class="py-2 fa fa-cog"></i>
      </a>
      <div class="shadow-lg card">
         <div class="pt-3 pb-0 bg-transparent card-header">
            <div class="float-start" :class="isRTL && 'text-start'">
               <h5 class="mt-3 mb-0"> Configurator</h5>
               <p>dashboard options.</p>
            </div>
            <div class="mt-4 float-end" @click="toggleShowConfig">
               <button class="p-0 btn btn-link text-dark fixed-plugin-close-button">
                  <i class="fa fa-close"></i>
               </button>
            </div>
            <!-- End Toggle Button -->
         </div>
         <hr class="my-1 horizontal dark" />
         <div class="pt-0 card-body pt-sm-3">


            <!-- Sidenav Type -->
            <div class="mt-3" :class="isRTL && 'text-start'">
               <h6 class="mb-0">Sidenav Type</h6>
               <p class="text-sm">Choose between 2 different sidenav types.</p>
            </div>
            <div class="d-flex" :class="isRTL && 'text-start'">
               <button id="btn-white" class="btn bg-gradient-success w-100 px-3 mb-2 me-2 ms-2"
                  :class="sidenavType === 'bg-white' && ' active'" @click="setSidenavType('bg-white')">
                  White
               </button>
               <button id="btn-dark" class="btn bg-gradient-success w-100 px-3 mb-2"
                  :class="sidenavType === 'bg-default' && 'active'" @click="setSidenavType('bg-default')">
                  Dark
               </button>
            </div>
            <p class="mt-2 text-sm d-xl-none d-block">
               You can change the sidenav type just on desktop view.
            </p>
            <!-- Navbar Fixed -->



            <div class="my-5 d-flex" :class="isRTL && 'text-start float-start'">
               <h6 class="mb-0">Light / Dark</h6>
               <div class="form-check form-switch ms-auto my-auto">
                  <input class="form-check-input mt-1" :class="isRTL ? 'float-end me-auto' : ' ms-auto'" type="checkbox"
                     @click="toggleDarkMode" />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { activateDarkMode, deactivateDarkMode } from "~~/assets/js/dark-mode";
import { useNavStore } from "~~/stores/NavStore";

defineProps({
   isRTL: {
      type: Boolean,
      default: false,
   },
});
const navStore = useNavStore();

function toggleDarkMode() {
   navStore.toggleDarkMode();
   if (navStore.darkMode) {
      if (process.client) {
         activateDarkMode();
         setSidenavType("bg-default");
      }
   } else {
      deactivateDarkMode();
      setSidenavType("bg-white");
   }
}

const sidenavType = computed(() => {
   return navStore.sidenavType;
});
const showConfig = computed(() => {
   return navStore.showConfig;
});
function toggleShowConfig() {
   navStore.toggleShowConfig();
}
function setSidenavType(type) {
   navStore.setSidenavType(type);
}
function sidenavColor(color = "success") {
   document.querySelector("#sidenav-main").setAttribute("data-color", color);
}
function toggleSidenav() {
   navStore.toggleSidenavCollapsing();
}
function toggleNavFixed() {
   navStore.toggleNavFixed();
}
</script>
