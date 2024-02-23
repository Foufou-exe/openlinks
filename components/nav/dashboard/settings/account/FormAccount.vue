<template>
  <div>
    <div class="space-y-5">
      <div class="space-y-5">
        <div>
          <span class="font-semibold">Profile Picture</span>
          <p class="text-gray-500 text-sm">Your profile picture is how people recognize you on the site.</p>
        </div>
        <div class="flex items-center">

          <InputImageProfile />

        </div>
      </div>
      <div class="space-y-2">
        <div>
          <span class="font-semibold">Username</span>
        </div>

        <InputUsername />

        <div>
          <p class="text-gray-500 text-sm">This is your public display name. It can be your real name or a pseudonym. You
            can only change this once every 30 days.</p>
        </div>
      </div>

      <div class="space-y-2">
        <div>
          <span class="font-semibold">Email</span>
          <p class="text-gray-500 text-sm">Your email is used for login and notifications.</p>
        </div>

        <InputEmail />

      </div>

      <div class="space-y-2 pb-5">
        <div>
          <span class="font-semibold">Bio</span>
        </div>

        <TextAreaBio />

        <div>
          <p class="text-gray-500 text-sm">
            Your bio is a short personal description that appears on your profile.
          </p>
        </div>
      </div>
    </div>

    <Separator />

    <div class="flex justify-end pt-5">
      <Button class="flex justify-center items-center" type="button">
        <Icon name="material-symbols:check-small-rounded" class="text-xl" />
        <span>Save changes</span>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputEmail from '@/components/nav/dashboard/settings/account/InputEmail.vue';
import InputImageProfile from '@/components/nav/dashboard/settings/account/InputImageProfile.vue';
import InputUsername from '@/components/nav/dashboard/settings/account/InputUsername.vue';
import TextAreaBio from '@/components/nav/dashboard/settings/account/TextAreaBio.vue'

// Page Meta
definePageMeta({
  layout: 'dashboard-security',
})
</script>