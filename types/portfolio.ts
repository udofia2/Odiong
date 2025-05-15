// types/portfolio.ts

/**
 * Defines the categories a portfolio item can belong to
 */
export type PortfolioCategory = 'web' | 'api' | 'contribution';

/**
 * Interface for a portfolio project item
 */
export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: PortfolioCategory;
  date: string;
  client: string;
  projectUrl?: string;
  figmaUrl?: string;
  images: {
    thumbnail: string;
    main: string[];
  };
  technologies?: string[];
}

/**
 * Interface for portfolio filters
 */
export interface PortfolioFilter {
  id: string;
  label: string;
  category: 'all' | PortfolioCategory;
  active: boolean;
}

/**
 * Interface for portfolio detail information shown in project pages
 */
export interface PortfolioDetailInfo {
  category: string;
  client: string;
  date: string;
  projectUrl?: string;
  figmaUrl?: string;
  technologies?: string[];
}