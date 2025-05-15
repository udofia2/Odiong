// stores/hero.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { HeroData } from '../types';

export const useHeroStore = defineStore('hero', () => {
  // State
  const heroData = ref<HeroData>({
    greeting: 'Hi🤗, I Am',
    typedItems: [
      'Backend Developer',
      'Open Source Contributor',
      'Freelancer Consultant'
    ],
    backgroundImage: '_nuxt/assets/img/hero-bg.jpg'
  });

  return {
    heroData
  };
});