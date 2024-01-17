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
        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <ListItem
              v-for="component in components"
              :key="component.title"
              :title="component.title"
              :href="component.href"
              :icons="component.icons"
            >
              {{ component.description }}
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Need help ?</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <ListItem
              v-for="componentshelp in componentsHelp"
              :key="componentshelp.title"
              :title="componentshelp.title"
              :href="componentshelp.href"
              :icons="componentshelp.icons"
            >
              {{ componentshelp.description }}
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup lang="ts">
import ListItem from './NavigationMenuItem.vue'

import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
const components: { title: string; href: string; description: string; icons: string; }[] = [
  {
    title: 'Alert Dialog',
    icons: 'circum:stethoscope',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Alert Dialog',
    icons: 'circum:stethoscope',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
]

const componentsHelp: { title: string; href: string; description: string; icons: string; }[] = [
  {
    title: 'FAQ',
    icons: 'circum:square-question',
    href: '/faq',
    description:
      'Frequently asked questions about Openlinks.',
  },
  {
    title: 'Support', 
    icons: 'circum:stethoscope',
    href: '/support',
    description:
      'Get help with Openlinks. Contact us for help with your account, plan, or billing.',
  },
]
</script>