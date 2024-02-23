<template>
  <Select default-value="default">
    <SelectTrigger class="font-semibold">
      <SelectValue placeholder="Default" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="default">
          Default
        </SelectItem>
        <SelectItem value="inter">
          Inter
        </SelectItem>
        <SelectItem value="roboto">
          Roboto
        </SelectItem>
        <SelectItem value="poppins">
          Poppins
        </SelectItem>
        <SelectItem value="open-sans">
          Open Sans
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script lang="ts" setup>

</script>
