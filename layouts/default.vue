<template>
  <nav class="flex justify-between p-2">
    <div class="flex space-x-2 p-1 justify-center items-center">
      <ButtonDropdown />
      <LinkLogo class="max-sm:hidden md:hidden lg:flex" />
    </div>
    <div class="hidden lg:flex space-x-1  justify-center items-center p-1">
      <MenuNav />
    </div>
    <div class="flex space-x-1 justify-center items-center p-1">
      <ButtonSearch />
      <ButtonThemeNav />
      <ButtonGithub />
      <ButtonLogin />
    </div>
  </nav>
  <slot />

  <footer class="p-10 rounded-t-md border-t">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <nav>
        <header class="mb-3 font-bold">Services</header>
        <ul class="space-y-4">
          <li>
            <a class="flex items-center hover:underline" href="https://github.com/Foufou-exe/openlinks">
              <span>Openlinks</span>
              <Icon name="solar:arrow-right-up-outline" class="text-sm ml-1 text-gray-500" />
            </a>
          </li>
          <li>
            <a class=" flex items-center hover:underline">
              <span>Openlinks API</span>
              <Icon name="solar:arrow-right-up-outline" class="text-sm ml-1 text-gray-500" />
            </a>
          </li>
          <li>
            <a class="flex items-center">
              <!-- When the extension is available, comment on the code -->
              <TooltipProvider>
                <Tooltip delay-duration="200">
                  <TooltipTrigger as-child>
                    <Badge class="mr-1" variant="outline">
                      🚧
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Coming soon...</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <!-- All the code above is uncommented, you just have to comment for it to work -->
              <span class="hover:underline">Openlinks Extension</span>
              <Icon name="solar:arrow-right-up-outline" class="text-sm ml-1 text-gray-500" />
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <header class="mb-3 font-bold">Organisation</header>
        <ul class="space-y-4">
          <li>
            <a href="/#about" class="flex items-center hover:underline">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="/support" class="flex items-center hover:underline">
              <span>Support</span>
            </a>
          </li>
          <li>
            <a href="/contact" class="flex items-center hover:underline">
              <span>Contact</span>
            </a>
          </li>
          <li>
            <span class="font-bold">
              Status
            </span>
          </li>
        </ul>
      </nav>
      <nav>
        <header class="mb-3 font-bold">Legal</header>
        <ul class="space-y-4">
          <li>
            <a href="/termsOfUse" class="flex items-center hover:underline">
              <span>Terms of use</span>
            </a>
          </li>
          <li>
            <a href="/privacyPolicy" class="flex items-center hover:underline">
              <span>Privacy policy</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <header class="mb-3 font-bold">Community</header>
        <ul class="space-y-4">
          <li>
            <a class=" flex items-center hover:underline" href="https://discord.gg/gPbUrvMnQY">
              <span>Openlinks on Discord</span>
              <Icon name="solar:arrow-right-up-outline" class="text-sm ml-1 text-gray-500" />
            </a>
          </li>
          <li>
            <a class=" flex items-center hover:underline"  href="https://github.com/Foufou-exe/openlinks">
              <span>Openlinks on Github</span>
              <Icon name="solar:arrow-right-up-outline" class="text-sm ml-1 text-gray-500" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>


  <footer class="flex justify-between px-10 py-4 border-t">
    <aside class="items-center grid-flow-col ">
      <span>© 2024 Openlinks, Inc.❤️</span>
    </aside>
    <nav class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-2">
        <a href="https://discord.gg/gPbUrvMnQY">
          <Icon name="pajamas:discord" class="text-xl md:text-2xl hover:text-[#17c18f]" />
        </a>
        <a href="https://github.com/Foufou-exe/openlinks">
          <Icon name="pajamas:github" class="text-xl md:text-2xl hover:text-[#17c18f]" />
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