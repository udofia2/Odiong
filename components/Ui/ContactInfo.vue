<template>
  <div :class="info.type">
    <Icon :name="info.icon" />
    <h4>{{ info.title }}:</h4>
    <p>
      <a v-if="info.link" :href="info.link">{{ info.value }}</a>
      <template v-else>{{ info.value }}</template>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ContactInfo } from '~/types';

// Define props
defineProps<{
  info: ContactInfo;
}>();
</script>

<style scoped>
div {
  margin-bottom: 30px;
}

i {
  font-size: 20px;
  color: #172bbf;
  float: left;
  width: 44px;
  height: 44px;
  background: #dff3fc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #050d18;
}

p {
  padding: 0 0 10px 60px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #173b6c;
}

a {
  color: #173b6c;
  text-decoration: none;
}

div:hover i {
  background: #172bbf;
  color: #fff;
}
</style>