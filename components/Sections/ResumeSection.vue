<template>
  <section id="resume" class="resume">
    <div class="container">
      <UiSectionTitle 
        title="Resume" 
        subtitle="Here is a description of my journey in the tech community. My education and professional experiences." 
      />
      
      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          <h3 class="resume-title">Sumary</h3>
          <div class="resume-item pb-0">
            <h4>{{ resumeData.summary.name }}</h4>
            <p><em>{{ resumeData.summary.description }}</em></p>
            <ul>
              <li v-for="(bullet, index) in resumeData.summary.bullets" :key="index">
                {{ bullet }}
              </li>
            </ul>
          </div>
          
          <h3 class="resume-title">{{ resumeData.education.title }}</h3>
          <UiResumeItem 
            v-for="item in resumeData.education.items" 
            :key="item.id" 
            :item="item" 
          />
        </div>
        
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">{{ resumeData.experience.title }}</h3>
          <UiResumeItem 
            v-for="item in resumeData.experience.items" 
            :key="item.id" 
            :item="item" 
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useResumeStore } from '~/stores/resume';

// Get resume data from store
const resumeStore = useResumeStore();
const resumeData = computed(() => resumeStore.resumeData);
</script>

<style scoped>
.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #1f549b;
}

.pb-0 {
  padding-bottom: 0 !important;
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