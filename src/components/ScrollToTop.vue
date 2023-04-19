<template>
  <button ref="appButton" class="app-button" @click="toTop">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>

  
<script lang="ts">
import { onMounted, ref, onBeforeMount } from "vue";
export default {
  name: "ScrollToTop",
  setup() {
    const appButton = ref();

    const userScroll = () => {
      if (window.scrollY > 0) {
        appButton.value.classList.add("showButton");
      } else {
        appButton.value.classList.remove("showButton");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", userScroll);
    });
    onBeforeMount(() => {
      window.removeEventListener("scroll", userScroll);
    });
    return { appButton };
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.app-button {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 4px;
  box-shadow: 2px 2px #e9e9e9;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  display: none;
  right: 40px;
  z-index: 99;
  border: 1px solid #555;
  background-color: #e9e9e9;
}

.showButton {
  display: block;
}
</style>
