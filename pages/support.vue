<template>
    <div class="mx-auto w-full max-w-3xl px-4 pt-16 pb-4 md:px-6 lg:px-8 min-h-screen">
        <div class="flex flex-col space-y-5">
            <h1 class="text-4xl font-bold">Support</h1>
            <span class="text-lg font-thin">Please feel free to contact us.</span>
        </div>
        <div class="mx-auto flex flex-col max-w-md space-y-10 mt-5 p-10">
            <a href="" class="flex flex-col items-center justify-center pt-2">
                <Icon name="pajamas:github" class="mx-auto lg:text-6xl md:text-5xl text-5xl" />
                <p class="mt-2">Github</p>
            </a>
            <a href="mailto:" class="flex flex-col items-center justify-center pt-2">
                <Icon name="circum:mail" class="mx-auto lg:text-6xl md:text-5xl text-5xl" />
                <p class="mt-2">Email</p>
            </a>
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