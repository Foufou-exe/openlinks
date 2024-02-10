<template>
  <div class="flex justify-center items-center min-h-screen">
    <div>
      <div class="space-y-14 flex flex-col justify-center items-center">
        <div class="flex space-x-5 group">

          <div class="border dark:bg-neutral-900/50 bg-neutral-100 px-6 py-10 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:z-10 relative hover:border-green-500 ">
            <Icon name="circum:star" class="text-4xl text-gray-500 dark:hover:text-yellow-300 hover:text-yellow-500" />
          </div>

          <div class="border dark:bg-neutral-900/50 bg-neutral-100 px-6 py-10 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:z-10 hover:border-green-500 relative shadow-2xl transform -translate-y-4">
            <Icon name="circum:link" class="text-4xl text-gray-500 hover:text-gray-400" />
          </div>

          <div class="border dark:bg-neutral-900/50 bg-neutral-100 px-6 py-10 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:z-10 relative hover:border-green-500">
            <Icon name="circum:share-2" class="text-4xl text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 " />
          </div>
        </div>
        <span class="font-semibold text-xl">
          Save your first link by clicking on the <span class="p-2 border rounded-xl font-bold">Create Link</span>
          button.
        </span>
        <ButtonCreateLinks />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonCreateLinks from '@/components/nav/ButtonCreateLinks.vue';
</script>