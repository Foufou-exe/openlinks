<template>
<Card>
  <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-1">
    <CardTitle class="text-xl font-medium ">
      {{ title }}
    </CardTitle>
    <Icon :name="icon" class="text-4xl border rounded-md p-1" />
  </CardHeader>
  <CardContent class="flex flex-col justify-center">
    <div class="pb-1">
      <span class="text-5xl font-bold">
        {{ total }}
      </span>
    </div>
    <div class="pb-1">
      <p class="text-xs text-muted-foreground">
        Total {{ description }}
      </p>
    </div>
  </CardContent>
</Card>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  icon: String,
  total: Number,
  description: String,
});
</script>