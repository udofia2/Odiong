<template>
  <div v-if="project">
    <!-- Project Details Section -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="portfolio-details-container">
          <!-- Project Images Carousel -->
          <div class="portfolio-details-carousel">
            <div class="owl-carousel">
              <img 
                v-for="(image, index) in project.images.main" 
                :key="index"
                :src="image" 
                :alt="project.title" 
                class="img-fluid"
              />
            </div>
          </div>
          
          <!-- Project Info -->
          <div class="portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li>
                <strong>Category</strong>: {{ getCategoryLabel(project.category) }}
              </li>
              <li>
                <strong>Client</strong>: {{ project.client }}
              </li>
              <li>
                <strong>Project date</strong>: {{ project.date }}
              </li>
              <li v-if="project.figmaUrl">
                <strong>Figma Link</strong>: 
                <a :href="project.figmaUrl">{{ project.figmaUrl }}</a>
              </li>
              <li v-if="project.projectUrl">
                <strong>Project URL</strong>: 
                <a :href="project.projectUrl" target="_blank">{{ project.projectUrl }}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Project Description -->
        <div class="portfolio-description">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="container text-center py-5">
    <h2>Project not found</h2>
    <p>The project you are looking for does not exist.</p>
    <NuxtLink to="/#portfolio" class="btn btn-primary">
      Back to Portfolio
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePortfolio } from '~/composables/usePortfolio';

// Get current route
const route = useRoute();
const slug = computed(() => route.params.slug as string);

// Get project data
const { getProject } = usePortfolio();
const project = computed(() => getProject(slug.value));

// Define layout
definePageMeta({
  layout: 'project'
});

// Helper function to convert category to label
function getCategoryLabel(category: string) {
  const categories: Record<string, string> = {
    'web': 'Web Design',
    'api': 'API Development',
    'contribution': 'Open Source Contribution'
  };
  
  return categories[category] || category;
}

// Initialize carousel on mount
onMounted(() => {
  // If using a carousel library, initialize it here
  // For a simple carousel, we could use CSS or a basic JS implementation
});
</script>

<style scoped>
.portfolio-details {
  padding-top: 0;
}

.portfolio-details-container {
  position: relative;
  margin-bottom: 70px;
}

.portfolio-details-carousel {
  position: relative;
  z-index: 1;
}

.portfolio-details-carousel img {
  width: 100%;
}

.portfolio-info {
  padding: 30px;
  position: absolute;
  right: 0;
  bottom: -70px;
  background: rgb(15, 15, 15);
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  z-index: 2;
  max-width: 400px;
}

.portfolio-info h3 {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-info ul li + li {
  margin-top: 10px;
}

.portfolio-info a {
  color: #37b3ed;
  word-break: break-word;
}

.portfolio-description {
  padding-top: 50px;
}

.portfolio-description h2 {
  width: 50%;
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 20px;
}

.portfolio-description p {
  padding: 0;
}

.container {
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #172bbf;
  border-color: #172bbf;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

@media (max-width: 768px) {
  .portfolio-info {
    position: static;
    margin-top: 30px;
    max-width: 100%;
  }
  
  .portfolio-description h2 {
    width: 100%;
  }
}
</style>