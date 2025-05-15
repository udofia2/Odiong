<template>
  <div class="testimonial-item" :data-aos-delay="delay">
    <p>
      <Icon name="bx:bxs-quote-alt-left" class="quote-icon-left" />
      {{ testimonial.content }}
      <Icon name="bx:bxs-quote-alt-right" class="quote-icon-right" />
    </p>
    <img 
      v-if="testimonial.author.image" 
      :src="testimonial.author.image" 
      class="testimonial-img" 
      :alt="testimonial.author.name"
    />
    <h3>{{ testimonial.author.name }}</h3>
    <h4>{{ testimonial.author.title }}</h4>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/types';

// Define props
const props = defineProps<{
  testimonial: Testimonial;
  delay?: number;
}>();
</script>

<style scoped>
.testimonial-item {
  box-sizing: content-box;
  text-align: center;
  min-height: 320px;
}

.testimonial-item .testimonial-img {
  width: 90px;
  border-radius: 50%;
  margin: 0 auto;
}

.testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #2f29ddc5;
}

.testimonial-item h4 {
  font-size: 14px;
  color: #999;
  margin: 0;
}

.testimonial-item .quote-icon-left,
.testimonial-item .quote-icon-right {
  color: #c3e8fa;
  font-size: 26px;
}

.testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}

.testimonial-item p {
  font-style: italic;
  margin: 0 15px 15px 15px;
  padding: 20px;
  background: rgb(37, 44, 153);
  position: relative;
  margin-bottom: 35px;
  border-radius: 6px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

.testimonial-item p::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 20px solid rgb(37, 44, 153);
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  position: absolute;
  bottom: -20px;
  left: calc(50% - 20px);
}
</style>