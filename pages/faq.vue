<template>
    <div class="mx-auto w-full max-w-3xl px-4 pt-16 pb-10 md:px-6 lg:px-8 min-h-screen">
        <div class="flex flex-col space-y-5">
            <h1 class="text-4xl font-bold">FAQ</h1>
            <span class="text-lg font-thin">
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
                    <Icon name="circum:home" class="mr-2 text-lg" />
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
        title: 'Qu\'est-ce qu\'OpenLinks ?',
        content: 'OpenLinks est une plateforme qui permet aux utilisateurs de stocker, partager et organiser leurs liens favoris (comme YouTube, GitHub, articles de magazines, etc.). Vous pouvez également créer des équipes avec vos amis pour partager des liens de manière collaborative.'
    },
    {
        value: 'item-2',
        title: 'Comment puis-je commencer à utiliser OpenLinks ?',
        content: 'Pour commencer à utiliser OpenLinks, créez un compte sur notre site web. Une fois inscrit, vous pouvez immédiatement commencer à ajouter, organiser et partager des liens.'
    },
    {
        value: 'item-3',
        title: 'Est-ce que OpenLinks est gratuit ?',
        content: 'Oui, OpenLinks offre une version gratuite de base. Nous proposons également des abonnements premium avec des fonctionnalités supplémentaires pour les utilisateurs avancés.'
    },
    {
        value: 'item-4',
        title: 'Comment puis-je partager des liens avec d\'autres utilisateurs sur OpenLinks ?',
        content: 'Pour partager des liens, ajoutez-les à votre compte OpenLinks, puis utilisez l\'option de partage pour envoyer ces liens à d\'autres utilisateurs ou à votre équipe.'
    },
    {
        value: 'item-5',
        title: 'Puis-je garder certains de mes liens privés ?',
        content: 'Absolument. OpenLinks vous permet de choisir si vous souhaitez partager un lien spécifique avec la communauté ou le garder privé pour votre usage personnel.'
    },
    {
        value: 'item-6',
        title: 'Comment fonctionnent les équipes sur OpenLinks ?',
        content: 'Les équipes permettent à un groupe d\'utilisateurs de partager facilement des liens entre eux. Vous pouvez rejoindre une équipe existante ou en créer une nouvelle et inviter des amis ou des collègues à la rejoindre.'
    },
    {
        value: 'item-7',
        title: 'OpenLinks offre-t-il des options de tri et de filtrage pour les liens ?',
        content: 'Oui, OpenLinks propose diverses options pour trier et filtrer vos liens, telles que la catégorie, la date d ajout, etc.'
    },
    {
        value: 'item-8',
        title: 'Comment OpenLinks assure-t-il la sécurité de mes données ?',
        content: 'La sécurité des données est une priorité absolue pour nous. Nous utilisons des techniques de cryptage avancées pour protéger vos informations personnelles et vos liens.'
    },
    {
        value: 'item-9',
        title: 'Puis-je utiliser OpenLinks sur mon téléphone ?',
        content: 'Oui, OpenLinks est conçu pour être entièrement responsive et fonctionne parfaitement sur les appareils mobiles.'
    },
    {
        value: 'item-10',
        title: 'Où puis-je demander de l aide ou du support ?',
        content: 'Pour toute assistance, veuillez visiter notre page de support ou nous contacter via notre formulaire de contact sur le site.'
    },
];

useHead({
  title: 'Openlinks - FAQ',
})
</script>
