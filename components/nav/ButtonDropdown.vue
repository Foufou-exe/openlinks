<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="">
        <Icon name="circum:menu-kebab" class="text-xl" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="lg:w-80 md:w-80 sm:w-50 ml-1">
      <DropdownMenuLabel>
        <a class="flex items-center text-base font-medium space-x-2" href="/">
          <NuxtImg src="/icon.png" class="w-[30px]" />
          <h1>Openlinks</h1>
        </a>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuLabel>
          <h3 class="md:text-base lg:text-base sm:text-sm font-medium">🎈 Getting started</h3>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <a href="/#about" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:home" class="text-lg" />
            <span>About</span>
          </a>
          <DropdownMenuShortcut>
            Ctrl⇧A
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/#why" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:search" class="text-lg" />
            <span>Why use Openlinks ?</span>
          </a>
          <DropdownMenuShortcut>
            Ctrl⇧A
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/#security" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:server" class="text-lg" />
            <span>Security</span>
          </a>
          <DropdownMenuShortcut>
            Ctrl⇧A
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuLabel>
          <h3 class="md:text-base lg:text-base sm:text-sm font-medium">✨Features</h3>
        </DropdownMenuLabel>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuLabel>
          <h3 class="md:text-base lg:text-base sm:text-sm font-medium">📌 Need help ?</h3>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <a href="/faq" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:square-question" class="text-lg" />
            <span>FAQ</span>
          </a>
          <DropdownMenuShortcut>
            Ctrl+Alt+F
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/support" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:stethoscope" class="text-lg" />
            <span>Support</span>
          </a>
          <DropdownMenuShortcut>
            Ctrl+Alt+S
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/support" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:edit" class="text-lg" />
            <span>Contact</span>
          </a>
          <DropdownMenuShortcut>
            Ctrl+Alt+C
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <StarsGithub title="Github Stars :" size="text-lg" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup>
import StarsGithub from './StarsGithub.vue';
</script>