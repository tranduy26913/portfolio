<script setup lang="ts">
import { ref } from 'vue'
    const listSkill = [
        {
            title:'HTML',
            icon:'fa-brands fa-html5',
            color:'#e34c26',
            class:'border-[#e34c26] drop-shadow-[0_0px_7px_#e34c26] after:bg-[#e34c26]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#e34c26]',
            iconClass:'group-hover:text-[#e34c26]'
        },
        {
            title:'CSS',
            icon:'fa-brands fa-css3-alt',
            color:'#264de5',
            class:'border-[#264de5] drop-shadow-[0_0px_7px_#264de5] after:bg-[#264de5]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#264de5]',
            iconClass:'group-hover:text-[#264de5]'
        },
        {
            title:'JavaScript',
            icon:'fa-brands fa-square-js',
            color:'#dbc531',
            class:'border-[#dbc531] drop-shadow-[0_0px_7px_#dbc531] after:bg-[#dbc531]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#dbc531]',
            iconClass:'group-hover:text-[#dbc531]'
        },
        {
            title:'REACT',
            icon:'fa-brands fa-react',
            color:'#61dbfb',
            class:'border-[#61dbfb] drop-shadow-[0_0px_7px_#61dbfb] after:bg-[#61dbfb]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#61dbfb]',
            iconClass:'group-hover:text-[#61dbfb]'
        },
        {
            title:'NodeJS',
            icon:'fa-brands fa-node-js',
            color:'#3C873A',
            class:'border-[#3C873A] drop-shadow-[0_0px_7px_#3C873A] after:bg-[#3C873A]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#3C873A]',
            iconClass:'group-hover:text-[#3C873A]'
        },
        {
            title:'Bootstrap',
            icon:'fa-brands fa-bootstrap',
            color:'#563d7c',
            class:'border-[#563d7c] drop-shadow-[0_0px_7px_#563d7c] after:bg-[#563d7c]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#563d7c]',
            iconClass:'group-hover:text-[#563d7c]'
        },
        {
            title:'Java',
            icon:'fa-brands fa-java',
            color:'#f89820',
            class:'border-[#f89820] drop-shadow-[0_0px_7px_#f89820] after:bg-[#f89820]',
            shadow:'group-hover:drop-shadow-[0_0px_7px_#f89820]',
            iconClass:'group-hover:text-[#f89820]'
        },
    ]
    const show = ref(true)
</script>
<template>
    <section id="skill" class="lg:container mx-6 lg:mx-auto mt-5 dark:text-dark">
        <h1 class="text-center text-[40px]">Skill</h1>
        <ul class="grid grid-cols-[repeat(auto-fill,130px)] justify-center gap-x-6 gap-y-7 m-auto w-full min-h-[300px] shadow-neumor rounded-xl
         py-7 dark:bg-dark dark:shadow-neumor-dark">

            <li v-for="skill in listSkill" 
            class="flex flex-col relative justify-center items-center aspect-square bg-blue-50 group p-2 dark:bg-dark">
                <div  class="border-4 w-full h-full border-l-transparent rounded-[50%] 
                        after:absolute after:w-4 after:h-4 after:top-3 after:rounded-[50%] 
                        rotateItem animate-spinSkew 
                        " v-bind:class="skill.class">
                </div>
                <div class="absolute rotateItem m-auto group-hover:-translate-y-16
                transition-all">
                    <i class=" text-[40px] text-[#444] dark:text-[#ccc]
                     group-hover:text-[64px]"
                     :class="[skill.iconClass,skill.icon]"></i>
                </div>
                <span :style="{color:skill.color}" :class="skill.shadow"
                 class="absolute font-semibold transition-all invisible group-hover:visible group-hover:-translate-y-5">
                {{ skill.title }}
                </span>
            </li>

            <!-- <li v-for="skill in listSkill" 
            class="flex flex-col relative justify-center items-center aspect-square bg-blue-50 group p-2 dark:bg-dark">
                <div  class="border-4 w-full h-full border-l-transparent rounded-[50%] 
                        after:absolute after:w-4 after:h-4 after:top-3 after:rounded-[50%] 
                        rotateItem animate-spinSkew 
                        " v-bind:class="skill.class">
                </div>
                <div class="absolute rotateItem m-auto group-hover:-translate-y-16
                transition-all">
                    <i class=" text-[40px] text-[#444]
                     group-hover:text-[64px]"
                     :class="[skill.iconClass,skill.icon]"></i>
                     <img src="https://img.icons8.com/fluency/96/null/typescript--v1.png"/>
                </div>
                <span :style="{color:skill.color}" :class="skill.shadow"
                 class="absolute font-semibold transition-all invisible group-hover:visible group-hover:-translate-y-5">
                {{ skill.title }}
                </span>
            </li> -->
        </ul>
    </section>
</template>

<style>
.rotateItem {
    transform:translateY(20px) rotateX(-60deg);
}
</style>