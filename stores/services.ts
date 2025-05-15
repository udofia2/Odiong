// stores/services.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Service } from '~/types';

export const useServicesStore = defineStore('services', () => {
  // State
  const services = ref<Service[]>([
    {
      id: 'full-cycle-development',
      title: 'FULL-CYCLE DEVELOPMENT',
      description: 'Well experienced with attainding to client request and managing Teams of Designers and Developers to ensusre project completion from planning to full deployment.',
      icon: 'icofont-computer',
      delay: 0
    },
    {
      id: 'consulting',
      title: 'CONSULTING',
      description: 'Available to assist in shaping your project strategy with your business goals, technical capacity and market reality in mind for your new or existing web or mobile application development',
      icon: 'icofont-chart-bar-graph',
      delay: 100
    },
    {
      id: 'team-collaboration',
      title: 'TEAM COLLABORATION',
      description: 'Available to work with your team as a Backend Developer, helping out with the server side logic of your project. Ready to help you setup teams of developers if you don\'t have an existing team.',
      icon: 'icofont-earth',
      delay: 200
    },
    {
      id: 'mentorship',
      title: 'MENTORSHIP',
      description: 'Are you new into the world of tech, do you find it difficult to get a mentor, do you have the skill set but not just getting clients or want to start your own freelance service!. There is available both free and paid mentorship',
      icon: 'icofont-image',
      delay: 300
    }
  ]);

  return {
    services
  };
});