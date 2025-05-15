// composables/usePortfolio.ts
import { ref, computed, watch } from 'vue';
import { usePortfolioStore } from '~/stores/portfolio';
import type { PortfolioItem, PortfolioFilter } from '~/types';

export function usePortfolio() {
  const portfolioStore = usePortfolioStore();
  
  // Local refs for animation and transition handling
  const isAnimating = ref(false);
  const itemsToShow = ref<PortfolioItem[]>([]);
  
  // Initialize with store data
  itemsToShow.value = portfolioStore.filteredItems;
  
  // Computed properties from the store
  const items = computed(() => portfolioStore.portfolioItems);
  const filters = computed(() => portfolioStore.filters);
  const activeFilter = computed(() => portfolioStore.activeFilter);
  
  // Watch for changes in the filtered items
  watch(
    () => portfolioStore.filteredItems,
    (newItems) => {
      // Only animate if items actually changed
      if (JSON.stringify(newItems) !== JSON.stringify(itemsToShow.value)) {
        handleFilterAnimation(newItems);
      }
    }
  );
  
  // Function to handle smooth animation when filtering
  function handleFilterAnimation(newItems: PortfolioItem[]) {
    isAnimating.value = true;
    
    // First fade out
    setTimeout(() => {
      // Then update items and fade in
      itemsToShow.value = newItems;
      isAnimating.value = false;
    }, 300); // Adjust timing based on your CSS transition duration
  }
  
  // Function to filter items
  function filterItems(filterId: string) {
    if (isAnimating.value) return; // Prevent multiple rapid filter clicks
    
    portfolioStore.setActiveFilter(filterId);
  }
  
  // Get a single project by slug
  function getProject(slug: string) {
    return portfolioStore.getProjectBySlug(slug);
  }
  
  // Get projects by category
  function getProjectsByCategory(category: string) {
    if (category === 'all') {
      return items.value;
    }
    return items.value.filter(item => item.category === category);
  }
  
  // Get related projects (same category but not the current one)
  function getRelatedProjects(currentSlug: string, limit = 3) {
    const current = getProject(currentSlug);
    if (!current) return [];
    
    return items.value
      .filter(item => item.category === current.category && item.slug !== currentSlug)
      .slice(0, limit);
  }
  
  return {
    // State
    items,
    filters,
    activeFilter,
    itemsToShow,
    isAnimating,
    
    // Methods
    filterItems,
    getProject,
    getProjectsByCategory,
    getRelatedProjects
  };
}