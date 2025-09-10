<template>
  <div class="about">
    <div class="about-header">
      <h1 class="page-title">📋 About Vue Typesafe Router</h1>
      <p class="page-subtitle">Learn more about type-safe routing in Vue 3</p>
    </div>

    <div class="content-grid">
      <div class="info-section">
        <h2 class="section-title">📊 Query Data</h2>
        <div class="query-container">
          <div class="query-label">Current Query Parameters:</div>
          <pre class="query-data">{{ JSON.stringify(aboutRoute.getQuery(), null, 2) }}</pre>
        </div>
      </div>

      <div class="actions-section">
        <h2 class="section-title">🚀 Navigation</h2>
        <div class="action-container">
          <button type="button" class="nav-button" @click="toHome">
            <span class="button-icon">🏠</span>
            <span class="button-text">Go to Home</span>
            <span class="button-subtitle">with type-safe navigation</span>
          </button>
        </div>
      </div>

      <div class="info-section full-width">
        <h2 class="section-title">✨ What is Vue Typesafe Router?</h2>
        <div class="description-grid">
          <div class="description-card">
            <div class="card-icon">🔍</div>
            <h3>Type Safety</h3>
            <p>Get compile-time type checking for route parameters and query strings. No more runtime errors from typos or incorrect parameter types.</p>
          </div>
          <div class="description-card">
            <div class="card-icon">📦</div>
            <h3>Zero Runtime Cost</h3>
            <p>Pure TypeScript implementation with no runtime overhead. The library adds zero bytes to your production bundle.</p>
          </div>
          <div class="description-card">
            <div class="card-icon">🧩</div>
            <h3>Vue 3 Native</h3>
            <p>Built specifically for Vue 3 and Vue Router 4, leveraging the latest features and best practices.</p>
          </div>
          <div class="description-card">
            <div class="card-icon">🔧</div>
            <h3>Easy Integration</h3>
            <p>Drop-in replacement for vue-router navigation methods with enhanced type safety and IntelliSense support.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {aboutRoute, homeRoute} from "../main";

function toHome() {
  homeRoute.push({
    query: {id: 0, name: "jack"},
  })
}
</script>

<style scoped>
.about {
  min-height: 80vh;
}

.about-header {
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.125rem;
  color: #9ca3af;
  max-width: 500px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.info-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.actions-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.full-width {
  grid-column: 1 / -1;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.query-container {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.query-label {
  color: #9ca3af;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.query-data {
  color: #22d3ee;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
}

.action-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-button {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.nav-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  background: linear-gradient(135deg, #2563eb, #1e40af);
}

.button-icon {
  font-size: 2rem;
}

.button-text {
  font-size: 1.125rem;
  font-weight: 600;
}

.button-subtitle {
  font-size: 0.875rem;
  opacity: 0.8;
}

.description-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.description-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.description-card:hover {
  transform: translateY(-4px);
  border-color: rgba(96, 165, 250, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.description-card h3 {
  color: #60a5fa;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.description-card p {
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .description-grid {
    grid-template-columns: 1fr;
  }
  
  .nav-button {
    padding: 1.25rem;
  }
}
</style>


