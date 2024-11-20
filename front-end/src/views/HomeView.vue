<script setup lang="ts">
import '@/views/HomeView.scss';
</script>

<template>
  <main class="login-container">
    <div class="login-content">
      <div class="login-form">
        <div class="login-header">
          <p class="title">Welcome to AutoEDA</p>
          <p class="subtitle">Please enter your details</p>
        </div>
        <form action="" class="form-group">
          <label for="email" class="form-label">Email address</label>
          <input type="text" id="email" class="form-input" placeholder="Enter your email" />
        </form>
        <form action="" class="form-group">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" class="form-input" placeholder="Enter your password" />
        </form>
        <div class="form-options">
          <label class="checkbox">
            <input type="checkbox" />
            Remember for 30 days
          </label>
          <a href="/forgot" class="link">Forgot password?</a>
        </div>
        <button class="btn-primary">Sign in</button>
        <div class="signup-link">
          <p>Don't have an account?</p>
          <a href="/signup" class="link">Sign up!</a>
        </div>
      </div>
    </div>
    <!-- right background image -->
    <div class="background">
      <img alt="Background image" class="background-img" src="@/assets/login_background.png" />
    </div>
  </main>
</template>
