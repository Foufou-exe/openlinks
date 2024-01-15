<template>
    <div class="flex flex-col h-screen justify-center items-center p-5">
        <Card class="p-3">
            <CardHeader>
                <a class="flex items-center font-medium space-x-2" href="/">
                    <NuxtImg src="/icon.png"  class="lg:w-[50px] md:w-[45px] sm:w-[30px] max-sm:w-[30px]"/>
                    <h1 class="lg:text-2xl md:text-xl sm:text-lg">Openlinks</h1>
                </a>
            </CardHeader>
            <CardContent >
                <div class="flex flex-col items-center space-y-10">
                    <h1 class="sm:text-2xl md:text-2xl lg:text-3xl font-medium mt-5">We are under maintenance ⚙️</h1>
                    <p class="lg:text-lg md:text-sm sm:text-base italic">We are currently under maintenance. We will be back soon.</p>
                </div>
            </CardContent>
            <CardFooter>
                <div class="flex flex-col space-y-5 mt-5">
                    <p class="font-thin sm:text-xs md:text-sm lg:text-base">
                        The project is coming soon, in the meantime you can follow us on :
                    </p>
                    <Button type="button" variant="outline">
                        <a href="https://github.com/Foufou-exe/openlinks" class="flex justify-center items-center">
                            <Icon name="pajamas:github" class="w-5 h-5 inline-block mr-2" />
                            Github
                        </a>
                    </Button>
                </div>
            </CardFooter>
        </Card>
        <div class="mt-5">
            <p>© 2024 Openlinks, Inc. ❤️</p>
        </div>
    </div>
</template>
