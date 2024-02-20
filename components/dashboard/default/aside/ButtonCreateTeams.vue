<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="ghost" class="w-full justify-start items-center">
        <Icon name="material-symbols:add-rounded" class="text-xl" />
        <span class="ml-2">New Team</span>
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create New Team</DialogTitle>
        <DialogDescription>
          The purpose of this feature is to allow a user to create a new team.
        </DialogDescription>
      </DialogHeader>
      <DialogBody>
        <form>
          <div class="mb-4">
            <label class="block text-sm font-semibold mb-2" for="teamName">
              Team Name
            </label>
            <Input
              id="teamName"
              type="text"
              class="w-full"
              placeholder="Enter team name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-semibold mb-2" for="teamDescription">
              Team Description <span class="italic text-gray-400">(optional)</span>
            </label>
            <Textarea
              id="teamDescription"
              class="w-full"
              placeholder="Enter team description"
              rows="4"
              maxlength="250"
            />
          </div>
        </form>
      </DialogBody>
      <div class="flex items-center justify-between">
        <Button variant="ghost" type="button" >
          <Icon name="carbon:close-large" class="text-lg mr-1"/>
          Cancel
        </Button>
        <Button type="submit">
          Create
          <Icon name="heroicons:check-20-solid" class="text-lg ml-1"/>
        </Button>
      </div>
    </DialogContent>
  </Dialog>
</template>


<script setup lang="ts">

</script>

