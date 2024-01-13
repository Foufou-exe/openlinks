<template>
    <nav class="flex justify-between p-2">
        <div>
            <LinkLogo/>
        </div>
        <div>
            <div class="flex space-x-1 bg-muted rounded-lg justify-center items-center p-1">
                <MenuNav/>
            </div>
        </div>
        <div class="flex space-x-1 bg-muted rounded-lg justify-center items-center p-1">
            <ButtonSearch/>
            <ButtonThemeNav/>
            <ButtonGithub/>
            <ButtonLogin />
        </div>
    </nav>
    <slot/>

<footer class="flex justify-evenly p-10 bg-muted item-center rounded-t-md">
  <nav class="flex flex-col">
    <header class="flex mb-3 font-bold">Services</header> 
    <a class="font-thin flex items-center">
      <Icon name="circum:share-2" class="text-lg mr-1" />
      Link sharing
    </a>
  </nav> 
  <nav class="flex flex-col">
    <header class="flex mb-3 font-bold">Website</header> 
    <a class="font-thin flex items-center" href="/#about">
        <Icon name="circum:home" class="text-lg mr-1" />
        About
    </a>
    <a class="font-thin flex items-center" href="/contact">
        <Icon name="circum:mobile-1" class="text-lg mr-1" />
        Contact
      </a>
    <a class="font-thin flex items-center" href="/support">
        <Icon name="circum:stethoscope" class="text-lg mr-1" />
        Support
    </a>
  </nav> 
  <nav class="flex flex-col">
    <header class="flex mb-3 font-bold">Legal</header> 
    <a class="font-thin flex items-center" href="/terms" >
        <Icon name="circum:bookmark" class="text-lg mr-1" />
      Terms of use
    </a>
    <a class="font-thin flex items-center" href="/privacy">
      <Icon name="circum:bookmark" class="text-lg mr-1" />
      Privacy policy
    </a>
    <a class="font-thin flex items-center" href="/security">
      <Icon name="circum:bookmark" class="text-lg mr-1" />
      Security policy
    </a>
  </nav>
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
</script>