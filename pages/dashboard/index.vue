<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 ">
    <!-- <div class="p-5 border rounded-lg shadow-md dark:bg-neutral-900/20 space-y-5">
      <div class="flex justify-between">
        <div class="flex justify-center items-center">
          <HoverCard>
            <HoverCardTrigger as-child>
              <NuxtImg src="/images/profile/user4.png" class="w-10 h-10 rounded-lg" />
            </HoverCardTrigger>
            <HoverCardContent class="w-80" align="start">
              <div class="flex space-x-2">
                <div class="w-1/4 space-y-2">
                  <Avatar>
                    <AvatarImage src="/images/profile/user4.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div class="flex items-center space-x-2 text-white">
                    <Icon name="circum:link" class=" text-lg text-green-600" />
                    <span class="text-xs font-thin">200</span>
                  </div>
                  <div class="flex space-x-2 text-white">
                    <Icon name="carbon:friendship" class="text-medium text-blue-600 items-center" />
                    <span class="text-xs font-thin">5</span>
                  </div>
                </div>
                <div class="space-y-1 w-3/4">
                  <h3 class="text-medium font-bold">
                    John Doe
                  </h3>
                  <h4 class="text-xs font-semibold text-gr">
                    @johndoe
                  </h4>
                  <p class="text-sm line-clamp-2">
                    Developer at Openlinks Inc., Full-stack developer, Vue.js, Nuxt.js, TailwindCSS, and Vite.
                  </p>
                  <div class="flex items-center pt-2 space-x-2">
                    <Icon name="circum:calendar" class="text-medium" />
                    <span class="text-xs text-muted-foreground">
                      Joined January 2024
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div class="flex space-x-1">
          <Button class="space-x-2" size="sm">
            <span class="font-bold">Go Link</span>
            <Icon name="circum:export" class="text-base" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" class="mb-1" size="sm">
              <Icon name="circum:menu-kebab" class="text-lg" />
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <div class="hover:text-red-600 flex justify-center">
                  <Icon name="material-symbols-light:delete-outline" class="text-xl mr-2 " />
                  <span class="font-semibold">Delete</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div class="flex items-center space-x-1">
        <h1 class="font-bold text-lg break-words line-clamp-3">
          Et dignissim odio et et lorem zzril ullamcorper et qui amet elitr stet nulla.
        </h1>
      </div>
      <div class="flex flex-row items-center justify-center space-x-4">
        <div>
          <Button variant="ghost" class="space-x-1 hover:text-yellow-500" size="sm">
            <Icon name="circum:star" class="text-2xl" />
          </Button>
        </div>
        <div>
          <Button variant="ghost" class="space-x-1 hover:text-green-500" size="sm">
            <Icon name="circum:share-2" class="text-2xl" />
          </Button>
        </div>
      </div>
    </div> -->

    <Card class="rounded-3xl">
      <CardHeader>
        <div class="flex justify-between items-center">
          <div class="flex space-x-2">
            <HoverCard>
              <HoverCardTrigger as-child>
                <NuxtImg src="/images/profile/user4.png" class="w-10 h-10 rounded-sm" />
              </HoverCardTrigger>
              <HoverCardContent class="w-80" align="start">
                <div class="flex space-x-2">
                  <div class="w-1/4 space-y-2">
                    <Avatar>
                      <AvatarImage src="/images/profile/user4.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div class="flex items-center space-x-2 text-white">
                      <Icon name="circum:link" class=" text-lg text-green-600" />
                      <span class="text-xs font-thin">200</span>
                    </div>
                    <div class="flex space-x-2 text-white">
                      <Icon name="carbon:friendship" class="text-medium text-blue-600 items-center" />
                      <span class="text-xs font-thin">5</span>
                    </div>
                  </div>
                  <div class="space-y-1 w-3/4">
                    <h3 class="text-medium font-bold">
                      John Doe
                    </h3>
                    <h4 class="text-xs font-semibold text-gr">
                      @johndoe
                    </h4>
                    <p class="text-sm line-clamp-2">
                      Developer at Openlinks Inc., Full-stack developer, Vue.js, Nuxt.js, TailwindCSS, and Vite.
                    </p>
                    <div class="flex items-center pt-2 space-x-2">
                      <Icon name="circum:calendar" class="text-medium" />
                      <span class="text-xs text-muted-foreground">
                        Joined January 2024
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <div class="flex flex-col">
              <p class="text-sm text-gray-400">Ajoutée par <b>@johndoe</b></p>
              <p class="text-sm text-gray-500">Le 24 Janv. 2024 à 14h00</p>
            </div>
          </div>
          <div class="flex space-x-2">
            <Button class="space-x-2">
              <span class="font-bold">Go Link</span>
              <Icon name="circum:export" class="text-lg" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="secondary" class="mb-1" >
                  <Icon name="circum:menu-kebab" class="text-2xl" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <div class="hover:text-red-600 flex justify-center">
                    <Icon name="material-symbols-light:delete-outline" class="text-xl mr-2 " />
                    <span class="font-semibold">Delete</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent class="bg-secondary m-2 rounded-2xl p-5">
        <div>
          <div class="flex space-x-3 justify-center items-center">
            <NuxtImg src="/images/profile/user3.png" class="w-14 h-14 rounded-xl" />
            <span class="break-words line-clamp-2 text-2xl font-semibold">Openlinks vient de lancée son site en direct</span>
          </div>
          <div class="space-x-2 mt-1">
            <Badge>
              Tailwind css
            </Badge>
            <Badge>
              Tailwind css
            </Badge>
            <Badge>
              Tailwind css
            </Badge>
            <Badge>
              Tailwind css
            </Badge>
          </div>
        </div>
        <div>
          <NuxtImg src="/images/banniere/banniere-exemple.jpg" class="rounded-xl mt-5 w-full object-cover my-2 rounded-12 h-40" />
        </div>
      </CardContent>
    </Card>

  </div>
</template>

<script setup lang="ts">
// import Card from '@/components/dashboard/feed/Card.vue'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'


definePageMeta({
  layout: 'dashboard-layout',
})

useHead({
  title: 'Openlinks - Dashboard',
  meta: [
    {
      name: 'description',
      content: 'Openlink is a platform to share your link with the world.',
    },
  ],
})
</script>