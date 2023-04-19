<script setup lang="ts">
import { ref } from 'vue'
    const listSkill = [
        {
            title:'HTML',
            icon:'fa-brands fa-html5',
            color:'#e34c26',
            class:'border-[#e34c26] drop-shadow-[0_0px_7px_#e34c26] after:bg-[#e34c26]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#e34c26]',
            iconClass:'group-hover:text-[#e34c26]',
            order:'order-1'
        },
        {
            title:'CSS',
            icon:'fa-brands fa-css3-alt',
            color:'#264de5',
            class:'border-[#264de5] drop-shadow-[0_0px_7px_#264de5] after:bg-[#264de5]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#264de5]',
            iconClass:'group-hover:text-[#264de5]',
            order:'order-2'
        },
        {
            title:'SASS',
            icon:'fa-brands fa-sass',
            color:'#CD6799',
            class:'border-[#CD6799] drop-shadow-[0_0px_7px_#CD6799] after:bg-[#CD6799]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#CD6799]',
            iconClass:'group-hover:text-[#CD6799]',
            order:'order-3'
        },
        {
            title:'JavaScript',
            icon:'fa-brands fa-square-js',
            color:'#dbc531',
            class:'border-[#dbc531] drop-shadow-[0_0px_7px_#dbc531] after:bg-[#dbc531]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#dbc531]',
            iconClass:'group-hover:text-[#dbc531]',
            order:'order-4'
        },
        {
            title:'REACT',
            icon:'fa-brands fa-react',
            color:'#61dbfb',
            class:'border-[#61dbfb] drop-shadow-[0_0px_7px_#61dbfb] after:bg-[#61dbfb]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#61dbfb]',
            iconClass:'group-hover:text-[#61dbfb]',
            order:'order-6'
        },
        {
            title:'NodeJS',
            icon:'fa-brands fa-node-js',
            color:'#3C873A',
            class:'border-[#3C873A] drop-shadow-[0_0px_7px_#3C873A] after:bg-[#3C873A]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#3C873A]',
            iconClass:'group-hover:text-[#3C873A]',
            order:'order-7'
        },
        {
            title:'Bootstrap',
            icon:'fa-brands fa-bootstrap',
            color:'#563d7c',
            class:'border-[#563d7c] drop-shadow-[0_0px_7px_#563d7c] after:bg-[#563d7c]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#563d7c]',
            iconClass:'group-hover:text-[#563d7c]',
            order:'order-9'
        },
        {
            title:'Java',
            icon:'fa-brands fa-java',
            color:'#f86620',
            class:'border-[#f86620] drop-shadow-[0_0px_7px_#f86620] after:bg-[#f86620]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#f86620]',
            iconClass:'group-hover:text-[#f86620]',
            order:'order-10'
        },
        {
            title:'Figma',
            icon:'fa-brands fa-figma',
            color:'#b67148',
            class:'border-[#b67148] drop-shadow-[0_0px_7px_#b67148] after:bg-[#b67148]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#b67148]',
            iconClass:'group-hover:text-[#b67148]',
            order:'order-11'
        },
    ]
</script>
<template>
    <section id="skill" class="lg:container mx-6 lg:mx-auto mt-16 dark:text-dark">
        <h1 class="text-center text-[32px] font-semibold">SKILL</h1>
        <ul class="flex justify-center flex-wrap items-center gap-x-6 md:gap-x-8 gap-y-9 m-auto w-full min-h-[300px] rounded-xl
         py-7 dark:bg-dark">

            <li v-for="skill in listSkill" 
            :class="skill.order"
            class="flex flex-col relative w-[130px] justify-center items-center aspect-square
             bg-blue-50 group p-2 dark:bg-dark">
                <div class="z-10 border-4 w-3/4 h-3/4 border-l-transparent rounded-[50%] 
                        after:absolute after:w-4 after:h-4 after:top-1 after:rounded-[50%] 
                        rotateItem animate-spinSkew 
                        " v-bind:class="skill.class">
                </div>
                <div class="absolute w-full h-full rotateItem bottom-0 shadow-neumor dark:shadow-neumor-dark rounded-[24px] z-0" ></div>
                <div class="absolute rotateItem m-auto group-hover:-translate-y-16
                transition-all">
                    <i class=" text-[40px] text-[#444] dark:text-[#ccc] z-10
                     group-hover:text-[64px]"
                     :class="[skill.iconClass,skill.icon]"
                     ></i>
                </div>
                <span :style="{color:skill.color}" :class="skill.shadow"
                 class="absolute uppercase font-semibold transition-all invisible group-hover:visible group-hover:-translate-y-5">
                {{ skill.title }}
                </span>
            </li>

            <li class="flex flex-col relative justify-center items-center w-[130px] order-5
             aspect-square bg-blue-50 group p-2 dark:bg-dark">
                <div class="border-4  w-3/4 h-3/4 border-l-transparent rounded-[50%] 
                        after:absolute after:w-4 after:h-4 after:top-1 after:rounded-[50%] 
                        rotateItem animate-spinSkew border-[#007acc] drop-shadow-[0_0px_7px_#007acc] after:bg-[#007acc]
                        ">
                </div>
                <div class="absolute  w-full h-full rotateItem bottom-0 shadow-neumor dark:shadow-neumor-dark rounded-[24px] z-0" ></div>
                <div class="absolute rotateItem m-auto group-hover:-translate-y-16
                transition-all">
                     <img src="https://img.icons8.com/fluency/96/null/typescript--v1.png"
                     class="grayscale w-[48px] group-hover:w-[76px] group-hover:grayscale-0  z-10"
                      />
                </div>
                <span class="absolute uppercase font-semibold transition-all invisible group-hover:visible
                 group-hover:-translate-y-5 group-hover:drop-shadow-[0_0px_7px_#007acc] text-[#007acc]">
                TypeScript
                </span>
            </li>

            <li class="flex flex-col relative justify-center items-center w-[130px] order-8
             aspect-square bg-blue-50 group p-2 dark:bg-dark">
                <div class="border-4  w-3/4 h-3/4 border-l-transparent rounded-[50%] 
                        after:absolute after:w-4 after:h-4 after:top-1 after:rounded-[50%] 
                        rotateItem animate-spinSkew border-[#4DB33D] drop-shadow-[0_0px_7px_#4DB33D] after:bg-[#4DB33D]
                        ">
                </div>
                <div class="absolute w-full h-full rotateItem bottom-0 shadow-neumor dark:shadow-neumor-dark rounded-[24px] z-0" ></div>
                <div class="absolute rotateItem m-auto group-hover:-translate-y-16
                transition-all">
                  
                     <img src="https://img.icons8.com/color/96/null/mongodb.png"
                     class="grayscale w-[48px] group-hover:w-[76px] group-hover:grayscale-0 z-10"
                      />
                </div>
                <span class="absolute uppercase font-semibold transition-all invisible group-hover:visible
                 group-hover:-translate-y-5 group-hover:drop-shadow-[0_0px_7px_#4DB33D] text-[#4DB33D]">
                 mongodb
                </span>
            </li>
        </ul>
    </section>
</template>

<style>
.rotateItem {
    transform:translateY(20px) rotateX(-60deg);
}
</style>