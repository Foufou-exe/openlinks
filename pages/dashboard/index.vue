<template>
  <div
    class="p-3 border-b mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
    <div>
      <h1 class="text-xl sm:text-3xl font-bold">My Links</h1>
      <p class="text-xs sm:text-sm text-gray-500">All your links are here</p>
    </div>
    <div>
      <div class="flex space-x-2 justify-center">

        <div class="flex justify-center items-center space-x-2">
          <Icon name="circum:search" class="text-3xl" />
          <Input type="search" placeholder="Search..." />
        </div>

        <Popover v-model:open="open">
          <PopoverTrigger as-child>
            <Button variant="outline" role="combobox" :aria-expanded="open" class="w-[110px] justify-between">
              Category
              <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-[200px] p-0">
            <Command>
              <CommandInput class="h-9" placeholder="Search category ✨" />
              <CommandEmpty>No Cateory found 😥</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem v-for="framework in frameworks" :key="framework.value" :value="framework.value" @select="(ev) => {
                    if (typeof ev.detail.value === 'string') {
                      value = ev.detail.value
                    }
                    open = false
                  }">
                    {{ framework.label }}
                    <Check :class="cn(
                      'ml-auto h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0',
                    )" />
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

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
          <DropdownMenuContent class="w-50 mr-1 p-1" align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem class="hover:font-semibold">
                <Icon name="circum:calendar-date" class="text-xl flex justify-center items-center mr-2 hover" />
                <span>Date (Recent to Old)</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="hover:font-semibold">
                <Icon name="circum:calendar" class="text-xl flex justify-center items-center mr-2" />
                <span>Date (Old to Recent)</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="hover:font-semibold">
                <Icon name="circum:file-on" class="text-xl flex justify-center items-center mr-2" />
                <span>Title (A-Z)</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="hover:font-semibold">
                <Icon name="circum:file-on" class="text-xl flex justify-center items-center mr-2" />
                <span>Title (Z-A)</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-6 gap-5 justify-items-center">
    <CardLinks 
      v-for="link in links" 
      :key="link.id" 
      :titleLink="link.title" 
      :category="link.category" 
      :date="link.date" 
      :time="link.time"
      :imagesLink="link.images"
      :styleBadge="link.styleBadge" 
      :hrefLink="link.href" 
      :descriptionLink="link.description" 

    />
  </div>
</template>

<script setup lang="ts">
import CardLinks from '~/components/dashboard/default/mylinks/CardLinks.vue';

import { ref } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'


const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const open = ref(false)
const value = ref<string>('')

const links: { id: number, title: string, category: string, date: string, time: string, styleBadge: string, href: string, description: string, images: string }[] = [
  {
    id: 1,
    title: 'How to use Openlinks',
    images: '/images/banniere/banniere-exemple.jpg',
    category: 'Article',
    date: '2022-10-10',
    time: '10:10',
    styleBadge: 'bg-green-500',
    href: '/article/how-to-use-openlinks',
    description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
  },
  {
    id: 2,
    title: 'How to use Openlinks',
    images: '/images/banniere/banniere-exemple.jpg',
    category: 'Article',
    date: '2022-10-10',
    time: '10:10',
    styleBadge: 'bg-green-500',
    href: '/article/how-to-use-openlinks',
    description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
  },
  {
    id: 3,
    title: 'How to use Openlinks',
    images: '/images/banniere/banniere-exemple.jpg',
    category: 'Article',
    date: '2022-10-10',
    time: '10:10',
    styleBadge: 'bg-green-500',
    href: '/article/how-to-use-openlinks',
    description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
  },
  {
    id: 4,
    title: 'How to use Openlinks',
    images: '/images/banniere/banniere-exemple.jpg',
    category: 'Article',
    date: '2022-10-10',
    time: '10:10',
    styleBadge: 'bg-green-500',
    href: '/article/how-to-use-openlinks',
    description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
  },
  {
    id: 5,
    title: 'How to use Openlinks',
    images: '/images/banniere/banniere-exemple.jpg',
    category: 'Article',
    date: '2022-10-10',
    time: '10:10',
    styleBadge: 'bg-green-500',
    href: '/article/how-to-use-openlinks',
    description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
  },
  {
    id: 6,
    title: 'How to use Openlinks',
    images: '/images/banniere/banniere-exemple.jpg',
    category: 'Article',
    date: '2022-10-10',
    time: '10:10',
    styleBadge: 'bg-green-500',
    href: '/article/how-to-use-openlinks',
    description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
  },
]

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
