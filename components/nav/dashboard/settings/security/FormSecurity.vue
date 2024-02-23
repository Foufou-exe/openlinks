<template>
  <div class="space-y-5">
    <div class="space-y-5">
      <div class="space-y-5">
        <div>
          <span class="font-semibold">Add login account</span>
          <p class="text-gray-500 text-sm">
            Add more accounts to ensure you never lose access to your openlinks profile and to make login quick and easy
            cross device
          </p>
        </div>

        <div class="space-y-2">

          <ButtonConnect />
          
        </div>
      </div>

      <div class="space-y-5">
        <div>
          <span class="font-semibold">Connected accounts</span>
          <p class="text-gray-500 text-sm">
            Remove the connection between openlinks and authorized login providers.
          </p>
        </div>

        <div class="space-y-2">

          <ButtonRemove />

        </div>

        <div class="space-y-2">
          <div>
            <span class="font-semibold">Change password</span>
            <p class="text-gray-500 text-sm">
              Change your password to keep your account secure.
            </p>
          </div>

          <SelectAndButtonPassword />

        </div>
        <div class="space-y-5">
          <div>
            <span class="font-semibold">⛔ Delete Account</span>
            <p class="text-gray-500 text-sm">
              Delete your account and all your data from openlinks. This action is irreversible.
            </p>
          </div>

          <div class="p-5 border-4 border-destructive rounded-3xl bg-destructive/20 md:w-1/2">
            <div>
              <p class="text-gray-400">
                <span class="font-semibold text-white">Warning:</span> This action is irreversible. You will lose all your data
                including your links, profile, and settings.
              </p>

              <div class="flex justify-end mt-5">

                <AlerteDialogDelete />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import AlerteDialogDelete from '@/components/nav/dashboard/settings/security/AlerteDialogDelete.vue'
import SelectAndButtonPassword from '@/components/nav/dashboard/settings/security/SelectAndButtonPassword.vue'
import ButtonRemove from '@/components/nav/dashboard/settings/security/ButtonRemove.vue'
import ButtonConnect from '@/components/nav/dashboard/settings/security/ButtonConnect'


</script>