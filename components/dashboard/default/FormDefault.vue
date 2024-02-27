<template>
  <div class="space-y-10">
    <div
      class="pb-3 border-b mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
      <div class="flex justify-items-center justify-start items-center space-x-1">
        <div>
          <Icon name="circum:home" class="text-4xl sm:text-5xl" />
        </div>
        <div>
          <h1 class="text-lg sm:text-xl md:text-2xl font-bold">Dashboard</h1>
          <p class="text-xs sm:text-sm text-gray-500">
            Welcome to your dashboard. Here you can manage your links and see your statistics.
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <Tabs default-value="grid">
          <TabsList>
            <TooltipProvider :delay-duration="200">
              <Tooltip>
                <TooltipTrigger as-child>
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

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4" v-show="currentViewMode === 'grid'">
      <CardStats
        v-for="stat in stats" 
        :key="stat.title" :title="stat.title" :icon="stat.icon" :total="stat.total"
        :description="stat.description" 
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3" v-show="currentViewMode === 'line'">
      <CardStatsSimple
        v-for="stat in stats" 
        :key="stat.title" :title="stat.title" :icon="stat.icon" :total="stat.total"
        :description="stat.description" 
      />
    </div>

    <div class="flex justify-between items-center border-b pb-5">
      <div class="flex justify-items-center justify-start items-center space-x-1">
        <div>
          <Icon name="ph:clock-bold" class="text-4xl sm:text-5xl" />
        </div>
        <div>
          <h1 class="text-lg sm:text-xl md:text-2xl font-bold">Recent</h1>
          <span class="text-xs sm:text-sm text-gray-500">
            Here are your recent activities.
          </span>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <Button variant="ghost" as-child>
          <a href="/dashboard/recent">
            Views all
            <Icon name="fluent:arrow-right-24-regular" class="text-lg ml-1" />
          </a>
        </Button>
      </div>
    </div>

    <div v-show="currentViewMode === 'grid'"
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-6 gap-5 justify-items-center">
      <CardLinks v-for="link in filteredLinks" :key="link.id" :titleLink="link.title" :category="link.category"
        :date="link.date" :time="link.time" :imagesLink="link.images" :hrefLink="link.href"
        :descriptionLink="link.description" :imageLink="link.imageLink" 
      />
    </div>


    <div class="grid grid-cols-1 gap-3" v-show="currentViewMode === 'line'">
      <CardLinksSimple v-for="link in filteredLinks" :key="link.id" :titleLink="link.title" :category="link.category"
        :date="link.date" :time="link.time" :imagesLink="link.images" :hrefLink="link.href"
        :descriptionLink="link.description" :imageLink="link.imageLink" 
      />
    </div>


    <div
      class="pb-3 border-b mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
      <div class="flex justify-items-center justify-start items-center space-x-1">
        <div>
          <Icon name="quill:star" class="text-4xl sm:text-5xl" />
        </div>
        <div>
          <h1 class="text-lg sm:text-xl md:text-2xl font-bold">Favours</h1>
          <p class="text-xs sm:text-sm text-gray-500">
            Here are your favourited links.
          </p>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <Button variant="ghost" as-child>
          <a href="/dashboard/favours">
            Views all
            <Icon name="fluent:arrow-right-24-regular" class="text-lg ml-1" />
          </a>
        </Button>
      </div>
    </div>

    <div v-show="currentViewMode === 'grid'"
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-6 gap-5 justify-items-center">
      <CardLinks v-for="link in filteredLinks" :key="link.id" :titleLink="link.title" :category="link.category"
        :date="link.date" :time="link.time" :imagesLink="link.images" :hrefLink="link.href"
        :descriptionLink="link.description" :imageLink="link.imageLink" />
    </div>


    <div class="grid grid-cols-1 gap-3" v-show="currentViewMode === 'line'">
      <CardLinksSimple v-for="link in filteredLinks" :key="link.id" :titleLink="link.title" :category="link.category"
        :date="link.date" :time="link.time" :imagesLink="link.images" :hrefLink="link.href"
        :descriptionLink="link.description" :imageLink="link.imageLink" />
    </div>

    <div
      class="pb-3 border-b mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
      <div class="flex justify-items-center justify-start items-center space-x-1">
        <div>
          <Icon name="solar:notification-unread-lines-broken" class="text-4xl sm:text-5xl" />
        </div>
        <div>
          <h1 class="text-lg sm:text-xl md:text-2xl font-bold">History</h1>
          <p class="text-xs sm:text-sm text-gray-500">
            Here you can see your history of link visited.
          </p>
        </div>

      </div>
      <div class="flex justify-center items-center">
        <Button variant="ghost" as-child>
          <a href="/dashboard/history">
            Views all
            <Icon name="fluent:arrow-right-24-regular" class="text-lg ml-1" />
          </a>
        </Button>
      </div>
    </div>

    <div v-show="currentViewMode === 'grid'"
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-6 gap-5 justify-items-center">
      <CardLinks v-for="link in filteredLinks" :key="link.id" :titleLink="link.title" :category="link.category"
        :date="link.date" :time="link.time" :imagesLink="link.images" :hrefLink="link.href"
        :descriptionLink="link.description" :imageLink="link.imageLink" 
      />
    </div>


    <div class="grid grid-cols-1 gap-3" v-show="currentViewMode === 'line'">
      <CardLinksSimple v-for="link in filteredLinks" :key="link.id" :titleLink="link.title" :category="link.category"
        :date="link.date" :time="link.time" :imagesLink="link.images" :hrefLink="link.href"
        :descriptionLink="link.description" :imageLink="link.imageLink"
      />
    </div>

  </div>
</template>

<script lang="ts" setup>
import CardLinks from '@/components/dashboard/default/mylinks/CardLinks.vue';
import CardLinksSimple from '@/components/dashboard/default/mylinks/CardLinksSimple.vue';

import CardStats from '@/components/dashboard/default/CardStats.vue';
import CardStatsSimple from '@/components/dashboard/default/CardStatsSimple.vue';
// Current View Mode
const currentViewMode = ref('grid');

// Set View Mode
function setViewMode(mode) {
  currentViewMode.value = mode;
}


// Filtered Links
const filteredLinks = computed(() => {
  const links: { id: number, title: string, category: string[], date: string, time: string, styleBadge: string, href: string, description: string, images: string, imageLink: string, favorite: boolean }[] = [
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
      favorite: true,
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
      favorite: false,
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
      favorite: true,
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
      favorite: false,
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
      favorite: false,
    },
    {
      id: 6,
      title: 'Test d un tite',
      images: '/images/banniere/banniere-exemple.jpg',
      imageLink: '/images/profile/user2.png',
      category: ['Html', 'Css', 'Javascript', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro'],
      date: '2022-10-11',
      time: '10:10',
      styleBadge: 'bg-purple-500',
      href: '/article/how-to-use-openlinks',
      description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
      favorite: false,
    },
    {
      id: 7,
      title: 'Test d un ',
      images: '/images/banniere/banniere-exemple.jpg',
      imageLink: '/images/profile/user2.png',
      category: ['Html', 'Css', 'Javascript', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro'],
      date: '2020-10-11',
      time: '10:10',
      styleBadge: 'bg-purple-500',
      href: '/article/how-to-use-openlinks',
      description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
      favorite: false,
    },
    {
      id: 8,
      title: 'Test',
      images: '/images/banniere/banniere-exemple.jpg',
      imageLink: '/images/profile/user2.png',
      category: ['Html', 'Css', 'Javascript', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro'],
      date: '2023-10-11',
      time: '10:10',
      styleBadge: 'bg-purple-500',
      href: '/article/how-to-use-openlinks',
      description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
      favorite: true,
    },
    {
      id: 9,
      title: 'Test d',
      images: '/images/banniere/banniere-exemple.jpg',
      imageLink: '/images/profile/user2.png',
      category: ['Html', 'Css', 'Javascript', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro'],
      date: '2022-10-11',
      time: '10:10',
      styleBadge: 'bg-purple-500',
      href: '/article/how-to-use-openlinks',
      description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
      favorite: true,
    },
  ];
  return links.slice(0, 4);
});

const stats = [
  {
    title: 'Links',
    icon: 'circum:link',
    total: 120,
    description: 'Links',
  },
  {
    title: 'Favours',
    icon: 'circum:star',
    total: 2,
    description: 'Favours',
  },
  {
    title: 'Categories',
    icon: 'carbon:collapse-categories',
    total: 5,
    description: 'Categories',
  },
  {
    title: 'Directories',
    icon: 'circum:folder-on',
    total: 2,
    description: 'Directories',
  },
];


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
