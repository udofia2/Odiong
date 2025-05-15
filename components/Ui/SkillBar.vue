<template>
  <div class="skill-bar">
    <span class="skill">
      <Icon :name="icon" :style="iconStyle" class="skill-icon" />
      {{ name }} 
      <i class="val">{{ percentage }}%</i>
    </span>
    <div class="progress-bar-wrap">
      <div 
        class="progress-bar" 
        role="progressbar" 
        :aria-valuenow="percentage" 
        aria-valuemin="0" 
        aria-valuemax="100"
        :style="progressStyle"
        :class="{ 'animate-progress': isVisible }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useAnimation } from '~/composables/useAnimation';

// Define props
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#172bbf'
  }
});

// Initialize refs
const skillBarRef = ref<HTMLDivElement | null>(null);
const isVisible = ref(false);

// Compute styles
const iconStyle = computed(() => {
  return {
    color: props.color
  };
});

const progressStyle = computed(() => {
  return {
    backgroundColor: props.color,
    width: isVisible.value ? `${props.percentage}%` : '0%'
  };
});

// Initialize animation
const { useIntersectionObserver } = useAnimation();

// Use onMounted to set up intersection observer
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
    }
  }, { threshold: 0.2 });
  
  if (skillBarRef.value) {
    observer.observe(skillBarRef.value);
  }
});
</script>

<style scoped>
.skill-bar {
  margin-bottom: 20px;
}

.skill {
  padding: 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #e8eaec;
}

.skill-icon {
  margin-right: 10px;
  font-size: 20px;
}

.val {
  float: right;
  font-style: normal;
  margin-left: auto;
}

.progress-bar-wrap {
  background: #dce8f8;
  height: 10px;
  border-radius: 5px;
}

.progress-bar {
  height: 10px;
  transition: width 0.9s ease;
  background-color: #172bbf;
  border-radius: 5px;
  width: 0;
}

.animate-progress {
  animation: progressAnimation 1s ease-out forwards;
}

@keyframes progressAnimation {
  0% {
    width: 0;
  }
  100% {
    width: v-bind('`${percentage}%`');
  }
}
</style>