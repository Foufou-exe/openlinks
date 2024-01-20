<template>
  <nav class="flex justify-between p-2">
    <div class="flex space-x-2 p-1 justify-center items-center max-sm:bg-muted md:bg-muted lg:bg-transparent rounded-lg">
      <ButtonDropdown />
      <LinkLogo class="max-sm:hidden md:hidden lg:flex" />
    </div>
    <div class="hidden lg:flex space-x-1 rounded-lg justify-center items-center p-1">
      <MenuNav />
    </div>
    <div class="flex space-x-1 rounded-lg justify-center items-center p-1">
      <ButtonSearch />
      <ButtonThemeNav />
      <ButtonGithub />
      <ButtonLogin />
    </div>
  </nav>
  <slot />

  <footer class="bg-muted p-10 rounded-t-md">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <nav>
        <header class="mb-3 font-bold">Services</header>
        <div class="flex flex-col">
          <a class="font-thin flex items-center">
            <Icon name="circum:share-2" class="text-lg mr-1" />
            Link sharing
          </a>
        </div>
      </nav>
      <nav>
        <header class="mb-3 font-bold">Website</header>
        <div class="flex flex-col">
          <a class="font-thin flex items-center" href="/#about">
            <Icon name="circum:home" class="text-lg mr-1" />
            About
          </a>
          <a class="font-thin flex items-center" href="/support">
            <Icon name="circum:stethoscope" class="text-lg mr-1" />
            Support
          </a>
        </div>
      </nav>
      <nav>
        <header class="mb-3 font-bold">Legal</header>
        <div class="flex flex-col">
          <a class="font-thin flex items-center" href="/termsOfUse">
            <Icon name="circum:bookmark" class="text-lg mr-1" />
            Terms of use
          </a>
          <a class="font-thin flex items-center" href="/privacyPolicy">
            <Icon name="circum:bookmark" class="text-lg mr-1" />
            Privacy policy
          </a>
        </div>
      </nav>
    </div>
  </footer>


  <footer class="flex justify-between px-10 py-4 border-t bg-muted border-neutral-600">
    <aside class="items-center grid-flow-col font-thin">
      <p>© 2024 Openlinks, Inc. ❤️</p>
    </aside>
    <nav class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <a href="https://github.com/Foufou-exe/openlinks">
          <Icon name="pajamas:github" class="h-6 w-6" />
        </a>
      </div>
    </nav>
  </footer>
</template>

<script setup>
import LinkLogo from '@/components/LinkLogo.vue';
import ButtonThemeNav from '@/components/nav/ButtonThemeNav.vue';
import ButtonLogin from '@/components/nav/ButtonLogin.vue';
import ButtonGithub from '@/components/nav/ButtonGithub.vue';
import ButtonSearch from '@/components/nav/ButtonSearch.vue';
import MenuNav from '@/components/nav/MenuNav.vue';
import ButtonDropdown from '@/components/nav/ButtonDropdown.vue';
</script>