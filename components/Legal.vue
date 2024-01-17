<template>
    <div class="mx-auto w-full max-w-3xl px-4 pt-16 pb-10 md:px-6 lg:px-8 min-h-screen">
        <div class="flex flex-col space-y-5">
            <h1 class="text-4xl font-bold">{{ maintitle }}</h1>
            <span class="text-lg font-thin">
               {{ description  }}
            </span>
        </div>
        <div class="mt-5 flex flex-col" v-for="items in item" :key="items.title">
            <h1 class="text-2xl font-bold mb-2">{{ items.title }}</h1>
            <p class="text-base">{{ items.contenu }}</p>
        </div>
        <div class="flex justify-end mt-10">
            <Button type="button" variant="secondary" as-child>
                <a href="/" class="flex items-center justify-center">
                    <Icon name="circum:home" class="mr-2 text-lg" />
                    Home
                </a>
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    maintitle: String,
    description: String,
    item: Object,
})
</script>