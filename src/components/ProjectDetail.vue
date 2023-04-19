<script setup lang="ts">
defineProps<{ project: any }>()
</script>

<template>
    <section class="w-full h-[80vh] overflow-y-auto flex flex-col gap-10 pb-8">
        <div>
            <p>{{ project.description }}</p>
            <p>Number of member: {{ project.numberOfMember }}</p>
            <p>Source code: <a target="_blank" :href="project.src">{{ project.src }}</a></p>
            <p v-if="project.url">Website: <a target="_blank" :href="project.url">{{ project.url }}</a></p>
        </div>
        <div>
            <h4 class="text-center font-semibold">TECHNOLOGY USED</h4>
            <ul class="flex justify-center flex-wrap mt-4 items-center gap-x-6 md:gap-x-8 gap-y-9">
                <li v-for="tech in project.tech" class="w-[120px] rounded-md shadow-neumor dark:shadow-neumor-dark 
                            flex flex-col items-center gap-1 p-1 hover:scale-[1.03]">
                    <img :src="tech.img" class="w-[100px] aspect-square" />
                    <h6 class="font-medium">{{ tech.name }}</h6>
                </li>
            </ul>
        </div>
        <div v-if="project.features.length !==0">
            <h4 class="text-center font-semibold uppercase">Features</h4>
            <ul class="flex flex-col mt-4 items-center justify-start gap-10 ">
                <li v-for="feature in project.features" 
                class="flex flex-col items-center gap-3 p-2 rounded-md
                           w-2/3  shadow-neumor dark:shadow-neumor-dark ">
                    <img :src="feature.img" class="w-3/4" />
                    <h6 class="font-medium">{{ feature.name }}</h6>
                </li>
            </ul>
        </div>

    </section>
</template>