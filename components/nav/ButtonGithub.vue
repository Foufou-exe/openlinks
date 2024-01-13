<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger as-child>
                <Button type="button" as-child variant="ghost">
                    <a href="https://github.com/Foufou-exe/openlinks" class="flex justify-center items-center">
                        <Icon name="pajamas:github" class="text-2xl mr-2" />
                        49 K
                    </a>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" >
                <span class="text-sm font-semibold">Github stars</span>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup>

</script>