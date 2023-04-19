<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import About from '../components/About.vue'
import Skill from '../components/Skill.vue'
import Project from '../components/Project.vue'
</script>

<template>
    <Header>
    </Header>
    <main class="lg:container mx-6 lg:mx-auto">
        <About></About>
        <Skill></Skill>
        <Project></Project>
        <Footer></Footer>
    </main>
</template>