<template>
  <div class="min-h-screen">
    <nav class="flex p-2">
      <a class="flex items-center text-lg font-medium space-x-2" href="/">
        <NuxtImg src="/icon.png" class="w-[40px]" />
        <h1>Openlinks</h1>
      </a>
    </nav>

    <main class="p-5 grid grid-cols-1 md:grid-cols-2">
      <div class="flex flex-col justify-center">
        <div class="mb-4">
          <NuxtImg src="/images/profile/user1.png" class="w-20 h-20 rounded-xl border-2 border-white"/>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2">You're Invited!</h2>
          <p class="text-lg font-medium mb-4">./Foufou-exe invited you to join Openlinks</p>
          <p class="text-gray-400 mb-5">Join the community and share your links.</p>
        </div>
        <div>
          <Button>
            <span class="text-lg font-bold">Join now</span>
          </Button>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
//
</script>