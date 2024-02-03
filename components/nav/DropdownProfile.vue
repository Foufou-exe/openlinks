<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
        <TooltipProvider :delay-duration="200">
        <Tooltip>
            <TooltipTrigger as-child>
                <div class="flex bg-muted rounded-lg">
                    <div class="flex flex-col items-center mr-1 ml-2 p-2">
                        <span class="text-sm font-bold">John Doe</span>
                    </div>
                    <NuxtImg src="/images/profile/user4.png" class="w-10 rounded-lg" />
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
            <span class="text-lg">John Doe</span>
            <span class="text-sm text-gray-500">
                @johndoe
            </span>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem >
            <Icon name="circum:user" class="text-xl flex justify-center items-center mr-2"/>
            <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Icon name="circum:settings" class="text-xl flex justify-center items-center mr-2"/>
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon name="circum:share-2" class="text-xl flex justify-center items-center mr-2"/>
          <span>Invite Friends</span>
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Icon name="circum:logout" class="text-xl flex justify-center items-center mr-2" />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>

</script>