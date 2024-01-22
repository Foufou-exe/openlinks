<template>
    <div class="mx-auto w-full max-w-3xl px-4 pt-16 pb-4 md:px-6 lg:px-8 min-h-screen space-y-10">
        <div class="flex flex-col space-y-5">
            <h1 class="text-4xl font-bold">Support</h1>
            <span class="text-lg font-thin">Please feel free to contact us.</span>
        </div>
        <ul class="space-y-5">
            <li>
                <a href="https://github.com/Foufou-exe/openlinks" class="flex flex-col items-center justify-center">
                    <Icon name="pajamas:github" class="mx-auto lg:text-6xl md:text-5xl text-5xl hover:text-gray-300" />
                    <p class="mt-2">Github</p>
                </a>
            </li>
            <li>
                <a href="https://discord.gg/gPbUrvMnQY" class="flex flex-col items-center justify-center">
                    <Icon name="pajamas:discord" class="mx-auto lg:text-6xl md:text-5xl text-5xl hover:text-gray-300" />
                    <p class="mt-2">Discord</p>
                </a>
            </li>

            <li>
                <a href="mailto:support@openlinks.fr" class="flex flex-col items-center justify-center">
                    <Icon name="circum:mail" class="mx-auto lg:text-6xl md:text-5xl text-5xl hover:text-gray-300" />
                    <p class="mt-2">Email</p>
                </a>
            </li>
        </ul>
        <div class="flex justify-end">
            <Button type="button" variant="secondary" as-child> 
                <a href="/" class="flex items-center justify-center">
                    <Icon name="circum:home" class="mr-2 text-lg" />
                    Home
                </a>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Openlinks - Support',
})
</script>