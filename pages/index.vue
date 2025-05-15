<template>
  <div>
    <!-- Hero Section -->
    <SectionsHeroSection />
    
    <!-- Main Content -->
    <main id="main">
      <!-- About Section -->
      <SectionsAboutSection />
      
      <!-- Facts Section -->
      <SectionsFactsSection />
      
      <!-- Skills Section -->
      <SectionsSkillsSection />
      
      <!-- Resume Section -->
      <SectionsResumeSection />
      
      <!-- Portfolio Section -->
      <SectionsPortfolioSection />
      
      <!-- Services Section -->
      <SectionsServicesSection />
      
      <!-- Testimonials Section -->
      <SectionsTestimonialsSection />
      
      <!-- Contact Section -->
      <SectionsContactSection />
    </main>
  </div>
</template>

<script setup lang="ts">

// Set page metadata
useHead({
  title: 'Udofia Abasiodiong - Backend Developer & Freelancer',
  meta: [
    { name: 'description', content: 'Portfolio of Udofia Abasiodiong, a Backend Developer and Freelancer specializing in server-side logic, API development, and responsive web applications.' }
  ]
});

// When the page loads, initialize any needed animations or functionality
onMounted(() => {
  // Scroll to hash if present in URL
  if (window.location.hash) {
    const hash = window.location.hash;
    const element = document.querySelector(hash);
    
    if (element) {
      setTimeout(() => {
        window.scrollTo({
          top: (element as HTMLElement).offsetTop - 70,
          behavior: 'smooth'
        });
      }, 200);
    }
  }
  
  // Handle hash links within the page
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const hash = this.getAttribute('href');
      
      if (hash && hash !== '#') {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL without page reload
          window.history.pushState(null, '', hash);
        }
      }
    });
  });
});

  

</script>

<style>
/* Global styles for the home page */
main#main {
  margin-left: 300px;
}

@media (max-width: 1199px) {
  main#main {
    margin-left: 0;
  }
}
</style>