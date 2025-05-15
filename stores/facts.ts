// stores/facts.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Fact } from '~/types';

export const useFactsStore = defineStore('facts', () => {
  // State
  const facts = ref<Fact[]>([
    {
      id: 'happy-clients',
      value: 292,
      title: 'Number of Happy Clients',
      icon: 'icofont-simple-smile',
      delay: 0
    },
    {
      id: 'projects',
      value: 312,
      title: 'Number of completed Projects',
      icon: 'icofont-document-folder',
      delay: 100
    },
    {
      id: 'contributions',
      value: 15,
      title: 'Active Open Source Contributions',
      icon: 'icofont-live-support',
      delay: 200
    },
    {
      id: 'collaborations',
      value: 8,
      title: 'Number of Team collaborations',
      icon: 'icofont-users-alt-5',
      delay: 300
    }
  ]);

  return {
    facts
  };
});