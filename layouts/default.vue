<template>
  <div class="layout-wrapper">
    <!-- Header with menu -->
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
              href="https://docs.google.com/document/d/16MbuISwZRChyQTethXu5IrwydBwLRQUiG0CexAAJlpY/edit?usp=sharing" 
              target="_blank" 
              title="Download CV"
            >
              <Icon name="bx:bxs-cloud-download" />
            </a>
            <a 
              href="https://github.com/udofia2" 
              target="_blank" 
              title="View Repository"
            >
              <Icon name="bx:bxl-github" />
            </a>
            <a 
              href="https://linkedin.com/in/udofia" 
              target="_blank" 
              title="LinkedIn Profile"
            >
              <Icon name="bx:bxl-linkedin" />
            </a>
            <a 
              href="https://www.twitter.com/Enalsy2" 
              target="_blank" 
              title="Twitter Profile"
            >
              <Icon name="bx:bxl-twitter" />
            </a>
            <a 
              href="https://www.instagram.com/abasiodiongudofia" 
              target="_blank" 
              title="Instagram Profile Page"
            >
              <Icon name="bx:bxl-instagram" />
            </a>
          </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="nav-menu">
          <ul>
            <li>
              <NuxtLink to="/">
                <Icon name="bx:bx-home" />
                <span>Home</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#about">
                <Icon name="bx:bx-user" />
                <span>About</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#resume">
                <Icon name="bx:bx-file-blank" />
                <span>Resume</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#portfolio">
                <Icon name="bx:bx-book-content" />
                <span>Portfolio</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#services">
                <Icon name="bx:bx-server" />
                <span>Services</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#contact">
                <Icon name="bx:bx-envelope" />
                <span>Contact</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile nav toggle button -->
        <button class="mobile-nav-toggle" type="button" @click="toggleMobileNav">
          <Icon :name="isMobileNavActive ? 'bx:bx-x' : 'bx:bx-menu'" />
        </button>
      </div>
    </header>

    <!-- Main Content Area -->
    <main id="main">
      <slot />
    </main>

    <!-- Footer -->
    <footer id="footer">
      <div class="container">
        <div class="copyright">
          &copy; Copyright 
          <strong>
            <span>
              <a href="https://odiong.ng" target="_blank">https://Odiong.ng</a>
            </span>
          </strong>
        </div>
      </div>
    </footer>

    <!-- Back to top button -->
    <a 
    v-show="showBackToTop" 
      href="#" 
      class="back-to-top" 
      @click.prevent="scrollToTop"
    >
      <Icon name="bx:bx-up-arrow-alt" />
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showBackToTop = ref(false);
const isMobileNavActive = ref(false);

// Toggle mobile navigation
const toggleMobileNav = () => {
  isMobileNavActive.value = !isMobileNavActive.value;
  document.body.classList.toggle('mobile-nav-active', isMobileNavActive.value);
};

// Close mobile nav when clicking outside
const handleClickOutside = (event) => {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  if (
    isMobileNavActive.value && 
    !mobileNavToggle.contains(event.target) && 
    mobileNavToggle !== event.target
  ) {
    isMobileNavActive.value = false;
    document.body.classList.remove('mobile-nav-active');
  }
};

// Handle scroll events for back-to-top button
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 100;
  
  // Also handle nav menu active state on scroll if needed
  if (window.scrollY < 200) {
    // Highlight first nav item when at top
    document.querySelectorAll('.nav-menu ul li').forEach((item, index) => {
      if (index === 0) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
};

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style>
/* You can include basic layout styles here or import them from a CSS file */
/* In production, we'll use Tailwind classes or separate CSS files */

/* This is just a placeholder for basic styles to make the layout work */
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

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

#main {
  margin-left: 300px;
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
}

.back-to-top {
  position: fixed;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  right: 15px;
  bottom: 15px;
  background: #172bbf;
  color: #fff;
  transition: display 0.5s ease-in-out;
  z-index: 99999;
  text-align: center;
  line-height: 40px;
}

@media (max-width: 1199px) {
  #header {
    left: -300px;
  }
  
  #main {
    margin-left: 0;
  }
  
  .mobile-nav-toggle {
    display: block;
  }
  
  .mobile-nav-active #header {
    left: 0;
  }
}

#footer {
  padding: 15px;
  color: #f4f6fd;
  font-size: 14px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 9999;
  background: #040b14;
  text-align: center;
}

@media (max-width: 1199px) {
  #footer {
    position: static;
    width: auto;
    padding: 20px 15px;
  }
}
</style>