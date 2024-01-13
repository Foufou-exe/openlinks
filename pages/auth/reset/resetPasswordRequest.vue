<template>
    <div class="flex h-screen items-center justify-center">
        <div>
            <Card class="p-5 shadow-2xl">
                <CardHeader>
                    <CardTitle class="text-3xl flex justify-center mb-2">
                        Password reset Request🎈
                    </CardTitle>
                    <CardDescription>
                        Enter your email address to receive a password reset link.
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-2">
                    <div class="space-y-1">
                        <Label for="email" >Email :</Label>
                        <Input id="email" type="email" required/>
                    </div>
                </CardContent>
                <CardFooter class="flex justify-between">
                    <Button type="button" variant="secondary">
                        <Icon name="circum:paperplane" class="mr-2 text-xl" />
                        Sending the request
                    </Button>
                    <Button type="button" @click="$router.go(-1)">
                        &lt;
                        Back
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
    title: 'Devhub - Password Reset request ',
    meta: [
        {
            name: 'description',
            content: 'Password reset request',
        },
    ],
});
</script>