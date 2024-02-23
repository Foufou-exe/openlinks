<template>
  <div class="flex justify-center items-center space-x-4 bg-neutral-900/30 md:pr-8 rounded-3xl">
    <label class="group relative flex items-center justify-center overflow-hidden w-24 h-24 rounded-3xl cursor-pointer">
      <input type="file" name="file" accept="image/png,image/jpeg"
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" @change="handleFileUpload">
      <img :src="profileImg" alt="Profile Picture" class="h-full w-full object-cover rounded-3xl" />
      <div
        class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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

</script>