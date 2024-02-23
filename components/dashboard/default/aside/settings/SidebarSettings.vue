<template>
  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 overflow-x-auto">
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

const $route = useRoute();

const sidebarNavItems: Item[] = [
  {
    title: 'Account',
    href: '/dashboard/settings',
    icon: 'solar:settings-broken',
  },
  {
    title: 'Appearence',
    href: '/dashboard/settings/appearence',
    icon: 'solar:gallery-edit-broken',
  },
  {
    title: 'Security',
    href: '/dashboard/settings/security',
    icon: 'solar:lock-broken',
  },
  {
    title: 'Notifications',
    href: '/dashboard/settings/notifications',
    icon: 'solar:notification-unread-lines-broken',
  },
  {
    title: 'Billing',
    href: '/dashboard/settings/billing',
    icon: 'material-symbols:credit-card',
  },
  {
    title: 'Logout',
    href: '/logout',
    icon: 'solar:logout-2-broken',
  },
]
</script>

