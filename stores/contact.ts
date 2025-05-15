// stores/contact.ts
import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import type { ContactInfo, ContactForm, FormResponse } from '~/types';

export const useContactStore = defineStore('contact', () => {
  // State
  const contactInfos = ref<ContactInfo[]>([
    {
      id: 'location',
      type: 'location',
      icon: 'icofont-google-map',
      title: 'Location',
      value: 'Abuja, Nigeria.'
    },
    {
      id: 'email',
      type: 'email',
      icon: 'icofont-envelope',
      title: 'Email',
      value: 'hello@ufiar.com | enalsy22@gmail.com',
      link: 'mailto:hello@ufiar.com'
    },
    {
      id: 'phone',
      type: 'phone',
      icon: 'icofont-phone',
      title: 'Call',
      value: '+234 813 702 4087',
      link: 'tel:+2348137024087'
    }
  ]);

  // Form state
  const form = reactive<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const formStatus = reactive({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  // Actions
  async function submitForm() {
    formStatus.loading = true;
    formStatus.success = false;
    formStatus.error = false;
    
    try {
      // Call the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      
      const data: FormResponse = await response.json();
      
      if (data.success) {
        formStatus.success = true;
        formStatus.message = 'Your message has been sent. Thank you!';
        
        // Reset form
        form.name = '';
        form.email = '';
        form.subject = '';
        form.message = '';
      } else {
        formStatus.error = true;
        formStatus.message = data.message || 'Something went wrong. Please try again.';
      }
    } catch (error) {
      formStatus.error = true;
      formStatus.message = 'Network error. Please check your connection and try again.';
    } finally {
      formStatus.loading = false;
    }
  }

  // Reset form status
  function resetFormStatus() {
    formStatus.loading = false;
    formStatus.success = false;
    formStatus.error = false;
    formStatus.message = '';
  }

  return {
    contactInfos,
    form,
    formStatus,
    submitForm,
    resetFormStatus
  };
});