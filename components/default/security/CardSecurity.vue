<template>
  <div class="p-5 border rounded-lg shadow-md dark:bg-neutral-900/20">
    <div class="flex items-center space-x-3">
      <Icon :name="icons" class="text-4xl bg-muted rounded p-1" />
      <h1 class="font-semibold text-lg">
        {{ title  }}
      </h1>
    </div>
    <div class="mt-3">
      <p class="font-thin">
        {{ description }}
      </p>
    </div>
    <h3 class="mt-3 font-medium">
      {{ title2  }}
    </h3>
    <div class="mt-3">
      <p class="font-thin">
        {{ description2 }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title?: string; description?: string ,icons?: string , title2?: string; description2?: string }>()
</script>
