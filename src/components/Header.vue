<script setup lang="ts">
import { createApp, ref } from 'vue';
import logo from '../assets/vue.svg'
const list = [
    {
        title: 'HOME',
        url: '/#'
    },
    {
        title: 'ABOUT',
        url: '/#about'
    },
    {
        title: 'SKILLS',
        url: '/#skills'
    },
    {
        title: 'PROEJECTS',
        url: '/#projects'
    },
]

const themeDark = ref(localStorage.theme === 'dark')
const handleChange = () => {
    console.log(themeDark.value)
    //themeDark.value != themeDark.value
    if (themeDark.value)
        document.documentElement.classList.add('dark')
    else
        document.documentElement.classList.remove('dark')

    localStorage.setItem('theme', themeDark.value ? 'dark' : 'light')
}

console.log(themeDark.value)



</script>

<template>
    <header class="header dark:bg-dark border-b  shadow-md dark:border-b-gray-400">
        <div class="flex lg:mx-auto px-4 justify-between h-14 max-w-screen-xl  py-1 items-center">
            <div>
                <img src='../assets/vue.svg' class="logo" />
            </div>

            <nav class="flex gap-4 h-max">
                <a v-for="item in list" :href="item.url"
                    class="font-semibold relative after:absolute after:w-0 after:-translate-x-1/2 after:bg-green after:h-0.75 after:rounded-sm 
                after:-bottom-0.5 after:left-1/2 hover:after:w-full after:transition-all after:duration-500 after:ease-out hover:ease-in">
                    {{ item.title }}
                </a>
            </nav>
            <div>
                <input type="checkbox" v-model="themeDark" @change="handleChange" class="checkbox" id="checkbox">
                <label for="checkbox" class="checkbox-label dark:bg-[#111]">
                    <i class="fas fa-moon"></i>
                    <i class="fas fa-sun"></i>
                    <span class="ball"></span>
                </label>
            </div>
        </div>
    </header>
</template>
<style>
.header {
    background: #f4f5f5;
}

.logo {
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #1bbb73);
}

.checkbox {
    opacity: 0;
    position: absolute;
}

.checkbox-label {
    background-color: #aaa;
    width: 50px;
    height: 26px;
    border-radius: 50px;
    position: relative;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f1f1f1;
}

.fa-moon {
    color: #f1c40f;
}

.fa-sun {
    color: #f35912;
}

.checkbox-label .ball {
    background-color: #fff;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
}

.checkbox:checked+.checkbox-label .ball {
    transform: translateX(24px);
}
</style>