<template>
    <a href="https://github.com/Foufou-exe/openlinks" class="flex justify-center items-center">
        <Icon name="pajamas:github" class="mr-2"  :class="size"/>
        {{ title }}
        {{ NumberStars }}
    </a>
</template>


<script setup lang="ts">
defineProps<{ title?: string; size?: string; }>()
const NumberStars = ref(0)

</script>