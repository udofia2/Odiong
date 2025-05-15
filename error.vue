<template>
  <div class="error-container">
    <div class="error-content">
      <h1 v-if="error.statusCode === 404">Page Not Found</h1>
      <h1 v-else>An error occurred</h1>
      
      <div class="error-details">
        <h2>{{ error.statusCode }}</h2>
        <p>{{ error.message }}</p>
      </div>
      
      <div class="error-actions">
        <button @click="handleError" class="btn btn-primary">
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define props
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
});

// Handle error action
const handleError = () => {
  clearError({ redirect: '/' });
};
</script>

<style scoped>
.error-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #040b14;
  padding: 0 20px;
}

.error-content {
  max-width: 500px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #fff;
}

.error-details {
  margin-bottom: 30px;
}

.error-details h2 {
  font-size: 64px;
  margin: 0;
  color: #172bbf;
}

.error-details p {
  margin-top: 10px;
  color: #ccc;
}

.error-actions {
  margin-top: 20px;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #172bbf;
  border-color: #172bbf;
}

.btn-primary:hover {
  background-color: #1424a1;
  border-color: #122295;
}
</style>