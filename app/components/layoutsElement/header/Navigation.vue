<script setup lang="ts">
interface Props {
  menuItem: string
  path: string
}
defineProps<Props>()
</script>

<template>
  <nav id="main-navigation" class="w-full pb-0.5 focus-visible:outline-none">
    <ul class="flex w-full list-none flex-row items-center gap-x-6 !pl-0" role="menubar">
      <li class="!p-0" role="menuitem">
        <NuxtLink 
        :to="path"
        class="block cursor-pointer fill-current !px-0 font-subline font-normal underline-offset-[5px] visited:text-black focus:no-underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-focus-dark active:!text-black-500 no-underline hover:underline">
          <span class="flex w-full items-center gap-2 active:text-black-500 flex-row">
            {{ menuItem }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
  