<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue'
import ProjectDetail from './ProjectDetail.vue'
import {listProject} from '../mock/projects'
const isShow = ref(false)
const index = ref(0)

const onChooseProject = (id:number)=>{
    index.value = id
    isShow.value = true
    console.log(index.value)
}

</script>

<template>
    <section id="project" class="mt-16 dark:text-dark] dark:text-light">
        <h1 class="text-center text-[30px] font-semibold">PROJECT</h1>
        <ul class="grid grid-cols-[repeat(auto-fit,minmax(220px,360px))] justify-center flex-wrap items-center gap-x-6 gap-y-7 m-auto w-full min-h-[300px] rounded-xl
         py-7 dark:bg-dark">
            <li v-for="(project, index) in listProject" @click="onChooseProject(index)"
             class="shadow-neumor dark:shadow-neumor-dark w-full rounded-[20px] p-3 
             flex gap-3 flex-col hover:scale-[1.02] cursor-pointer"> 
                <img :src="project.thumbnail" alt=""
                class="w-full aspect-[4/3] rounded-xl">
                <h3 class="text-center text-[16px] font-semibold">{{ project.name }}</h3>
            </li>
        </ul>
    </section>
    <Modal :title="listProject[index].name" :is-show="isShow" @close="isShow = false">
        <ProjectDetail :project="listProject[index]"></ProjectDetail>
    </Modal>
</template>