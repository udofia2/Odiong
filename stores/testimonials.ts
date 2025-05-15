// stores/testimonials.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Testimonial } from '~/types';

export const useTestimonialsStore = defineStore('testimonials', () => {
  // State
  const testimonials = ref<Testimonial[]>([
    {
      id: 'testimonial-1',
      content: 'The Odiong and his team are true professionals and most definitely care about their customers\' needs. Odiong and his team designed an easy-to-use and still contemporary-looking website that allows me to edit and keep my website maintained. I would recommend their service to anyone who is interested in getting their name out on the web',
      author: {
        name: 'Dr Jane Eveshoyan',
        title: 'Counsellor'
      }
    },
    {
      id: 'testimonial-2',
      content: 'I must say, i was impressed from start to finish. His team paid close attention to my goals for the site and added their own touch to it. They didn\'t mind making amendments and made sure i was carried along at each stage. The finished product is a unique site that stands out from the rest. I will certainly recommend Odiong and his team to friends for several reasons including price',
      author: {
        name: 'Collins Ayodele',
        title: 'CEO flowexpresscourier'
      }
    },
    {
      id: 'testimonial-3',
      content: 'My experience with the Odiong and his team was amazing. The team exceeded my expectations by constantly finding ways to suit our preferences in our website design. I found the team very hardworking, working late in several nights for us to meet our deadline. The after-launch support has also been very good so far. I think the team is fantastic at delivering great value to clients',
      author: {
        name: 'Carson Odufua',
        title: 'CEO Carson TV'
      }
    },
    {
      id: 'testimonial-4',
      content: 'He provided a superb service in designing and building our website in line with specification, in a timely and professional way. We would thoroughly recommend Him to anybody looking for a reliable and efficient digital partner. Highly recommend',
      author: {
        name: 'Michale Uduak',
        title: 'Freelancer'
      }
    }
  ]);

  return {
    testimonials
  };
});