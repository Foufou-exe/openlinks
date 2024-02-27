<template>
  <div
    class="pb-3 border-b mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
    <div class="flex justify-items-center justify-start items-center space-x-1">
      <div>
        <Icon name="ph:clock-bold" class="text-4xl sm:text-5xl" />
      </div>
      <div>
        <h1 class="text-lg sm:text-xl md:text-2xl font-bold">Recent</h1>
        <p class="text-xs sm:text-sm text-gray-500">
          Add links to your recent list.
        </p>
      </div>
    </div>
    <div class="flex justify-center items-center space-x-2">

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
</template>

<script lang="ts" setup>

</script>