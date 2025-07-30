<script setup lang="ts">
import { ref } from "vue";
import Burger from "../icons/Burger.vue";
import Close from "../icons/Close.vue";
import Navigation from '../layoutsElement/header/Navigation.vue';

const menuContent = [
  { menuItem: "Hotelausstattung",
    path: "/hotelausstattung"
   },
  { menuItem: "Service & Qualität",
    path: "/service-qualitaet"
   },
  { menuItem: "Über uns",
    path: "/ueber-uns"
   },
  { menuItem: "Kontakt",
    path: "/kontakt"
   },
];

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
          <NuxtLink
            to="/"
            class="w-[120px] outline-offset-2 outline-focus-dark focus-visible:outline lg:w-[156px]"
          >
            <img class="w-32" src="/logo.svg" alt="allnatura_logo" />
          </NuxtLink>
          <!-- Burger Button nur auf mobilen Geraeten -->
          <button
            @click="toggleMenu"
            class="md:hidden focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <Burger />
          </button>
          <!-- Mobile Menü: sichtbar wenn burger geklickt, nur auf mobilen Geräten -->
          <div v-if="menuOpen" class="md:hidden">
            <Navigation
              v-for="(item, index) in menuContent"
              :key="index"
              :menuItem="item.menuItem"
              :path="item.path"
            />
          </div>
          <!-- Mobile Overlay Menü -->
          <transition name="fade">
            <div
              v-if="menuOpen"
              class="fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-center items-center"
              @click.self="closeMenu"
            >
              <nav class="bg-white rounded-lg w-3/4 max-w-xs p-6">
                <button
                  @click="closeMenu"
                  aria-label="Close menu"
                  class="mb-6 text-2xl font-bold"
                >
                  <Close />
                </button>
                <ul class="flex flex-col gap-6">
                  <li v-for="(item, index) in menuContent" :key="index">
                    <a
                      href="#"
                      @click="closeMenu"
                      class="block text-lg font-semibold"
                    >
                      {{ item.menuItem }}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </transition>

          <!-- Menüzeile: Desktop-Version ab md -->
          <div
            class="hidden md:flex items-center gap-6 whitespace-nowrap overflow-x-auto"
          >
            <Navigation
              v-for="(item, index) in menuContent"
              :key="index"
              :menuItem="item.menuItem"
              :path="item.path"

            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
