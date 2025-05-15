<template>
  <section id="skills" class="skills section-bg">
    <div class="container">
      <UiSectionTitle 
        title="Skills" 
        subtitle="Flexible to learn on the job. Each project require certain skill sets. Learning new technologies is a fun activity. Here are a list of the technologies i use and my level of mastery." 
      />
      
      <div class="row skills-content">
        <div class="col-lg-6" data-aos="fade-up">
          <UiSkillBar 
            v-for="skill in leftColumnSkills" 
            :key="skill.id"
            :name="skill.name"
            :percentage="skill.percentage"
            :icon="skill.icon"
            :color="skill.color"
          />
        </div>
        
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <UiSkillBar 
            v-for="skill in rightColumnSkills" 
            :key="skill.id"
            :name="skill.name"
            :percentage="skill.percentage"
            :icon="skill.icon"
            :color="skill.color"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSkillsStore } from '~/stores/skills';

// Get skills data from store
const skillsStore = useSkillsStore();
const leftColumnSkills = computed(() => skillsStore.leftColumnSkills);
const rightColumnSkills = computed(() => skillsStore.rightColumnSkills);
</script>

<style scoped>
.skills-content {
  margin-top: 30px;
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