<template>
  <div class="space-y-5">
    <div class="space-y-2">
      <div>
        <span class="font-semibold">Langue</span>
      </div>
      <div class="flex justify-between space-x-2 relative md:w-1/6">
        <SelectLangue />
      </div>
      <div>
        <p class="text-gray-500 text-sm">
          Choose a language for the application.
        </p>
      </div>
    </div>

    <div class="space-y-2">
      <div>
        <span class="font-semibold">Font</span>
      </div>
      <div class="flex justify-between space-x-2 relative md:w-1/6">
        <SelectFonts />
      </div>
      <div>
        <p class="text-gray-500 text-sm">
          Choose a font for the app.
        </p>
      </div>
    </div>

    <div class="space-y-2">
      <div>
        <span class="font-semibold">
          Color
        </span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:w-[400px]">
        <ButtonColor />
      </div>
      <div>
        <p class="text-gray-500 text-sm">
          Choose a color for the app.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonColor from '@/components/nav/dashboard/settings/appearence/ButtonColor.vue';
import SelectFonts from '@/components/nav/dashboard/settings/appearence/SelectFonts.vue';
import SelectLangue from '@/components/nav/dashboard/settings/appearence/SelectLangue.vue';
</script>