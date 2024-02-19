<template>
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost" class="w-full font-semibold flex justify-start items-center">
          <Icon name="fluent:people-team-20-regular" class="text-xl mr-2" />
          For Team
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add news link</DialogTitle>
          <DialogDescription>
            Add link to your news feed
          </DialogDescription>
        </DialogHeader>
        <form class="w-2/3 space-y-6">
          <FormField v-slot="{ componentField }" name="link">
            <FormItem>
              <FormLabel>Link :</FormLabel>
              <FormControl>
                <Input type="url" placeholder="https://exemple.com/links" v-bind="componentField" />
              </FormControl>
              <FormDescription>
                Enter the link to save it
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit">
            Add link
          </Button>
        </form>
      </DialogContent>
    </Dialog>
</template>

<script lang="ts" setup>

</script>

