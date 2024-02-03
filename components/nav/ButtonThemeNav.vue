<template>
  <TooltipProvider :delay-duration="200">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button @click="toggleTheme" variant="ghost" :class="colorMode.preference === 'dark' ? 'theme-light' : 'theme-dark' ">
          <Icon :name="currentThemeIcon" class="text-2xl" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <div class="flex items-center gap-2">
            <span class="text-sm font-semibold">Switch theme {{ colorMode.preference }}</span>
            <kbd class="rounded border border-neutral-600 px-1 font-sans font-medium inline-flex items-center pointer-events-none select-none space-x-1">
                <span>{{ osStore.shortcutSymbol }} + M</span>
            </kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
  
<script setup>
import { computed } from 'vue';
import { useOsStore } from '@/stores/osStore.js';
import { watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'
const keys = useMagicKeys()

watch(keys['Ctrl+M'] || keys['Meta+M'], (isPressed) => {
    if (isPressed) {
      toggleTheme()
    }
});


const osStore = useOsStore();
const colorMode = useColorMode();

const currentThemeIcon = computed(() => {
  if (colorMode.preference === 'system') {
    return 'circum:laptop';
  } else {
    return colorMode.preference === 'dark' ? 'ph:sun-light' : 'circum:dark';
  }
});

function toggleTheme() {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark';
  } else if (colorMode.preference === 'dark') {
    colorMode.preference = 'light';
  } else {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
}
</script>
  