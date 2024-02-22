<template>
  <dashboardLayout>
    <div class="pb-3 border-b mb-5 flex flex-col overflow-hidden">
      <h1 class="text-xl sm:text-3xl font-bold">Settings</h1>
      <p class="text-xs sm:text-sm text-gray-500">
        Manage your account settings, and preferences
      </p>
    </div>

    <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 overflow-hidden">
      <aside class="-mx-0 lg:w-1/6 space-y-10">
        <SidebarSettings />
        <ul class="p-3 border rounded-lg space-y-1 font-thin">
          <li class="hover:font-medium hover:underline hover:underline-offset-2">
            <a href="/faq" class="flex items-center">
              <span class="ml-2">FAQ</span>
            </a>
          </li>
          <li class="hover:font-medium hover:underline hover:underline-offset-2">
            <a href="https://github.com/Foufou-exe/openlinks/discussions/new?category=feature-requests"
              class="flex items-center">
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
      <main class="flex-1 lg:max-w-4xl 3xl:max-w-5xl 4xl:max-w-7xl md:px-5 pb-5 overflow-hidden">
        <slot />
      </main>
    </div>
  </dashboardLayout>
</template>

<script lang="ts" setup>
import SidebarSettings from '@/components/dashboard/default/aside/settings/SidebarSettings.vue';
import dashboardLayout from '@/layouts/dashboard-layout.vue';
// Head
useHead({
  title: 'Openlinks - Dashboard',
  meta: [
    {
      name: 'description',
      content: 'Openlink is a platform to share your link with the world.',
    },
  ],
})
</script>
