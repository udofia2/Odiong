<template>
  <div class="icon-box" :data-aos-delay="delay">
    <div class="icon">
      <Icon :name="service.icon" />
    </div>
    <h4 class="title">
      <a href="#" @click.prevent>{{ service.title }}</a>
    </h4>
    <p class="description">{{ service.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Service } from '~/types';

// Define props
const props = defineProps<{
  service: Service;
  delay?: number;
}>();
</script>

<style scoped>
.icon-box {
  margin-bottom: 20px;
}

.icon {
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  background: #172bbf;
  border-radius: 50%;
  transition: 0.5s;
  border: 1px solid #172bbf;
}

.icon i {
  color: #fff;
  font-size: 24px;
}

.icon-box:hover .icon {
  background: #fff;
}

.icon-box:hover .icon i {
  color: #172bbf;
}

.title {
  margin-left: 80px;
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.title a {
  color: #343a40;
  text-decoration: none;
}

.title a:hover {
  color: #172bbf;
}

.description {
  margin-left: 80px;
  line-height: 24px;
  font-size: 14px;
}
</style>