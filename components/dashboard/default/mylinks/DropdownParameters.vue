<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="ghost" class="mb-1" size="sm">
        <Icon name="circum:menu-kebab" class="text-xl" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[150px]">
      <DropdownMenuItem>
        <div class="flex justify-center">
          <Icon name="circum:star" class="w-5 h-5 mr-2 " />
          <span class="font-semibold">Favorite</span>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div class="flex justify-center">
          <Icon name="circum:redo" class="w-5 h-5 mr-2 " />
          <span class="font-semibold">Refresh Link</span>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div class="flex justify-center">
          <Icon name="circum:link" class="w-5 h-5 mr-2 " />
          <span class="font-semibold">Shared</span>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div class="flex justify-center">
          <Icon name="material-symbols-light:delete-outline" class="w-5 h-5 mr-2 " />
          <span class="font-semibold">Delete</span>
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
//
</script>