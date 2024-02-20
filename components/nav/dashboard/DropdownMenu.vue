<template>
  <Sheet>
    <SheetTrigger>
      <Button variant="ghost" class="block lg:hidden p-2">
        <Icon name="circum:menu-burger" class="text-xl" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <Logo />
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>

<script lang="ts" setup>
import Logo from '@/components/nav/dashboard/Logo.vue';
</script>

<style></style>