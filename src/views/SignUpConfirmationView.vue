<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="container-fluid d-flex justify-content-center align-items-center">
        <div class="card" style="width: 40rem;"> 
            <div class="card-body"> 
                <h5 class="card-title">Sign up confirmation</h5> 
                <p class="card-text">You have succesfully signed up.</p> 
                <p class="card-text">An email has been sent to your email account. Please check your inbox.</p> 
                <RouterLink to="/" class="btn">Go to home</RouterLink>
            </div> 
        </div>
    </div>
</template>

<style scoped>
.card {
    background: var(--bgColorLight);
    width: 100%;
}
.btn {
    background: var(--primary);
    color: var(--bgColor);
}
.container {
  color: var(--textColor);
}
.btn:hover {
  background-color: var(--primary);
}
h5 {
    color: var(--textColor);
}
.text-danger {
  color: red;
}
</style>