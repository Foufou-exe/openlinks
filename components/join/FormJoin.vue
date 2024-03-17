<template>
  <div class="min-h-screen from-secondary/0 via-secondary/40 to-[#f66428]/20 bg-gradient-to-b">
    <nav class="flex p-3 justify-center lg:justify-start">
      <a class="flex items-center text-lg font-medium space-x-2" href="/">
        <NuxtImg src="/icon.png" class="w-[40px]" />
        <h1>Openlinks</h1>
      </a>
    </nav>

    <main class="grid grid-cols-1 lg:grid-cols-2 justify-items-center py-10">
      <div class="flex flex-col justify-center items-start pl-10">
        <div>
          <NuxtImg :src="data.photoUser" alt="User photo" class="w-16 md:w-20 h-16 md:h-20 rounded-xl border-2 border-white mb-5" />
        </div>
        <div>
          <h2 class="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-[#f1057f] via-[#f54644] to-[#ff8c06] inline-block text-transparent bg-clip-text">You're Invited!</h2>
          <p class="text-md md:text-lg font-medium mb-4">{{ data.nameUser }} invited you to join Openlinks</p>
        </div>
        <div>
          <p class="text-gray-400 mb-5 line-clamp-3 break-words w-1/2">
            Join the community and share your links. Openlinks is a free and open-source platform that allows you to
            share
            your links with the world.
          </p>
        </div>
        <div>
          <Button as-child>
            <a href="/auth?tab=register" class="flex justify-center items-center">
              <Icon name="mdi:account-supervisor" class="mr-2 text-xl" />
              <span class="text-md md:text-lg font-bold">Join now</span>
            </a>
          </Button>
        </div>
      </div>
      <div class="hidden md:flex justify-center items-center lg:pt-0 pt-10">
        <NuxtImg src="/images/demo/exemple.png" class="max-w-full max-h-full" />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
const data = {
  photoUser: 'https://avatars.githubusercontent.com/u/7221389?v=4',
  nameUser: 'John Doe'
}
</script>