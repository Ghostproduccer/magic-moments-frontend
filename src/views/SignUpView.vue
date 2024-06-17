<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter()

const formData = ref({
  name: '',
  surname: '',
  username: '',
  password: '',
  confirmPassword: '',
  email: ''
});

const errors = ref({
  name: '',
  surname: '',
  username: '',
  password: '',
  confirmPassword: '',
  email: ''
});

const validateForm = () => {
  let valid = true;
  errors.value = {
    name: '',
    surname: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  };

  if (!formData.value.name) {
    errors.value.name = 'First name is required';
    valid = false;
  }

  if (!formData.value.surname) {
    errors.value.surname = 'Surname is required';
    valid = false;
  }

  if (!formData.value.username) {
    errors.value.username = 'Username is required';
    valid = false;
  }

  if (!formData.value.password) {
    errors.value.password = 'Password is required';
    valid = false;
  }

  if (formData.value.password !== formData.value.confirmPassword) {
    errors.value.confirmPassword = 'Passwords do not match';
    valid = false;
  }

  if (!formData.value.email) {
    errors.value.email = 'Email is required';
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
    errors.value.email = 'Email is invalid';
    valid = false;
  }

  return valid;
};

const handleSubmit = async () => {
  if (validateForm()) {
    try {
      const response = await axios.post('http://localhost:8080/api/users/signup', formData.value);
      console.log('Response:', response.data);
      router.push('/spconfirmation')
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
};
</script>

<template>
  <div class="container mt-2">
    <main>
      <div class="container">
        <div class="container-fluid">
          <h4 class="mb-3">Sign Up</h4>
          <br>
          <form @submit.prevent="handleSubmit">
            <div class="row g-3">
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="First name"
                  v-model="formData.name"
                  required
                />
                <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
              </div>

              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  id="surname"
                  placeholder="Surname"
                  v-model="formData.surname"
                  required
                />
                <div v-if="errors.surname" class="text-danger">{{ errors.surname }}</div>
              </div>
            </div>
            <br />
            <div class="row g-3">
              <div class="col-4">
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                    v-model="formData.username"
                    required
                  />
                </div>
                <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
              </div>
            </div>
            <br />
            <div class="row g-3">
              <div class="col-4">
                <label for="password" class="form-label">Password</label>
                <div class="input-group has-validation">
                  <span class="input-group-text"><i class="bi bi-key"></i></span>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="***********"
                    v-model="formData.password"
                    required
                  />
                </div>
                <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
              </div>
              <div class="col-4">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">
                    <i class="bi bi-key"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    placeholder="***********"
                    v-model="formData.confirmPassword"
                    required
                  />
                </div>
                <div v-if="errors.confirmPassword" class="text-danger">{{ errors.confirmPassword }}</div>
              </div>
            </div>
            <br />
            <div class="row g-3">
              <div class="col-6">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                  v-model="formData.email"
                  required
                />
                <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
              </div>
            </div>

            <hr class="my-4" />
            <br />
            <button class="w-100 btn btn-secondary btn-lg" type="submit">
              Continue
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  color: var(--textColor);
}
.btn:hover {
  background-color: var(--primary);
}
h4 {
  color: var(--primary);
}
.text-danger {
  color: red;
}
</style>
