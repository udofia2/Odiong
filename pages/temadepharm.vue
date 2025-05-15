<template>
  <NuxtPage :page-key="slug" />
</template>

<script setup lang="ts">
// Redirect to the dynamic project page with the correct slug
const slug = 'temadepharm';

definePageMeta({
  layout: 'project'
});

// Server-side redirect to dynamic route
onBeforeMount(() => {
  navigateTo(`/projects/${slug}`, { replace: true });
});
</script>