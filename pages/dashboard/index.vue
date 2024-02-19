<template>
  <div class="space-y-10">
    <div class="flex justify-between items-center border-b pb-5">
      <div class="flex justify-items-center justify-start items-center space-x-1">
        <div>
          <Icon name="circum:home" class="text-4xl sm:text-5xl" />
        </div>
        <div>
          <h1 class="text-lg sm:text-xl md:text-2xl font-bold">Dashboard</h1>
          <span class="text-xs sm:text-sm text-gray-500">
            Welcome to your dashboard. Here you can manage your links and see your statistics.
          </span>
        </div>
      </div>

      <div class="flex justify-center items-center">
          <Tabs default-value="grid">
            <TabsList>
              <TabsTrigger value="grid">
                <Icon name="circum:grid-4-1" class="text-2xl" />
              </TabsTrigger>
              <TabsTrigger value="line">
                <Icon name="circum:grid-2-h" class="text-2xl" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-1">
          <CardTitle class="text-xl font-medium ">
            Links
          </CardTitle>
          <Icon name="circum:link" class="text-4xl border rounded-md p-1" />
        </CardHeader>
        <CardContent class="flex flex-col justify-center">
          <div class="pb-1">
            <span class="text-5xl font-bold">
              120
            </span>
          </div>
          <div class=" pb-1">
            <p class="text-xs text-muted-foreground">
              Total Links
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-1">
          <CardTitle class="text-xl font-medium ">
            Favours
          </CardTitle>
          <Icon name="circum:star" class="text-4xl border rounded-md p-1" />
        </CardHeader>
        <CardContent class="flex flex-col justify-center">
          <div class="pb-1">
            <span class="text-5xl font-bold">
              2
            </span>
          </div>
          <div class="pb-1">
            <p class="text-xs text-muted-foreground">
              Total Favours
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-1">
          <CardTitle class="text-xl font-medium ">
            Categories
          </CardTitle>
          <Icon name="carbon:collapse-categories" class="text-4xl border rounded-md p-1" />
        </CardHeader>
        <CardContent class="flex flex-col justify-center">
          <div class="pb-1">
            <span class="text-5xl font-bold">
              5
            </span>
          </div>
          <div class="pb-1">
            <p class="text-xs text-muted-foreground">
              Total Categories
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-1">
          <CardTitle class="text-xl font-medium ">
            Directories
          </CardTitle>
          <Icon name="circum:folder-on" class="text-4xl border rounded-md p-1" />
        </CardHeader>
        <CardContent class="flex flex-col justify-center">
          <div class="pb-1">
            <span class="text-5xl font-bold">
              2
            </span>
          </div>
          <div class="pb-1">
            <p class="text-xs text-muted-foreground">
              Total directories
            </p>
          </div>
        </CardContent>
      </Card>
    </div>

    <div class="flex justify-between items-center border-b pb-5">
      <div class="flex justify-items-center justify-start items-center space-x-1">
        <div>
          <Icon name="circum:timer" class="text-4xl sm:text-5xl" />
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
          <a href="">
            Views all
            <Icon name="fluent:arrow-right-24-regular" class="text-lg ml-1" />
          </a>
        </Button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-6 gap-5 justify-items-center">
      <CardLinks 
        v-for="link in filteredLinks" :key="link.id" 
        :titleLink="link.title" :category="link.category"
        :date="link.date" :time="link.time" 
        :imagesLink="link.images" :hrefLink="link.href"
        :descriptionLink="link.description" :imageLink="link.imageLink" 
      />
    </div>


    <div class="flex justify-between items-center border-b pb-5">
      <div class="flex justify-items-center justify-start items-center space-x-1">
      <div>
        <Icon name="circum:star" class="text-4xl sm:text-5xl" />
      </div>
      <div>
        <h1 class="text-lg sm:text-xl md:text-2xl font-bold">Favours</h1>
        <span class="text-xs sm:text-sm text-gray-500">
          Here are your favourited links.
        </span>
      </div>
      </div>
      <div class="flex justify-center items-center">
        <Button variant="ghost" as-child>
          <a href="">
            Views all
            <Icon name="fluent:arrow-right-24-regular" class="text-lg ml-1" />
          </a>
        </Button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-6 gap-5 justify-items-center">
      <CardLinks 
        v-for="link in filteredLinks" :key="link.id" 
        :titleLink="link.title" :category="link.category"
        :date="link.date" :time="link.time" 
        :imagesLink="link.images" :hrefLink="link.href"
        :descriptionLink="link.description" :imageLink="link.imageLink" 
      />
    </div>

    <div class="flex justify-between items-center border-b pb-5">
      <div class="flex justify-items-center justify-start items-center space-x-1">
      <div>
        <Icon name="circum:read" class="text-4xl sm:text-5xl" />
      </div>
      <div>
        <h1 class="text-lg sm:text-xl md:text-2xl font-bold">History</h1>
        <span class="text-xs sm:text-sm text-gray-500">
          Here you can see your history of link visited.
        </span>
      </div>

      </div>
      <div class="flex justify-center items-center">
        <Button variant="ghost" as-child>
          <a href="">
            Views all
            <Icon name="fluent:arrow-right-24-regular" class="text-lg ml-1" />
          </a>
        </Button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-6 gap-5 justify-items-center">
      <CardLinks 
        v-for="link in filteredLinks" :key="link.id" 
        :titleLink="link.title" :category="link.category"
        :date="link.date" :time="link.time" 
        :imagesLink="link.images" :hrefLink="link.href"
        :descriptionLink="link.description" :imageLink="link.imageLink" 
      />
    </div>

  </div>
</template>

<script lang="ts" setup>
import CardLinks from '~/components/dashboard/default/mylinks/CardLinks.vue';




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
    title: 'Test d un tite',
    images: '/images/banniere/banniere-exemple.jpg',
    imageLink: '/images/profile/user2.png',
    category: ['Html', 'Css', 'Javascript', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro'],
    date: '2022-10-11',
    time: '10:10',
    styleBadge: 'bg-purple-500',
    href: '/article/how-to-use-openlinks',
    description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
  },
  {
    id: 7,
    title: 'Test d un ',
    images: '/images/banniere/banniere-exemple.jpg',
    imageLink: '/images/profile/user2.png',
    category: ['Html', 'Css', 'Javascript', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro'],
    date: '2022-10-11',
    time: '10:10',
    styleBadge: 'bg-purple-500',
    href: '/article/how-to-use-openlinks',
    description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
  },
  {
    id: 8,
    title: 'Test',
    images: '/images/banniere/banniere-exemple.jpg',
    imageLink: '/images/profile/user2.png',
    category: ['Html', 'Css', 'Javascript', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro', 'Sveltekit', 'Nuxt.js', 'Remix', 'Astro'],
    date: '2022-10-11',
    time: '10:10',
    styleBadge: 'bg-purple-500',
    href: '/article/how-to-use-openlinks',
    description: 'Openlinks is a project designed to bring together new articles, shared links and much more.',
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
  },
];
  return links.slice(0, 4);
});


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

<style></style>