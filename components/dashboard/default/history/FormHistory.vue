<template>
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
      <div class="flex justify-center items-center space-x-2">
        <Tabs default-value="grid">
          <TabsList>
            <TooltipProvider :delay-duration="0">
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

            <TooltipProvider :delay-duration="0">
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
</template>

<script lang="ts" setup>
import CardLinks from '~/components/dashboard/default/mylinks/CardLinks.vue';
import CardLinksSimple from '@/components/dashboard/default/mylinks/CardLinksSimple.vue';
// Current View Mode
const currentViewMode = ref('grid');

// Set View Mode
function setViewMode(mode) {
  currentViewMode.value = mode;
}


const filteredLinks = computed(() => {
  const links: { id: number, title: string, category: string[], date: string, time: string, href: string, description: string, images: string, imageLink: string, favorite: boolean, lastVisite: string }[] = [
    {
      'id': 1,
      'title': 'The Importance of Education',
      'images': 'https://source.unsplash.com/150x150/?nature,can',
      'imageLink': 'https://source.unsplash.com/150x150/?portrait,campaign',
      'category': ['Science', 'Technology', 'Entertainment'],
      'date': '2020-06-03',
      'time': '18:55',
      'href': '/article/method-wrong-some',
      'description': 'Unit answer can single music play produce finally. Something put particular energy born. Everyone sing once.',
      'favorite': true,
      'lastVisite': '2023-06-03'
    },
    {
      'id': 2,
      'title': 'The Olympics',
      'images': 'https://source.unsplash.com/150x150/?nature,too',
      'imageLink': 'https://source.unsplash.com/150x150/?portrait,program',
      'category': ['Health', 'Technology'],
      'date': '2023-10-06',
      'time': '08:44',
      'href': '/article/away-letter-prevent',
      'description': 'Plant wrong everyone might.\nTeach have plan reason. Agency perhaps station hit majority baby three. Full town serious interesting century enter.',
      'favorite': true,
      'lastVisite': '2024-01-03'
    },
    {
      'id': 3,
      'title': 'Election Year Strategies',
      'images': 'https://source.unsplash.com/150x150/?nature,happen',
      'imageLink': 'https://source.unsplash.com/150x150/?portrait,attorney',
      'category': ['Education'],
      'date': '2022-03-14',
      'time': '12:12',
      'href': '/article/couple-land-agency',
      'description': 'Learn better board perform already case billion. Loss without your apply.',
      'favorite': true,
      'lastVisite': '2024-02-27'
    },
    {
      'id': 4,
      'title': 'Exploring Space',
      'images': 'https://source.unsplash.com/150x150/?nature,decide',
      'imageLink': 'https://source.unsplash.com/150x150/?portrait,commercial',
      'category': ['Health', 'Technology', 'Sports'],
      'date': '2020-04-27',
      'time': '07:31',
      'href': '/article/break-door-democrat',
      'description': 'Effort real record low event tree sea. Thought rich seat prepare successful.',
      'favorite': true,
      'lastVisite': '2024-05-01'
    },
    {
      'id': 5,
      'title': 'Top Destinations of the Year',
      'images': 'https://source.unsplash.com/150x150/?nature,party',
      'imageLink': 'https://source.unsplash.com/150x150/?portrait,because',
      'category': ['Health', 'Entertainment'],
      'date': '2021-07-05',
      'time': '15:06',
      'href': '/article/unit-bill-major-bag',
      'description': 'Training shake once Democrat without. Often discuss value individual.\nTable new office now. Industry probably find cell.',
      'favorite': true,
      'lastVisite': '2020-05-09'
    },
    {
      'id': 6,
      'title': 'Economic Forecast',
      'images': 'https://source.unsplash.com/150x150/?nature,two',
      'imageLink': 'https://source.unsplash.com/150x150/?portrait,already',
      'category': ['Business'],
      'date': '2023-07-05',
      'time': '19:08',
      'href': '/article/human-view-line',
      'description': 'Car care fund. To together office suffer strategy body big. Soon me only professor.',
      'favorite': false,
      'lastVisite': '2021-02-03'
    },
    {
      'id': 7,
      'title': 'Economic',
      'images': 'https://source.unsplash.com/150x150/?nature,increase',
      'imageLink': 'https://source.unsplash.com/150x150/?portrait,also',
      'category': ['Business', 'Culture', 'Education'],
      'date': '2022-12-22',
      'time': '19:48',
      'href': '/article/base-edge-record',
      'description': 'Event simple dark operation field free impact letter. In choose city choose citizen person attack.',
      'favorite': false,
      'lastVisite': '2021-08-03'
    },
    {
      'id': 8,
      'title': 'Advances in Medicine',
      'images': 'https://source.unsplash.com/150x150/?nature,air',
      'imageLink': 'https://source.unsplash.com/150x150/?portrait,our',
      'category': ['Culture'],
      'date': '2023-04-13',
      'time': '15:22',
      'href': '/article/blue-likely-land',
      'description': 'Better indeed character go. Machine enough any next garden local. Movement brother ability form.',
      'favorite': false,
      'lastVisite': '2021-10-03'
    },
    {
      'id': 9,
      'title': 'Exploring Dick',
      'images': 'https://source.unsplash.com/150x150/?nature,down',
      'imageLink': 'https://source.unsplash.com/150x150/?portrait,dream',
      'category': ['Travel'],
      'date': '2020-01-24',
      'time': '06:10',
      'href': '/article/station-consider',
      'description': 'Final such him road. Push learn shake parent if build sister. Station treatment pattern.',
      'favorite': true,
      'lastVisite': '2019-06-03'
    }];

  let filtered = links; // Start with all the links

  return filtered.sort((a, b) => new Date(b.lastVisite).getTime() - new Date(a.lastVisite).getTime());
});
</script>