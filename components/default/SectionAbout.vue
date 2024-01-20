<template>
    <div class="w-full md:w-55/100 lg:pt-10 space-y-5">
        <h1 class="font-bold text-4xl leading-none md:mt-0">Organise, Share and Protect Your Favourite Links with Openlinks <span class="animate-pulse">✨</span></h1>
        <p class="text-lg font-normal">
            OpenLinks, your link manager for confidentiality and adaptability, is reinventing the way you back up and access your online resources. Whether you're a professional, a student or anyone else, our service makes it easy to organise and retrieve your important content, accessible anywhere and on any device.
        </p>
        <Dialog>
            <DialogTrigger as-child>
                <Button type="button" class="flex items-center justify-center rounded-full ">
                    <Icon name="circum:paperplane"  class="text-xl mr-1"/>
                    Get Started
                </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px]">
                <DialogHeader class="space-y-7">
                    <DialogTitle class="flex justify-center items-center space-x-2">
                        <NuxtImg src="/icon.png" alt="OpenLinks" width="80"/>
                        <Icon name="circum:shuffle"  class="text-5xl text-gray-400"/>
                        <Icon name="circum:share-2"  class="text-6xl bg-muted rounded-lg p-2"/>
                    </DialogTitle>
                    <DialogTitle class="font-semibold flex justify-center items-center text-xl">
                        Openlinks is a link manager designed for confidentiality and flexibility.
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <Separator class="my-4"/>
                    <div class="flex space-x-4 justify-center items-center">
                        <Icon name="circum:folder-on"  class="text-3xl "/>
                        <p class="text-gray-400">
                            Organise your links into folders and subfolders
                        </p>
                    </div>
                    <Separator class="my-4"/>
                    <div class="flex space-x-4 justify-center items-center">
                        <Icon name="circum:share-2"  class="text-3xl"/>
                        <p class="text-gray-400">
                            Share your links with your friends and colleagues
                        </p>
                    </div>
                    <Separator class="my-4"/>
                </div>
                <div class="space-y-2">
                    <Button type="button" class="w-full" as-child>
                        <a href="/auth" class="flex items-center text-lg">
                            <Icon name="circum:login"  class="text-2xl mr-2"/>
                             Sign in
                        </a>
                    </Button>
                    <p class="flex justify-center items-center">
                        Or you can have account  
                        <a href="/auth?tab=login" class="text-blue-500 ml-1"> Sign up</a>
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    </div>
    <div class="hidden md:block md:w-full">
        <client-only>
            <Vue3Lottie :loop="false" animationLink="/json/index_image1.json" alt="OpenLinks"  class="ml-auto object-contain md:w-full lg:w-full"/>
        </client-only>
    </div>

</template>

<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
</script>