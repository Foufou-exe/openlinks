<template>
    <Card>
        <CardHeader>
            <CardTitle class="lg:text-3xl md:text-2xl sm:text-2xl flex justify-center mb-2">
                Login to Openlinks ✨
            </CardTitle>
            <CardDescription>
                Connect to your openlinks account either via your Github or Google account or via your email and password.
            </CardDescription>
        </CardHeader>
        <CardContent class="space-y-3">
            <div class="space-y-2">
                <Label for="email">Email :</Label>
                <Input id="email" placeholder="exemple@openlinks.com" type="email" autocomplete="email"  auto-capitalize="none" auto-correct="off" />
            </div>
            <div class="space-y-2">
                <Label for="password">Password :</Label>
                <Input id="password" type="password" placeholder="*****************" />
            </div>
        </CardContent>
        <CardFooter class="flex flex-col sm:flex-row justify-between">
            <Button type="button" @click="Login">
                <Icon name="circum:login" class="mr-2 text-xl" />
                Login
            </Button>
            <a href="/auth/reset/requestReset" class="underline mt-2 sm:mt-0">
                Forgot your password ?
            </a>
        </CardFooter>
        <div class="space-y-4">
            <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-background px-2 text-muted-foreground">
                    Or continue with
                </span>
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
</template>

<script lang="ts" setup>
import { toast } from '@/components/ui/toast'

const email = ref('test@exemple.com')
const password = ref('test')



async function Login() {

}
</script>