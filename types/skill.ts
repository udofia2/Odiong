// types/skill.ts

/**
 * Interface for a skill item
 */
export interface Skill {
  id: string;
  name: string;
  percentage: number;
  icon: string;
  color?: string;
  column: 'left' | 'right'; // To manage the two-column layout
}

/**
 * Interface for skill categories
 */
export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

/**
 * Interface for progress bar properties
 */
export interface ProgressBarProps {
  percentage: number;
  skillName: string;
  icon: string;
  color?: string;
}