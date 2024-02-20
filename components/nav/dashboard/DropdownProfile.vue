<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
        <TooltipProvider :delay-duration="200">
        <Tooltip>
            <TooltipTrigger as-child>
                <div class="bg-muted rounded-lg hidden md:flex">
                    <div class="flex-col items-center mr-1 ml-2 p-2">
                        <span class="text-sm font-bold">{{ nameUser }}</span>
                    </div>
                    <NuxtImg :src="imageUser" class="w-10 rounded-lg" />
                </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">
                <div class="flex items-center gap-2">
                    <span class="text-sm font-semibold">Profile</span>
                </div>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-60 mr-1">
      <DropdownMenuLabel>
        <div class="flex flex-col justify-center items-center p-5">
            <span class="text-lg">{{ nameUser }}</span>
            <span class="text-sm text-gray-500">
                @{{ nameUser }}
            </span>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem >
            <Icon name="solar:user-broken" class="text-xl flex justify-center items-center mr-2"/>
            <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <NuxtLink to="/dashboard/settings">
          <DropdownMenuItem>
            <a class="flex justify-center items-center">
              <Icon name="solar:settings-broken" class="text-xl mr-2"/>
              <span>Settings</span>
            </a>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </NuxtLink>
      </DropdownMenuGroup>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon name="octicon:share-android-24" class="text-xl flex justify-center items-center mr-2"/>
          <span>Invite Friends</span>
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Icon name="solar:logout-2-broken" class="text-xl flex justify-center items-center mr-2" />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
defineProps({
  nameUser: {
    type: String,
    required: true
  },
  imageUser: {
    type: String,
    required: true
  }
})
</script>