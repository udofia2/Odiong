// types/index.ts

// Export all types from their respective files
export * from './portfolio';
export * from './skill';
export * from './testimonial';
export * from './service';
export * from './resume';
export * from './fact';
export * from './contact';
export * from './about';

/**
 * Interface for section metadata
 */
export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  backgroundColor?: string;
}

/**
 * Interface for social links
 */
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  title: string;
}

/**
 * Interface for hero section data
 */
export interface HeroData {
  greeting: string;
  typedItems: string[];
  backgroundImage: string;
}