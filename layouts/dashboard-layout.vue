<template>
  <div class="overflow-hidden h-screen flex flex-col">
    <nav class="flex justify-between items-center p-2 dark:bg-neutral-900/40 bg-muted/10 border-b">
      <div class="flex space-x-1 items-center p-1">
        <LinkLogo class="hidden md:flex" />
      </div>
      <div class="flex space-x-1 items-center p-1">
        <ButtonCreateLinks />
        <ButtonSearchDashboard />
        <ButtonThemeNavVue />
        <DropdownProfile />
      </div>
    </nav>
  
  
    <div class="flex flex-1 overflow-hidden">
      <aside class="w-64  bg-muted/10 dark:bg-neutral-900/40 border-r overflow-y-auto" aria-label="Sidebar">
          <div class="py-5 px-3 space-y-5">
            <ul>
              <li class="flex items-center py-1 space-x-2 px-4 text-lg font-semibold tracking-tight">
                <span class="">Private</span>
              </li>
              <Button variant="ghost" class="w-full justify-start">
                <Icon name="circum:link" class="text-xl" />
                <span class="ml-2">My links</span>
              </Button>
              <Button variant="ghost" class="w-full justify-start">
                <Icon name="carbon:collapse-categories" class="text-xl" />
                <span class="ml-2">My Categories</span>
              </Button>
            </ul>
            <ul>
              <li class="flex items-center space-x-2 px-4 py-1 text-lg font-semibold tracking-tight">
                <span>Teams</span>
              </li>
              <ScrollArea class="h-[110px] px-1">
                <Button variant="ghost" class="w-full justify-start">
                  <Icon name="circum:circle-plus" class="text-xl" />
                  <span class="ml-2">New Team</span>
                </Button>
                <Button variant="ghost" class="w-full justify-start">
                  <NuxtImg src="/images/teams/groupeUser.jpg" class="w-5 h-5 rounded-lg" />
                  <span class="ml-2">Openlinks</span>
                </Button>
              </ScrollArea>
            </ul>
  
            <ul>
              <li class="flex items-center space-x-2 px-4 py-1 text-lg font-semibold tracking-tight">
                <span class="">Manage</span>
              </li>
              <Button variant="ghost" class="w-full justify-start">
                <Icon name="circum:star" class="text-xl" />
                <span class="ml-2">Favours</span>
              </Button>
              <Button variant="ghost" class="w-full justify-start">
                <Icon name="circum:read" class="text-xl" />
                <span class="ml-2">History</span>
              </Button>
            </ul>
  
            <ul class="pt-10">
              <Button variant="ghost" class="w-full justify-start">
                <Icon name="iconoir:terminal-tag" class="text-xl" />
                <span class="ml-2">Changelog</span>
              </Button>
              <Button variant="ghost" class="w-full justify-start">
                <Icon name="fluent:person-feedback-28-regular" class="text-xl" />
                <span class="ml-2">Feedback</span>
              </Button>
              <Button variant="ghost" class="w-full justify-start">
                <Icon name="circum:stethoscope" class="text-xl" />
                <span class="ml-2">Support</span>
              </Button>
            </ul>
          </div>
        </aside>
        <main class="flex-1 overflow-y-auto p-5">
          <slot />
        </main>
    </div>
  </div>
  </template>
  

<script lang="ts" setup>
import DropdownProfile from '@/components/nav/DropdownProfile.vue';
import ButtonThemeNavVue from '@/components/nav/ButtonThemeNav.vue';
import LinkLogo from '@/components/LinkLogo.vue';
import ButtonSearchDashboard from '@/components/nav/ButtonSearchDashboard.vue';
import ButtonCreateLinks from '@/components/nav/ButtonCreateLinks.vue'

</script>