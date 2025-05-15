// composables/useContact.ts
import { ref, reactive } from 'vue';
import { useContactStore } from '~/stores/contact';
import type { ContactForm } from '~/types';

export function useContact() {
  const contactStore = useContactStore();
  
  // Form validation
  const errors = reactive<Record<string, string>>({});
  const isSubmitting = ref(false);
  
  // Validate form fields
  const validateForm = () => {
    errors.name = '';
    errors.email = '';
    errors.subject = '';
    errors.message = '';
    
    let isValid = true;
    
    // Validate name (min 4 characters)
    if (!contactStore.form.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    } else if (contactStore.form.name.trim().length < 4) {
      errors.name = 'Name must be at least 4 characters';
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactStore.form.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(contactStore.form.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Validate subject (min 8 characters)
    if (!contactStore.form.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    } else if (contactStore.form.subject.trim().length < 8) {
      errors.subject = 'Subject must be at least 8 characters';
      isValid = false;
    }
    
    // Validate message
    if (!contactStore.form.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }
    
    return isValid;
  };
  
  // Handle form submission
  const submitForm = async () => {
    if (isSubmitting.value) return;
    
    // Validate the form
    if (!validateForm()) {
      return;
    }
    
    isSubmitting.value = true;
    
    try {
      await contactStore.submitForm();
      
      if (contactStore.formStatus.success) {
        // Success! Form is already reset in the store
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      isSubmitting.value = false;
    }
  };
  
  return {
    // Form data from store
    form: contactStore.form,
    formStatus: contactStore.formStatus,
    
    // Local validation state
    errors,
    isSubmitting,
    
    // Methods
    validateForm,
    submitForm,
    resetFormStatus: contactStore.resetFormStatus
  };
}