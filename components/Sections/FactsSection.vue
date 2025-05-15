<template>
  <section id="facts" class="facts">
    <div class="container">
      <UiSectionTitle 
        title="Work Ratings" 
        subtitle="Well experienced in working with clients and as a team, efficient and proficient in any under taken project." 
      />
      
      <div class="row no-gutters">
        <div 
          v-for="fact in facts" 
          :key="fact.id"
          class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
          data-aos="fade-up"
          :data-aos-delay="fact.delay"
        >
          <UiFactCounter :fact="fact" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFactsStore } from '~/stores/facts';

// Get facts data from store
const factsStore = useFactsStore();
const facts = computed(() => factsStore.facts);
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.col-lg-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.align-items-md-stretch {
  align-items: stretch !important;
}

@media (max-width: 992px) {
  .col-lg-3 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .d-md-flex {
    display: flex !important;
  }
  
  .col-lg-3 {
    margin-bottom: 20px;
  }
}

@media (max-width: 576px) {
  .col-lg-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>