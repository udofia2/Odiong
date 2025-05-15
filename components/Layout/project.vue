<template>
  <div class="layout-wrapper">
    <!-- Header with menu -->
    <TheHeader 
      :is-mobile-nav-active="isMobileNavActive" 
      @toggle-mobile-nav="toggleMobileNav" 
    />

    <!-- Main Content Area with Breadcrumbs -->
    <main id="main" :class="{ 'mobile-shifted': isMobileNavActive }">
      <!-- Breadcrumbs -->
      <TheBreadcrumbs 
        :title="breadcrumbTitle" 
        :current="breadcrumbCurrent" 
      />

      <!-- Content slot -->
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

// Props for breadcrumbs
defineProps({
  breadcrumbTitle: {
    type: String,
    default: 'Portfolio Details'
  },
  breadcrumbCurrent: {
    type: String,
    default: 'Portfolio Details'
  }
});

// Mobile navigation state
const isMobileNavActive = ref(false);

// Toggle mobile navigation
const toggleMobileNav = () => {
  isMobileNavActive.value = !isMobileNavActive.value;
  document.body.classList.toggle('mobile-nav-active', isMobileNavActive.value);
};
</script>

<style>
/* Same styles as default.vue */
</style>