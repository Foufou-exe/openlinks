<template>
  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    <Button
      v-for="item in sidebarNavItems"
      :key="item.title"
      as="a"
      :href="item.href"
      variant="ghost"
      class="flex justify-between items-center"
      :class="cn(
        'w-full text-left justify-start',
        $route.path === `${item.href}` && 'bg-muted hover:bg-muted',
      )"
    >
      <div class="flex justify-center items-center space-x-2">
        <Icon :name="item.icon" class="text-xl" />
        <span>{{ item.title }}</span>
      </div>
      <div>
        <Icon name="material-symbols:chevron-right-rounded" class="text-xl" />
      </div>
    </Button>
  </nav>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { useRoute } from 'vue-router';

interface Item {
  title: string;
  href: string;
  icon: string;
}

const sidebarNavItems: Item[] = [
  {
    title: 'Account',
    href: '/examples/forms/account',
    icon: 'solar:settings-broken',
  },
  {
    title: 'Security',
    href: '/examples/forms/security',
    icon: 'solar:lock-broken',
  },
  {
    title: 'Notifications',
    href: '/examples/forms/notifications',
    icon: 'solar:notification-unread-lines-broken',
  },
  {
    title: 'Billing',
    href: '/examples/forms/billing',
    icon: 'material-symbols:credit-card',
  },
  {
    title: 'Teams',
    href: '/examples/forms/teams',
    icon: 'fluent:people-team-24-regular',
  },
  {
    title: 'Logout',
    href: '/examples/forms/logout',
    icon: 'solar:logout-2-broken',
  },
]
</script>


<style>

</style>