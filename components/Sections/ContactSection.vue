<template>
  <section id="contact" class="contact">
    <div class="container">
      <UiSectionTitle 
        title="Contact" 
        subtitle="Say hi. Am excited to hear from you. Do you need a personal website like this?, Your website is just a call ready. Got questions!!!, i will be glad to attend to each one of them. Your project deserves professional hands, kindly reachout." 
      />
      
      <div class="row" data-aos="fade-in">
        <!-- Contact Information -->
        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info">
            <UiContactInfo 
              v-for="info in contactInfos" 
              :key="info.id" 
              :info="info" 
            />
            <div class="contactEmoji">
              <img src="/assets/img/images.png" alt="Happy face" />
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form class="php-email-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">Your Name</label>
                <input 
                  id="name" 
                  v-model="form.name"
                  type="text" 
                  class="form-control" 
                  :class="{ 'is-invalid': errors.name }"
                />
                <div v-if="errors.name" class="validate text-danger">{{ errors.name }}</div>
              </div>
              <div class="form-group col-md-6">
                <label for="email">Your Email</label>
                <input 
                  id="email" 
                  v-model="form.email"
                  type="email" 
                  class="form-control" 
                  :class="{ 'is-invalid': errors.email }"
                />
                <div v-if="errors.email" class="validate text-danger">{{ errors.email }}</div>
              </div>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                id="subject" 
                v-model="form.subject"
                type="text" 
                class="form-control" 
                :class="{ 'is-invalid': errors.subject }"
              />
              <div v-if="errors.subject" class="validate text-danger">{{ errors.subject }}</div>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="form.message"
                class="form-control" 
                rows="10" 
                :class="{ 'is-invalid': errors.message }"
              ></textarea>
              <div v-if="errors.message" class="validate text-danger">{{ errors.message }}</div>
            </div>
            <div class="mb-3">
              <div v-if="formStatus.loading" class="loading">Loading</div>
              <div v-if="formStatus.error" class="error-message">{{ formStatus.message }}</div>
              <div v-if="formStatus.success" class="sent-message">{{ formStatus.message }}</div>
            </div>
            <div class="text-center">
              <button type="submit" :disabled="isSubmitting">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContactStore } from '~/stores/contact';
import { useContact } from '~/composables/useContact';

// Get contact data from store
const contactStore = useContactStore();
const contactInfos = computed(() => contactStore.contactInfos);

// Use contact form functionality
const { form, formStatus, errors, isSubmitting, submitForm } = useContact();
</script>


<style scoped>
.contact {
  padding-bottom: 130px;
}

.info {
  padding: 30px;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}

.contactEmoji img {
  width: 25vw;
  margin-top: 20px;
}

.php-email-form {
  width: 100%;
  padding: 30px;
  background: #fff;
  color: #000;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.form-group {
  margin-bottom: 1rem;
  padding: 0 15px;
  width: 100%;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control.is-invalid {
  border-color: #dc3545;
}

textarea.form-control {
  height: auto;
}

.text-danger {
  color: #dc3545;
}

.loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.loading.active {
  display: block;
}

.loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  animation: animate-loading 1s linear infinite;
}

.error-message {
  display: block;
  color: #fff;
  background: #ed3c0d;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

.sent-message {
  display: block;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

.php-email-form button[type="submit"] {
  background: #172bbf;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
  cursor: pointer;
}

.php-email-form button[type="submit"]:hover {
  background: #37b3ed;
}

.php-email-form button[type="submit"]:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.mb-3 {
  margin-bottom: 1rem;
}

.col-lg-5 {
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
  padding-right: 15px;
  padding-left: 15px;
}

.col-lg-7 {
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  padding-right: 15px;
  padding-left: 15px;
}

.d-flex {
  display: flex;
}

.align-items-stretch {
  align-items: stretch;
}

.mt-5 {
  margin-top: 3rem;
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 992px) {
  .col-lg-5, .col-lg-7 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .mt-lg-0 {
    margin-top: 0 !important;
  }
}

@media (max-width: 768px) {
  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .contactEmoji img {
    width: 55vw;
    margin-left: 70px;
  }
}
</style>