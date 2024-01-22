<template>
    <div class="p-5 border rounded-lg shadow-md dark:bg-neutral-900/20">
        <div class="flex items-center space-x-3">
            <Icon :name="icons" class="text-4xl" />
            <span class="font-semibold text-lg">
                {{ title }}
            </span>
        </div>
        <div class="mt-3">
            <p class="font-thin">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{ title?: string; description?: string ,icons?: string }>()
</script>

