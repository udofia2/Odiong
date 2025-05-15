<template>
  <div class="resume-item">
    <h4>{{ item.title }}</h4>
    <h5>{{ item.period }}</h5>
    <p><em>{{ item.organization }}, {{ item.location }}</em></p>
    <p v-if="item.description">{{ item.description }}</p>
    <ul v-if="item.bullets && item.bullets.length">
      <li v-for="(bullet, index) in item.bullets" :key="index">
        {{ bullet }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ResumeItem } from '~/types';

// Define props
defineProps<{
  item: ResumeItem;
}>();
</script>

<style scoped>
.resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #1f5297;
  position: relative;
}

.resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #1f549b;
  margin-bottom: 10px;
}

.resume-item h5 {
  font-size: 16px;
  background: #591a06;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
}

.resume-item ul {
  padding-left: 20px;
}

.resume-item ul li {
  padding-bottom: 10px;
}

.resume-item:last-child {
  padding-bottom: 0;
}

.resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #1f5297;
}
</style>