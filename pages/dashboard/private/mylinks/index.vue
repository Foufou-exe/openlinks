<template>
  <div
    class="pb-3 border-b mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
    <div class="flex justify-items-center justify-start items-center space-x-1">
      <div>
        <Icon name="circum:link" class="text-4xl sm:text-5xl" />
      </div>
      <div>
        <h1 class="text-xl sm:text-3xl font-bold">My Links</h1>
        <p class="text-xs sm:text-sm text-gray-500">All your links are here</p>
      </div>
    </div>
    <div>
      <div class="flex space-x-2 justify-center">

        <DropdownMenu>
          <DropdownMenuTrigger as="button">
            <TooltipProvider :delay-duration="200">
              <Tooltip>
                <TooltipTrigger as-child >
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
          <DropdownMenuContent class="w-52 mr-1 p-1" align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem class="hover:font-semibold" @click="setFilterCriteria('recentToOld')">
                <Icon name="circum:calendar-date" class="text-xl flex justify-center items-center mr-2 hover" />
                <span>Date (Recent to Old)</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="hover:font-semibold" @click="setFilterCriteria('oldToRecent')">
                <Icon name="circum:calendar" class="text-xl flex justify-center items-center mr-2" />
                <span>Date (Old to Recent)</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="hover:font-semibold" @click="setFilterCriteria('titleAZ')">
                <Icon name="circum:file-on" class="text-xl flex justify-center items-center mr-2" />
                <span>Title (A-Z)</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="hover:font-semibold" @click="setFilterCriteria('titleZA')">
                <Icon name="circum:file-on" class="text-xl flex justify-center items-center mr-2" />
                <span>Title (Z-A)</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Tabs default-value="grid">
          <TabsList>
            <TooltipProvider :delay-duration="200">
              <Tooltip>
                <TooltipTrigger as-child >
                  <TabsTrigger value="grid" @click="setViewMode('grid')">
                    <Icon name="circum:grid-4-1" class="text-2xl" />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent align="center" side="bottom">
                  <span class="text-sm font-semibold">Mode Card</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider :delay-duration="200">
              <Tooltip>
                <TooltipTrigger as-child>
                  <TabsTrigger value="line" @click="setViewMode('line')">
                    <Icon name="circum:grid-2-h" class="text-2xl" />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent align="center" side="bottom">
                  <span class="text-sm font-semibold">Mode Line</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TabsList>
        </Tabs>
      </div>
    </div>
  </div>

    <div v-show="currentViewMode === 'grid'"
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-6 gap-5 justify-items-center">
        <CardLinks v-for="link in filteredLinks" :key="link.id" :titleLink="link.title" :category="link.category"
          :date="link.date" :time="link.time" :imagesLink="link.images" :hrefLink="link.href"
          :descriptionLink="link.description" :imageLink="link.imageLink" />
      </div>


    <div class="grid grid-cols-1 gap-3" v-show="currentViewMode === 'line'">
        <CardLinksSimple 
          v-for="link in filteredLinks" :key="link.id" :titleLink="link.title" :category="link.category"
          :date="link.date" :time="link.time" :imagesLink="link.images" :hrefLink="link.href"
          :descriptionLink="link.description" :imageLink="link.imageLink" 
        />
      </div>

</template>

<script setup lang="ts">
import CardLinks from '~/components/dashboard/default/mylinks/CardLinks.vue';
import CardLinksSimple from '@/components/dashboard/default/mylinks/CardLinksSimple.vue';
// Filter Criteria
const filterCriteria = ref<string>('recentToOld');

// Current View Mode
const currentViewMode = ref('grid');

// Set View Mode
function setViewMode(mode) {
  currentViewMode.value = mode;
}

// Filtered Links
const filteredLinks = computed(() => {
  const links: { id: number, title: string, category: string[], date: string, time: string, styleBadge: string, href: string, description: string, images: string, imageLink: string }[] = [
    {
      id: 1,
      title: 'How to use Openlinks',
      images: '/images/banniere/banniere-exemple.jpg',
      imageLink: '/images/profile/user1.png',
      category: ['Html', 'Css', 'Javascript'],
      date: '2022-10-20',
      time: '10:10',
      styleBadge: 'bg-blue-500',
      href: '/article/how-to-use-openlinks',
      description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
    },
    {
      id: 2,
      title: 'Ah oui',
      images: '/images/banniere/banniere-exemple.jpg',
      imageLink: '/images/profile/user2.png',
      category: ['Html', 'Css', 'Javascript', 'Sveltekit'],
      date: '2022-10-15',
      time: '10:10',
      styleBadge: 'bg-orange-500',
      href: '/article/how-to-use-openlinks',
      description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
    },
    {
      id: 3,
      title: 'Libre',
      images: '/images/banniere/banniere-exemple.jpg',
      imageLink: '/images/profile/user3.png',
      category: ['Html', 'Css', 'Javascript', 'Sveltekit', 'Nuxt.js'],
      date: '2022-10-10',
      time: '10:10',
      styleBadge: 'bg-blue-300',
      href: '/article/how-to-use-openlinks',
      description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
    },
    {
      id: 4,
      title: 'Ok',
      images: '/images/banniere/banniere-exemple.jpg',
      imageLink: '/images/profile/user4.png',
      category: ['Html', 'Css', 'Javascript', 'Sveltekit'],
      date: '2022-10-13',
      time: '10:10',
      styleBadge: 'bg-green-500',
      href: '/article/how-to-use-openlinks',
      description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
    },
    {
      id: 5,
      title: 'Peut etre que oui peut etre que non',
      images: '/images/banniere/banniere-exemple.jpg',
      imageLink: '/images/profile/user1.png',
      category: ['Html', 'Css', 'Javascript', 'Sveltekit', 'Nuxt.js'],
      date: '2022-10-12',
      time: '10:10',
      styleBadge: 'bg-green-500',
      href: '/article/how-to-use-openlinks',
      description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
    },
    {
      id: 6,
      title: 'Test d un titre',
      images: '/images/banniere/banniere-exemple.jpg',
      imageLink: '/images/profile/user2.png',
      category: ['Html', 'Css', 'Javascript', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro'],
      date: '2022-10-11',
      time: '10:10',
      styleBadge: 'bg-purple-500',
      href: '/article/how-to-use-openlinks',
      description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
    },
  ];
  let filtered = links; // Start with all the links
  // Filter by date or title
  switch (filterCriteria.value) {
    case 'recentToOld':
      filtered = filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      break;
    case 'oldToRecent':
      filtered = filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      break;
    case 'titleAZ':
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'titleZA':
      filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }
  return filtered;
});

// Set Filter Criteria
const setFilterCriteria = (criteria: string) => {
  filterCriteria.value = criteria;
};


// Page Meta
definePageMeta({
  layout: 'dashboard-layout',
})
// Head
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
