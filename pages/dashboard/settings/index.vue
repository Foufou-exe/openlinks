<template>
  <div>
    <div class="space-y-5">
      <div class="space-y-5">
        <div>
          <span class="font-semibold">Profile Picture</span>
          <p class="text-gray-500 text-sm">Your profile picture is how people recognize you on the site.</p>
        </div>
        <div class="flex items-center">
          <div class="flex justify-center items-center space-x-4 bg-neutral-900/30 md:pr-8 rounded-3xl">
            <label class="group relative flex items-center justify-center overflow-hidden w-24 h-24 rounded-3xl cursor-pointer">
              <input type="file" name="file" accept="image/png,image/jpeg" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" @change="handleFileUpload">
              <img :src="profileImg" alt="Profile Picture" class="h-full w-full object-cover rounded-3xl" />
              <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Icon name="material-symbols:photo-camera" class="text-white text-2xl" />
              </div>
            </label>
            <label>
              <input type="file" name="file" accept="image/png,image/jpeg" class="hidden" @change="handleFileUpload">
              <div class="flex justify-center items-center space-x-1 font-semibold hover:text-gray-400">
                <Icon name="material-symbols:photo-camera" class="text-xl md:text-3xl" />
                <span class="text-sm md:text-lg">Upload picture</span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <div>
          <span class="font-semibold">Username</span>
        </div>
        <div class="relative md:w-1/2">
          <Input class="border rounded-lg w-full pl-10 pr-10 font-semibold" placeholder="Username" type="text"/>
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon name="solar:user-broken" class="text-xl" />
          </span>
        </div>
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
        <div class="relative md:w-1/2">
          <Input class="border rounded-lg w-full pl-10 pr-10 font-semibold" placeholder="Enter your email" disabled/>
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon name="material-symbols:alternate-email-rounded" class="text-xl" />
          </span>
          <span class="absolute inset-y-0 right-0 flex items-center pr-3">
            <Icon name="material-symbols:lock-outline" class="text-xl" />
          </span>
        </div>
      </div>

      <div class="space-y-2">
        <div>
          <span class="font-semibold">Bio</span>
        </div>
        <div class="relative md:w-1/2">
          <Textarea class="w-full border rounded-lg  font-semibold" 
            id="bio"
            type="text"
            rows="3" maxlength="200"
            placeholder="Write a short bio about yourself" 
          />
        </div>
        <div>
          <p class="text-gray-500 text-sm">
            Your bio is a short personal description that appears on your profile.
          </p>
        </div>
      </div>
    </div>

    <Separator />

    <div class="flex justify-end">
      <Button class="flex justify-center items-center" type="button">
        <Icon name="material-symbols:check-small-rounded" class="text-xl" />
        <span>Save changes</span>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>

const profileImg = ref('/images/profile/user2.png');

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input && input.files) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result;
      if (result) {
        profileImg.value = result as string;
      }
    };
    reader.readAsDataURL(file);
  }
};





// Page Meta
definePageMeta({
  layout: 'dashboard-security',
})
</script>
