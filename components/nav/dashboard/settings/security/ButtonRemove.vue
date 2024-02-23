<template>
  <Button 
    class="flex justify-center items-center space-x-5 font-bold md:w-1/3 hover:bg-destructive border-2"
    type="button" variant="outline"
    v-for="ButtonRemoves in ButtonRemove"
    :key="ButtonRemoves.name"
    
  >
    <Icon :name="ButtonRemoves.icon" class="text-xl" />
    <span>{{ ButtonRemoves.name }}</span>
  </Button>
</template>

<script lang="ts" setup>
const ButtonRemove = ref([
  {
    name: 'Remove Google',
    icon: 'logos:google-icon',
  },
  {
    name: 'Remove Github',
    icon: 'pajamas:github',
  },
])

</script>
