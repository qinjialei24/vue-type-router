<script setup lang="ts">
import {aboutRoute, homeRoute, userProfileRoute, userRoute,} from "../main";

const query = homeRoute.getQuery()

function getQueryData() {
  const query = homeRoute.getQuery()
}

function toUserProfile() {
  userProfileRoute.push({
    query: {id: 0, name: "bryant"},
    params:{name: 'bob'}
  });
}

function toUser() {
  userRoute.push({params:{ name: 'alice' }})
}
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">🎆 Welcome to Vue Typesafe Router</h1>
      <p class="hero-subtitle">Experience type-safe navigation with compile-time guarantees</p>
    </div>

    <div class="content">
      <div class="section">
        <h2 class="section-title">📄 Query Data</h2>
        <div class="query-display">
          <pre class="code-block">{{ JSON.stringify(query, null, 2) }}</pre>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">🚀 Navigation Actions</h2>
        <div class="button-grid">
          <button 
            class="action-btn primary"
            @click="aboutRoute.push({
              query: {
                id: 1,
                name: 'bob'
              }
            })"
          >
            📋 Go to About
          </button>

          <button class="action-btn secondary" @click="toUserProfile">
            👤 User Profile
          </button>

          <button class="action-btn tertiary" @click="toUser">
            🔄 Switch User
          </button>

          <button class="action-btn info" @click="getQueryData">
            📊 Get Query Data
          </button>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">✨ Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Type Safety</h3>
            <p>Compile-time type checking for route parameters and queries</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Zero Runtime</h3>
            <p>No performance overhead, pure TypeScript magic</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧩</div>
            <h3>Vue 3 Ready</h3>
            <p>Built specifically for Vue 3 and Vue Router 4</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 80vh;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
  border-radius: 16px;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.query-display {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-block {
  color: #22d3ee;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.action-btn {
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid transparent;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.action-btn.primary {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
}

.action-btn.primary:hover {
  background: linear-gradient(135deg, #2563eb, #1e40af);
}

.action-btn.secondary {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.action-btn.secondary:hover {
  background: linear-gradient(135deg, #059669, #047857);
}

.action-btn.tertiary {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
}

.action-btn.tertiary:hover {
  background: linear-gradient(135deg, #d97706, #b45309);
}

.action-btn.info {
  background: rgba(255, 255, 255, 0.1);
  color: #60a5fa;
  border-color: rgba(96, 165, 250, 0.3);
}

.action-btn.info:hover {
  background: rgba(96, 165, 250, 0.1);
  border-color: #60a5fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(96, 165, 250, 0.3);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #60a5fa;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .button-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
