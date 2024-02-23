<template>
  <Select default-value="english">
    <SelectTrigger class="font-semibold">
      <SelectValue placeholder="English" />
    </SelectTrigger>
    <SelectContent >
      <SelectGroup>
        <SelectItem value="english">
          English
        </SelectItem>
        <SelectItem value="french">
          French
        </SelectItem>
        <SelectItem value="spanish">
          Spanish
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script lang="ts" setup>

</script>