// types/contact.ts

/**
 * Interface for contact form data
 */
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Interface for contact info items
 */
export interface ContactInfo {
  id: string;
  type: 'location' | 'email' | 'phone';
  icon: string;
  title: string;
  value: string;
  link?: string; // For email or phone links
}

/**
 * Interface for form submission response
 */
export interface FormResponse {
  success: boolean;
  message: string;
}