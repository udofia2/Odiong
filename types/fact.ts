// types/fact.ts

/**
 * Interface for a fact/counter item
 */
export interface Fact {
  id: string;
  value: number;
  title: string;
  icon: string;
  delay?: number; // For animation delays
}