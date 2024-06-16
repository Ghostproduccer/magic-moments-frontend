<script setup></script>
<template>
  <div class="container d-flex justify-content-center">
    <div class="card mt-4">
      <div class="card-body pb-5 ps-5 pe-5 pt-5">
        <form class="mb-3 mt-md-1 was-validated" @submit="handleLogin">
          <div class="container">Please, enter your username and password:</div>
          <div class="container d-flex justify-content-center">
            <img src="/images/stars.png" alt="" class="img-fluid" />
          </div>
          <div class="mb-3">
            <label for="user" class="form-label text-light">Username</label>
            <input
              type="text"
              class="form-control"
              id="user"
              placeholder="user"
              name="user"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label text-light">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="*******"
              name="password"
              required
            />
          </div>
          <div id="error-message"></div>
          <p class="small">
            <a class="text-light" href="forget-password.html">Forgot your passsword?</a>
          </p>
          <div class="d-grid">
            <button class="btn btn-secondary" type="submit">Log in</button>
          </div>
        </form>
        <div>
          <p class="mb-0 text-center text">
            Don't have an account?
            <router-link to="/signup" class="text-light fw-bold"> Sign up.</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  max-height: 200px;
}

.container {
  max-height: 80%;
}

.card-img-top {
  padding: 2em;
}

.card-body {
  padding: 2em;
  color: var(--textColor);
}

.card {
  max-width: 500px;
  max-height: 650px;
  margin-bottom: 10%;
  background: var(--bgColorLight);
}

.btn:hover {
  background: var(--primary);
}
</style>
