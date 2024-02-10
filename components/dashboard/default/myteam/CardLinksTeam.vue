<template>
<a :href="link" rel="noopener" target="_blank" class="rounded-3xl group max-w-[350px]" @mouseenter="showButtons = true" @mouseleave="showButtons = false">
      <Card class="rounded-3xl hover:shadow-xl">
        <CardHeader class="p-3">
          <div class="flex justify-between items-center">
            <div class="flex space-x-2">
              <HoverCard>
                <HoverCardTrigger as-child>
                  <NuxtImg :src="photoUser" class="w-10 h-10 rounded-sm" />
                </HoverCardTrigger>
                <HoverCardContent class="w-80" align="start">
                  <div class="flex space-x-2">
                    <div class="w-1/4 space-y-2">
                      <Avatar>
                        <AvatarImage :src="photoUser" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div class="flex items-center space-x-2 ">
                        <Icon name="circum:link" class=" text-lg text-green-600" />
                        <span class="text-xs">{{ countLinks }}</span>
                      </div>
                      <div class="flex space-x-2">
                        <Icon name="carbon:friendship" class="text-medium text-blue-600 items-center" />
                        <span class="text-xs">{{ countfriends }}</span>
                      </div>
                    </div>
                    <div class="space-y-1 w-3/4">
                      <h3 class="text-medium font-bold">
                        {{ username }}
                      </h3>
                      <h4 class="text-xs font-semibold text-gr">
                        @{{ username }}
                      </h4>
                      <p class="text-sm line-clamp-2">
                        {{ descriptionProfile }}
                      </p>
                      <div class="flex items-center pt-2 space-x-2">
                        <Icon name="circum:calendar" class="text-medium" />
                        <span class="text-xs text-muted-foreground">
                          Joined on {{ date }}
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <div class="flex flex-col justify-center">
                <p class="text-xs text-gray-500">Added by <b>@{{ username }}</b></p>
                <p class="text-xs text-gray-600">on {{ date }} at {{ time }}</p>
              </div>
            </div>
            <div class="flex space-x-2">
              <Button class="space-x-2" size="sm" v-show="showButtons">
                <span class="font-bold">Go Link</span>
                <Icon name="circum:export" class="text-lg" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" class="mb-1" size="sm" v-show="showButtons">
                    <Icon name="circum:menu-kebab" class="text-xl" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
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
              <span class="break-words line-clamp-2 leading-none text-xl font-bold">
                {{ title }}
              </span>
            </div>
            <div class="space-x-1 mt-1">
              <Badge :class="styleBadge">
                {{ category }}
              </Badge>
            </div>
          </div>
          <div>
            <NuxtImg :src="" class="rounded-xl mt-5 w-full object-cover my-2 rounded-12 h-40" />
          </div>
          <div>
            <p class="text-sm line-clamp-3 italic dark:text-gray-400">
              {{ description }}
            </p>
          </div>
        </CardContent>
      </Card>
    </a>
</template>

<script lang="ts" setup>
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const showButtons = ref(false)

defineProps({
  photoUser: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  countLinks: {
    type: Number,
    required: true,
  },
  countfriends: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  descriptionProfile: {
    type: String,
    required: true,
  },
});
</script>
