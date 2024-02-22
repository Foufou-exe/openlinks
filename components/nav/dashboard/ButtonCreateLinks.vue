<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <TooltipProvider :delay-duration="200">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button class="flex justify-center items-center p-3">
                <Icon name="ep:plus" class="text-lg lg:mr-1" />
                <span class="hidden lg:flex">Create Link</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <span class="text-sm font-semibold">Add link to your news feed or your teams</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="flex flex-col">
      <DialogLinkMe />
      <DialogLinkTeam />
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import DialogLinkMe from '@/components/nav/dashboard/dialog/DialogLinkMe.vue'
import DialogLinkTeam from '@/components/nav/dashboard/dialog/DialogLinkTeam.vue'
</script>
