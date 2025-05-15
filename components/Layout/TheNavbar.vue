<template>
  <nav class="nav-menu">
    <ul>
      <li v-for="item in navItems" :key="item.id" :class="{ active: item.active }">
        <NuxtLink :to="item.url" @click="handleNavClick(item.id)">
          <Icon :name="item.icon" />
          <span>{{ item.label }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface NavItem {
  id: string;
  label: string;
  url: string;
  icon: string;
  active: boolean;
}

// Navigation items
const navItems = ref<NavItem[]>([
  {
    id: 'home',
    label: 'Home',
    url: '/',
    icon: 'bx:bx-home',
    active: true
  },
  {
    id: 'about',
    label: 'About',
    url: '/#about',
    icon: 'bx:bx-user',
    active: false
  },
  {
    id: 'resume',
    label: 'Resume',
    url: '/#resume',
    icon: 'bx:bx-file-blank',
    active: false
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    url: '/#portfolio',
    icon: 'bx:bx-book-content',
    active: false
  },
  {
    id: 'services',
    label: 'Services',
    url: '/#services',
    icon: 'bx:bx-server',
    active: false
  },
  {
    id: 'contact',
    label: 'Contact',
    url: '/#contact',
    icon: 'bx:bx-envelope',
    active: false
  }
]);

// Handle navigation click
const handleNavClick = (id: string) => {
  navItems.value.forEach(item => {
    item.active = item.id === id;
  });

  // If we're on mobile, also close the mobile menu
  if (window.innerWidth < 1200) {
    document.body.classList.remove('mobile-nav-active');
  }
};

// Handle active state on scroll
const handleScroll = () => {
  const scrollPosition = window.scrollY + 200; // Add offset to make detection more accurate

  // If we're at the top of the page, set Home as active
  if (scrollPosition < 500) {
    setActiveNav('home');
    return;
  }

  // Check each section
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionTop = (section as HTMLElement).offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      setActiveNav(sectionId || '');
    }
  });
};

// Set active navigation item
const setActiveNav = (id: string) => {
  navItems.value.forEach(item => {
    item.active = item.id === id;
  });
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize on mount
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-menu {
  padding-top: 25px;
}

.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
}

.nav-menu a {
  display: flex;
  align-items: center;
  color: #a8a9b4;
  padding: 12px 15px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
  text-decoration: none;
}

.nav-menu a i {
  font-size: 24px;
  padding-right: 8px;
  color: #6f7180;
}

.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
  text-decoration: none;
  color: #fff;
}

.nav-menu a:hover i, .nav-menu .active > a i, .nav-menu li:hover > a i {
  color: #172bbf;
}
</style>