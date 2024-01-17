<template>
  <Legal 
    maintitle="Privacy Policy" 
    description="This Privacy Policy explains how OpenLinks collects, uses and protects the personal information you provide to us." 
    :item="privacyPolicy" 
  />

</template>

<script setup lang="ts">
import Legal from '@/components/Legal.vue'
useHead({
  title: 'Openlinks - Privacy Policy',
})


const privacyPolicy: { title: string; contenu: string; }[] = [
  {
    title: '1. Introduction',
    contenu: 'Your privacy is important to us. This privacy policy explains how OpenLinks collects, uses and protects the personal information you provide to us.'
  },
  {
    title: '2. Data Collection',
    contenu: 'We collect personal information such as your name, email address and contact details when you register with us or use our services.'
  },
  {
    title: '3. Use of Information',
    contenu: 'Your information is used to provide and improve our services, to communicate with you, for account security and, if you choose, to send you marketing information.'
  },
  {
    title: '4. Data Sharing',
    contenu: 'We do not share your personal data with third parties unless this is necessary to provide our services, to meet legal requirements, or with your consent.'
  },
  {
    title: '5. Storage and Security',
    contenu: 'We take steps to protect your data from loss, theft and unauthorised access, use, modification or disclosure.'
  },
  {
    title: '6. Access and Control',
    contenu: 'You have the right to access, correct or delete your personal information held by us. You may also limit the use or sharing of your data.'
  },
  {
    title: '7. Cookies and Tracking Technologies',
    contenu: 'We use cookies and other tracking technologies to enhance your user experience on our site and to analyse our traffic.'
  },
  {
    title: '8. Changes to the Privacy Policy',
    contenu: 'Our privacy policy may change from time to time. We will post any changes to the policy on this page and, if the changes are significant, we will provide you with more prominent notice.'
  },
  {
    title: '9. Contact us',
    contenu: 'If you have any questions or concerns about our privacy policy or the processing of your data, please contact us at support@openlinks.fr.'
  },
  {
    title: '10. Consent',
    contenu: 'By using our website and services, you consent to the collection and use of your personal information as described in this privacy policy.'
  }
];

</script>
