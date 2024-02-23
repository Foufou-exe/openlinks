<template>
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
</template>

<script lang="ts" setup>

</script>
