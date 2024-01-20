<template>
<TooltipProvider>
    <Tooltip>
        <TooltipTrigger as-child>
            <Button type="button" variant="ghost" @click="handleOpenChange">
                    <Icon name="circum:search" class="text-2xl" />
            </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" >
            <div class="flex items-center gap-2">
                <span class="text-sm font-semibold">Search</span>
                <kbd class="rounded border border-neutral-600 font-sans font-medium inline-flex items-center pointer-events-none select-none space-x-1 px-1">
                    <span>{{ osStore.shortcutSymbol }} + K</span>
                </kbd>
            </div>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>

<CommandDialog v-model:open="open">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            Calendar
          </CommandItem>
          <CommandItem value="search-emoji">
            Search Emoji
          </CommandItem>
          <CommandItem value="calculator">
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile">
            Profile
          </CommandItem>
          <CommandItem value="billing">
            Billing
          </CommandItem>
          <CommandItem value="settings">
            Settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMagicKeys } from '@vueuse/core'
import { useOsStore } from '@/stores/osStore.js';
const osStore = useOsStore();


const open = ref(false)

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1])
    handleOpenChange()
})

function handleOpenChange() {
  open.value = !open.value
}
</script>

