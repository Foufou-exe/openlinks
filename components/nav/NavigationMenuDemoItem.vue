<template>
  <li>
    <NavigationMenuLink as-child>
      <a
        :href="href"
        :class="cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          $attrs.class ?? '',
        )"
      >
        <div class="text-sm font-medium leading-none flex items-center">
            <Icon :name="icons" class="text-xl mr-1" />
            {{ title }}
        </div>
        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
          <slot />
        </p>
      </a>
    </NavigationMenuLink>
  </li>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
defineProps<{ title?: string; href?: string ,icons?: string }>()
</script>
