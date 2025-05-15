<template>
  <section id="testimonials" class="testimonials section-bg">
    <div class="container">
      <UiSectionTitle title="Testimonials" />
      
      <div ref="testimonialCarousel" class="testimonials-carousel">
        <div class="row">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="testimonial.id"
            class="col-lg-4"
            :class="{ 'active': currentSlide === index }"
          >
            <UiTestimonialCard 
              :testimonial="testimonial" 
              :delay="index * 100"
            />
          </div>
        </div>
        
        <!-- Navigation Dots -->
        <div class="owl-dots">
          <button 
            v-for="(testimonial, index) in testimonials" 
            :key="`dot-${testimonial.id}`"
            class="owl-dot"
            :class="{ 'active': currentSlide === index }"
            @click="setSlide(index)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useTestimonialsStore } from '~/stores/testimonials';

// Get testimonials data from store
const testimonialsStore = useTestimonialsStore();
const testimonials = computed(() => testimonialsStore.testimonials);

// Carousel functionality
const testimonialCarousel = ref<HTMLElement | null>(null);
const currentSlide = ref(0);
const autoplayInterval = ref<number | null>(null);

// Set current slide
const setSlide = (index: number) => {
  currentSlide.value = index;
  resetAutoplay();
};

// Move to next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.value.length;
};

// Start autoplay
const startAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
  
  autoplayInterval.value = window.setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
};

// Reset autoplay
const resetAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
  startAutoplay();
};

// Setup and cleanup
onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
});
</script>

<style scoped>
.testimonials-carousel {
  position: relative;
  overflow: hidden;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding-right: 15px;
  padding-left: 15px;
}

.owl-dots {
  margin-top: 20px;
  text-align: center;
}

.owl-dot {
  display: inline-block;
  margin: 0 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd !important;
  border: none;
  cursor: pointer;
}

.owl-dot.active {
  background-color: #172bbf !important;
}

@media (max-width: 992px) {
  .col-lg-4 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .col-lg-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>