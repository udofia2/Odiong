// stores/skills.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Skill } from '~/types';

export const useSkillsStore = defineStore('skills', () => {
  // State
  const skills = ref<Skill[]>([
    {
      id: 'html',
      name: 'HTML',
      percentage: 100,
      icon: 'bx:bxl-html5',
      color: '#de0d0d',
      column: 'left'
    },
    {
      id: 'css',
      name: 'CSS',
      percentage: 91,
      icon: 'bx:bxl-css3',
      color: 'rgba(35,59,193,0.87)',
      column: 'left'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      percentage: 97,
      icon: 'bx:bxl-javascript',
      color: '#ffe700',
      column: 'left'
    },
    {
      id: 'github-version-control',
      name: 'Github Version Control',
      percentage: 100,
      icon: 'bx:bxl-github',
      column: 'left'
    },
    {
      id: 'github-project-management',
      name: 'Github Project Management',
      percentage: 87,
      icon: 'bx:bxl-github',
      column: 'left'
    },
    {
      id: 'aws',
      name: 'AWS',
      percentage: 50,
      icon: 'bx:bxl-aws',
      color: '#fff009',
      column: 'left'
    },
    {
      id: 'english',
      name: 'English Proficiency',
      percentage: 90,
      icon: 'bx:bxs-book',
      color: '#136a87',
      column: 'left'
    },
    {
      id: 'php',
      name: 'PHP',
      percentage: 58,
      icon: 'simple-icons:php',
      column: 'right'
    },
    {
      id: 'wordpress',
      name: 'WordPress/CMS',
      percentage: 85,
      icon: 'bx:bxl-wordpress',
      column: 'right'
    },
    {
      id: 'nodejs',
      name: 'Nodejs',
      percentage: 92,
      icon: 'bx:bxl-nodejs',
      color: '#048a1d',
      column: 'right'
    },
    {
      id: 'reactjs',
      name: 'Reactjs',
      percentage: 84,
      icon: 'bx:bxl-react',
      column: 'right'
    },
    {
      id: 'vuejs',
      name: 'Vuejs',
      percentage: 87,
      icon: 'bx:bxl-vuejs',
      color: '#048a1d',
      column: 'right'
    },
    {
      id: 'c',
      name: 'C',
      percentage: 52,
      icon: 'bx:bxs-c-plus',
      column: 'right'
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      percentage: 75,
      icon: 'bx:bxl-bootstrap',
      color: '#af0dde',
      column: 'right'
    }
  ]);

  // Getters
  const leftColumnSkills = computed(() => {
    return skills.value.filter(skill => skill.column === 'left');
  });

  const rightColumnSkills = computed(() => {
    return skills.value.filter(skill => skill.column === 'right');
  });

  const getSkillById = computed(() => {
    return (id: string) => skills.value.find(skill => skill.id === id);
  });

  // Actions
  function addSkill(skill: Skill) {
    skills.value.push(skill);
  }

  function updateSkill(id: string, updatedSkill: Partial<Skill>) {
    const index = skills.value.findIndex(skill => skill.id === id);
    if (index !== -1) {
      skills.value[index] = { ...skills.value[index], ...updatedSkill };
    }
  }

  function removeSkill(id: string) {
    skills.value = skills.value.filter(skill => skill.id !== id);
  }

  return {
    // State exports
    skills,
    
    // Getter exports
    leftColumnSkills,
    rightColumnSkills,
    getSkillById,
    
    // Action exports
    addSkill,
    updateSkill,
    removeSkill
  };
});