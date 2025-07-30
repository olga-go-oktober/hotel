<script setup lang="ts">
import { ref } from "vue";
import Burger from "../icons/Burger.vue";
import Close from "../icons/Close.vue";
import Navigation from '../layoutsElement/header/Navigation.vue';
import DropdownNavigation from '../layoutsElement/header/DropdownNavigation.vue';
import { MENU_ITEMS } from '~/constants/data';

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <header
    class="w-full border-b border-gray-300 bg-white px-4 py-3 transition-all duration-200 ease-in-out focus-visible:outline-none md:px-8 lg:pb-6 lg:pt-[17px] 3xl:px-0"
  >
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col gap-5">
        <div class="flex items-center justify-between flex-wrap">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="w-[120px] outline-offset-2 outline-focus-dark focus-visible:outline lg:w-[156px]"
          >
            <img class="w-32" src="/logo.svg" alt="allnatura_logo" />
          </NuxtLink>
          
          <!-- Burger Button nur auf mobilen Geräten -->
          <button
            @click="toggleMenu"
            class="md:hidden focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <Burger />
          </button>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-6 whitespace-nowrap overflow-x-auto">
            <template v-for="(item, index) in MENU_ITEMS" :key="index">
              <!-- Dropdown Navigation für Hotelausstattung -->
              <DropdownNavigation
                v-if="item.submenu"
                :menuItem="item.menuItem"
                :path="item.path"
                :submenu="item.submenu"
              />
              <!-- Normale Navigation für andere Menüpunkte -->
              <Navigation
                v-else
                :menuItem="item.menuItem"
                :path="item.path"
              />
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Overlay Menü -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-center items-center md:hidden"
        @click.self="closeMenu"
      >
        <nav class="bg-white rounded-lg w-3/4 max-w-xs p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold">Menü</h2>
            <button
              @click="closeMenu"
              aria-label="Close menu"
              class="text-gray-500 hover:text-gray-700"
            >
              <Close />
            </button>
          </div>
          <ul class="flex flex-col gap-4">
            <li v-for="(item, index) in MENU_ITEMS" :key="index">
              <!-- Mobile Navigation mit Submenu -->
              <div v-if="item.submenu" class="mb-4">
                <NuxtLink
                  :to="item.path"
                  class="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
                >
                  {{ item.menuItem }}
                </NuxtLink>
                <!-- Mobile Submenu -->
                <ul class="ml-4 mt-2 space-y-2">
                  <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                    <NuxtLink
                      :to="subItem.path"
                      @click="closeMenu"
                      class="block text-sm text-gray-600 hover:text-gray-800 py-1"
                    >
                      {{ subItem.menuItem }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <!-- Normale Mobile Navigation -->
              <NuxtLink
                v-else
                :to="item.path"
                @click="closeMenu"
                class="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
              >
                {{ item.menuItem }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
