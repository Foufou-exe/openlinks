<template>
    <div class="flex h-screen items-center justify-center">
        <div>
            <Card>
                <CardHeader>
                    <CardTitle class="text-3xl flex justify-center mb-2">
                        Reset Password 🎉
                    </CardTitle>
                    <CardDescription>
                        Change your password and confirm it.
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-2">
                    <div class="space-y-1">
                        <Label for="password">Password :</Label>
                        <Input id="password" />
                    </div>
                    <div class="space-y-1">
                        <Label for="retype-password">Retype password :</Label>
                        <Input id="retype-password" type="password" />
                    </div>
                </CardContent>
                <CardFooter class="flex justify-between">
                    <Button>
                        <Icon name="circum:circle-check" class="mr-2 text-xl" />
                        Validate reset password
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'none',
})

useHead({
    title: 'Openlinks - Reset password',
    meta: [
        {
            name: 'description',
            content: 'Reset your password',
        },
    ],
});
</script>