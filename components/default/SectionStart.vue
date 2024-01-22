<template>
<div class="grid grid-cols-1 space-y-10 ">
        <div>
            <div class="flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:space-x-3 p-5 text-center lg:text-left">
                <Icon name="circum:share-2" class="lg:text-7xl text-5xl" />
            </div>
            <div
                class="flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:space-x-3 text-center">
                <div class="text-3xl lg:text-4xl font-bold">
                    <span>
                      Start saving, organising
                    </span>
                    <br>
                    <span>
                      and sharing your favourite links
                    </span>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center">
          <ButtonStart sizeButton="lg" sizeText="text-xl md:text-2xl" sizeIcons="text-xl md:text-2xl"/>
        </div>
  </div>
</template>

<script setup>
import ButtonStart from '@/components/default/about/ButtonStart'
</script>
