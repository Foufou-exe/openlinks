<template>
    <div class="mx-auto w-full max-w-3xl px-4 pt-16 pb-10 md:px-6 lg:px-8 min-h-screen">
        <div class="flex flex-col space-y-2">
            <h1 class="text-4xl font-bold">FAQ</h1>
            <span class="text-lg font-thin text-gray-500">
                Frequently asked questions.
            </span>
        </div>
        <div class="mt-5">
            <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
                <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
                    <AccordionTrigger>{{ item.title }}</AccordionTrigger>
                    <AccordionContent>
                        {{ item.content }}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        <div class="flex justify-end mt-10">
            <Button type="button" variant="secondary" as-child>
                <a href="/" class="flex items-center justify-center">
                    <Icon name="mingcute:home-3-fill" class="mr-2 text-lg" />
                    Home
                </a>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const defaultValue = 'item-1'

const accordionItems = [
    {
        value: 'item-1',
        title: 'What is OpenLinks?',
        content: 'OpenLinks is a platform that allows users to store, share and organise their favourite links (such as YouTube, GitHub, magazine articles, etc.). You can also create teams with your friends to share links collaboratively.'
    },
    {
        value: 'item-2',
        title: 'How do I get started with OpenLinks?',
        content: 'To start using OpenLinks, create an account on our website. Once registered, you can immediately start adding, organising and sharing links.'
    },
    {
        value: 'item-3',
        title: 'Is OpenLinks free?',
        content: 'Yes, OpenLinks offers a basic free version. We also offer premium subscriptions with additional features for advanced users.'
    },
    {
        value: 'item-4',
        title: 'How do I share links with other users on OpenLinks?',
        content: 'To share links, add them to your OpenLinks account, then use the share option to send the links to other users or your team.',
    },
    {
        value: 'item-5',
        title: 'Can I keep some of my links private?',
        content: 'Absolutely. OpenLinks lets you choose whether you want to share a specific link with the community or keep it private for your own use.'
    },
    {
        value: 'item-6',
        title: 'How do teams work on OpenLinks?',
        content: 'Teams allow a group of users to easily share links with each other. You can join an existing team or create a new one and invite friends or colleagues to join.'
    },
    {
        value: 'item-7',
        title: 'Does OpenLinks offer sorting and filtering options for links?',
        content: 'Yes, OpenLinks offers various options for sorting and filtering your links, such as category, date added, etc.'
    },
    {
        value: 'item-8',
        title: 'How does OpenLinks ensure the security of my data?',
        content: 'Data security is an absolute priority for us. We use advanced encryption techniques to protect your personal information and your links.'
    },
    {
        value: 'item-9',
        title: 'Can I use OpenLinks on my phone?',
        content: 'Yes, OpenLinks is designed to be fully responsive and works perfectly on mobile devices.'
    },
    {
        value: 'item-10',
        title: 'Where can I get help or support?',
        content: 'For assistance, please visit our support page or contact us via our contact form on the site.'
    },
];

useHead({
  title: 'Openlinks - FAQ',
})
</script>
