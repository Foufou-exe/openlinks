<template>
  <a :href="hrefLink" rel="noopener" target="_blank" class="rounded-3xl group max-w-[350px]" @mouseenter="showButtons = true"
    @mouseleave="showButtons = false">
    <Card class="rounded-3xl hover:shadow-xl">
      <CardHeader class="p-3">
        <div class="flex justify-between items-center">
          <div class="flex justify-center">
            <p class="text-xs text-gray-600">Added on {{ date }} at {{ time }}</p>
          </div>
          <transition name="fade">
            <div :class="showButtons ? 'is-visible' : 'is-hidden'" class="flex space-x-2" style="transition-property: opacity; transition-duration: .5s;">
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
      </CardHeader>
      <CardContent class="bg-secondary mx-2 mb-2 rounded-2xl p-5">
        <div>
          <div class="flex justify-start">
            <div class="flex space-x-3 justify-center items-center">
            <NuxtImg :src="imageLink" class="w-14 h-14 rounded-xl" />
            <span class="break-words line-clamp-2 leading-none text-xl font-bold">
              {{ titleLink }}
            </span>
          </div>
          </div>
          <div class="space-x-1 mt-1">
            <Badge v-for="(nameCategory, index) in category.slice(0, 4)" :key="nameCategory" >
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
                  <DropdownMenuItem v-for="nameCategory in category.slice(4)" :key="nameCategory">
                    {{ nameCategory }}
                  </DropdownMenuItem>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
            
          </div>
        </div>
        <div>
          <NuxtImg :src="imagesLink" class="rounded-xl mt-5 w-full object-cover my-2 rounded-12 h-40" />
        </div>
        <div>
          <p class="text-sm line-clamp-3 italic dark:text-gray-400">
            {{ descriptionLink }}
          </p>
        </div>
      </CardContent>
    </Card>
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

<style>
/* Ajoutez ces styles pour gérer l'espacement et la visibilité */
.is-hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.2s, opacity 0.2s ease;
}

.is-visible {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s 0s, opacity 0.2s ease;
}
/* Définissez vos transitions CSS */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>