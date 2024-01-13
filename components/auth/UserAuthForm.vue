<template>
  <Tabs default-value="login" class="w-full max-w-md mx-auto">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="login">
        Login
      </TabsTrigger>
      <TabsTrigger value="register">
        Register
      </TabsTrigger>
    </TabsList>
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle class="text-3xl flex justify-center mb-2">
            Login to Devhub ✨
          </CardTitle>
          <CardDescription>
            Connect to your Devhub account either via your Github or Google account or via your email and password.
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-2">
          <div class="space-y-1">
            <Label for="email">Email :</Label>
            <Input id="email" placeholder="exemple@devhub.com" icon="circum:mail" type="email" />
          </div>
          <div class="space-y-1">
            <Label for="password">Password :</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter class="flex justify-between">
          <Button>
            <Icon name="circum:login" class="mr-2 text-xl" />
            Login
          </Button>
          <a href="/auth/reset/resetPasswordRequest" class="underline">
            Forgot your password ?
          </a>
        </CardFooter>
        <div class="space-y-4">
          <div class="relative flex justify-center text-xs uppercase">
            <Separator class="w-[150px]"/>
            <span class="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
            <Separator class="w-[150px]"/>
          </div>
          <div class="flex flex-col justify-center space-y-2 p-2">
            <Button variant="outline" type="button">
              <Icon name="pajamas:github" class="mr-2 text-xl" />
              Github
            </Button>
            <Button variant="outline" type="button">
              <Icon name="pajamas:google" class="mr-2 text-xl" />
              Google
            </Button>
          </div>
        </div>
      </Card>
    </TabsContent>
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle class="lg:text-3xl md:text-2xl sm:text-xl flex justify-center mb-2">
            Create an Account ✨
          </CardTitle>
          <CardDescription>
            Create your account Devhub account either via your Github or Google account or via your email and password.
          </CardDescription>
        </CardHeader>
        <CardContent  class="space-y-3">
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel>Username :</FormLabel>
              <FormControl>
                <Input type="text" placeholder="devhub" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email : </FormLabel>
              <FormControl>
                <Input type="email" placeholder="exemple@devhub.com" v-bind="componentField"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>Password : </FormLabel>
              <FormControl>
                <Input type="password" placeholder="*********" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="button" @click="onSubmit" >
            <Icon name="circum:login" class="mr-2 text-xl" />
            Create Account
          </Button>
        </CardContent>
        <div>
          <div class="relative flex justify-center text-xs uppercase">
            <Separator class="w-[150px]"/>
            <span class="text-muted-foreground">
              Or create with
            </span>
            <Separator class="w-[150px]"/>
          </div>
          <div class="flex flex-col justify-center space-y-2 p-2">
            <Button variant="outline" type="button">
              <Icon name="pajamas:github" class="mr-2 text-xl" />
              Github
            </Button>
            <Button variant="outline" type="button">
              <Icon name="pajamas:google" class="mr-2 text-xl" />
              Google
            </Button>
          </div>
        </div>
      </Card>
    </TabsContent>
  </Tabs>
  <Toaster />
</template>

<script lang="ts" setup>
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { toast } from '@/components/ui/toast'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(5).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(50),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
  toast({
    title: 'You submitted the following values:',
    description: 'Username: ' + values.username + ' Email: ' + values.email + ' Password: ' + values.password,
  })
})
</script>