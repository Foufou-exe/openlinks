<template>
  <div>
    <div class="space-y-5">
      <div class="space-y-2">
        <div>
          <span class="font-semibold">Current Plan</span>
        </div>
        <div class="flex justify-between space-x-2 relative md:w-1/2">
          <Select default-value="free">
            <SelectTrigger class="font-semibold">
              <SelectValue placeholder="Free" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectItem value="free">
                  Free
                </SelectItem>
                <SelectItem value="pro">
                  Pro
                </SelectItem>
                <SelectItem value="custom">
                  Custom
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button size="sm" class="flex items-center justify-center">
            <Icon name="material-symbols:check-small-rounded" class="text-xl" />
            <span>Upgrade</span>
          </Button>
        </div>
        <div>
          <p class="text-gray-500 text-sm">
            Upgrade to a paid plan to unlock more features and support the development of this app.
          </p>
        </div>
      </div>


    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
