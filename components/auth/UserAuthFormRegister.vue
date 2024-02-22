<template>
  <Card>
    <CardHeader>
      <CardTitle class="lg:text-3xl md:text-2xl sm:text-xl flex justify-center mb-2">
        Create an Account ✨
      </CardTitle>
      <!-- <CardDescription>
        Create your account openlinks account either via your Github or Google account or via your email and password.
      </CardDescription> -->
    </CardHeader>
    <CardContent class="space-y-3">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel>Username :</FormLabel>
          <FormControl>
            <Input type="text" placeholder="openlinks" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email : </FormLabel>
          <FormControl>
            <Input type="email" placeholder="exemple@openlinks.com" v-bind="componentField" autocomplete="email"
              auto-capitalize="none" auto-correct="off" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password : </FormLabel>
          <FormControl>
            <Input type="password" placeholder="*****************" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ value, handleChange }" type="checkbox" name="termsofuse">
        <FormItem>
          <FormControl>
            <div class="flex items-center space-x-2">
              <Checkbox id="terms" class="rounded" :checked="value" @update:checked="handleChange" />
              <Label for="terms">
                Accept
                <a href="/termsOfUse" class="underline">Terms of use</a>
                and
                <a href="/privacyPolicy" class="underline">Privacy policy</a>
              </Label>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="button" @click="onSubmit">
        <Icon name="circum:login" class="mr-2 text-xl" />
        Create Account
      </Button>
    </CardContent>
    <div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="text-muted-foreground">
          Or create with
        </span>
      </div>
      <div class="flex flex-col justify-center space-y-2 p-2">
        <Button variant="outline" as-child>
          <a>
            <Icon name="pajamas:github" class="text-xl mr-2" />
            <span>Github</span>
          </a>
        </Button>
        <Button variant="outline" type="button" as-child>
          <a>
            <Icon name="logos:google-icon" class="text-xl mr-2" />
            <span>Google</span>
          </a>
        </Button>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { toast } from '@/components/ui/toast'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(5).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(50),
  termsofuse: z.boolean().default(false).optional(),
}))


const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    termsofuse: false,
  }
})

const onSubmit = handleSubmit((values) => {
  if (!values.termsofuse) {
    toast({
      title: 'Error',
      description: 'You must accept the Terms of Use to create an account.',
      variant: 'destructive',
      duration: 1500,
    })
    return;
  }
  console.log(values)
  toast({
    title: 'Success !',
    description: '👋 Welcome to Openlinks'
  })
})
</script>