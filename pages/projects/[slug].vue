<template>
  <div v-if="project">
    <!-- Project Details Section -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="portfolio-details-container">
          <!-- Project Images Carousel -->
          <div class="portfolio-details-carousel">
            <div ref="carouselRef" class="owl-carousel">
              <img 
                v-for="(image, index) in project.images.main" 
                :key="index"
                :src="image" 
                :alt="`${project.title} - Image ${index + 1}`" 
                class="img-fluid"
                @click="activeImageIndex = index"
              />
            </div>
            
            <!-- Navigation arrows -->
            <div class="carousel-nav">
              <button 
                class="carousel-prev" 
                @click="prevImage"
                :disabled="activeImageIndex === 0"
              >
                <Icon name="bx:bx-chevron-left" />
              </button>
              <button 
                class="carousel-next" 
                @click="nextImage"
                :disabled="activeImageIndex >= project.images.main.length - 1"
              >
                <Icon name="bx:bx-chevron-right" />
              </button>
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
                <a :href="project.figmaUrl" target="_blank">figma.com</a>
              </li>
              <li v-if="project.projectUrl">
                <strong>Project URL</strong>: 
                <a :href="project.projectUrl" target="_blank">{{ formatUrl(project.projectUrl) }}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Project Description -->
        <div class="portfolio-description">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>
        
        <!-- Related Projects -->
        <div v-if="relatedProjects.length" class="related-projects">
          <h3>Related Projects</h3>
          <div class="row">
            <div 
              v-for="related in relatedProjects" 
              :key="related.id"
              class="col-lg-4 col-md-6"
            >
              <PortfolioItem :item="related" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="container text-center py-5">
    <h2>Project not found</h2>
    <p>The project you are looking for does not exist or has been moved.</p>
    <NuxtLink to="/#portfolio" class="btn btn-primary">
      Back to Portfolio
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useHead } from '#app';
import { usePortfolio } from '~/composables/usePortfolio';

// Get current route
const route = useRoute();
const slug = computed(() => route.params.slug as string);

// Refs for carousel
const carouselRef = ref(null);
const activeImageIndex = ref(0);

// Get project data
const { getProject, getRelatedProjects } = usePortfolio();
const project = computed(() => getProject(slug.value));
const relatedProjects = computed(() => project.value ? getRelatedProjects(slug.value, 3) : []);

// Set page metadata
useHead(() => ({
  title: project.value ? `${project.value.title} - Portfolio Project` : 'Project Not Found',
  meta: [
    { 
      name: 'description', 
      content: project.value 
        ? `${project.value.title} - ${project.value.description.substring(0, 150)}...` 
        : 'Project details page'
    }
  ]
}));

// Helper function to convert category to label
function getCategoryLabel(category: string) {
  const categories: Record<string, string> = {
    'web': 'Web Design',
    'api': 'API Development',
    'contribution': 'Open Source Contribution'
  };
  
  return categories[category] || category;
}

// Helper function to format URL for display
function formatUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch (e) {
    return url;
  }
}

// Carousel navigation functions
function nextImage() {
  if (project.value && activeImageIndex.value < project.value.images.main.length - 1) {
    activeImageIndex.value++;
  }
}

function prevImage() {
  if (activeImageIndex.value > 0) {
    activeImageIndex.value--;
  }
}

// Define layout
definePageMeta({
  layout: 'project'
});

// Reset active image when the project changes
watch(() => slug.value, () => {
  activeImageIndex.value = 0;
});
</script>

<style scoped>
.portfolio-details {
  padding-top: 0;
  margin-bottom: 60px;
}

.portfolio-details-container {
  position: relative;
  margin-bottom: 70px;
}

.portfolio-details-carousel {
  position: relative;
  z-index: 1;
}

.owl-carousel {
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 400px;
  background: #111;
}

.owl-carousel img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.owl-carousel img:nth-child(v-bind('activeImageIndex + 1')) {
  opacity: 1;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 2;
}

.carousel-prev,
.carousel-next {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.carousel-prev:hover,
.carousel-next:hover {
  background: rgba(23, 43, 191, 0.8);
}

.carousel-prev:disabled,
.carousel-next:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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

.portfolio-info ul li {
  padding: 10px 0;
}

.portfolio-info ul li + li {
  margin-top: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.portfolio-info ul li strong {
  display: inline-block;
  width: 100px;
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
  line-height: 1.6;
}

.related-projects {
  margin-top: 60px;
}

.related-projects h3 {
  font-size: 24px;
  margin-bottom: 30px;
  color: #172bbf;
}

.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #fff;
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
  background-color: #1424a1;
  border-color: #122295;
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

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

@media (max-width: 992px) {
  .col-lg-4 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  .portfolio-description h2 {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .portfolio-info {
    position: static;
    margin-top: 20px;
    max-width: 100%;
  }
  
  .owl-carousel {
    height: 300px;
  }
  
  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>