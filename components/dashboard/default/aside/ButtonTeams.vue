<template>
    <Button variant="ghost" class="w-full justify-start" as-child>
      <a>
        <NuxtImg :src="imageTeams" class="w-5 h-5 rounded" />
        <span class="ml-2">{{ nameTeams }}</span>
      </a>
    </Button>
</template>

<script lang="ts" setup>
defineProps({
  imageTeams: {
    type: String,
    required: true
  },
  nameTeams: {
    type: String,
    required: true
  }
})

</script>
