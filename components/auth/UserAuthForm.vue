<template>
  <Tabs :default-value="route.query.tab || 'register'"  @update:modelValue="updateTab" class="w-full max-w-md mx-auto">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="login">
        Login
      </TabsTrigger>
      <TabsTrigger value="register">
        Register
      </TabsTrigger>
    </TabsList>
    <TabsContent value="login" >
      <UserAuthFormLogin />
    </TabsContent>
    <TabsContent value="register" >
      <UserAuthFormRegister />
    </TabsContent>
  </Tabs>
  <Toaster />
</template>

<script setup lang="ts"> 
import Toaster from '@/components/ui/toast/Toaster.vue'

import UserAuthFormLogin from '@/components/auth/UserAuthFormLogin.vue'
import UserAuthFormRegister from '@/components/auth/UserAuthFormRegister.vue'

import { useRouter, useRoute } from '#imports';

const router = useRouter();
const route = useRoute();

const updateTab = (tab: string) => {
  router.push({ query: { tab } });
};

</script>