<script setup lang="ts">
defineProps<{ title:string,isShow: boolean }>()
const emit = defineEmits(['close'])
const close = () => {
    emit('close')
}
</script>
<template>
    <Transition name="fade">
        <div v-if="isShow" class="fixed z-50 inset-0 w-full h-screen flex items-center justify-center
         backdrop-blur-sm"
            @click.self="close">
            <div class="relative container max-h-[90vh] bg-[#f1f1f1] dark:text-[#fff]
             dark:bg-[#333333] shadow-lg rounded-lg p-4 overflow-hidden">
                <div class="mb-3">
                    <h1 class="text-center text-lg font-semibold mb-4">{{ title }}</h1>
                    <button aria-label="close" class="absolute top-0 right-0 text-gray-500 text-4xl my-2 mx-4 px-1 py-0 bg-transparent"
                        @click.prevent="close">
                        ×
                    </button>

                </div>
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>