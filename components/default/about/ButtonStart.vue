<template>
        <Dialog>
            <DialogTrigger as-child>
                <Button type="button" class="flex items-center justify-center" :size="sizeButton" :class="sizeText">
                    Get Started
                    <Icon name="carbon:arrow-right"  class="ml-1" :class="sizeIcons"/>
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
                        <a href="/auth?tab=login" class="text-blue-500 ml-1 hover:underline"> Sign up</a>
                    </p>
                </div>
            </DialogContent>
        </Dialog>
</template>

<script setup>
defineProps({
    sizeButton: {
        type: String,
        default: ''
    },
    sizeText: {
        type: String,
        default: ''
    },
    sizeIcons: {
        type: String,
        default: 'text-xl'
    }
})
</script>
