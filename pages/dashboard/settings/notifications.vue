<template>
  <div class="space-y-5">
    <div>
      <form class="space-y-8">
        <FormField v-slot="{ componentField }" type="radio" name="type">
          <FormItem class="space-y-3">
            <FormLabel class="font-semibold text-lg">Notify me about...</FormLabel>
            <FormControl>
              <RadioGroup
                class="flex flex-col space-y-1"
                v-bind="componentField"
              >
                <FormItem class="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="all" />
                  </FormControl>
                  <FormLabel class="font-normal">
                    All new messages
                  </FormLabel>
                </FormItem>
                <FormItem class="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="mentions" />
                  </FormControl>
                  <FormLabel class="font-normal">
                    Direct messages and mentions
                  </FormLabel>
                </FormItem>
                <FormItem class="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="none" />
                  </FormControl>
                  <FormLabel class="font-normal">
                    Nothing
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <div>
          <h3 class="mb-4 text-lg font-medium">
            Email Notifications
          </h3>
          <div class="space-y-4">
            <FormField v-slot="{ handleChange, value }" type="checkbox" name="communication_emails">
              <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
                <div class="space-y-0.5">
                  <FormLabel class="text-base">
                    Communication emails
                  </FormLabel>
                  <FormDescription>
                    Receive emails about your account activity.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    :checked="value"
                    @update:checked="handleChange"
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField v-slot="{ handleChange, value }" type="checkbox" name="marketing_emails">
              <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
                <div class="space-y-0.5">
                  <FormLabel class="text-base">
                    Team emails
                  </FormLabel>
                  <FormDescription>
                    Receive emails about new products, features, and more.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    :checked="value"
                    @update:checked="handleChange"
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField v-slot="{ handleChange, value }" type="checkbox" name="social_emails">
              <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
                <div class="space-y-0.5">
                  <FormLabel class="text-base">
                    Social emails
                  </FormLabel>
                  <FormDescription>
                    Receive emails for friend requests, follows, and more.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    :checked="value"
                    @update:checked="handleChange"
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField v-slot="{ handleChange, value }" type="checkbox" name="security_emails">
              <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
                <div class="space-y-0.5">
                  <FormLabel class="text-base">
                    Security emails
                  </FormLabel>
                  <FormDescription>
                    Receive emails about your account activity and security.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    :checked="value"
                    @update:checked="handleChange"
                  />
                </FormControl>
              </FormItem>
            </FormField>
          </div>
        </div>

        <FormField v-slot="{ handleChange, value }" type="checkbox" name="mobile">
          <FormItem class="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                :checked="value"
                @update:checked="handleChange"
              />
            </FormControl>
            <div class="space-y-1 leading-none">
              <FormLabel>
                Use different settings for my mobile devices
              </FormLabel>
              <FormDescription>
                You can manage your mobile notifications in the
                <a href="/examples/forms">
                  mobile settings
                </a> page.
              </FormDescription>
            </div>
          </FormItem>
        </FormField>

        <div class="flex justify-start">
          <Button type="submit">
            Update notifications
          </Button>
        </div>
      </form>
    </div>

  </div>
</template>

<script lang="ts" setup>
// Page Meta
definePageMeta({
  layout: 'dashboard-security',
})
</script>


