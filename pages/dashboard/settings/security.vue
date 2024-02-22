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
          <Button class="flex justify-center items-center space-x-5 font-bold md:w-1/3" type="button">
            <Icon name="logos:google-icon" class="text-xl" />
            <span>Connect with Google</span>
          </Button>
          <Button class="flex justify-center items-center space-x-5 font-bold md:w-1/3" type="button">
            <Icon name="pajamas:github" class="text-xl" />
            <span>Connect with Github</span>
          </Button>
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
          <Button class="flex justify-center items-center space-x-5 font-bold md:w-1/3 hover:bg-destructive border-2"
            type="button" variant="outline">
            <Icon name="logos:google-icon" class="text-xl" />
            <span class="text-medium">Remove Google</span>
          </Button>
          <Button class="flex justify-center items-center space-x-5 font-bold md:w-1/3 hover:bg-destructive border-2"
            type="button" variant="outline">
            <Icon name="pajamas:github" class="text-xl" />
            <span>Remove Github</span>
          </Button>
        </div>

        <div class="space-y-2">
          <div>
            <span class="font-semibold">Change password</span>
            <p class="text-gray-500 text-sm">
              Change your password to keep your account secure.
            </p>
          </div>
          <div class="relative md:w-1/2">
            <Input class="border rounded-lg w-full pl-10 pr-10 font-semibold" placeholder="New Password"
              :type="passwordFieldType" min="5" required />
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon name="solar:lock-password-broken" class="text-xl" />
            </span>
            <button type="button" @click="togglePasswordVisibility"
              class="absolute inset-y-0 right-0 flex items-center pr-3">
              <Icon :name="passwordIcon" class="text-xl" />
            </button>
          </div>
          <div>
            <Button class="flex justify-center items-center space-x-2 font-bold" type="submit">
              <Icon name="material-symbols:check-small-rounded" class="text-xl" />
              <span>Change Password</span>
            </Button>
          </div>
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
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button class="flex justify-center items-center space-x-2 font-bold" type="submit" variant="destructive">
                        <Icon name="material-symbols:delete-outline" class="text-xl" />
                        <span>Delete Account</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you sure you want to delete your account ?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action is irreversible. You will lose all your data including your links, profile, and settings.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction class="hover:bg-destructive hover:text-white">Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>

const password = ref('');
const isPasswordVisible = ref(false);

// Computed property to dynamically switch the icon
const passwordIcon = computed(() => isPasswordVisible.value ? 'line-md:watch-off' : 'line-md:watch');

// Computed property to dynamically switch the input type
const passwordFieldType = computed(() => isPasswordVisible.value ? 'text' : 'password');

function togglePasswordVisibility() {
  // Toggle the visibility state
  isPasswordVisible.value = !isPasswordVisible.value;
}

// Page Meta
definePageMeta({
  layout: 'dashboard-security',
})
</script>