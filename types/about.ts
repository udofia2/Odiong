// types/about.ts

/**
 * Interface for about section data
 */
export interface AboutData {
  title: string;
  description: string;
  subtitle: string;
  content: string;
  details: AboutDetail[];
}

/**
 * Interface for about section personal details
 */
export interface AboutDetail {
  id: string;
  icon: string;
  label: string;
  value: string;
  column: 'left' | 'right'; // To manage the two-column layout
}