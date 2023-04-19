<script setup lang="ts">
import {listSkill} from '../mock/skills'

</script>
<template>
    <section id="skill" class="lg:container mx-6 lg:mx-auto mt-16 dark:text-dark">
        <h1 class="text-center text-[32px] font-semibold">SKILL</h1>
        <ul class="flex justify-center flex-wrap items-center gap-x-6 md:gap-x-8 gap-y-9 m-auto w-full min-h-[300px] rounded-xl
             py-7 dark:bg-dark">

            <li v-for="skill in listSkill" class="flex flex-col relative w-[130px] justify-center items-center aspect-square
                 bg-blue-50 group p-2 dark:bg-dark">
                <div class="z-10 border-4 w-3/4 h-3/4 border-l-transparent rounded-[50%] 
                            after:absolute after:w-4 after:h-4 after:top-1 after:rounded-[50%] 
                            rotateItem animate-spinSkew 
                            " v-bind:class="skill.class">
                </div>
                <div
                    class="absolute w-full h-full rotateItem bottom-0 shadow-neumor dark:shadow-neumor-dark rounded-[24px] z-0">
                </div>
                <div class="absolute rotateItem m-auto group-hover:-translate-y-16
                    transition-all">
                    <img v-if="skill.img" :src="skill.img"
                        class="grayscale w-[48px] group-hover:w-[76px] group-hover:grayscale-0  z-10" />
                    <i v-else class="text-[40px] text-[#444] dark:text-[#ccc] z-10
                         group-hover:text-[64px]" :class="[skill.iconClass, skill.icon]"></i>
                </div>
                <span :style="{ color: skill.color }" :class="skill.shadow"
                    class="absolute uppercase font-semibold transition-all invisible group-hover:visible group-hover:-translate-y-5">
                    {{ skill.title }}
                </span>
            </li>

        </ul>
    </section>
</template>

<style>
.rotateItem {
    transform: translateY(20px) rotateX(-60deg);
}
</style>