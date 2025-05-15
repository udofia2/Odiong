<template>
  <div class="layout-wrapper">
    <!-- Header with menu -->
    <TheHeader 
      :is-mobile-nav-active="isMobileNavActive" 
      @toggle-mobile-nav="toggleMobileNav" 
    />

    <!-- Main Content Area -->
    <main id="main" :class="{ 'mobile-shifted': isMobileNavActive }">
      <slot />
    </main>

    <!-- Footer -->
    <TheFooter />

    <!-- Back to top button -->
    <BackToTop />
    
    <!-- Mobile navigation toggle -->
    <MobileNavToggle 
      :is-mobile-nav-active="isMobileNavActive" 
      @toggle="toggleMobileNav" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Mobile navigation state
const isMobileNavActive = ref(false);

// Toggle mobile navigation
const toggleMobileNav = () => {
  isMobileNavActive.value = !isMobileNavActive.value;
  document.body.classList.toggle('mobile-nav-active', isMobileNavActive.value);
};
</script>

<style>
/* Base styles */
body {
  font-family: "Open Sans", sans-serif;
  background: #000000;
  color: #e7edf3;
  padding: 0;
  margin: 0;
}

.container {
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  margin-left: 300px;
  min-height: 100vh;
  padding-bottom: 60px; /* Space for footer */
}

@media (max-width: 1199px) {
  #main {
    margin-left: 0;
  }
}

/* Row and column layout */
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.d-flex {
  display: flex;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

/* Section styles */
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background: #040B14;
}

/* Common styles */
a {
  color: #172bbf;
  text-decoration: none;
}

a:hover {
  color: #37b3ed;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Raleway", sans-serif;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.text-center {
  text-align: center;
}

.text-light {
  color: #f8f9fa;
}

.mt-3 {
  margin-top: 1rem;
}
</style>