<template>
  <!-- FLEX CONTAINER (optional, wirkt hier nicht auf Reihenfolge) -->
  <div class="size-full">
    <!-- GRID CONTAINER -->
    <section class="grid lg:grid-cols-2 lg:gap-6 gap-8 mx-auto max-w-8xl px-4 py-6 md:px-8 lg:py-8 2xl:px-0">
      
      <!-- Bild -->
      <div :class="reversed ? 'order-2' : 'order-1'" class="relative">
        <div class="relative"> 
          <div class="contents size-full">
            <img
              :src="imgSrc"
              :alt="imgAlt"
              class="object-center size-full rounded-[10px]"
              width="470"
            />
          </div>
        </div>
      </div>

      <!-- Text -->
      <div :class="reversed ? 'order-1' : 'order-2'" class="flex flex-col gap-4 self-center">
        <div class="flex flex-col gap-4">
          <ImageTitleText
            :title="title"
            :textOne="textOne"
            :textTwo="textTwo"
          />
          <ButtonBgGreen 
          v-if="showButton"
          :type="type"
          :disabled="disabled"
          :text="text"
          :link="link"
          />
        </div>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import ImageTitleText from './ImageTitleText.vue'
import ButtonBgGreen from './ButtonBgGreen.vue'
import type { PropType } from 'vue'


defineProps({
  imgAlt: String,
  imgSrc: String,
  title: {type: String, required: true},
  textOne: String,
  textTwo: String,
  reversed: Boolean,
  // button props
  showButton: { type: Boolean, default: false },
  type: String as PropType<'button' | 'submit' | 'reset'>,
  disabled: Boolean,
  text: String,
  link: String as PropType<string | null>,
})
</script>
