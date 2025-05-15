// stores/portfolio.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { PortfolioItem, PortfolioFilter, PortfolioCategory } from '~/types';

export const usePortfolioStore = defineStore('portfolio', () => {
  // State
  const portfolioItems = ref<PortfolioItem[]>([
    {
      id: 'temadepharm',
      title: 'Temadepharm Pharmacy',
      slug: 'temadepharm',
      description: 'A fully functional e-commerce pharmaceutical drug store. Mobile responsive with shipping functionality. The company specialize in home delivery of prescribed medication. A client simply visit the site and place an order based on the prescription they have been provided. Then it order will be delivered to their homes.',
      category: 'web',
      date: 'March 2022',
      client: 'Temadepharm Pharmaceuticals',
      projectUrl: 'https://www.temadepharm.com.ng',
      images: {
        thumbnail: '_nuxt/assets/img/portfolio/temadepharm_landingPage.png',
        main: [
          '/assets/img/portfolioDetails/temadepharm/landingPage.png',
          '/assets/img/portfolioDetails/temadepharm/categoryPage.png',
          '/assets/img/portfolioDetails/temadepharm/singleProductPage.png',
          '/assets/img/portfolioDetails/temadepharm/checkOutPage.png'
        ]
      }
    },
    {
      id: 'flowexpresscourier',
      title: 'Flowexpresscourier Company',
      slug: 'flowexpresscourier',
      description: 'Flowexpresscourier company is specialized in local and international delivery of products. The company is very competent and experienced in safe delivery of client packages at any specified location with the specified duration. The staff works round the clock to meet with customers request and needs.',
      category: 'web',
      date: 'March 2019',
      client: 'Courier Express Company',
      projectUrl: 'https://www.flowexpresscourier.com',
      images: {
        thumbnail: '_nuxt/assets/img/portfolio/portfolio-2.png',
        main: [
          '/assets/img/portfolioDetails/flowExpressCourier/portfolio-details-1.png',
          '/assets/img/portfolioDetails/flowExpressCourier/portfolio-details-2.png',
          '/assets/img/portfolioDetails/flowExpressCourier/portfolio-details-3.png'
        ]
      }
    },
    {
      id: 'searchdomain',
      title: 'Domain Search Engine',
      slug: 'searchdomain',
      description: 'A Domain search Engine that is responsive on all devices. This project helps users search for registered and none-registered domains using the search bar. For a registered domain, the user will be provided with available domains options to choose from. The list is not an exhaustive list.',
      category: 'web',
      date: 'March 2021',
      client: 'Domain Search Engine',
      projectUrl: 'https://showdomains.herokuapp.com/api/domain',
      images: {
        thumbnail: '_nuxt/assets/img/portfolio/domain_homePage.png',
        main: [
          '/assets/img/portfolioDetails/showDomain/HomePage.png',
          '/assets/img/portfolioDetails/showDomain/landingPage.png',
          '/assets/img/portfolioDetails/showDomain/result.png',
          '/assets/img/portfolioDetails/showDomain/search_result.png'
        ]
      }
    },
    {
      id: 'workflowlink',
      title: 'Workflowlink Company',
      slug: 'workflowlink',
      description: 'Workflowlink is an african company with headquater at Abuja, Nigeria. The company links tech talents with opportunit world wide.',
      category: 'api',
      date: 'March 2019',
      client: 'Software Development Company',
      projectUrl: 'https://www.workflowlink.com',
      images: {
        thumbnail: '_nuxt/assets/img/portfolio/workflow.png',
        main: [
          '/assets/img/portfolioDetails/workflow/workflow.png',
          '/assets/img/portfolioDetails/workflow/portfolio-4.png'
        ]
      }
    },
    {
      id: '404page',
      title: '404 Error Page',
      slug: '404page',
      description: 'A Mobile responsive 404 error page. This project is interesting because i built the entire website using css grid. And with the css grid, the website is completely mobile responsive as demonstrated in the link above. Mostly this page is attached to a website to direct visitors properly when a wrong url is visited.',
      category: 'api',
      date: 'July 2021',
      client: '404 Error Page',
      figmaUrl: 'https://www.figma.com/file/QeKWLNhB13zDjJzqR22TKE/404-page-challenge?node-id=1%3A56',
      projectUrl: 'https://www.404page.ufiar.com',
      images: {
        thumbnail: '_nuxt/assets/img/portfolio/404page_desktop.png',
        main: [
          '/assets/img/portfolioDetails/404page/404page_desktop.png'
        ]
      }
    }
  ]);

  const filters = ref<PortfolioFilter[]>([
    { id: 'all', label: 'All', category: 'all', active: true },
    { id: 'web', label: 'Web', category: 'web', active: false },
    { id: 'api', label: 'API', category: 'api', active: false },
    { id: 'contribution', label: 'Contributions', category: 'contribution', active: false }
  ]);

  const activeFilter = ref<string>('all');

  // Getters
  const filteredItems = computed(() => {
    if (activeFilter.value === 'all') {
      return portfolioItems.value;
    }
    return portfolioItems.value.filter(item => item.category === activeFilter.value);
  });

  const getProjectBySlug = computed(() => {
    return (slug: string) => portfolioItems.value.find(item => item.slug === slug);
  });

  // Actions
  function setActiveFilter(filterId: string) {
    activeFilter.value = filterId;
    
    // Update filter active states
    filters.value.forEach(filter => {
      filter.active = filter.id === filterId;
    });
  }

  // Add a new portfolio item (useful for admin functionality if needed)
  function addPortfolioItem(item: PortfolioItem) {
    portfolioItems.value.push(item);
  }

  // Update an existing portfolio item
  function updatePortfolioItem(id: string, updatedItem: Partial<PortfolioItem>) {
    const index = portfolioItems.value.findIndex(item => item.id === id);
    if (index !== -1) {
      portfolioItems.value[index] = { ...portfolioItems.value[index], ...updatedItem };
    }
  }

  // Remove a portfolio item
  function removePortfolioItem(id: string) {
    portfolioItems.value = portfolioItems.value.filter(item => item.id !== id);
  }

  return {
    // State exports
    portfolioItems,
    filters,
    activeFilter,
    
    // Getter exports
    filteredItems,
    getProjectBySlug,
    
    // Action exports
    setActiveFilter,
    addPortfolioItem,
    updatePortfolioItem,
    removePortfolioItem
  };
});