<template>
  <div class="grid grid-cols-1 gap-5">
    <div class="mb-10">
      <div class="flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-y-0 lg:space-x-6">
        <div class="bg-muted rounded-lg p-2 shadow-xl">
          <Icon name="circum:location-off" class="lg:text-7xl text-5xl" />
        </div>
        <div class="text-center lg:text-left">
          <span class="text-2xl lg:text-4xl font-bold">
            Protecting your privacy is our top priority
          </span>
          <p class="font-thin">
            Your identity is your data, and we protect it.
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <CardSecurity
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :icons="card.icons"
        :title2="card.title2"
        :description2="card.description2"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardSecurity from '@/components/default/security/CardSecurity.vue';

const cards = [
  {
    title: 'Data Storage',
    description: 'Your data is stored on secure, encrypted servers. And only you can access it.',
    icons: 'circum:database',
    title2: 'You are in control of your data',
    description2: 'You can delete your data at any time. We will never sell your data to third parties.',
  },
  {
    title: 'End-to-end encryption',
    description: 'Your data is encrypted from the moment you enter it. Only you can decrypt it.',
    icons: 'circum:bank',
    title2: 'No data is stored unencrypted on our servers',
    description2: 'We use the latest encryption technology to protect your data. We use the latest type of encryption. No data is sold to third parties.',
  },
  {
    title: '24/7 availability',
    description: 'Our servers are always available. We guarantee 99.9% uptime.',
    icons: 'circum:grid-4-1',
    title2: 'The priority is you',
    description2: 'We are always available to help you. We are always available to help you.',
  },
];
</script>
