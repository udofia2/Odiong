<template>
  <section id="about" class="about">
    <div class="container">
      <UiSectionTitle 
        :title="aboutData.title" 
        :subtitle="aboutData.description" 
      />
      
      <div class="row">
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>{{ aboutData.subtitle }}</h3>
          <p class="font-italic">{{ aboutData.content }}</p>
          
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li v-for="detail in leftColumnDetails" :key="detail.id">
                  <Icon name="icofont-rounded-right" />
                  <Icon :name="detail.icon" />
                  <strong>{{ detail.label }}:</strong>
                  {{ detail.value }}
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li v-for="detail in rightColumnDetails" :key="detail.id">
                  <Icon name="icofont-rounded-right" />
                  <Icon :name="detail.icon" />
                  <strong>{{ detail.label }}:</strong>
                  {{ detail.value }}
                </li>
              </ul>
            </div>
          </div>
          
          <p>
            Available to work with teams of developers in any organization. Ready to collaborate with any developer(s) that needs help with building their server side logic which includes buiding API endpoint for their web project, mobile or desktop application(s).
            Please reachout if you need extra hands to complete a complex, boring or difficult assignment or project.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAboutStore } from '~/stores/about';

// Get about data from store
const aboutStore = useAboutStore();
const aboutData = computed(() => aboutStore.aboutData);

// Filter details by column
const leftColumnDetails = computed(() => {
  return aboutData.value.details.filter(detail => detail.column === 'left');
});

const rightColumnDetails = computed(() => {
  return aboutData.value.details.filter(detail => detail.column === 'right');
});
</script>

<style scoped>
.about .content h3 {
  font-weight: 700;
  font-size: 26px;
  color: #172bbf;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}

.about .content ul li i {
  font-size: 20px;
  padding-right: 2px;
  color: #172bbf;
}

.about .content ul li strong {
  margin-right: 5px;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.font-italic {
  font-style: italic;
}

.col-lg-8 {
  width: 100%;
}

.pt-4 {
  padding-top: 1.5rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (max-width: 992px) {
  .col-lg-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>