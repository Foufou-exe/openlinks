<template>
  <div class="overflow-hidden h-screen flex flex-col">
    <nav class="flex justify-between items-center p-2 dark:bg-neutral-900/40 bg-muted/10 border-b">
      <div class="flex space-x-1 items-center p-1">
        <DropdownMenu  />
        <div class="hidden lg:flex">
          <Logo />
        </div>
      </div>
      <div class="flex space-x-2 md:space-x-2 lg:space-x-4 items-center p-1">
        <ButtonCreateLinks />
        <ButtonSearchDashboard />
        <ButtonNotif />
        <div class="hidden md:flex">
          <ButtonThemeNavVue />
        </div>
        <DropdownProfile 
          :key="user.id"
          :nameUser="user.name"
          :imageUser="user.image"
        />
      </div>
    </nav>

    <div class="flex flex-1 overflow-hidden">
      <aside
        class="w-64 bg-muted/10 dark:bg-neutral-900/40 border-r overflow-y-auto hidden lg:flex flex-col justify-between"
        aria-label="Sidebar">
        <div class="py-5 px-3 space-y-4 flex-grow">
          <Button variant="ghost" class="w-full justify-start items-center text-lg font-semibold px-2" as-child>
              <a href="/dashboard">
                <span class="ml-2">Home</span>
              </a>
          </Button>
          <ul class="menu">
            <li class="flex items-center py-1 space-x-2 px-4 text-lg font-semibold tracking-tight">
              <span class="">Private</span>
            </li>
            <Button variant="ghost" class="w-full justify-start items-center" as-child>
              <a href="/dashboard/private/mylinks">
                <Icon name="mingcute:link-3-line" class="text-xl" />
                <span class="ml-2">My Links</span>
              </a>
            </Button>
            <ButtonMyCategories />
            <ButtonMyDirectories />
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
            <Button variant="ghost" class="w-full justify-start" as-child>
              <a href="/dashboard/manage/favours" class="flex items-center">
                <Icon name="quill:star" class="text-xl" />
                <span class="ml-2">Favours</span>
              </a>
            </Button>
            <Button variant="ghost" class="w-full justify-start" as-child>
              <a href="/dashboard/manage/recent" class="flex items-center">
                <Icon name="ph:clock-bold" class="text-xl" />
                <span class="ml-2">Recent</span>
              </a>
            </Button>
            <Button variant="ghost" class="w-full justify-start" as-child>
              <a href="/dashboard/manage/history" class="flex items-center">
                <Icon name="solar:notification-unread-lines-broken" class="text-xl" />
                <span class="ml-2">History</span>
              </a>
            </Button>
          </ul>
        </div>
        <Separator  class="mb-5"/>

        <ul class="pb-5 px-3">
          <Button variant="ghost" class="w-full justify-start items-center" as-child>
            <a href="https://github.com/Foufou-exe/openlinks/releases">
              <Icon name="iconoir:terminal-tag" class="text-xl" />
              <span class="ml-2">Changelog</span>
            </a>
          </Button>
          <Button variant="ghost" class="w-full justify-start items-center" as-child>
            <a href="https://github.com/Foufou-exe/openlinks/discussions">
              <Icon name="fluent:person-feedback-28-regular" class="text-xl" />
              <span class="ml-2">Feedback</span>
            </a>
          </Button>
          <Button variant="ghost" class="w-full justify-start items-center" as-child>
            <a href="/support">
              <Icon name="fluent:person-support-24-filled" class="text-xl" />
              <span class="ml-2">Support</span>
            </a>
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
import ButtonMyCategories from '@/components/dashboard/default/aside/ButtonMyCategories.vue';
import ButtonMyDirectories from '@/components/dashboard/default/aside/ButtonMyDirectories.vue';
import ButtonNotif from '@/components/nav/dashboard/ButtonNotif.vue'

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

const user = {
  id: 1,
  name: 'Foufou-exe',
  image: '/images/profile/user4.png'
}


</script>