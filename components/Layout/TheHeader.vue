<template>
  <header id="header">
    <div class="d-flex flex-column">
      <!-- Profile section -->
      <div class="profile">
        <img 
          src="/assets/img/profile-img.jpg" 
          alt="profile picture" 
          class="img-fluid rounded-circle"
        />
        <h1 class="text-light">
          <NuxtLink to="/">UDOFIA ABASIODIONG</NuxtLink>
        </h1>
        <!-- Social links -->
        <div class="social-links mt-3 text-center">
          <a 
            v-for="link in socialLinks" 
            :key="link.id"
            :href="link.url" 
            target="_blank" 
            :title="link.title"
          >
            <Icon :name="link.icon" />
          </a>
        </div>
      </div>

      <!-- Navigation Menu -->
      <TheNavbar />

      <!-- Mobile nav toggle button -->
      <button class="mobile-nav-toggle" type="button" @click="toggleMobileNav">
        <Icon :name="isMobileNavActive ? 'bx:bx-x' : 'bx:bx-menu'" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { SocialLink } from '~/types';

// Props
defineProps({
  isMobileNavActive: {
    type: Boolean,
    default: false
  }
});

// Emits
const emit = defineEmits(['toggleMobileNav']);

// Social links data
const socialLinks = ref<SocialLink[]>([
  {
    id: 'cv',
    platform: 'cv',
    url: 'https://docs.google.com/document/d/16MbuISwZRChyQTethXu5IrwydBwLRQUiG0CexAAJlpY/edit?usp=sharing',
    icon: 'bx:bxs-cloud-download',
    title: 'Download CV'
  },
  {
    id: 'github',
    platform: 'github',
    url: 'https://github.com/udofia2',
    icon: 'bx:bxl-github',
    title: 'View Repository'
  },
  {
    id: 'linkedin',
    platform: 'linkedin',
    url: 'https://linkedin.com/in/udofia',
    icon: 'bx:bxl-linkedin',
    title: 'LinkedIn Profile'
  },
  {
    id: 'twitter',
    platform: 'twitter',
    url: 'https://www.twitter.com/Enalsy2',
    icon: 'bx:bxl-twitter',
    title: 'Twitter Profile'
  },
  {
    id: 'instagram',
    platform: 'instagram',
    url: 'https://www.instagram.com/abasiodiongudofia',
    icon: 'bx:bxl-instagram',
    title: 'Instagram Profile Page'
  }
]);

// Toggle mobile navigation
const toggleMobileNav = () => {
  emit('toggleMobileNav');
};
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  transition: all ease-in-out 0.5s;
  z-index: 9999;
  padding: 0 15px;
  background: #040b14;
  overflow-y: auto;
}

.profile img {
  margin: 15px auto;
  display: block;
  width: 120px;
  border: 8px solid #2c2f3f;
}

.profile h1 {
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  text-align: center;
  font-family: "Poppins", sans-serif;
}

.profile h1 a, .profile h1 a:hover {
  color: #fff;
  text-decoration: none;
}

.profile .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #212431;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

.profile .social-links a:hover {
  background: #172bbf;
  color: #fff;
  text-decoration: none;
}

.mobile-nav-toggle {
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 9998;
  border: 0;
  background: none;
  font-size: 32px;
  transition: all 0.4s;
  outline: none !important;
  line-height: 1;
  cursor: pointer;
  text-align: right;
  display: none;
  color: #172bbf;
}

@media (max-width: 1199px) {
  #header {
    left: -300px;
  }
  
  .mobile-nav-toggle {
    display: block;
  }
}

/* Mobile navigation active state */
:global(.mobile-nav-active) #header {
  left: 0;
}

:global(.mobile-nav-active) .mobile-nav-toggle i {
  color: #fff;
}
</style>