<template>
  <div class="count-box" :data-aos-delay="fact.delay">
    <Icon :name="fact.icon" />
    <span ref="countElement" data-toggle="counter-up">0</span>
    <p>
      <strong>{{ fact.title }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAnimation } from '~/composables/useAnimation';
import type { Fact } from '~/types';

// Define props
const props = defineProps<{
  fact: Fact;
}>();

// Refs
const countElement = ref<HTMLElement | null>(null);
const boxRef = ref<HTMLElement | null>(null);

// Get animateCounter from composable
const { animateCounter } = useAnimation();

// Setup animation
onMounted(() => {
  // Create intersection observer for the animation
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Start counter animation when element becomes visible
      animateCounter(countElement, props.fact.value, 1000, props.fact.delay || 0);
      
      // Disconnect observer after triggering animation
      observer.disconnect();
    }
  }, { threshold: 0.1 });
  
  // Start observing the element
  if (boxRef.value) {
    observer.observe(boxRef.value);
  }
});
</script>

<style scoped>
.count-box {
  padding: 30px;
  width: 100%;
}

.count-box i {
  display: block;
  font-size: 44px;
  color: #172bbf;
  float: left;
}

.count-box span {
  font-size: 48px;
  line-height: 40px;
  display: block;
  font-weight: 700;
  color: #172bbf;
  margin-left: 60px;
}

.count-box p {
  padding: 15px 0 0 0;
  margin: 0 0 0 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #4f62f1;
}

.count-box a {
  font-weight: 600;
  display: block;
  margin-top: 20px;
  color: #172bbf;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  transition: ease-in-out 0.3s;
}

.count-box a:hover {
  color: #1f5297;
}
</style>