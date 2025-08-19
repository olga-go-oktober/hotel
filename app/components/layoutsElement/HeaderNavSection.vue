<script setup lang="ts">
import { ref } from "vue";
import Burger from "../icons/Burger.vue";
import Close from "../icons/Close.vue";
import Navigation from '../layoutsElement/header/Navigation.vue';
import DropdownNavigation from './header/DropdownNavigation.vue'
import { MENU_ITEMS } from '~/constants/data';

const menuOpen = ref(false);
const openDropdownIndex = ref<number|null>(null);

function openMenu() {
  menuOpen.value = true;
}

function closeMenu() {
  menuOpen.value = false;
}

</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo large-->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="w-[120px] flex items-center lg:w-[156px]">
            <img src="/logo.svg" alt="allnatura Logo" class="block" />
          </NuxtLink>
        </div>
        

        <!-- Navigation -->
        <div class="flex items-center gap-4">
          <!-- Mobile Menu Button -->
          <button
            @click="openMenu"
            class="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
  </header>
</template>

