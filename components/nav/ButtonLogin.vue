<template>
<TooltipProvider>
    <Tooltip>
        <TooltipTrigger as-child>
            <Button type="button" as-child>
                <a href="/auth" class="flex justify-center items-center">
                    <Icon name="circum:login" class="text-2xl mr-2" />
                    <span class="hidden lg:flex">Sign in</span>
                </a>
            </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" >
            <div class="flex items-center gap-2">
                <span class="text-sm font-semibold">Login</span>
                <kbd class="rounded border border-neutral-600 font-sans font-medium inline-flex items-center pointer-events-none select-none space-x-1 px-1">
                    <span>Shift + L</span>
                </kbd>
            </div>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'
import { useRouter } from 'vue-router'
const router = useRouter()
const keys = useMagicKeys()

watch(
    keys['Shift+L'] || keys['Shift+L'],
    (isPressed) => {
        if (isPressed) {
            router.push('/auth')
        }
    },
    { immediate: true }
)

</script>