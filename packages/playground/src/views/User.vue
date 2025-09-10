<template>
  <div class="user-page">
    <div class="user-header">
      <div class="user-avatar">
        <div class="avatar-icon">👤</div>
      </div>
      <div class="user-info">
        <h1 class="user-name">User: {{ userRoute.getParams().name }}</h1>
        <p class="user-subtitle">Dynamic route parameter demonstration</p>
      </div>
    </div>

    <div class="user-content">
      <div class="params-section">
        <h2 class="section-title">📄 Route Parameters</h2>
        <div class="params-display">
          <div class="param-item">
            <span class="param-label">Name:</span>
            <span class="param-value">{{ userRoute.getParams().name }}</span>
          </div>
        </div>
      </div>

      <div class="actions-section">
        <h2 class="section-title">🚀 Navigation Actions</h2>
        <div class="actions-grid">
          <button class="action-btn profile" @click="toUserProfile">
            <span class="btn-icon">💼</span>
            <span class="btn-text">User Profile</span>
            <span class="btn-subtitle">Navigate with params & query</span>
          </button>

          <button class="action-btn detail" @click="toUserDetail">
            <span class="btn-icon">📊</span>
            <span class="btn-text">User Detail</span>
            <span class="btn-subtitle">Dynamic params navigation</span>
          </button>
        </div>
      </div>

      <div class="nested-view">
        <h2 class="section-title">📦 Nested Route Content</h2>
        <div class="router-view-container">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userProfileRoute, userRoute } from '../main'
import { useRouter } from 'vue-router'

const router = useRouter()

const toUserProfile = () => {
  userProfileRoute.push({
    query: {
      id: 0,
      name: 'bob'
    },
    params: {
      name: 'bob'
    }
  })
}

const toUserDetail = () => {
  router.push({ path: '/user/bob/detail' })
}
</script>

<style scoped>
.user-page {
  min-height: 80vh;
}

.user-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
  border-radius: 16px;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.user-avatar {
  flex-shrink: 0;
}

.avatar-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  border: 3px solid rgba(255, 255, 255, 0.2);
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 2rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 0.5rem;
}

.user-subtitle {
  font-size: 1rem;
  color: #9ca3af;
}

.user-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.params-section,
.actions-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nested-view {
  grid-column: 1 / -1;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
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

.params-display {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.param-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
}

.param-label {
  font-weight: 500;
  color: #9ca3af;
}

.param-value {
  color: #22d3ee;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background: rgba(34, 211, 238, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.actions-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.action-btn {
  padding: 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  border: 1px solid transparent;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.action-btn.profile {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border-color: rgba(16, 185, 129, 0.3);
}

.action-btn.profile:hover {
  background: linear-gradient(135deg, #059669, #047857);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
}

.action-btn.detail {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  border-color: rgba(245, 158, 11, 0.3);
}

.action-btn.detail:hover {
  background: linear-gradient(135deg, #d97706, #b45309);
  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
}

.btn-icon {
  font-size: 1.5rem;
}

.btn-text {
  font-size: 1rem;
  font-weight: 600;
}

.btn-subtitle {
  font-size: 0.75rem;
  opacity: 0.8;
}

.router-view-container {
  min-height: 200px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .user-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .user-content {
    grid-template-columns: 1fr;
  }
  
  .user-name {
    font-size: 1.5rem;
  }
  
  .avatar-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
}
</style>
