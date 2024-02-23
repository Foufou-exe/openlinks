<template>
  <Button variant="ghost" class="border rounded-lg space-x-2 flex justify-start" 
    v-for="color in SelectColor"
    :key="color.NameColor"
    :NameColor="color.NameColor"
    :background="color.background"
  >
    <div class="w-5 h-5 rounded-lg" :class="color.background"></div>
    <span>{{ color.NameColor }}</span>
  </Button>
</template>

<script lang="ts" setup>



const SelectColor = ref(
  [
    { NameColor: 'Default', background: 'bg-[#52525B]', name: 'theme-default'},
    { NameColor: 'Neutral', background: 'bg-[#404040]', name: 'theme-neutral'},
    { NameColor: 'Gray', background: 'bg-[#44403C]', name: 'theme-gray'},
    { NameColor: 'Stone', background: 'bg-[#334155]', name: 'theme-stone' },
    { NameColor: 'Rose', background: 'bg-[#BE123C]', name: 'theme-rose' },
    { NameColor: 'Blue', background: 'bg-[#1D4ED8]', name: 'theme-blue' },
    { NameColor: 'Green', background: 'bg-[#15803D]', name: 'theme-green' },
    { NameColor: 'Orange', background: 'bg-[#C2410C]', name: 'theme-orange'},
    { NameColor: 'Red', background: 'bg-[#B91C1C]', name: 'theme-red' },
    { NameColor: 'Yellow', background: 'bg-[#A16207]', name: 'theme-yellow' },
    { NameColor: 'Violet', background: 'bg-[#6D28D9]', name: 'theme-violet'},
  ]
)
</script>