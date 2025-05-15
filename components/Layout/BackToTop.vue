<template>
  <a 
    href="#" 
    class="back-to-top" 
    v-show="showBackToTop" 
    @click.prevent="scrollToTop"
  >
    <Icon name="bx:bx-up-arrow-alt" />
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// State
const showBackToTop = ref(false);

// Methods
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Handle scroll events
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 100;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.back-to-top {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  right: 15px;
  bottom: 15px;
  background: #172bbf;
  color: #fff;
  transition: display 0.5s ease-in-out;
  z-index: 99999;
  text-decoration: none;
}

.back-to-top:hover {
  color: #fff;
  background: #2eafec;
  transition: background 0.2s ease-in-out;
}

.back-to-top i {
  font-size: 24px;
}
</style>