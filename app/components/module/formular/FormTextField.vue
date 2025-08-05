<script setup lang="ts">

</script>

<template>
    <div class="flex w-full flex-col gap-1">
            <label class="pointer-events-none w-fit text-sm" for="inputTextId"> Ihre Nachricht an uns </label>
            <div class="relative">
                <textarea 
                id="inputTextId"
                name="name"
                placeholder="Geben Sie hier Ihren Text ein…"
                class="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none resize-none min-h-[300px]" >
            </textarea>
                
            </div>

        </div>
</template>
