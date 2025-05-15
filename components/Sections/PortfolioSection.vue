<template>
  <section id="portfolio" class="portfolio section-bg">
    <div class="container">
      <UiSectionTitle 
        title="Portfolio" 
        subtitle="Here are few of the my clients products and some of the most recent projects i have worked on." 
      />
      
      <div class="row" data-aos="fade-up">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li 
              v-for="filter in filters" 
              :key="filter.id"
              :class="{ 'filter-active': filter.active }"
              @click="filterItems(filter.id)"
            >
              {{ filter.label }}
            </li>
          </ul>
        </div>
      </div>
      
      <div 
        class="row portfolio-container" 
        data-aos="fade-up" 
        data-aos-delay="100"
        :class="{ 'is-animating': isAnimating }"
      >
        <div 
          v-for="item in itemsToShow" 
          :key="item.id"
          class="col-lg-4 col-md-6"
        >
          <UiPortfolioItem :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolio } from '~/composables/usePortfolio';

// Use portfolio composable
const { 
  filters, 
  itemsToShow, 
  isAnimating, 
  filterItems 
} = usePortfolio();
</script>

<style scoped>
#portfolio-flters {
  padding: 0;
  margin: 0 auto 35px auto;
  list-style: none;
  text-align: center;
  background: #fff;
  border-radius: 50px;
  padding: 2px 15px;
  display: inline-flex;
}

#portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px 8px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #272829;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

#portfolio-flters li:hover, 
#portfolio-flters li.filter-active {
  color: #172bbf;
}

#portfolio-flters li:last-child {
  margin-right: 0;
}

.col-lg-12 {
  flex: 0 0 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.justify-content-center {
  justify-content: center !important;
}

.portfolio-container {
  transition: height 0.3s ease-in-out;
}

.portfolio-container.is-animating {
  opacity: 0.6;
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
}

@media (max-width: 768px) {
  .col-lg-4, .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>