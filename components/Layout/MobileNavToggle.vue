<template>
  <button class="mobile-nav-toggle" type="button" @click="$emit('toggle')">
    <Icon :name="isMobileNavActive ? 'bx:bx-x' : 'bx:bx-menu'" />
  </button>
</template>

<script setup lang="ts">
defineProps({
  isMobileNavActive: {
    type: Boolean,
    default: false
  }
});

defineEmits(['toggle']);
</script>

<style scoped>
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
  color: #ad2d06;
}

@media (max-width: 1199px) {
  .mobile-nav-toggle {
    display: block;
  }
}
</style>