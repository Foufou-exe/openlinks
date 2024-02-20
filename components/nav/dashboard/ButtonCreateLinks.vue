<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <TooltipProvider :delay-duration="200">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button class="flex justify-center items-center p-3">
                <Icon name="ep:plus" class="text-lg lg:mr-1" />
                <span class="hidden lg:flex">Create Link</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <span class="text-sm font-semibold">Add link to your news feed or your teams</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="flex flex-col">
      <DialogLinkMe />
      <DialogLinkTeam />
    </DropdownMenuContent>
  </DropdownMenu>
  

      <!-- <Dialog>
      <DialogTrigger>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add news link</DialogTitle>
          <DialogDescription>
            Add link to your news feed or your teams
          </DialogDescription>
        </DialogHeader>
          <Tabs default-value="private" class="w-[400px]">
            <TabsList class="grid w-full grid-cols-2">
              <TabsTrigger value="private">
                Private
              </TabsTrigger>
              <TabsTrigger value="share">
                Share
              </TabsTrigger>
            </TabsList>
            <TabsContent value="private">
              <form class="w-2/3 space-y-6 mt-5" @submit="onSubmit">
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
              </Form>
            </TabsContent>
            <TabsContent value="share">
              <form class="w-2/3 space-y-6 mt-5" @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="link">
                  <FormLabel>Teams</FormLabel>
                    <Select>
                      <SelectTrigger >
                        <SelectValue placeholder="Select Teams"  />
                        </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="exemple1">
                            <div class="flex space-x-2 justify-center items-center">
                                <img src="/images/teams/groupeUser.jpg" class="w-8 h-8 rounded-lg">
                                <div class="flex flex-col justify-center items-center">
                                  <span class="font-semibold text-xs">
                                    Openlinks
                                  </span>
                                  <p class="text-gray-500 text-xs">
                                    @openlinks
                                  </p>
                                </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="exemple">
                            <div class="flex space-x-2 justify-center items-center">
                                <img src="/images/teams/groupeUser.jpg" class="w-8 h-8  rounded-lg">
                                <div class="flex flex-col justify-center items-center">
                                  <span class="font-semibold text-xs">
                                    UberShite
                                  </span>
                                  <p class="text-gray-500 text-xs">
                                    @ubershite
                                  </p>
                                </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="exemple2">
                            <div class="flex space-x-2">
                                <img src="/images/teams/groupeUser.jpg" class="w-8 h-8 rounded-lg">
                                <div class="flex flex-col justify-center items-center">
                                  <span class="font-semibold text-xs">
                                    Twitch Game
                                  </span>
                                  <p class="text-gray-500 text-xs">
                                    @twitchgame
                                  </p>
                                </div>
                            </div>
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                  <div class="flex items-center space-x-2">
                    <Checkbox id="shared" />
                    <label
                      for="shared"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      <span>
                        Le shared with everyone the link
                      </span>
                    </label>
                  </div>
                </FormField>
                <Button type="submit">
                  Add link
                </Button>
              </Form>
            </TabsContent>
          </Tabs>

      </DialogContent>
    </Dialog> -->
  <Toast/>
</template>

<script lang="ts" setup>
import DialogLinkMe from '@/components/nav/dashboard/dialog/DialogLinkMe.vue'
import DialogLinkTeam from '@/components/nav/dashboard/dialog/DialogLinkTeam.vue'


// import { h } from 'vue'
// import { useForm } from 'vee-validate'
// import { toTypedSchema } from '@vee-validate/zod'
// import * as z from 'zod'

// import { toast } from '@/components/ui/toast'

// const formSchema = toTypedSchema(z.object({
//   link: z.string().url(),
//   select: z.string(),
// }))

// const { handleSubmit } = useForm({
//   validationSchema: formSchema,
// })

// const onSubmit = handleSubmit((values) => {
//   toast({
//     title: 'You submitted the following values:',
//     description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
//   })
// })
</script>
