<template>
  <div class="pb-3 border-b mb-5 flex flex-col">
        <h1 class="text-xl sm:text-3xl font-bold">Settings</h1>
        <p class="text-xs sm:text-sm text-gray-500">
          Manage your account settings, and preferences
        </p>
  </div>

  <div class="flex flex-1 overflow-hidden">
    <aside class="-mx-0 lg:w-1/6 lg:flex flex-col justify-between space-y-10">
      <div class="flex-grow">
        <SidebarSettings />
      </div>

      <ul class="p-3 border rounded-lg space-y-1 font-thin">
        <li class="hover:font-medium hover:underline hover:underline-offset-2">
          <a href="/faq" class="flex items-center">
            <span class="ml-2">FAQ</span>
          </a>
        </li>
        <li class="hover:font-medium hover:underline hover:underline-offset-2">
          <a href="https://github.com/Foufou-exe/openlinks/discussions/new?category=feature-requests" class="flex items-center">
            <span class="ml-2">Request a feature</span>
          </a>
        </li>
        <li class="hover:font-medium hover:underline hover:underline-offset-2">
          <a href="https://github.com/Foufou-exe/openlinks/issues/new" class="flex items-center">
            <span class="ml-2">Report an issue</span>
          </a>
        </li>
        <li class="hover:font-medium hover:underline hover:underline-offset-2">
          <a href="/privacyPolicy" class="flex items-center">
            <span class="ml-2">Privacy policy</span>
          </a>
        </li>
        <li class="hover:font-medium hover:underline hover:underline-offset-2">
          <a href="/termsOfUse" class="flex items-center">
            <span class="ml-2">Terms of use</span>
          </a>
        </li>
      </ul>
    </aside>
    <main class="flex-1 overflow-y-auto p-5">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import SidebarSettings from '@/components/dashboard/default/aside/settings/SidebarSettings.vue';


// Page Meta
definePageMeta({
  layout: 'dashboard-layout',
})
</script>

