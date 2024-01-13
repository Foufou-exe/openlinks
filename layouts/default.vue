<template>
    <nav class="flex justify-between p-1">
        <div>
            <LinkLogo/>
        </div>
        <div>

        </div>
        <div class="flex space-x-1">
            <ButtonThemeNav/>
            <ButtonLogin />
        </div>
    </nav>
    <slot/>
</template>

<script setup>
import LinkLogo from '@/components/LinkLogo.vue';
import ButtonThemeNav from '@/components/nav/ButtonThemeNav.vue';
import ButtonLogin from '@/components/nav/ButtonLogin.vue';
</script>