<script setup lang="ts">
import InformationCircle from '~/components/icons/InformationCircle.vue';


</script>

<template>
    <div class="flex w-full flex-col ronded-[10px] border p-4 border-dark-grey bg-white gap-6 ">
        <div class="flex justify-between">
            <div class="grid grid-cols-[24px_auto] gap-2">
                <InformationCircle />
                <div class="self-center font-bold leading-[140%]">Info Notification Box</div>

            </div>
        </div>
        <div class="richtext-wrapper md:text-md">
            <p>
                Über die Verwendung Ihrer personenbezogenen Daten informieren wir Sie ausführlich gemäß Art. 13 DS-GVO in unserer Datenschutzerklärung. 
            </p>

        </div>
        
    </div>
</template>
