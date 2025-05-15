// types/resume.ts

/**
 * Interface for a resume timeline item
 */
export interface ResumeItem {
  id: string;
  title: string;
  period: string;
  organization: string;
  location: string;
  description: string;
  bullets?: string[]; // Optional bullet points
}

/**
 * Interface for a resume section
 */
export interface ResumeSection {
  id: string;
  title: string;
  items: ResumeItem[];
}

/**
 * Interface for resume data with education and experience sections
 */
export interface ResumeData {
  summary: {
    name: string;
    description: string;
    bullets: string[];
  };
  education: ResumeSection;
  experience: ResumeSection;
}