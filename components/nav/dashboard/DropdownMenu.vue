<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="ghost" class="block lg:hidden">
        <Icon name="circum:menu-burger" class="text-xl" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  
</template>

<script lang="ts" setup>

</script>

<style>

</style>