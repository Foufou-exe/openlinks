<template>
  <a :href="hrefLink" rel="noopener" target="_blank" class="rounded-3xl group w-full" @mouseenter="showButtons = true"
    @mouseleave="showButtons = false">
    <div class="border rounded-xl px-2 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center items-center space-y-3 md:space-y-0">
      <div class="flex justify-start items-center space-x-2 w-[400px]">
        <NuxtImg :src="imageLink" class="w-10 h-10 rounded-xl" />
        <div class="space-y-1">
          <span class="break-words line-clamp-1 leading-none text-lg font-semibold text-overflow">
            {{ titleLink }}
          </span>
          <p class="text-xs text-gray-600">Added on {{ date }} at {{ time }}</p>
        </div>
      </div>
      <div class="flex justify-start items-center space-x-2 ">
        <Badge v-for="(nameCategory, index) in category.slice(0, 3)">
          {{ nameCategory }}
        </Badge>
        <DropdownMenu v-if="category.length > 4">
          <DropdownMenuTrigger>
            <Badge>
              ...
            </Badge>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Other category ✨</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ScrollArea class="w-40 h-40">
              <DropdownMenuItem v-for="nameCategory in category.slice(3)">
                {{ nameCategory }}
              </DropdownMenuItem>
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
      <div class="flex justify-start items-center space-x-2">
        <p class="text-sm line-clamp-1 italic dark:text-gray-400">
          {{ descriptionLink }}
        </p>
      </div>

      <div class="flex justify-end">
        <transition name="fade">
          <div :class="showButtons ? 'is-visible' : 'is-hidden'" class="flex space-x-2"
            style="transition-property: opacity; transition-duration: .5s;">
            <Button class="space-x-2" size="sm">
              <span class="font-bold">Go Link</span>
              <Icon name="circum:export" class="text-lg" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" class="mb-1" size="sm">
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
        </transition>
      </div>

    </div>

  </a>
</template>
  
<script lang="ts" setup>
const showButtons = ref(false)

defineProps({
  hrefLink: {
    type: String,
    required: true
  },
  titleLink: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: true
  },
  descriptionLink: {
    type: String,
    required: true
  },
  imagesLink: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  }
})
</script>
