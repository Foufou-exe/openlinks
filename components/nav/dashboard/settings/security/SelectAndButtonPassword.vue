<template>
  <div class="relative md:w-1/2">
    <Input class="border rounded-lg w-full pl-10 pr-10 font-semibold" placeholder="New Password" :type="passwordFieldType"
      min="5" required />
    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
      <Icon name="solar:lock-password-broken" class="text-xl" />
    </span>
    <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 flex items-center pr-3">
      <Icon :name="passwordIcon" class="text-xl" />
    </button>
  </div>
  <div>
    <Button class="flex justify-center items-center space-x-2 font-bold" type="submit">
      <Icon name="material-symbols:check-small-rounded" class="text-xl" />
      <span>Change Password</span>
    </Button>
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
</script>