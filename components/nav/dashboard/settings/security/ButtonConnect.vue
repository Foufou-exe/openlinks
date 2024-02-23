<template>
  <Button 
    class="flex justify-center items-center space-x-5 font-bold md:w-1/3" 
    type="button"
    v-for = "ButtonConnects in ButtonConnect"
    :key="ButtonConnects.name"
  >
    <Icon :name="ButtonConnects.icon" class="text-xl" />
    <span>{{ ButtonConnects.name }}</span>
  </Button>
</template>

<script lang="ts" setup>
const ButtonConnect = ref([
  {
    name: 'Connect with Google',
    icon: 'logos:google-icon',
  },
  {
    name: 'Connect with Github',
    icon: 'pajamas:github',
  },
])
</script>
