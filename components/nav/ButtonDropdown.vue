<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="sm:flex md:flex lg:hidden">
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
            {{ osStore.shortcutSymbol }}+Alt+A
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/#why" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:search" class="text-lg" />
            <span>Why use Openlinks ?</span>
          </a>
          <DropdownMenuShortcut>
            {{ osStore.shortcutSymbol }}+Alt+Q
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/#HowDoIUseIt" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:read" class="text-lg" />
            <span>How do i use it ?</span>
          </a>
          <DropdownMenuShortcut>
            {{ osStore.shortcutSymbol }}+Alt+O
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuLabel>
          <h3 class="md:text-base lg:text-base sm:text-sm font-medium">✨Features</h3>
        </DropdownMenuLabel>

        <DropdownMenuItem>
          <a href="/faq" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:server" class="text-lg" />
            <span>Security</span>
          </a>
          <DropdownMenuShortcut>
            {{ osStore.shortcutSymbol }}+Alt+N
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <!-- <DropdownMenuItem>
          <a href="/faq" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:square-question" class="text-lg" />
            <span>Feature 1</span>
          </a>
          <DropdownMenuShortcut>
            {{ osStore.shortcutSymbol }}+Alt+F
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/faq" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:square-question" class="text-lg" />
            <span>Feature 1</span>
          </a>
          <DropdownMenuShortcut>
            {{ osStore.shortcutSymbol }}+Alt+F
          </DropdownMenuShortcut>
        </DropdownMenuItem> -->
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
            {{ osStore.shortcutSymbol }}+Alt+F
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/support" class="flex items-center justify-center space-x-1 mr-2">
            <Icon name="circum:stethoscope" class="text-lg" />
            <span>Support</span>
          </a>
          <DropdownMenuShortcut>
            {{ osStore.shortcutSymbol }}+Alt+S
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
import { useOsStore } from '@/stores/osStore.js';
const osStore = useOsStore();

import { watch } from 'vue';
import { useMagicKeys } from '@vueuse/core';
import { useRouter } from 'vue-router';

const { router } = useRouter()
const keys = useMagicKeys()

// Définissez des watchers pour chaque raccourci clavier
watch(keys['Ctrl+Alt+A'] || keys['Meta+Alt+A'], (isPressed) => {
  if (isPressed) navigateTo('/#about');
});

watch(keys['Ctrl+Alt+Q'] || keys['Meta+Alt+Q'], (isPressed) => {
  if (isPressed) navigateTo('/#why');
});

watch(keys['Ctrl+Alt+O'] || keys['Meta+Alt+O'], (isPressed) => {
  if (isPressed) navigateTo('/#HowDoIUseIt');
});

watch(keys['Ctrl+Alt+F'] || keys['Meta+Alt+F'], (isPressed) => {
  if (isPressed) navigateTo('/faq');
});

watch(keys['Ctrl+Alt+S'] || keys['Meta+Alt+S'], (isPressed) => {
  if (isPressed) navigateTo('/support');
});

watch(keys['Ctrl+Alt+N'] || keys['Meta+Alt+N'], (isPressed) => {
  if (isPressed) navigateTo('/#security');
});


</script>