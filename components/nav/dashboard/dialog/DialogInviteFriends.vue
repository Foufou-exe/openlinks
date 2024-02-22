<template>
  <Dialog>
    <DialogTrigger>
      <DropdownMenuItem>
        <Icon name="octicon:share-android-24" class="text-xl flex justify-center items-center mr-2"/>
        <span>Invite Friends</span>
        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
</template>

<script lang="ts" setup>

</script>

