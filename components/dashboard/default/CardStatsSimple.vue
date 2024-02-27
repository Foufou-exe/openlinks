<template>
  <div class="border rounded-xl px-2 py-2 flex justify-between items-center">
    <div class="flex items-center">
      <div class="mr-4 flex items-center justify-center space-x-1">
        <Icon :name="icon" class="text-white text-4xl p-1 border rounded-md" />
        <span class="font-semibold">{{ title }}</span>
      </div>
    </div>
    <div class="text-sm text-gray-400 space-x-1">
      <span class="text-3xl font-bold text-white">{{ total }}</span>
      <span>/ Total {{ description }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  icon: String,
  total: Number,
  description: String,
});
</script>