<template>
    <Legal
    maintitle="Terms of Use"
    description="These Terms of Use govern your access to and use of our web site and services. By accessing or using OpenLinks, you agree to be bound by these terms."
    :item="termsOfUse"
    />
</template>

<script setup lang="ts">
import Legal from '@/components/Legal.vue'
useHead({
  title: 'Openlinks - Terms of Service',
})


const termsOfUse: { title: string; contenu: string; }[] = [
  {
    title: '1. Introduction',
    contenu: 'Welcome to OpenLinks ! These Terms of Use govern your access to and use of our web site and services. By accessing or using OpenLinks, you agree to be bound by these terms.'
  },
  {
    title: '2. Use of the Service',
    contenu: 'You must create an account to use most of the features of OpenLinks. You are responsible for maintaining the security of your account and passwords. You must not use OpenLinks for illegal or unauthorised activities.'
  },
  {
    title: '3. Intellectual Property',
    contenu: 'All content displayed on OpenLinks, including text, graphics, logos, and images, is the property of OpenLinks or its licensors. You may not use, copy or reproduce any contenu without explicit permission.'
  },
  {
    title: '4. Privacy Policy',
    contenu: 'Please read our Privacy Policy to understand how we collect, use and share your personal data.'
  },
  {
    title: '5. Limitation of Liability',
    contenu: 'OpenLinks shall not be liable for any indirect, incidental, special or consequential damages that result from your use of the service.'
  },
  {
    title: '6. Changes to Terms',
    contenu: 'We reserve the right to modify these Terms at any time. Your continued use of the service constitutes your acceptance of the changes.'
  },
  {
    title: '7. Contact us',
    contenu: 'If you have any questions about these terms, please contact us at [contact email].'
  },
  {
    title: '8. Jurisdiction',
    contenu: 'These terms are governed by the laws of the country/state where OpenLinks is based.'
  },
  {
    title: '9. Miscellaneous Provisions',
    contenu: 'If any part of these terms is held to be unenforceable, the remaining provisions shall remain in full force and effect.'
  }
];

</script>