// stores/resume.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ResumeData, ResumeSection, ResumeItem } from '~/types';

export const useResumeStore = defineStore('resume', () => {
  // State
  const resumeData = ref<ResumeData>({
    summary: {
      name: 'UDOFIA ABASIODIONG',
      description: 'Innovative and deadline-driven Backend Developer with 5+ years of experience working on server side logic, building APIs and developing fully responsive web platforms from initial concept to final deployment.',
      bullets: [
        'Abuja, Nigeria',
        '(+234) 813-702-4087',
        'enalsy22@gmail.com'
      ]
    },
    education: {
      id: 'education',
      title: 'Education',
      items: [
        {
          id: 'education-1',
          title: 'MASTERS IN COMPUTER SCIENCE',
          period: '2020 - 2021',
          organization: 'University of Ilorin, Ilorin, Nigeria',
          location: 'Ilorin, Nigeria',
          description: 'Highly skilled with extraordinary ability to conduct research and analysis. Pragramming Database Design, Information Systems, Networking with the ability to quickly learn any new technology.'
        },
        {
          id: 'education-2',
          title: 'NATIONAL DIPLOMA IN COMPUTER SCIENCE',
          period: '2019 - 2020',
          organization: 'University of Ilorin, Ilorin, Nigeria',
          location: 'Ilorin, Nigeria',
          description: 'practical skills and core knowledge of technical know-how as well as pragmatic approach to problem-solving'
        },
        {
          id: 'education-3',
          title: 'BACHELOR OF SCIENCE(CHEMISTRY)',
          period: '2014 - 2017',
          organization: 'University of Ilorin, Ilorin, Nigeria',
          location: 'Ilorin, Nigeria',
          description: 'Equip with armoury of skills including the ability to analyse problems, to work collaboratively as part of a team, and to develop laboratory, numeracy and communication skills. Both through Practical work and learning through research.'
        }
      ]
    },
    experience: {
      id: 'experience',
      title: 'Professional Experience',
      items: [
        {
          id: 'experience-1',
          title: 'FREELANCE BACKEND DEVELOPER',
          period: '2017 - Present',
          organization: 'Freelance',
          location: 'Ikeja, Lagos, Nigeria',
          description: '',
          bullets: [
            'Lead in the design, development, and implementation of the Server side logic, APIs and the whole development process.',
            'Delegate tasks to Team members which comprises the UX/UI design team, Front-End Web and Mobile Team, Back-End and DevOps Teams.',
            'Supervise the assessment of all Team progress in order to ensure quality and accuracy of the development process',
            'Oversee the efficient use of production project budgets.',
            'Contributes to Open-Source Repository on Github'
          ]
        },
        {
          id: 'experience-2',
          title: 'BACKEND DEVELOPER',
          period: '2021 - 2022',
          organization: 'Aje-o LTD',
          location: 'Manchester city, England',
          description: '',
          bullets: [
            'Lead in the architectural design of the Aje-o APIs.',
            'Managed the database integration and implemented caching for frequently queried data to optimize speed.',
            'Managed the cloud infrastructures on AWS.',
            'Implemented permanent storage of products, users and sessions.',
            'supervised the backend interns.',
            'Reviewed the PRs of the backend interns.'
          ]
        },
        {
          id: 'experience-3',
          title: 'Design Supervisor',
          period: '2009 - 2010',
          organization: 'Barrit Digital Photolab',
          location: 'Akure, Ondo State, Nigeria',
          description: '',
          bullets: [
            'Supervised all the activities in the lab.',
            'Established and maintained effective relationship with new and existing customers.',
            'Monitor and ensure successful project execution and completion'
          ]
        }
      ]
    }
  });

  return {
    resumeData
  };
});