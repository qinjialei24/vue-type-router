<template>
  <div class="user-profile">
    <div class="profile-header">
      <div class="profile-icon">💼</div>
      <h2 class="profile-title">User Profile</h2>
    </div>
    
    <div class="profile-content">
      <div class="data-section">
        <h3 class="data-title">📄 Query Parameters</h3>
        <div class="data-display">
          <pre class="data-code">{{ JSON.stringify(query, null, 2) }}</pre>
        </div>
      </div>
      
      <div class="data-section">
        <h3 class="data-title">🔗 Dynamic Parameters</h3>
        <div class="data-display">
          <div class="param-badge">
            <span class="param-key">name:</span>
            <span class="param-value">{{ userProfileRoute.getParams().name }}</span>
          </div>
        </div>
      </div>
      
      <div class="info-section">
        <div class="info-card">
          <div class="info-icon">✨</div>
          <div class="info-content">
            <h4>Type-Safe Profile</h4>
            <p>This profile page demonstrates how route parameters and query strings are automatically typed and validated.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userProfileRoute } from '../main'
const query = userProfileRoute.getQuery()
</script>

<style scoped>
.user-profile {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(16, 185, 129, 0.2);
  margin-top: 1rem;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.profile-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.profile-title {
  color: #10b981;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.profile-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.data-section {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.data-title {
  color: #22d3ee;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.data-display {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.data-code {
  color: #22d3ee;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.param-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(34, 211, 238, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid rgba(34, 211, 238, 0.3);
}

.param-key {
  color: #9ca3af;
  font-weight: 500;
}

.param-value {
  color: #22d3ee;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-weight: 600;
}

.info-section {
  margin-top: 1rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
}

.info-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.info-content h4 {
  color: #10b981;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.info-content p {
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-title {
    font-size: 1.25rem;
  }
}
</style>