<script setup lang="ts">
import ListItem from './NavigationMenuDemoItem.vue'

import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li class="row-span-3">
              <NavigationMenuLink as-child>
                <a
                  class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <img src="/icon.png" class="h-8 w-8">
                  <div class="mb-2 mt-4 text-lg font-medium">
                    Openlinks/app
                  </div>
                  <p class="text-sm leading-tight text-muted-foreground">
                    A place for developers to share ideas and learn new things
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <ListItem href="/#about" title="About" icons="circum:home">
                Learn more about the project and its goals.
            </ListItem>
            <ListItem href="/#why" title="Why use Openlinks ?" icons="circum:search">
                Openlinks is a project designed to bring together new articles, shared links and much more.
            </ListItem>
            <ListItem href="/#security" title="Security" icons="circum:server">
                Openlinks implements security measures to protect your data.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <ListItem
              v-for="component in components"
              :key="component.title"
              :title="component.title"
              :href="component.href"
            >
              {{ component.description }}
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/docs" :class="navigationMenuTriggerStyle()">
          Contact
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/support" :class="navigationMenuTriggerStyle()">
          Support
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>