<template>
  <div class="p-3 border-b mb-5 flex justify-between items-center">
    <div>
      <div>
        <span class="text-3xl font-bold">My Links</span>
      </div>
      <div>
        <span class="text-sm text-gray-500">All your links are here</span>
      </div>
    </div>
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <TooltipProvider :delay-duration="200">
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="secondary">
                  <Icon name="circum:filter" class="text-xl" />
                </Button>
              </TooltipTrigger>
              <TooltipContent align="center" side="bottom">
                <span class="text-sm font-semibold">Filter</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-50 mr-1" align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Icon name="circum:calendar-date" class="text-xl flex justify-center items-center mr-2" />
              <span>Date (Recent to Old)</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="circum:calendar" class="text-xl flex justify-center items-center mr-2" />
              <span>Date (Old to Recent)</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="circum:file-on" class="text-xl flex justify-center items-center mr-2" />
              <span>Title (A-Z)</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="circum:file-on" class="text-xl flex justify-center items-center mr-2" />
              <span>Title (Z-A)</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 ">
    <a href="" title="" rel="noopener" target="_blank">
      <Card class="rounded-3xl">
        <CardHeader class="p-3">
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
                      <div class="flex items-center space-x-2 ">
                        <Icon name="circum:link" class=" text-lg text-green-600" />
                        <span class="text-xs">200</span>
                      </div>
                      <div class="flex space-x-2">
                        <Icon name="carbon:friendship" class="text-medium text-blue-600 items-center" />
                        <span class="text-xs">5</span>
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
              <div class="flex flex-col justify-center">
                <p class="text-xs text-gray-500">Ajoutée par <b>@johndoe</b></p>
                <p class="text-xs text-gray-600">24 Janv. 2024 - 14h00</p>
              </div>
            </div>
            <div class="flex space-x-2">
              <Button class="space-x-2" size="sm">
                <span class="font-bold">Go Link</span>
                <Icon name="circum:export" class="text-lg" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="secondary" class="mb-1" size="sm">
                    <Icon name="circum:menu-kebab" class="text-xl" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <div class="hover:text-blue-600 flex justify-center">
                      <Icon name="circum:edit" class="text-xl mr-2 " />
                      <span class="font-semibold">Edit</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div class="hover:text-yellow-500 flex justify-center">
                      <Icon name="circum:star" class="text-xl mr-2 " />
                      <span class="font-semibold">Favorite</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div class="hover:text-green-500 flex justify-center">
                      <Icon name="circum:link" class="text-xl mr-2 " />
                      <span class="font-semibold">Shared</span>
                    </div>
                  </DropdownMenuItem>
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
        <CardContent class="bg-secondary mx-2 mb-2 rounded-2xl p-5">
          <div>
            <div class="flex space-x-3 justify-center items-center">
              <NuxtImg src="/images/profile/user3.png" class="w-14 h-14 rounded-xl" />
              <span class="break-words line-clamp-2 text-2xl font-bold">Openlinks vient de lancée son site en
                direct</span>
            </div>
            <div class="space-x-1 mt-1">
              <Badge>
                Tailwind
              </Badge>
              <Badge>
                Tailwind
              </Badge>
              <Badge>
                Tailwind
              </Badge>
              <Badge>
                Tailwind
              </Badge>
            </div>
          </div>
          <div>
            <NuxtImg src="/images/banniere/banniere-exemple.jpg"
              class="rounded-xl mt-5 w-full object-cover my-2 rounded-12 h-40" />
          </div>
          <div>
            <p class="text-sm line-clamp-3 italic dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </CardContent>
      </Card>
    </a>

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