<template>
  <div class="overflow-hidden h-screen flex flex-col">
    <nav class="flex justify-between items-center p-2 dark:bg-neutral-900/40 bg-muted/10 border-b">
      <div class="flex space-x-1 items-center p-1">
        <DropdownMenu  />
        <Logo class="hidden md:flex" />
      </div>
      <div class="flex space-x-1 items-center p-1">
        <ButtonCreateLinks />
        <ButtonSearchDashboard />
        <ButtonThemeNavVue />
        <DropdownProfile />
      </div>
    </nav>

    <div class="flex flex-1 overflow-hidden">
      <aside
        class="w-64 bg-muted/10 dark:bg-neutral-900/40 border-r overflow-y-auto hidden lg:flex flex-col justify-between"
        aria-label="Sidebar">
        <div class="py-5 px-3 space-y-5 flex-grow">
          <Button variant="ghost" class="w-full justify-start items-center" as-child>
              <a href="/dashboard">
                <Icon name="fluent:home-20-regular" class="text-xl" />
                <span class="ml-2">Home</span>
              </a>
            </Button>
          <ul>
            <li class="flex items-center py-1 space-x-2 px-4 text-lg font-semibold tracking-tight">
              <span class="">Private</span>
            </li>
            <Button variant="ghost" class="w-full justify-start items-center" as-child>
              <a href="/dashboard/private/mylinks">
                <Icon name="circum:link" class="text-xl" />
                <span class="ml-2">My Links</span>
              </a>
            </Button>
            <Button variant="ghost" class="w-full justify-start items-center">
              <Icon name="carbon:collapse-categories" class="text-xl" />
              <span class="ml-2">My Categories</span>
            </Button>
            <Button variant="ghost" class="w-full justify-start items-center">
              <Icon name="carbon:collapse-categories" class="text-xl" />
              <span class="ml-2">My Directories</span>
            </Button>
          </ul>
          <ul>
            <li class="flex items-center space-x-2 px-4 py-1 text-lg font-semibold tracking-tight">
              <span>Teams</span>
            </li>
            <ScrollArea class="h-[110px] px-1">
              <ButtonCreateTeams />
              <ButtonTeams
                v-for="team in teams"
                :key="team.id"
                :imageTeams="team.image"
                :nameTeams="team.name"
              />
            </ScrollArea>
          </ul>

          <ul>
            <li class="flex items-center space-x-2 px-4 py-1 text-lg font-semibold tracking-tight">
              <span class="">Manage</span>
            </li>
            <Button variant="ghost" class="w-full justify-between">
              <a href="" class="flex items-center">
                <Icon name="circum:star" class="text-xl" />
                <span class="ml-2">Favours</span>
              </a>
              <span class="font-thin">
                {{ countFavours }}
              </span>
            </Button>
            <Button variant="ghost" class="w-full justify-between">
              <a href="" class="flex items-center">
                <Icon name="circum:timer" class="text-xl" />
                <span class="ml-2">Recent</span>
              </a>
              <span class="font-thin">
                {{ countRecent }}
              </span>
            </Button>
            <Button variant="ghost" class="w-full justify-between">
              <a href="" class="flex items-center">
                <Icon name="circum:read" class="text-xl" />
                <span class="ml-2">History</span>
              </a>
              <span class="font-thin">
                {{ countHistory }}
              </span>
            </Button>
          </ul>
        </div>
        <Separator  class="mb-5"/>

        <ul class="pb-5 px-3">
          <Button variant="ghost" class="w-full justify-start items-center">
            <Icon name="iconoir:terminal-tag" class="text-xl" />
            <span class="ml-2">Changelog</span>
          </Button>
          <Button variant="ghost" class="w-full justify-start items-center">
            <Icon name="fluent:person-feedback-28-regular" class="text-xl" />
            <span class="ml-2">Feedback</span>
          </Button>
          <Button variant="ghost" class="w-full justify-start items-center">
            <Icon name="circum:stethoscope" class="text-xl" />
            <span class="ml-2">Support</span>
          </Button>
        </ul>
      </aside>

      <main class="flex-1 overflow-y-auto p-5">
        <slot />
      </main>

    </div>
  </div>
</template>
  

<script lang="ts" setup>
import DropdownProfile from '@/components/nav/dashboard/DropdownProfile.vue';
import DropdownMenu from '@/components/nav/dashboard/DropdownMenu.vue';
import ButtonThemeNavVue from '@/components/nav/ButtonThemeNav.vue';
import Logo from '@/components/nav/dashboard/Logo.vue';
import ButtonSearchDashboard from '@/components/nav/dashboard/ButtonSearchDashboard.vue';
import ButtonCreateLinks from '@/components/nav/dashboard/ButtonCreateLinks.vue'
import ButtonCreateTeams from '@/components/dashboard/default/aside/ButtonCreateTeams.vue'
import ButtonTeams from '@/components/dashboard/default/aside/ButtonTeams.vue'

const teams = [
  {
    id: 1,
    image: '/images/teams/groupeUser.jpg',
    name: 'Team 1'
  },
  {
    id: 2,
    image: '/images/teams/groupeUser.jpg',
    name: 'Team 2'
  },
  {
    id: 3,
    image: '/images/teams/groupeUser.jpg',
    name: 'Team 3'
  }
]

defineProps({
  countFavours: {
    type: Number,
    default: 0
  },
  countRecent: {
    type: Number,
    default: 0
  },
  countHistory: {
    type: Number,
    default: 0
  },
})

</script>