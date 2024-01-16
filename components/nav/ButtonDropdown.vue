<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="">
        <Icon name="circum:menu-kebab" class="text-xl" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="lg:w-56 md:w-56 sm:w-50 ml-1">
      <DropdownMenuLabel>
        <a class="flex items-center text-base font-medium space-x-2" href="/">
          <NuxtImg src="/icon.png" class="w-[30px]" />
          <h1>Openlinks</h1>
        </a>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
          <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Getting started</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <a href="/#about" class="flex items-center justify-center space-x-1 mr-2">
                  <Icon name="circum:home" class="text-lg"/>
                  <span>About</span>
                </a>
                <DropdownMenuShortcut>
                   Ctrl⇧A
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/#why" class="flex items-center justify-center space-x-1 mr-2">
                  <Icon name="circum:search" class="text-lg"/>
                  <span>Why ?</span>
                </a>
                <DropdownMenuShortcut>
                  Ctrl⇧A
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/#security" class="flex items-center justify-center space-x-1 mr-2">
                  <Icon name="circum:server" class="text-lg"/>
                  <span>Security</span>
                </a>
                <DropdownMenuShortcut>
                  Ctrl⇧A
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
          </DropdownMenuSub>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
          <StarsGithub title="Github Stars :" size="text-lg"/>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup>
import StarsGithub from './StarsGithub.vue';
</script>