<template>
    <TooltipProvider :delay-duration="200">
        <Tooltip>
            <TooltipTrigger as-child>
                <Button type="button" as-child variant="ghost" class="hidden lg:flex">
                    <StarsGithub size="text-xl" />
                </Button>
            </TooltipTrigger> 
            <TooltipContent side="bottom" >
                <span class="text-sm font-semibold">Github stars</span>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup>
import StarsGithub from './StarsGithub.vue';
</script>