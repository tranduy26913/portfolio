<script setup lang="ts">
import { ref } from 'vue';
import { listContact } from '../mock/contacts'
const choose = ref(-1)
const onChoose = (index: number) => {
    if (choose.value === index)
        choose.value = -1
    else
        choose.value = index
}
</script>
<template>
    <section class="dark:text-dark dark:bg-dark">
        <article class="flex p-4 flex-col md:flex-row md:items-center gap-10 md:gap-1">
            <div class="flex-1 md:flex-2 lg:flex-3 flex flex-col gap-6 pt-10 order-2 md:order-1">
                <p class="font-medium">WELCOME TO MY PROFILE</p>
                <h1 class='text-5xl leading-snug font-semibold'>
                    Hi, I'm Tran Bao Duy
                    <br />
                    a
                    <div class="gradientText relative inline-flex animate-typewriter overflow-hidden
                             border-r-4 border-r-blue-500 whitespace-nowrap tracking-widest
                            ">
                        <span class="">Developer</span>
                    </div>
                </h1>
                <p class="pr-20">
                    I am a final-year student at HCMC University of Technology and Education. With a strength about web
                    developer, I'm looking for Frontend developer positions in website. I'll be using the technical and
                    problem-solving I've developed via studies and work.
                </p>


            </div>
            <div class="flex-1 order-1 md:order-2">
                <img src="../assets/avt.jpg"
                    class="w-1/2 m-auto md:w-full rounded-full shadow-neumor dark:shadow-neumor-dark" />
            </div>
        </article>
        <div class=" p-4">
            <p class="font-medium">CONTACT WITH ME</p>
            <ul class="flex justify-center flex-wrap gap-6 mt-5 w-full lg:grid lg:grid-cols-3 xl:grid-cols-4">
                <li v-for="(contact, index) in listContact" @click="onChoose(index)" 
                class="group h-12 w-12 sm:w-[280px] shadow-neumor rounded-[32px] flex items-center 
                lg:mx-auto gap-3 px-3 hover:scale-[1.03] dark:shadow-neumor-dark"
                    :class="[`${choose === index ? 'w-fit' : 'w-12'}`]">
                    <i class="text-[1.75rem] m-auto sm:m-0" :class="[contact.icon, contact.class]"></i>
                    <a v-if="contact.link" target="_blank" :href="contact.link"
                        class="text-[#333] dark:text-[#fff] hidden sm:block"
                        :class="[`${index === choose ? '!block' : ''}`]">
                        {{ contact.content }}
                    </a>
                    <p v-else :class="[`${index === choose ? '!block' : ''}`]"
                        class="text-[#333] hidden sm:block dark:text-[#fff]">{{ contact.content }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style></style>