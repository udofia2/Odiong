<template>
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright {{ currentYear }} 
        <strong>
          <span>
            <a href="https://odiong.ng" target="_blank">https://Odiong.ng</a>
          </span>
        </strong>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Compute current year for copyright
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
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
}

#footer .copyright {
  text-align: center;
}

#footer .credits {
  padding-top: 5px;
  text-align: center;
  font-size: 13px;
  color: #eaebf0;
}

@media (max-width: 1199px) {
  #footer {
    position: static;
    width: auto;
    padding: 20px 15px;
  }
}
</style>