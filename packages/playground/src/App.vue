<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="container">
        <div class="logo">
          <h1>🚀 Vue Typesafe Router</h1>
          <p>Type-safe routing for Vue 3</p>
        </div>
        <nav class="nav">
          <RouterLink to="/home" class="nav-link">🏠 Home</RouterLink>
          <RouterLink to="/about" class="nav-link">📋 About</RouterLink>
          <RouterLink to="/user/bob" class="nav-link">👤 User</RouterLink>
          <RouterLink to="/demo" class="nav-link">🧪 Demo</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <RouterView />
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Vue Typesafe Router Demo</p>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #0a0a0a;
  color: #ffffff;
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 20px;
}

.logo h1 {
  color: #60a5fa;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.logo p {
  color: #9ca3af;
  font-size: 0.875rem;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #d1d5db;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.nav-link:hover {
  background: rgba(96, 165, 250, 0.1);
  border-color: rgba(96, 165, 250, 0.3);
  color: #60a5fa;
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border-color: #3b82f6;
}

.main {
  flex: 1;
  padding: 2rem 0;
}

.footer {
  background: rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}
</style>
