<template>
  
  <nav class="flex justify-between p-2 dark:bg-neutral-900/40 bg-muted/10 border-b rounded-lg mx-1">
    <div class="flex space-x-1 justify-center items-center p-1">
      <LinkLogo class="max-sm:hidden md:hidden lg:flex" />
    </div>
    <div class="flex space-x-1 justify-center items-center p-1">
      <ButtonCreateLinks />
      <ButtonSearchDashboard />
      <ButtonThemeNavVue />
      <DropdownProfile />
    </div>
  </nav>
   <slot />
  





</template>

<script lang="ts" setup>
import DropdownProfile from '@/components/nav/DropdownProfile.vue';
import ButtonThemeNavVue from '@/components/nav/ButtonThemeNav.vue';
import LinkLogo from '@/components/LinkLogo.vue';
import ButtonSearchDashboard from '@/components/nav/ButtonSearchDashboard.vue';
import ButtonCreateLinks from '@/components/nav/ButtonCreateLinks.vue'

import { cn } from '@/lib/utils'
</script>
