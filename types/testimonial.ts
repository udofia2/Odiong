// types/testimonial.ts

/**
 * Interface for a testimonial item
 */
export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    image?: string; // Optional path to author image
  };
}