<template>
  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h2>{{ title }}</h2>
        <ol>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>{{ current }}</li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Portfolio Details'
  },
  current: {
    type: String,
    default: 'Portfolio Details'
  }
});
</script>

<style scoped>
.breadcrumbs {
  padding: 40px 0;
  background: #040B14;
}

.breadcrumbs h2 {
  font-size: 26px;
  font-weight: 300;
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
}

.breadcrumbs ol li + li {
  padding-left: 10px;
}

.breadcrumbs ol li + li::before {
  display: inline-block;
  padding-right: 10px;
  color: #0e2442;
  content: "/";
}

@media (max-width: 768px) {
  .breadcrumbs .d-flex {
    display: block !important;
  }
  
  .breadcrumbs ol {
    display: block;
  }
  
  .breadcrumbs ol li {
    display: inline-block;
  }
}
</style>