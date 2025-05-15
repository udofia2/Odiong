// stores/about.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { AboutData, AboutDetail } from '~/types';

export const useAboutStore = defineStore('about', () => {
  // State
  const aboutData = ref<AboutData>({
    title: 'About',
    description: 'A graduate of Chemistry with a Diploma in Computer Science, a back-end developer, with plans to build on the experience gained within and outside my degree in cryptocurrency and fintech. Swift at elevating performance throughout all areas of accountability through the design and implementation of robust improvement strategies. Adopts a confident approach to client liaison and is proven to develop beneficial internal and external relationships',
    subtitle: 'Backend Developer & Freelancer.',
    content: 'Looks forward to work in a very challenging establishment where morals and hard-work are held in high esteem, where opportunities abound to advance potentials and to provide useful and latest professional skills coupled with diverse experiments to the organization while developing my skills.',
    details: [
      {
        id: 'website',
        icon: 'bx:bx-globe',
        label: 'Website',
        value: 'https://odiong.ng',
        column: 'left'
      },
      {
        id: 'phone',
        icon: 'bx:bx-phone-call',
        label: 'Phone',
        value: '+234 813 702 4087',
        column: 'left'
      },
      {
        id: 'location',
        icon: 'bx:bx-current-location',
        label: 'Location',
        value: 'Abuja, Nigeria',
        column: 'left'
      },
      {
        id: 'degree',
        icon: 'bx:bxs-graduation',
        label: 'Degree',
        value: 'Masters in Computer Science(in view)',
        column: 'right'
      },
      {
        id: 'email',
        icon: 'bx:bx-envelope',
        label: 'Email',
        value: 'hello@ufiar.com || enalsy22@gmail.com',
        column: 'right'
      },
      {
        id: 'freelance',
        icon: 'bx:bx-briefcase',
        label: 'Freelance',
        value: 'Available',
        column: 'right'
      }
    ]
  });

  return {
    aboutData
  };
});