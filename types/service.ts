// types/service.ts

/**
 * Interface for a service item
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  delay?: number; // For animation delays
}