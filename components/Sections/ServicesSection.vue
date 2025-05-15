<template>
  <section id="services" class="services">
    <div class="container">
      <UiSectionTitle 
        title="Services" 
        subtitle="Always keen on supporting digital services to provide customers with added value that fulfills their needs and enusure distinction in the global market" 
      />
      
      <div class="row">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          :data-aos-delay="service.delay"
        >
          <UiServiceCard :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useServicesStore } from '~/stores/services';

// Get services data from store
const servicesStore = useServicesStore();
const services = computed(() => servicesStore.services);
</script>

<style scoped>
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
}

@media (max-width: 768px) {
  .col-lg-4, .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>